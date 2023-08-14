<script setup>
    import {useRouter} from 'vue-router'

    import {reactive} from 'vue';

    import Link from '@/components/Link.vue';

    import useImage from '@/composables/useImage';

    import {useProductsStore} from '@/stores/useProductsStore';

    const router = useRouter();

    const {onFileChange, imageUploaded, url} = useImage();

    const products = useProductsStore();

    const formData = reactive({
        name: '',
        image: '',
        category: '',
        price: '',
        availability: ''
    })

    //submit function, form values as data automaticly
    const handleSubmit = async(data) => {
        const {image, ...values} = data;

        try {
            await products.createProduct({
                ...values,
                image: url.value
            })

            router.push({name: 'products'})
        } catch (error) {
            console.log(error);
        }
    }
</script>

<template>
    <div class="mt-10">
        <Link
            to="products"
        >
            Volver
        </Link>

        <h1 class="my-5 font-black text-3xl">Nuevo producto</h1>

        <div class="flex justify-center bg-white shadow-lg">
            <div class="mt-10 p-10 w-full 2xl:w-2/4">
                <FormKit
                    type="form"
                    submit-label="Agregar producto"
                    incomplete-message="Por favor completa los campos"
                    @submit="handleSubmit"
                    :value="formData"
                >
                    <FormKit 
                        type="text"
                        name="name"
                        label="Titulo"
                        placeholder="Título producto"
                        validation="required"
                        :validation-messages="{required: 'El título es obligatorio'}"
                        v-model.trim="formData.name"
                    />

                    <FormKit 
                        type="file"
                        name="image"
                        label="Imagen"
                        validation="required"
                        :validation-messages="{required: 'La imagen es obligatoria'}"
                        accept=".jpg"
                        @change="onFileChange"
                        v-model="formData.image"
                    />

                    <div v-if="imageUploaded">
                        <p class="font-black">Imagen producto: </p>
                        <img :src="url" class="w-32" alt="Nuevo producto imagen"/>
                    </div>

                    <FormKit 
                        type="select"
                        name="category"
                        label="Categoría"
                        validation="required"
                        :validation-messages="{required: 'La categoría es obligatoria'}"
                        v-model.number="formData.category"
                        :options="products.categoryOptions"
                    />

                    <FormKit 
                        type="number"
                        name="price"
                        label="Precio"
                        placeholder="Precio del producto"
                        validation="required"
                        :validation-messages="{required: 'El precio es obligatorio'}"
                        min="1"
                        v-model.number="formData.price"
                    />

                    <FormKit 
                        type="number"
                        name="availability"
                        label="Cantidad"
                        placeholder="Cantidad"
                        validation="required"
                        :validation-messages="{required: 'La cantidad es obligatoria'}"
                        min="1"
                        v-model.number="formData.availability"
                    />

                </FormKit>
            </div>
        </div>
    </div>
</template>