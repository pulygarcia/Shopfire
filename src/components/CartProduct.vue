<script setup>
    import { formatCurrency } from '../helpers';
    import { useCartStore } from '../stores/useCartStore';

    defineProps({
        product:{
            type: Object
        }
    })

    const cartStore = useCartStore();

</script>

<template>
    <li class="flex py-6 space-x-6">
        <img :src="product.image" :alt="product.name" class="h-24 w-24 rounded-md">

        <div class="space-y-2">
            <h3 class="text-gray-800">{{ product.name }}</h3>
            <p class="font-semibold">{{ formatCurrency(product.price) }}</p>

            <select 
                class="border-none py-1 rounded w-32"
                @change="cartStore.updateQuantity(product.id, +$event.target.value)"
                :value="product.quantity"
            >
                <option 
                    v-for="n in cartStore.checkProductAvailability(product)"
                    :value="n"
                >
                    {{ n }}
                </option>
            </select>
        </div>

        <div>
            <button 
                type="button"
                @click="cartStore.deleteProduct(product.id)"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>

            </button>
        </div>
    </li>
</template>