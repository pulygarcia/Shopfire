<script setup>
    import {useCartStore} from '../stores/useCartStore';
    import CartProduct from '../components/CartProduct.vue'
    import Amount from './Amount.vue';
    import { formatCurrency } from '../helpers';
    import CouponForm from './CouponForm.vue';
    import { useCouponStore } from '../stores/useCouponStore';

    const cartStore = useCartStore();
    const couponStore = useCouponStore();
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

        <dl class="space-y-6 border-t border-gray-200 mt-5">
            <Amount>
                <template #label>Subtotal: </template>

                {{ formatCurrency(cartStore.subtotal) }}
            </Amount>

            <Amount>
                <template #label>Impuestos: </template>

                {{ formatCurrency(cartStore.taxes) }}
            </Amount>

            <Amount v-if="couponStore.isValidCoupon">
                <template #label>Descuento: </template>

                {{ formatCurrency(couponStore.discount) }}
            </Amount>

            <Amount>
                <template #label>Total a pagar: </template>

                {{ formatCurrency(cartStore.total) }}
            </Amount>
        </dl>

        <CouponForm />

        <button @click="cartStore.checkout" type="button" class="mt-10 w-full py-2 bg-violet-600 text-white font-bold hover:bg-violet-800 transition rounded">Comprar</button>

    </div>
</template>