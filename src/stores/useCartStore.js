import { defineStore } from "pinia";
import {ref} from 'vue';

export const useCartStore = defineStore('cart', () => {
    const cart = ref([]);

    const addToCart = (product) => {
        console.log(product);
    }

    return{
        cart,
        addToCart
    }
})