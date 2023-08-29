<script setup>
    import {useCartStore} from '../stores/useCartStore';
    import CartProduct from '../components/CartProduct.vue'
    const cartStore = useCartStore();
</script>

<template>
    <h2 v-if="cartStore.isEmpty" class="text-2xl text-center">El carrito está vacío</h2>

    <div v-else>
        <p class="text-3xl font-bold text-gray-900">Resumen de venta</p>

        <ul role="list" class="mt-6 divide-y divide-gray-200">
            <CartProduct 
                v-for="product in cartStore.cart"
                :key="product.id"
                :product="product"
            />
        </ul>
    </div>
</template>