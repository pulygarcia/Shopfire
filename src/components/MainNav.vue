<script setup>
    import Link from './Link.vue';

    import {useProductsStore} from '../stores/useProductsStore'

    const products = useProductsStore();
</script>

<template>
  <header class="py-10 px-10 flex flex-col md:flex-row justify-between bg-gradient-to-r from-gray-900 via-purple-900 to-violet-600 absolute top-0 w-full z-10">
    <div>
        <h1 class="text-3xl text-white font-extrabold">ShopFire<span class="text-teal-500">.Vue</span></h1>

        <div class="flex flex-col md:flex-row items-center gap-6 lg:mt-4">
            <h2 class="font-extrabold text-white text-xl">Filtrar por: </h2>

            <div class="flex gap-4 text-gray-100">
                <div 
                    v-for="category in products.categories"
                    :key="category.id"
                    class="flex items-center gap-2"
                >
                    <input 
                        type="radio" 
                        :value="category.id" 
                        name="category" 
                        class="h-4 w-4 text-teal-500 rounded"
                        :checked="products.selectedCategory === category.id"
                        @change="products.selectedCategory = category.id"
                    >
                    <label for="category">{{ category.name }}</label>
                </div>
            </div>
        </div>
    </div>

    <nav class="mt-5 md:mt-0">
        <Link
            to="admin"
        >
            Admin
        </Link>
    </nav>
  </header>
</template>