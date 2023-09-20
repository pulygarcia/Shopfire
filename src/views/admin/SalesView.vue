<script setup>
  import {ref} from 'vue';
  import VueTailwindDatepicker from 'vue-tailwind-datepicker';
  import {useSalesStore} from '../../stores/useSalesStore';

  const salesStore = useSalesStore();

  const formatter = ref({
    date: 'DD/MM/YYYY',
    month: 'MMM'
  })
</script>

<template>
    <h1 class="my-10 text-4xl font-black">Resumen de ventas</h1>

    <div class="md:flex md:items-start mt-10 gap-10">
      <div class="md:w-1/3 bg-white p-5 flex justify-center">
        <VueTailwindDatepicker 
          as-single 
          i18n="es-es"
          no-input
          :formatter="formatter"
          v-model="salesStore.date"
        />
      </div>

      <div class="md:w-2/3">
        <p v-if="salesStore.isDateSelected" class="text-center text-lg">Ventas de la Fecha: <span class="font-black">{{ salesStore.date }}</span></p>

        <p v-else class="text-center text-lg text-red-500">Seleccioná una fecha</p>
      </div>
    </div>
</template>