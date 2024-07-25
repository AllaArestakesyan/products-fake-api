<template>
    <!-- source:https://codepen.io/owaiswiz/pen/jOPvEPB -->
    <div id="cat" class="min-h-screen  text-gray-900 flex justify-center">
        <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
            <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                <div class="mt-12 flex flex-col items-center">
                    <div class="w-full flex-1 mt-8">
                        <!-- <div class="mt-10 flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                            role="alert">
                            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                            <span class="sr-only">Info</span>
                            <div>
                                <span class="font-medium">Danger alert!</span>
                            </div>
                        </div> -->

                        <div class="mx-auto max-w-xs">
                            <Form @submit="get_data" :validation-schema="scheam">
                                <Field name="name"
                                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="text" placeholder="name " />
                                <ErrorMessage name="name"></ErrorMessage>
                                <div id="file" class="mt-5">
                                    <Field name="image"
                                        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
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
import * as yup from "yup"
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
                username: yup.string().required(),
                password: yup.string().required()
            })
        }
    },
    methods: {
        ...mapActions("user", ["sign_in"]),
        get_data(data) {
            this.sign_in(data)
        },

    },

}

</script>

<style lang="scss">
#cat {
    >div {
        box-shadow: 0 0 15px 10px #23324051;
        @media (max-width:576px) {
            box-shadow: none
        }
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
            border: 1px solid #e4dede;
            width: 100%;
            height: 100%;
            left: 0;
            padding-top: 15px;
            background-color: #f3f4f6;
            border-radius: 10px;
        }
    }

    button {
        background-color: #233240;
    }
}</style>