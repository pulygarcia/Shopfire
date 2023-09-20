<script setup>
  import {ref} from 'vue';
  import VueTailwindDatepicker from 'vue-tailwind-datepicker';
  import {useSalesStore} from '../../stores/useSalesStore';
  import SaleDetails from '../../components/SaleDetails.vue';
  import {formatCurrency} from '../../helpers'

  const salesStore = useSalesStore();

  const formatter = ref({
    date: 'DD/MM/YYYY',
    month: 'MMM'
  })

  console.log(salesStore.salesCollection);
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

      <div v-if="salesStore.salesCollection.length > 0" class="md:w-2/3 md:h-screen md:overflow-y-scroll">
        <p v-if="salesStore.isDateSelected" class="text-center text-xl mt-6 md:mt-0">Ventas de la Fecha: <span class="font-black">{{ salesStore.date }}</span></p>

        <p v-else class="text-center text-lg text-red-500">Seleccioná una fecha</p>

        <div class="space-y-5">
          <p class="mt-5 text-lg text-right">Total recaudado en la fecha: <span class="font-extrabold bg-green-300 p-1 rounded">{{ formatCurrency(salesStore.totalSalesOfDay) }}</span></p>

          <SaleDetails 
            v-for="sale in salesStore.salesCollection" 
            :key="sale.id" 
            :sale="sale"
          />
        </div>

      </div>

      <p v-else-if="salesStore.salesCollection.length > 0 && salesStore.isDateSelected" class="text-gray-700 text-center text-lg">No hubo ventas en la fecha seleccionada</p>
    </div>
</template>