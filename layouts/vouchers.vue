<template>
    <PanelFilters/>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> 
        <SkeletonCard v-if="isLoading" v-for="n in 6" :key="n" />
    </div> 


  </template>
  <script>
  export default {
    data() {
      return {
        isLoading: true
      }
    },
    methods: {

    },
  }
  </script>
  