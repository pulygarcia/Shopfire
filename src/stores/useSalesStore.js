import { defineStore } from "pinia"
import { computed, ref } from "vue"
import { useFirestore,  useCollection} from "vuefire";
import { collection, query, where, getDocs } from "firebase/firestore";

export const useSalesStore = defineStore('sales', () => {

    const date = ref('');
    const db = useFirestore();

    const isDateSelected = computed(() => {
        return date.value
    })


    const getSales = computed(() => {
        if(date.value){
            const q = query(collection(db, "sales"), where("date", "==", date.value));

            return q;
        }
    })

    const salesCollection = useCollection(getSales);

    const totalSalesOfDay = computed(() => {
        return salesCollection.value.length ? salesCollection.value.reduce((total, sale) => total + sale.total, 0) : 0;
    })

    return{
        date,
        isDateSelected,
        salesCollection,
        totalSalesOfDay
    }
})