<template>
    <section class="relative w-full mx-auto px-4 max-w-7xl md:px-6 lg:px-8 ">
        
      <h3 class="text-md text-gray-500 mb-2 pt-15">Активности</h3>
      <h2 class="text-2xl md:text-3xl font-bold mb-6">
        Активный отдых в России —<br /> выбирайте свой путь
      </h2>
  
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Карточка -->
        <div class="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col">
          <div class="relative h-60 ">
            <img src="/taman.png" alt="Тамань" class="w-full h-full object-cover" />
            <span class="absolute top-3 left-3 bg-white/70 text-gray-800 text-sm font-medium px-3 py-1 rounded-xl backdrop-blur-md">
              Тамань
            </span>
          </div>
          <div class="p-4 flex-1 flex flex-col justify-between">
            <p class="text-sm text-black mb-4">От дайвинга до конных прогулок — найдите идеальное приключение для себя</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1 text-yellow-500 font-medium text-sm">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                5.5
              </div>
              <button class="text-sm text-white bg-black hover:bg-gray-700 px-4 py-1.5 rounded-full font-medium shadow transition">
                Подробнее
              </button>
            </div>
          </div>
        </div>
  
        <!-- Сочи -->
        <div class="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col">
          <div class="relative h-60">
            <img src="/taman.png" alt="Сочи" class="w-full h-full object-cover" />
            <span class="absolute top-3 left-3 bg-white/70 text-gray-800 text-sm font-medium px-3 py-1 rounded-xl backdrop-blur-md">
              Сочи
            </span>
          </div>
          <div class="p-4 flex-1 flex flex-col justify-between">
            <p class="text-sm text-black mb-4">
              Неважно, новичок вы или опытный мореплаватель — наши маршруты подарят вам адреналин и восторг...
            </p>
            <div class="text-gray-500 text-xs mb-2">
              <p>🚤 Поездка на 3 дня и 2 ночи</p>
              <p>🏠 Включая проживание</p>
            </div>
          </div>
        </div>
  
        <!-- Геленджик -->
        <div class="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col">
          <div class="relative h-60">
            <img src="/taman.png" alt="Геленджик" class="w-full h-full object-cover" />
            <span class="absolute top-3 left-3 bg-white/70 text-gray-800 text-sm font-medium px-3 py-1 rounded-xl backdrop-blur-md">
              Геленджик
            </span>
          </div>
          <div class="p-4 flex-1 flex flex-col justify-between">
            <p class="text-sm text-black mb-4">
              Откройте для себя удивительный мир животных в сафари-парке, а затем насладитесь видами на море...
            </p>
            <div class="flex items-center gap-1 text-yellow-500 font-medium text-sm">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              4.2
            </div>
          </div>
        </div>
  
        <!-- Кнопка перехода -->
        <div class="bg-white rounded-3xl shadow-lg overflow-hidden flex items-center justify-center">
          <button class="w-full h-full p-4">
            <div class="relative h-full w-full flex items-center justify-center">
              <img src="/taman.png" alt="Перейти" class="w-full h-full object-cover rounded-3xl blur-sm" />
              <div class="absolute bg-white text-black p-2 rounded-full shadow-md">
                <svg class="w-6 h-6 rotate-45" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  </template>
  