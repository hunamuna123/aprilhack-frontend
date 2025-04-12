<template>
    <!-- ========== HEADER ========== -->
    <header class="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7">
        <nav
            class="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
            <div class="lg:col-span-3 flex items-center">
                <!-- Logo -->
                <NuxtLink to="/"
                    class="inline-flex items-center gap-1 rounded-xl text-xl font-semibold focus:outline-none focus:opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-thumbs-up-icon">
                        <path d="M7 10v12" />
                        <path
                            d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
                    </svg>
                    <span>Travel</span><span class="text-custom text-2xl">OK</span>
                </NuxtLink>

                <!-- End Logo -->

                <div class="ms-1 sm:ms-2">

                </div>
            </div>

            <!-- Button Group -->
            <div class="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
                <button type="button"
                    class="p-2 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-tickets-icon lucide-tickets">
                        <path d="m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8" />
                        <path d="M6 10V8" />
                        <path d="M6 14v1" />
                        <path d="M6 19v2" />
                        <rect x="2" y="8" width="20" height="13" rx="2" />
                    </svg>
                </button>
                <button type="button"
                    class="p-2 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-custom text-white hover:bg-teal-600 focus:outline-hidden focus:bg-custom transition disabled:opacity-50 disabled:pointer-events-none">
                    Войти
                </button>

                <div class="lg:hidden">
                    <button type="button"
                        class="hs-collapse-toggle size-9.5 flex justify-center items-center text-sm font-semibold rounded-xl border bg-white border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                        id="hs-navbar-hcail-collapse" aria-expanded="false" aria-controls="hs-navbar-hcail"
                        aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-hcail">
                        <svg class="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" x2="21" y1="6" y2="6" />
                            <line x1="3" x2="21" y1="12" y2="12" />
                            <line x1="3" x2="21" y1="18" y2="18" />
                        </svg>
                        <svg class="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <!-- End Button Group -->

            <!-- Collapse -->
            <div id="hs-navbar-hcail"
                class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6"
                aria-labelledby="hs-navbar-hcail-collapse">
                <div
                    class="flex flex-col  p-2 rounded-2xl bg-white gap-y-0  gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
                    <div>
                        <a class="relative inline-block text-black lg:my-0 my-2 mx-2 focus:outline-hidden before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-custom"
                            href="#" aria-current="page">Главная</a>
                    </div>
                    <div>
                        <a class="inline-block lg:my-0 my-2 text-black mx-2 hover:text-gray-600 focus:outline-hidden focus:text-gray-600"
                            href="#">О нас</a>
                    </div>
                    <div>
                        <a class="inline-block text-black lg:my-0 my-2 mx-2 hover:text-gray-600 focus:outline-hidden focus:text-gray-600"
                            href="#">Тарифы</a>
                    </div>
                    <div>
                        <a class="inline-block text-black lg:my-0 my-2 mx-2 hover:text-gray-600 focus:outline-hidden focus:text-gray-600"
                            href="#">Путевки</a>
                    </div>
                    <div>
                        <a class="inline-block text-black lg:my-0 my-2 mx-2 hover:text-gray-600 focus:outline-hidden focus:text-gray-600"
                            href="#">Аналитика</a>
                    </div>
                </div>
            </div>
            <!-- End Collapse -->
        </nav>
    </header>
    <!-- ========== END HEADER ========== -->
</template>