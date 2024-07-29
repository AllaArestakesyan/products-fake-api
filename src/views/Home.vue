<template>
    <div class="home min-h-screen  text-gray-900 flex justify-center">
        <div class="max-w-screen-xl m-0 sm:m-10 shadow sm:rounded-lg flex-1">
            <select @change="selected">
                <option value=""> categories ... </option>
                <option v-for="(item, index) in select" :key="index" :value="item.id">{{ item.name }}</option>
            </select>
            <div>
                <div v-for="(item, index) in data" :key='index'
                    class="rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-center">
                    <a href="#!">
                        <img class="rounded-t-lg" :src='item.images[0]' alt="" />
                    </a>
                    <div class="p-6">
                        <h5 class="mb-2 text-l font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
                            {{ item.title }}
                        </h5>
                        <p class="mb-2 text-base text-neutral-500 dark:text-neutral-300">
                            {{ item.description.length > 30 ? item.description.slice(0, 30) + "..." : item.description }}
                        </p>
                        <router-link :to="'/product/' + item.id">
                            see more ...
                        </router-link>
                        <button @click="deleteProductById(item.id)"
                            class="mt-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out  hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0  active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                            &times;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'HomePage',
    data() {
        return {
            data: null,
            select: null
        }
    },
    methods: {
        async deleteProductById(id) {
            try {
                await axios.delete('https://api.escuelajs.co/api/v1/products/' + id);
                const response = await axios.get('https://api.escuelajs.co/api/v1/products');
                this.data = response.data;
            } catch (error) {
                console.error('There was an error!', error);
            }
        },
        async selected(event) {
            const x = event.target.value;
            const response1 = await axios.get(`https://api.escuelajs.co/api/v1/products${x ? "/?categoryId=" + x : ""}`);
            this.data = response1.data;
        }
    },
    async mounted() {
        try {
            const response = await axios.get('https://api.escuelajs.co/api/v1/products');
            this.data = response.data;
            const response1 = await axios.get('https://api.escuelajs.co/api/v1/categories');
            this.select = response1.data;
        } catch (error) {
            console.error('There was an error!', error);
        }
    }
}
</script>

<style lang="scss">
.home {
    >div>select {
        width: 100%;
        background-color: #09141c;
        color: #fff;
        border: none;
        outline: none;
        padding: 20px 0;
        text-align: center;
        border: 1px solid #9fa6ab;
        border-radius: 5px
    }

    >div>div {
        box-shadow: 0 0 15px 10px #dddedf51;
        background-color: #172b3a;
        color: #9fa6ab;
        display: grid;
        justify-content: center;
        gap: 10px;
        padding: 20px 0;
        grid-template-columns: repeat(auto-fit, minmax(150px, 300px));

        >div {
            width: 100%;
            height: 100%;
        }

        @media (max-width:576px) {
            box-shadow: none
        }

        button {
            background-color: #09141c;

            &:hover {
                background-color: #900;
            }
        }
    }
}</style>