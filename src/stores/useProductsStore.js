import {defineStore} from 'pinia';
import { computed } from 'vue';
import { useFirestore, useCollection } from 'vuefire'
import { collection, addDoc, query, where } from "firebase/firestore"; 

export const useProductsStore = defineStore('products', () => {
    const db = useFirestore();
    
    const categories = [
        {id: 1, name: 'Buzos'},
        {id: 2, name: 'Zapatillas'},
        {id: 3, name: 'Anteojos'}
    ]
    
    const q = query(
        collection(db, 'productos')
    );
    
    const productsCollection = useCollection( q );

    async function createProduct(product){
        await addDoc(collection(db, "productos"), product)
    }

    
    const categoryOptions = computed(() => {
        const options = [
            {label: 'Seleccione la categoría', value: '', attrs: { disabled: true }},
            ...categories.map(category => (
                {label: category.name, value: category.id}
            ))
        ]

        return options
    })


    return{
        createProduct,
        productsCollection,
        categoryOptions
    }
})