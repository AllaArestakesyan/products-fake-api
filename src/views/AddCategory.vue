<template>
    <!-- source:https://codepen.io/owaiswiz/pen/jOPvEPB -->
    <div id="cat" class="min-h-screen  text-gray-900 flex justify-center">
        <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
            <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                <div class="mt-12 flex flex-col items-center">
                    <div class="w-full flex-1 mt-8">
                        <div class="mx-auto max-w-xs">
                            <Form @submit="get_data" :validation-schema="scheam">
                                <Field name="name"
                                    class="w-full px-8 py-4 rounded-lg font-medium  border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="text" placeholder="name " />
                                <ErrorMessage name="name" class="err1"></ErrorMessage>
                                <div id="file" class="mt-5">
                                    <Field name="image"
                                        class="w-full px-8 py-3 rounded-lg font-medium  border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                                        type="file" id="file" placeholder="image" />
                                    <span>Select File</span>
                                </div>
                                <ErrorMessage name="image"></ErrorMessage>
                                <button
                                    class="mt-5 tracking-wide font-semibold text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round">

                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span class="ml-3">
                                        Create Category
                                    </span>
                                </button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { Form, Field, ErrorMessage } from "vee-validate"
import { mapActions, mapState } from "vuex"
import * as yup from "yup";
import axios from 'axios';
import { ref } from 'vue';

export default {
    components: {
        Form, Field, ErrorMessage
    },
    computed: {
        ...mapState({
            // login_error: state => state.user.login_error
        }),
        scheam() {
            return yup.object({
                name: yup.string().required(),
            })
        }
    },
    methods: {
        ...mapActions("user", ["sign_in"]),
        async get_data(data, { resetForm }) {
            try {
                const response = await axios.post('https://api.escuelajs.co/api/v1/categories', { ...data, "image": "https://i.imgur.com/ZANVnHE.jpeg" });
                console.log(response.data);
                resetForm();
            } catch (error) {
                console.error('There was an error!', error);
            }
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

    input {
        background-color: #09141c;
        color: #fff;

        border: 1px solid #9fa6ab;

    }

    input::placeholder {
        color: rgb(230, 225, 225);
    }

    .err1 {
        color: red;
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