<template>
    <!-- source:https://codepen.io/owaiswiz/pen/jOPvEPB -->
    <div id="cat" class="min-h-screen  text-gray-900 flex justify-center">
        <div class="max-w-screen-xl m-0 sm:m-10  shadow sm:rounded-lg flex justify-center flex-1">
            <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                <div class="mt-12 flex flex-col items-center text-white">

                    <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-center">












                        <div class="relative w-full max-w-4xl mx-auto">
                            <!-- Slides -->
                            <div class="overflow-hidden relative h-64 rounded-lg shadow-lg">
                                <div v-for="(item, index) in data?.images" :key="index"
                                    class="carousel-inner flex transition-transform duration-500 ease-in-out"
                                    :style="{ transform: `translateX(-${Math.abs((index - currentIndex)) * 100}%)` }">
                                    <div class="carousel-item flex-shrink-0 w-full h-full flex items-center justify-center">
                                        {{ item }} - {{ data?.images[currentIndex] }} {{ index }} {{ currentIndex }}
                                        <img :src="item"
                                            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                            alt="...">
                                    </div>
                                </div>
                            </div>

                            <!-- Navigation -->
                            <button @click="prevSlide"
                                class="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-r-lg">
                                Prev
                            </button>
                            <button @click="nextSlide"
                                class="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-l-lg">
                                Next
                            </button>
                        </div>


                        <div class="p-6">

                            <h5 class="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
                                {{ data?.title }}
                            </h5>

                            <p class="mb-2 text-base text-neutral-500 dark:text-neutral-300">
                                {{ data?.description }}
                            </p>
                            <p class="mb-2 text-base text-neutral-500 dark:text-neutral-300">
                                Price - {{ data?.price }}
                            </p>
                            <p class="mb-2 text-base text-neutral-500 dark:text-neutral-300">
                                {{ data?.category?.name }}
                            </p>

                            <div class="mb-2 text-base text-neutral-500 dark:text-neutral-300 flex justify-center">
                                <img class="rounded-t-lg" :src='data?.category.image' alt="" width="150" />

                            </div>
                            <router-link to="/"
                                class="mt-3 inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                Go Back
                            </router-link>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>

import axios from "axios"
import { useRoute } from 'vue-router';

export default {
    data() {
        return {
            data: null,
            currentIndex: 0,
        }
    },
    setup() {
        const route = useRoute();
        const id = route.params.id;
        console.log(id);
        return {
            id,
        };
    },
    async mounted() {
        try {
            const response = await axios.get('https://api.escuelajs.co/api/v1/products/' + this.id);
            this.data = response.data;
            console.log(response);
        } catch (error) {
            console.error('There was an error!', error);
        }
    },
    methods: {
        prevSlide() {
            this.currentIndex =
                (this.currentIndex - 1 + this.data.images.length) % this.data.images.length;
        },
        nextSlide() {
            console.log(this.currentIndex);
            this.currentIndex = (this.currentIndex + 1) % this.data.images.length;
        },
    },

}

</script>

<style lang="scss">
#cat {
    >div {
        box-shadow: 0 0 15px 10px #dddedf51;
        background-color: #172b3a;

        @media (max-width:576px) {
            box-shadow: none
        }
    }

    .err1 {
        color: red;
    }

    input,
    select {
        background-color: #09141c;
        color: #fff;
        border: 1px solid #9fa6ab;
    }

    input::placeholder {
        color: rgb(230, 225, 225);
    }

    #file {
        position: relative;

        input {
            opacity: 0;
            position: relative;
            z-index: 10;
            width: 100%;
            height: 100%;
        }

        span {
            position: absolute;
            border: 1px solid #9fa6ab;
            width: 100%;
            height: 100%;
            left: 0;
            padding-top: 15px;
            background-color: #09141c;
            color: #fff;
            border-radius: 10px;
        }
    }

    button {
        background-color: #09141c;
    }
}
</style>