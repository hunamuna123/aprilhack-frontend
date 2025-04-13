<template>
	<div
		class="flex flex-col gap-4 w-full md:max-w-[calc(50%_-_48px)] lg:max-w-[calc(60%_-_48px)]"
	>
		<h1 class="text-4xl font-semibold">
			{{ product?.name || 'Нет название' }}
		</h1>
		<h4 class="text-md text-gray-500">
			Категория отдыха:
			<span class="font-medium text-black">
				{{ product?.category?.name || 'Нет категории' }}
			</span>
		</h4>
		<div class="grid sm:grid-cols-2 gap-2 mt-6">
			<h4 class="text-md text-gray-500">
				ТурОператор:
				<span class="font-medium text-black">
					{{ product?.brand?.name || 'Нет бренда' }}
				</span>
			</h4>
			<h4 class="text-md text-gray-500">
				Кол-во человек:
				<span class="font-medium text-black">
					{{ product?.count_stok || 'Товаров не осталось!' }}
				</span>
			</h4>
			<h4 class="text-md text-gray-500">
				Статус:
				<span class="font-medium text-black">Оплачено</span>
			</h4>
			<h4 class="text-md text-gray-500">
				Начало:
				<span class="font-medium text-black"> Положено</span>
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
		<client-only>
    <MapWithRoute />
  </client-only>
		<hr class="my-4" />
		<div class="flex flex-col gap-2">
			<div class="relative mt-8">
  <!-- Линия -->
  <div class="absolute left-4 top-0 bottom-0 w-px bg-gray-300"></div>

  <!-- Этапы -->
  <div class="space-y-8">
    <!-- День 1 -->
    <div class="relative pl-10">
      <div class="absolute left-0 top-1 w-4 h-4 rounded-full bg-black ring-4 ring-gray-100"></div>
      <h3 class="text-xl font-bold text-black">День 1</h3>
      <ul class="mt-2 space-y-1 text-gray-600">
        <li class="pl-4 relative before:absolute before:left-0 before:top-1 before:w-2 before:h-2 before:bg-gray-600 before:rounded-full">
          Посетить Красную площадь
        </li>
        <li class="pl-4 relative before:absolute before:left-0 before:top-1 before:w-2 before:h-2 before:bg-gray-600/70 before:rounded-full">
          Прогуляться по Арбату
        </li>
        <li class="pl-4 relative before:absolute before:left-0 before:top-1 before:w-2 before:h-2 before:bg-gray-600/50 before:rounded-full">
          Ужин в ресторане
        </li>
      </ul>
    </div>

    <!-- День 2 -->
    <div class="relative pl-10">
      <div class="absolute left-0 top-1 w-4 h-4 rounded-full bg-gray-800 ring-4 ring-gray-100"></div>
      <h3 class="text-xl font-bold text-black">День 2</h3>
      <ul class="mt-2 space-y-1 text-gray-600">
        <li class="pl-4 relative before:absolute before:left-0 before:top-1 before:w-2 before:h-2 before:bg-gray-600 before:rounded-full">
          Экскурсия в Третьяковскую галерею
        </li>
        <li class="pl-4 relative before:absolute before:left-0 before:top-1 before:w-2 before:h-2 before:bg-gray-600/70 before:rounded-full">
          Обед в кафе
        </li>
        <li class="pl-4 relative before:absolute before:left-0 before:top-1 before:w-2 before:h-2 before:bg-gray-600/50 before:rounded-full">
          Прогулка по парку Зарядье
        </li>
      </ul>
    </div>

    <!-- День 3 -->
    <div class="relative pl-10">
      <div class="absolute left-0 top-1 w-4 h-4 rounded-full bg-gray-700 ring-4 ring-gray-100"></div>
      <h3 class="text-xl font-bold text-black">День 3</h3>
      <ul class="mt-2 space-y-1 text-gray-600">
        <li class="pl-4 relative before:absolute before:left-0 before:top-1 before:w-2 before:h-2 before:bg-gray-600 before:rounded-full">
          Поездка в Новодевичий монастырь
        </li>
        <li class="pl-4 relative before:absolute before:left-0 before:top-1 before:w-2 before:h-2 before:bg-gray-600/70 before:rounded-full">
          Сувенирный шопинг
        </li>
        <li class="pl-4 relative before:absolute before:left-0 before:top-1 before:w-2 before:h-2 before:bg-gray-600/50 before:rounded-full">
          Отъезд
        </li>
      </ul>
    </div>
  </div>
</div>

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