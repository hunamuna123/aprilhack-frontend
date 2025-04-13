<template>
    <div
        class="w-full flex flex-col gap-5 bg-white border border-gray-200 shadow-sm rounded-[20px] p-4 md:p-5 relative transition-transform duration-200 overflow-hidden"
    >
      <button
          type="button"
          class="size-10 absolute top-2 right-2 inline-flex justify-center items-center text-2xl rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none text-gray-400 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-200"
          disabled
      >
        <svg
            class="shrink-0 size-5 mt-[1px]"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
        >
          <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          ></path>
        </svg>
      </button>
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
              <svg
                  v-for="(star, index) in 5"
                  :key="index"
                  class="shrink-0 size-5"
                  :class="index < Math.floor(product.rating) ? 'text-gray-500' : 'text-gray-600/30'"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
              >
                <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
            </div>
            <span class="text-sm mt-1 text-gray-500 font-medium">
                          ({{ product.feedback_count }})
                      </span>
          </div>
        </div>
      </div>
      <div class="w-full grid grid-cols-2 gap-4">
        <div class="space-y-1">
          <p class="text-sm text-gray-500">Цвета</p>
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
          <p class="text-sm text-gray-500">Размеры</p>
          <div class="flex -space-x-2">
                      <span
                v-for="(sizeObj, index) in product.sizes?.slice(0, 4)"
                :key="index"
                class="inline-flex items-center justify-center size-[36px] rounded-full ring-2 ring-gray-200 bg-gray-100 hover:z-10 font-medium text-gray-700 align-middle hover:bg-gray-200 focus:outline-none focus:bg-gray-300 text-sm transition-colors duration-200 select-none cursor-pointer"
            >
                          {{ sizeObj.size.name }}
                      </span>
            <span
                v-if="product.sizes?.length > 4"
                class="inline-flex items-center justify-center size-[36px] rounded-full ring-2 ring-gray-200 bg-gray-100 hover:z-10 font-medium text-gray-700 align-middle hover:bg-gray-200 focus:outline-none focus:bg-gray-300 text-sm transition-colors duration-200 select-none cursor-pointer"
            >
                          {{ product.sizes.length - 4 }}+
                      </span>
          </div>
        </div>
      </div>
      <NuxtLink :to="'/travels/' + product.id">
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
  