<script setup>
    import {formatCurrency} from '../helpers'
    import { RouterLink } from 'vue-router';

    defineProps({
        product: {
            type: Object
        }
    })
</script>

<template>
  <li class="flex items-center space-x-6 bg-white shadow-lg p-6">
    <img :src="product?.image" :alt="product?.name" class="w-24">

    <div class="flex-auto">
        <h3 class="font-bold">{{ product?.name }}</h3>

        <p class="bg-green-500 text-white font-bold inline-block px-1 my-3 rounded">{{ formatCurrency( product?.price ) }}</p>
        <p v-if="product.availability > 1">Disponibles: {{ product?.availability }}</p>
        <p v-else class="text-yellow-500 font-bold">Ultimo disponible</p>
    </div>

    <div>
      <RouterLink :to="{name: 'edit-product', params:{id: product.id}}">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
      </RouterLink>
    </div>
  </li>
</template>