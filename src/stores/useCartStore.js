import { defineStore } from "pinia";
import {ref, computed, watch} from 'vue';

export const useCartStore = defineStore('cart', () => {
    const cart = ref([]);

    const subtotal = ref(0);

    const addToCart = (product) => {
        cart.value.push({...product, quantity: 1, id: product.id});
        console.log(product);
    }

    const updateQuantity = (id, quantity) => {
        cart.value = cart.value.map(product => product.id === id ? {...product, quantity} : product);
    }


    watch(cart, () => {
        subtotal.value = cart.value.reduce((total, product) => total + (product.price * product.quantity), 0);
    },{
        deep: true
    })


    const isEmpty = computed(() => {
        return cart.value.length === 0;
    })

    const checkProductAvailability = computed(() => {
        return (product) => product.availability < 5 ? product.availability : 5;
    })

    return{
        cart,
        addToCart,
        updateQuantity,
        subtotal,
        isEmpty,
        checkProductAvailability
    }
})