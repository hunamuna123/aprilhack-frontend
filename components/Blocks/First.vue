<template>
  <div class="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full">
    <nav class="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
      <div class="lg:col-span-8">
        <h1 class="text-4xl md:text-6xl font-semibold leading-tight text-black">
          Идеальный курорт -<br />
          только с нами
        </h1>
      </div>
      <div class="lg:col-span-4 mt-6 lg:mt-0">
        <p class="text-black mb-4">
            MVP цифрового продукта с использованием современных технологий и подходов к разработке программного обеспечения.
        </p>
        <button class="bg-custom text-white px-5 py-2 rounded-xl hover:bg-gray-700 transition">
          Начать
        </button>
      </div>
    </nav>
</div>
  <section class="relative w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-10">
      <!-- Фоновое изображение -->
      <div
        class="w-full h-64 md:h-96 rounded-2xl bg-cover bg-center relative"
        style="background-image: url('/bg.png');"
      >
        <!-- Форма поиска -->
        <div
          class="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-2xl px-4 py-6 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 items-center"
        >
          <!-- Location -->
          <div>
            <p class="text-sm text-gray-500 flex items-center gap-2">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 12m0 0l-4.243 4.243M13.414 12L12 10.586M12 10.586L10.586 12M12 10.586V3m0 9L3 21" />
              </svg>
              Location
            </p>
            <p class="font-medium text-black">Banyan, Indonesia</p>
          </div>
  
          <!-- Check In -->
          <div>
            <p class="text-sm text-gray-500 flex items-center gap-2">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 7V3M16 7V3M4 11h16M4 19h16M4 15h16" />
              </svg>
              Check In
            </p>
            <p class="font-medium text-black">27 January 2025</p>
          </div>
  
          <!-- Check Out -->
          <div>
            <p class="text-sm text-gray-500 flex items-center gap-2">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 7V3M16 7V3M4 11h16M4 19h16M4 15h16" />
              </svg>
              Check Out
            </p>
            <p class="font-medium text-black">30 January 2025</p>
          </div>
  
          <!-- People -->
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-500 flex items-center gap-2">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 20h14M12 14a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
                People
              </p>
              <p class="font-medium text-black">4 People, 1 Child</p>
            </div>
            <button class="bg-black text-white p-2 rounded-full hover:bg-gray-700 transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
</template>

