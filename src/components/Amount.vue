<template>
    <div class="flex justify-between items-center">
        <dt class="font-bold">
            <slot name="label" />
        </dt>

        <dd class="text-gray-900 underline">
            <slot></slot>
        </dd>
    </div>
</template>