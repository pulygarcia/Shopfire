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
    <li class="flex py-6 space-x-4">
        <img :src="product.image" :alt="product.name" class="h-24 w-24 rounded-md">

        <div class="space-y-2">
            <h3 class="text-gray-800">{{ product.name }}</h3>
            <p class="font-semibold">{{ formatCurrency(product.price) }}</p>

            <select class="border-none py-1 rounded w-32">
                <option 
                    v-for="n in cartStore.checkProductAvailability(product)"
                    :value="n"
                >
                    {{ n }}
                </option>
            </select>
        </div>
    </li>
</template>