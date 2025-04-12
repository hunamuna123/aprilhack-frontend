<template>
	<div
		class="w-full flex flex-col gap-6 bg-gray-200 shadow-sm rounded-[20px] p-4 md:p-5 skeleton"
	>
		<div class="w-full grid grid-cols-2 gap-4">
			<div
				class="w-full aspect-square bg-gray-300 rounded-xl overflow-hidden"
			></div>
			<div class="flex flex-col gap-2 h-full">
				<p class="bg-gray-300 h-3 w-1/2 min-w-[50px] rounded-lg"></p>
				<h4 class="bg-gray-300 h-20 w-full rounded-lg"></h4>
				<h3 class="bg-gray-300 rounded-lg mt-auto h-8 w-1/2 min-w-[50px]"></h3>
				<div class="bg-gray-300 h-4 w-full rounded-lg"></div>
			</div>
		</div>
		<div class="w-full grid grid-cols-2 gap-4">
			<div v-for="n in 2" :key="n" class="space-y-3">
				<p class="bg-gray-300 rounded-lg mt-auto h-3 w-[70px]"></p>
				<div class="flex -space-x-2">
					<span
						class="inline-flex items-center justify-center size-[36px] rounded-full ring-2 ring-gray-200 bg-gray-300 hover:z-10 font-medium align-middle focus:outline-none text-sm transition-colors duration-200 select-none"
					></span>
					<span
						class="inline-flex items-center justify-center size-[36px] rounded-full ring-2 ring-gray-200 bg-gray-300 hover:z-10 font-medium align-middle focus:outline-none text-sm transition-colors duration-200 select-none"
					></span>
					<span
						class="inline-flex items-center justify-center size-[36px] rounded-full ring-2 ring-gray-200 bg-gray-300 hover:z-10 font-medium align-middle focus:outline-none text-sm transition-colors duration-200 select-none"
					></span>
					<span
						class="inline-flex items-center justify-center size-[36px] rounded-full ring-2 ring-gray-200 bg-gray-300 hover:z-10 font-medium text-gray-700 align-middle focus:outline-none text-sm transition-colors duration-200 select-none"
					>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>
