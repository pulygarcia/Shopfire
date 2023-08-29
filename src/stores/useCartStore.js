import { defineStore } from "pinia";
import {ref, computed} from 'vue';

export const useCartStore = defineStore('cart', () => {
    const cart = ref([]);

    const addToCart = (product) => {
        cart.value.push(product);
        console.log(cart.value);
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
        isEmpty,
        checkProductAvailability
    }
})