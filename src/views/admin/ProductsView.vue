<script setup>
  import Link from '../../components/Link.vue';
  import {useProductsStore} from '../../stores/useProductsStore'
  import Product from '../../components/Product.vue';

  const products = useProductsStore();
</script>

<template>
  <div class="mt-14 md:mt-10">
    <Link
      to="new-product"
    >
      Agregar producto
    </Link>

    <h1 class="my-10 text-4xl font-black">Productos</h1>

    <ul role="list" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <Product
        v-for="product in products.productsCollection" 
        :key="product.id"
        :product="product"
      />
    </ul>
  </div>
</template>