<template>
    <Navbar />
    <div class="relative flex flex-col md:flex-row">
      <!-- Левая колонка -->
      <div
        class="w-full md:w-1/2 mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:py-20 lg:py-32 md:px-8"
      >
        <div class="md:pe-8 xl:pe-0">
          <h1
            class="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight"
          >
            Заполните форму – и переходите к оплате
          </h1>
  
          <div
            class="py-6 flex items-center text-sm text-gray-400 uppercase before:flex-1 before:border-t before:me-6 after:flex-1 after:border-t after:ms-6"
          ></div>
  
          <form @submit.prevent="submitOrder">
            <div class="mb-4">
              <label for="hs-hero-name-2" class="block text-sm font-medium"
                ><span class="sr-only">Ваше имя</span></label
              >
              <input
                v-model="name"
                type="text"
                id="hs-hero-name-2"
                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-gray-500 focus:ring-gray-500"
                placeholder="Ваше имя"
              />
            </div>
  
            <div class="mb-4">
              <label for="hs-hero-surname-2" class="block text-sm font-medium"
                ><span class="sr-only">Ваша фамилия</span></label
              >
              <input
                v-model="surname"
                type="text"
                id="hs-hero-surname-2"
                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-gray-500 focus:ring-gray-500"
                placeholder="Ваша фамилия"
              />
            </div>
  
            <div class="mb-4">
              <label for="hs-hero-city-2" class="block text-sm font-medium"
                ><span class="sr-only">Город</span></label
              >
              <input
                v-model="city"
                type="text"
                id="hs-hero-city-2"
                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-gray-500 focus:ring-gray-500"
                placeholder="Город"
              />
            </div>
  
            <div class="mb-4">
              <label for="hs-hero-phone-2" class="block text-sm font-medium"
                ><span class="sr-only">Номер телефона</span></label
              >
              <input
                v-model="phone"
                type="text"
                id="hs-hero-phone-2"
                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-gray-500 focus:ring-gray-500"
                placeholder="Номер телефона"
              />
            </div>
  
            <div class="grid">
              <button
                type="submit"
                class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              >
                Заказать
              </button>
              <p class="p-2 text-gray-500">
                *Нажав на кнопку вы даёте право на обработку ваших
                <NuxtLink
                  to="/privacy_policy"
                  class="underline underline-offset-4"
                  >персональных данных</NuxtLink
                >
              </p>
            </div>
          </form>
        </div>
      </div>
  
      <!-- Правая колонка -->
      <div class="w-full md:w-1/2 xl:w-5/12 border-l">
        <div class="flex justify-between items-center py-3 px-4 border-b">
          <h3
            id="hs-offcanvas-right-label"
            class="font-bold text-2xl p-4 text-gray-700"
          >
            Ваш заказ
          </h3>
        </div>
        <div class="p-4 border-b">
          <div v-if="cartItems.length > 0">
            <div
              v-for="(item, index) in cartItems"
              :key="index"
              class="flex items-center gap-x-4 border-b py-4"
            >
              <img
                :src="item.img"
                alt="Product Image"
                class="w-16 h-16 object-cover rounded"
              />
              <div class="flex-1 gap-2">
                <h4 class="font-bold text-gray-800">{{ item.name }}</h4>
                <p class="text-sm text-gray-600">
                  {{ item.description }}
                </p>
                <p class="text-sm text-gray-600">
                  Способ получения: {{ item.variant }}
                </p>
              </div>
              <p class="font-semibold text-gray-800">{{ item.price }} р.</p>
              <button
                @click="removeFromCart(index)"
                class="text-red-500 hover:text-red-700"
                aria-label="Remove item"
              >
                ✕
              </button>
            </div>
          </div>
          <p v-else class="text-gray-800 px-4">Ваша корзина пуста.</p>
        </div>
        <div class="p-4">
          <p class="text-gray-800 text-right text-2xl">
            Сумма: {{ totalPrice }} р.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from "vue";
  
  const name = ref("");
  const surname = ref("");
  const city = ref("");
  const phone = ref("");
  const cartItems = ref([]);
  
  const loadCartItems = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    cartItems.value = cart?.product || [];
  };
  
  const removeFromCart = (index) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart?.product) {
      cart.product.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCartItems();
    }
  };
  
  const totalPrice = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.price, 0)
  );
  
  const onStorageChange = (event) => {
    if (event.key === "cart") {
      loadCartItems();
    }
  };
  
  onMounted(() => {
    loadCartItems();
    window.addEventListener("storage", onStorageChange);
  });
  
  onUnmounted(() => {
    window.removeEventListener("storage", onStorageChange);
  });
  
  const submitOrder = async () => {
    try {
      const productIds = cartItems.value.map((item) => ({
        product_id: item.product_id,
      }));
  
      const requestData = {
        name: name.value,
        surname: surname.value,
        city: city.value,
        phone: phone.value,
        positions: productIds,
      };
  
      const { data } = await useFetch("https://3ntech.ru/api/order/", {
        method: "POST",
        body: requestData,
      });
  
      alert("Ваш заказ успешно отправлен!");
      useRouter().push("/");
      localStorage.removeItem("cart");
    } catch (error) {
      alert("Произошла ошибка при отправке заказа.");
    }
  };
  </script>
  