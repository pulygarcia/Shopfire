<script setup>
    import {formatCurrency} from '../helpers'
    import Amount from '../components/Amount.vue'

    defineProps({
        sale:{
            type: Object
        }
    })
</script>

<template>
    <div class="border-t border-gray-300 space-y-6 py-6 px-4 mt-5 md:mt-0">
        <h2 class="font-black text-2xl">Seguimiento venta:</h2>
        <p class="font-bold text-lg text-gray-600">Venta realizada</p>

        <ul role="list" class="mt-5 divide-y divide-gray-200 text-sm font-medium text-gray-500">
            <li v-for="sale in sale.cart" class="flex gap-6 py-4 items-center">
                <img :src="sale.image" :alt="'imagen de ' + sale.name" class="w-24 h-24 rounded">

                <div class="space-y-2">
                    <p class="text-lg text-gray-700">{{ sale.name }}</p>
                    <p class="font-bold">Precio: <span class="font-normal text-black">{{ formatCurrency(sale.price) }}</span></p>
                    <p class="font-bold">Cantidad: <span class="font-normal text-black">{{ sale.quantity }}</span></p>
                </div>
            </li>
        </ul>

        <dl class="space-y-6 border-t border-gray-200 mt-5">
            <Amount>
                <template #label>Subtotal: </template>

                {{ formatCurrency(sale.subtotal) }}
            </Amount>

            <Amount>
                <template #label>Impuestos: </template>

                {{ formatCurrency(sale.taxes) }}
            </Amount>

            <Amount class="bg-green-100">
                <template #label>Total recibido: </template>

                {{ formatCurrency(sale.total) }}
            </Amount>
        </dl>
    </div>
</template>