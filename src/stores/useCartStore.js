import { defineStore } from "pinia";
import {ref, computed, watch, watchEffect} from 'vue';
import {useCouponStore} from '../stores/useCouponStore';


export const useCartStore = defineStore('cart', () => {
    const couponStore = useCouponStore();

    const cart = ref([]);
    const subtotal = ref(0);
    const taxes = ref(0);
    const total = ref(0);

    const TAX_RATE = .10;  //10% simula impuesto    

    const addToCart = (product) => {
        const index = isInCart(product.id);
        //if the product is in cart, findIndex returns the index, if it isnt in the cart returns -1
        if(index >= 0){
            if(isAvailable(product, index)){
                alert('Límite de compra alcanzado');
                return;
            }
            //update quantity
            cart.value[index].quantity += 1;
        }else{
            cart.value.push({...product, quantity: 1, id: product.id});
        }
    }

    
    const isAvailable = (product, index) => {
        //Check if the selected quantity is more than the product availability and returns true in that case.
        //And check if the quantity is more than the max purchase
        return cart.value[index].quantity >= product.availability || cart.value[index].quantity >= 5;
    }

    const updateQuantity = (id, quantity) => {
        cart.value = cart.value.map(product => product.id === id ? {...product, quantity} : product);
    }


    watchEffect(() => {
        subtotal.value = cart.value.reduce((total, product) => total + (product.price * product.quantity), 0);
        taxes.value = subtotal.value * TAX_RATE;
        total.value = (subtotal.value + taxes.value) - couponStore.discount;
    })


    const isEmpty = computed(() => {
        return cart.value.length === 0;
    })

    const isInCart = (id) => {
        return cart.value.findIndex(item => item.id === id);
    }

    const checkProductAvailability = computed(() => {
        return (product) => product.availability < 5 ? product.availability : 5;
    })

    const deleteProduct = (id) => {
        if(confirm('¿Desea eliminar el producto del carrito?')){
            cart.value = cart.value.filter(product => product.id !== id);
        }
    }

    return{
        cart,
        addToCart,
        updateQuantity,
        deleteProduct,
        subtotal,
        taxes,
        total,
        isEmpty,
        checkProductAvailability
    }
})