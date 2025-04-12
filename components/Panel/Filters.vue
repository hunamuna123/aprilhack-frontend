<template>
	<div class="w-full flex items-center justify-between">
		<h3 class="text-xl font-semibold">Результатов: 12</h3>
		<div class="flex flex-row gap-3">
			<PanelModal/>
			<button
				type="button"
				aria-haspopup="dialog"
				aria-expanded="false"
				aria-controls="hs-scale-animation-modal-filter"
				data-hs-overlay="#hs-scale-animation-modal-filter"
				class=" py-2.5 px-6 flex justify-center items-center gap-2 font-medium text-sm rounded-full border border-gray-200 bg-white text-black hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition-colors duration-200"
			>
				Фильтры
			</button>
		</div>
	</div>
</template>


