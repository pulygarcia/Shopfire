import { defineStore } from "pinia";
import {ref, computed} from 'vue';

export const useCartStore = defineStore('cart', () => {
    const cart = ref([]);

    const addToCart = (product) => {
        cart.value.push({...product, quantity: 1, id: product.id});
        console.log(product);
    }

    const updateQuantity = (id, quantity) => {
        cart.value = cart.value.map(product => product.id === id ? {...product, quantity} : product);
    }


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
        isEmpty,
        checkProductAvailability
    }
})