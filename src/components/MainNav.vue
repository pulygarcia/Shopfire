<script setup>
    import Link from './Link.vue';
</script>

<template>
  <header class="py-10 px-10 flex justify-between bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 absolute top-0 w-full z-10">
    <div>
        <h1 class="text-3xl text-white font-extrabold">ShopFire<span class="text-teal-500">.Vue</span></h1>
    </div>

    <nav>
        <Link
            to="admin"
        >
            Admin
        </Link>
    </nav>
  </header>
</template>