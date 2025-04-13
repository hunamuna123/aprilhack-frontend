<template>
	<div
		class="flex flex-col gap-4 w-full md:max-w-[calc(50%_-_48px)] lg:max-w-[calc(60%_-_48px)]"
	>
		<h1 class="text-4xl font-semibold">
			{{ product?.name || 'Нет название' }}
		</h1>
		<h4 class="text-md text-gray-500">
			Категория:
			<span class="font-medium text-black">
				{{ product?.category?.name || 'Нет категории' }}
			</span>
		</h4>
		<div class="grid sm:grid-cols-2 gap-2 mt-6">
			<h4 class="text-md text-gray-500">
				Бренд:
				<span class="font-medium text-black">
					{{ product?.brand?.name || 'Нет бренда' }}
				</span>
			</h4>
			<h4 class="text-md text-gray-500">
				Количество на складе:
				<span class="font-medium text-black">
					{{ product?.count_stok || 'Товаров не осталось!' }}
				</span>
			</h4>
			<h4 class="text-md text-gray-500">
				Brand:
				<span class="font-medium text-black">brand name</span>
			</h4>
			<h4 class="text-md text-gray-500">
				Brand:
				<span class="font-medium text-black">brand name</span>
			</h4>
		</div>
		<div class="mt-6 flex items-center justify-between gap-4">
			<div class="flex flex-col gap-1">
				<h1 class="text-3xl font-bold">
					{{ product?.price.toLocaleString('de-DE') }}
					₽
				</h1>
				<h4 class="text-lg font-medium text-gray-400">
					<del>
						{{ product?.oldPrice.toLocaleString('de-DE') }}
						₽
					</del>
				</h4>
			</div>
		</div>

		<div class="flex items-center flex-wrap justify-between gap-4 mt-4">
			<div class="flex gap-3">
				<div class="flex items-center gap-1">
					<svg
						class="shrink-0 size-5 text-gray-500"
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
					<svg
						class="shrink-0 size-5 text-gray-500"
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
					<svg
						class="shrink-0 size-5 text-gray-500"
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
					<svg
						class="shrink-0 size-5 text-gray-600/30"
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
					<svg
						class="shrink-0 size-5 text-gray-600/30"
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
				<span class="mt-1 text-gray-500 font-medium"> 223 отзыва </span>
			</div>

		</div>
		<hr class="my-4" />
		<div class="flex flex-col gap-2">
			<h1 class="text-2xl font-semibold">Описание</h1>
			<p class="text-gray-600">
				{{ product?.feedback_count || 'Отсутствует' }}
			</p>
		</div>
	</div>
</template>
<script setup>
defineProps({
	product: Object,
})

import { onMounted } from 'vue'

onMounted(() => {
  if (window.HSStaticMethods) {
    window.HSStaticMethods.autoInit()
  }
})
</script>