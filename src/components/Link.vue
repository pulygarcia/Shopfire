<script setup>
    import {RouterLink} from 'vue-router'

    defineProps({
        to:{
            type: String,
            required: true
        }
    })

</script>

<template>
    <RouterLink 
        :to="{name: to}"
        class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-10"
    >
    <slot></slot>
  </RouterLink>
</template>