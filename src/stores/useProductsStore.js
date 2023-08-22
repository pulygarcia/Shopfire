import {defineStore} from 'pinia';
import { computed } from 'vue';
import { useFirestore, useCollection, useFirebaseStorage } from 'vuefire'
import { collection, addDoc, query, where, orderBy, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore"; 
import {ref as storageRef, deleteObject} from 'firebase/storage'

export const useProductsStore = defineStore('products', () => {
    const db = useFirestore();
    const storage = useFirebaseStorage();
    
    const categories = [
        {id: 1, name: 'Buzos'},
        {id: 2, name: 'Zapatillas'},
        {id: 3, name: 'Anteojos'}
    ]
    
    const q = query(
        collection(db, 'productos'),
        orderBy('availability', 'asc')
    );
    
    const productsCollection = useCollection( q );

    async function createProduct(product){
        await addDoc(collection(db, "productos"), product)
    }

    async function updateProduct(docRef, product){
        const {image, url, ...values} = product;

        if(image.length){
            await updateDoc(docRef, {
                ...values,
                image: url.value
            })
        }else{
            await updateDoc(docRef, values)
        }
    }

    async function deleteProduct(id){
        if(confirm('¿Desea eliminar el Producto?')){
            const docRef = doc(db, 'productos', id); //Product reference for delete

            //Get the product image for delete
            const docData = await getDoc(docRef);
            const {image} = docData.data();
            const imageRef = storageRef(storage, image);

            //Delete the product and image at same time
            await Promise.all([
                deleteDoc(docRef),
                deleteObject(imageRef)
            ])
        }
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

    const noResult = computed(() => {
        return productsCollection.value.length === 0;
    })


    return{
        createProduct,
        updateProduct,
        deleteProduct,
        productsCollection,
        noResult,
        categoryOptions
    }
})