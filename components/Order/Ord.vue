<template>
    <div
        class="w-full flex flex-col gap-5 bg-white border border-gray-200 shadow-sm rounded-[20px] p-4 md:p-5 relative transition-transform duration-200 overflow-hidden"
    >

      <div class="w-full grid grid-cols-2 gap-4">
        <div class="w-full aspect-square bg-gray-100 rounded-xl overflow-hidden">
          <img
              v-if="product.images && product.images.length"
              class="w-full h-full object-cover"
              :src="product.images[0].image"
              :alt="product.name"
          />
        </div>
        <div class="flex flex-col gap-1 h-full">
          <p class="text-gray-500">
            {{ product.category?.name }}
          </p>
          <h4 class="text-xl line-clamp-2">
            {{ product.name }}
          </h4>
          <p class="mt-0.5 line-clamp-3">
            {{ product.description }}
          </p>
          <h3 class="text-2xl font-bold mt-auto">
            {{ product.price.toLocaleString('de-DE') }} ₽
          </h3>
          <div class="flex gap-2">
            <div class="flex items-center gap-[1px]">

            </div>
          </div>
        </div>
      </div>
      <div class="w-full grid grid-cols-2 gap-4">
        <div class="space-y-1">
          <p class="text-sm text-gray-500">Стиль</p>
          <div class="flex -space-x-2">
                      <span
                v-for="(colorObj, index) in product.colors?.slice(0, 4)"
                :key="index"
                class="inline-flex items-center justify-center size-[36px] rounded-full ring-2 ring-gray-200 hover:z-10 font-medium align-middle focus:outline-none text-sm transition-colors duration-200 select-none cursor-pointer"
                :style="{ backgroundColor: `#` + colorObj.color.color_hex }"
            ></span>
            <span
                v-if="product.colors?.length > 4"
                class="inline-flex items-center justify-center size-[36px] rounded-full ring-2 ring-gray-200 bg-gray-100 hover:z-10 font-medium text-gray-700 align-middle hover:bg-gray-200 focus:outline-none focus:bg-gray-300 text-sm transition-colors duration-200 select-none cursor-pointer"
            >
                          {{ product.colors.length - 4 }}+
                      </span>
          </div>
        </div>
        <div class="space-y-1">
          <p class="text-sm text-gray-500">Статус</p>
          <div class="flex -space-x-2">
              <p class="text-lime-500">Оплачено</p>
          </div>
        </div>
      </div>
      <NuxtLink :to="'/order/' + product.id">
        <button
            type="button"
            class="mt-auto w-full py-2.5 px-6 justify-center items-center font-medium text-sm rounded-full bg-black text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-600 transition-colors duration-200 cursor-pointer"
        >
          Подробнее
        </button>
      </NuxtLink>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  defineProps({
    product: {
      type: Object,
      required: true,
    },
  })
  </script>
  