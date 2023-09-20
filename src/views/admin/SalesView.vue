<script setup>
  import VueTailwindDatepicker from 'vue-tailwind-datepicker';
</script>

<template>
    <h1 class="my-10 text-4xl font-black">Resumen de ventas</h1>

    <div class="md:flex md:items-start mt-10 gap-10">
      <div class="md:w-1/3 bg-white">
        <VueTailwindDatepicker />
      </div>

      <div class="md:w-2/3">
        <p>ventas</p>
      </div>
    </div>
</template>