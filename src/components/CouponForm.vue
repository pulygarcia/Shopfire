<script setup>
    import {useCouponStore} from '../stores/useCouponStore';

    const couponStore = useCouponStore();
</script>

<template>
    <p class="mt-5 py-5 font-bold border-top border-gray-200">¿Tienes un cupón?</p>

    <div class="flex">
        <input 
            type="text" 
            placeholder="Ingresa el código"
            class="p-2 bg-white border-gray-300 w-full"
            v-model="couponStore.couponInput"
        >

        <button @click="couponStore.applyCoupon()" type="button" class="p-3 bg-teal-500 font-bold hover:bg-teal-600 transition text-white">Canjear</button>
    </div>

    <p v-if="couponStore.couponValidation" class="text-gray-500 mt-4 text-center font-bold">{{ couponStore.couponValidation }}</p>
</template>