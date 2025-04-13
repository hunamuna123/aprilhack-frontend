<template>
    <Navbar/>
    <div class="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto  ">
        <div class="-mt-4 lg:-mt-8 w-full flex flex-col gap-10">
			<div class="w-full flex flex-col md:flex-row gap-12">
				<ProductCarousel v-show="!isLoading" />
				<ProductSkeleton v-if="isLoading" />
				<ProductValue v-else :product="productData" />
			</div>
			<div>Отзывы</div>
		</div>
    </div>
		

		<ProductSkeleton v-if="isLoading" />
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import { useFetch, useRoute } from '#app'
import { api } from '@/store/api.js'

const productData = ref(null)
const route = useRoute()

const id = route.params.id
const apiUrl = api().url

const {
	data: product,
	pending: isLoading,
	refresh,
} = useFetch(() => `http://85.175.100.129:72/api/v1/product/${id}`, {
	headers: {
		accept: 'application/json',
	},
})

onMounted(() => {
	refresh()
})

watchEffect(() => {
	if (product.value) {
		productData.value = product.value.data
	}
})
</script>
