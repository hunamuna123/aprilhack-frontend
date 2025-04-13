<template>
  <PanelFilters />
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <SkeletonCard v-if="isLoading" v-for="n in 6" :key="n" />
    <PanelCard v-else v-for="product in products?.data" :key="product.id" :product="product" />
  </div>


</template>

<script setup>
import { ref, watch } from 'vue'
import { useFetch } from "#app";
import { api } from "@/store/api.js";

const apiStore = api();
const url = computed(() => apiStore.url);

const currentPage = ref(1)
const totalPages = ref(0)
const sortBy = ref('')

const {
	data: products,
	pending: isLoading,
	refresh,
} = useFetch(
	() =>
		`${url.value}api/v1/product/?page=${currentPage.value}&sortBy=${sortBy.value}`,
	{
		headers: {
			accept: 'application/json',
		},
	}
)

watch(products, newProducts => {
	if (newProducts && newProducts.value) {
		totalPages.value = newProducts.value.paginator.total
	}
})

watch(currentPage, () => {
	refresh()
})

const updateSort = sortOption => {
	sortBy.value = sortOption
	currentPage.value = 1

	refresh()
}
</script>
