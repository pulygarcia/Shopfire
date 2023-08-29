<script setup>
  import {useProductsStore} from '../stores/useProductsStore'
  import MainNav from '../components/MainNav.vue';
  import ProductCard from '../components/ProductCard.vue';
  import ShoppingCart from '../components/ShoppingCart.vue';

  const products = useProductsStore();
</script>

<template>
  <MainNav />
  
  <main class="pt-28 lg:pt-10 lg:flex lg:h-screen lg:overflow-y-hidden ">
    <div class="lg:w-2/3 lg:h-screen lg:overflow-y-scroll py-28 px-10">
      <p v-if="products.noResult" class="text-red-500 text-2xl text-center mt-5">No se encontraron productos</p>

      <div
        v-else
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6"
      >
        <ProductCard 
          v-for="product in products.filteredProducts"
          :product="product"
        />
      </div>
    </div>

    <aside class="lg:w-1/3 lg:h-screen lg:overflow-y-scroll pt-32 px-10">
      <ShoppingCart />
    </aside>
  </main>
</template>