<script setup>
    import {formatCurrency} from '../helpers'

    defineProps({
        product: {
            type: Object
        }
    })
</script>

<template>
  <li class="flex items-center space-x-6 bg-white shadow-lg p-6">
    <img :src="product?.image" :alt="product?.name" class="w-24">

    <div>
        <h3 class="font-bold">{{ product?.name }}</h3>

        <p class="bg-green-500 text-white font-bold inline-block px-1 my-3 rounded">{{ formatCurrency( product?.price ) }}</p>
        <p v-if="product.availability > 1">Disponibles: {{ product?.availability }}</p>
        <p v-else class="text-white bg-yellow-500 px-1 rounded">Ultimo disponible</p>
    </div>
  </li>
</template>