<script setup>
    import {formatCurrency} from '../helpers'

    defineProps({
        product:{
            type: Object
        }
    })
</script>

<template>
  <div class="bg-white rounded p-6 shadow relative">
    <img :src="product.image" alt="product.name" class="w-72 mx-auto">

    <p class="text-green-500 font-bold text-lg">{{ formatCurrency(product.price) }}</p>

    <h3 class="text-gray-500 text-lg font-bold">{{ product.name }}</h3>

    <p v-if="product.availability > 1" class="mt-3">Disponibles: {{ product?.availability }}</p>
    <p v-else class="text-yellow-500 mt-3">¡Ultimo disponible!</p>

    <button type="button" class="absolute top-4 -right-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 bg-teal-500 text-white rounded-full">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </button>
  </div>
</template>