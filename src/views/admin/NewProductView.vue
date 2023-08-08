<script setup>
    import Link from '../../components/Link.vue';
</script>

<template>
    <div class="mt-10">
        <Link
            to="products"
        >
            Volver
        </Link>

        <h1 class="my-10 font-black text-3xl">Nuevo producto</h1>

        <div class="flex justify-center bg-white shadow-lg">
            <div class="mt-10 p-10 w-full 2xl:w-2/4">
                <FormKit
                    type="form"
                    submit-label="Agregar producto"
                >
                    <FormKit 
                        type="text"
                        name="name"
                        label="Titulo"
                        placeholder="Título producto"
                        validation="required"
                        :validation-messages="{required: 'El título es obligatorio'}"
                    />

                    <FormKit 
                        type="file"
                        name="image"
                        label="Imagen"
                        validation="required"
                        :validation-messages="{required: 'La imagen es obligatoria'}"
                        accept=".jpg"
                    />

                    <FormKit 
                        type="select"
                        name="category"
                        label="Categoría"
                        validation="required"
                        :validation-messages="{required: 'La categoría es obligatoria'}"
                        :options="[1,2,3]"
                    />

                    <FormKit 
                        type="number"
                        name="price"
                        label="Precio"
                        placeholder="Precio del producto"
                        validation="required"
                        :validation-messages="{required: 'El precio es obligatorio'}"
                        min="1"
                    />

                    <FormKit 
                        type="number"
                        name="availability"
                        label="Cantidad"
                        placeholder="Cantidad"
                        validation="required"
                        :validation-messages="{required: 'La cantidad es obligatoria'}"
                        min="1"
                    />

                </FormKit>
            </div>
        </div>
    </div>
</template>