<script setup>
    import {RouterLink} from 'vue-router'
    import Link from './Link.vue';
</script>

<template>
  <header class="py-10 px-10 flex justify-between bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 absolute top-0 w-full z-10">
    <div>
        <h1 class="text-3xl text-white font-extrabold">Administración</h1>
    </div>

    <nav>
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