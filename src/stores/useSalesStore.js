import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useSalesStore = defineStore('sales', () => {

    const date = ref('');

    const isDateSelected = computed(() => {
        return date.value
    })


    return{
        date,
        isDateSelected,
    }
})