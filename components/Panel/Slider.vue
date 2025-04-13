<template>
  <div class="max-w-4xl mx-auto bg-white text-black rounded-2xl shadow p-6 space-y-6">
  <h2 class="text-2xl font-semibold">Бронирование тура</h2>

  <div>
    <label class="block text-sm font-medium mb-1">Регион отдыха</label>
    <select class="w-full border border-black rounded px-4 py-2">
      <option>Таиланд</option>
      <option>Турция</option>
      <option>Египет</option>
      <option>ОАЭ</option>
    </select>
  </div>
  <div>
    <label class="block text-sm font-medium mb-1">Тип путевки</label>
    <div class="flex flex-wrap gap-2">
      <button class="border border-black px-4 py-1 rounded-2xl hover:bg-black hover:text-white">Базовая</button>
      <button class="border border-black px-4 py-1 rounded-2xl hover:bg-black hover:text-white">Семейная</button>
      <button class="border border-black px-4 py-1 rounded-2xl hover:bg-black hover:text-white">All Inclusive</button>
      <button class="border border-black px-4 py-1 rounded-2xl hover:bg-black hover:text-white">Без перелета</button>
    </div>
  </div>

  <div>
    <label class="block text-sm font-medium mb-1">Стоимость тура</label>
    <input type="range" min="30000" max="1000000" value="350000" class="w-full">
    <p class="text-sm mt-1">350 000 ₽</p>
  </div>


  <div>
    <label class="block text-sm font-medium mb-1">Предоплата</label>
    <input type="range" min="0" max="1000000" value="100000" class="w-full">
    <p class="text-sm mt-1">100 000 ₽</p>
  </div>

  <div class="flex items-center gap-2">
    <input type="checkbox" id="salary-card" class="accent-black">
    <label for="salary-card" class="text-sm">Я клиент Сбера (получаю зп)</label>
  </div>

  <div class="border border-black rounded p-4 bg-gray-100 text-sm space-y-2">
    <p><strong>Процентная ставка:</strong> 12.5%</p>
    <p><strong>Ежемесячный платеж:</strong> 15 800 ₽</p>
    <p><strong>Сумма кредита:</strong> 250 000 ₽</p>
    <p><strong>Необходимый доход:</strong> 50 000 ₽</p>
  </div>

  <div>
    <button class="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition">Найти идеальное решение</button>
  </div>
</div>

</template>