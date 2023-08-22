<script setup>
    import {RouterLink} from 'vue-router'
    import Link from './Link.vue';
</script>

<template>
  <header class="py-10 px-10 flex flex-col md:flex-row justify-between bg-gradient-to-r from-gray-700 via-gray-900 to-black absolute top-0 w-full z-10">
    <div>
        <h1 class="text-3xl text-white font-extrabold mb-4 md:mb-0">Admin <span class="text-teal-500">Panel</span></h1>
    </div>

    <nav class="flex">
        <RouterLink
            :to="{name: 'products'}"
            class="text-white font-bold py-2 me-4"
        >
            Productos
        </RouterLink>

        <RouterLink
            :to="{name: 'sales'}"
            class="text-white font-bold py-2 me-4"
        >
            Ventas
        </RouterLink>

        <Link
            to="home"
        >
            Tienda
        </Link>
    </nav>
  </header>
</template>