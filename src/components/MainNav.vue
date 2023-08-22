<script setup>
    import Link from './Link.vue';
</script>

<template>
  <header class="py-10 px-10 flex flex-col md:flex-row justify-between bg-gradient-to-r from-gray-900 via-purple-900 to-violet-600 absolute top-0 w-full z-10">
    <div>
        <h1 class="text-3xl text-white font-extrabold">ShopFire<span class="text-teal-500">.Vue</span></h1>
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