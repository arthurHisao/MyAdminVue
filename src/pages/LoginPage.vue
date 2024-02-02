<script setup lang="ts">
import InputComponent from '@/components/input/InputComponent.vue'
import api from '@/utils/axios'
import { onBeforeMount, ref, reactive } from 'vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

const formInputs = reactive({
  email: '',
  password: ''
})
const isShowingPassword = ref(false)

const handleClick = () => {
  isShowingPassword.value = !isShowingPassword.value
}

onBeforeMount(() => {
  api
    .get('/csrf-cookie')
    .then((response) => {
      // Handle the response
      console.log(response.data)
    })
    .catch((error) => {
      // Handle the error
      console.error(error)
    })
})

const handleSubmit = () => {
  // const { isLoggedIn } = storeToRefs(appStore)
  const { login } = appStore
  login(formInputs)
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="mt-5 w-full h-auto">
    <label class="text-gray-700 dark:text-white font-light">E-mail</label>
    <InputComponent
      type="email"
      v-model:inputData="formInputs.email"
      placeholder="Informe o seu e-mail"
      class="mt-1 mb-5"
    />

    <label class="text-gray-700 dark:text-white font-light">Senha</label>
    <InputComponent
      :type="isShowingPassword ? 'text' : 'password'"
      v-model:inputData="formInputs.password"
      class="mt-1 mb-5"
      placeholder="Informe a sua senha"
      :iconName="isShowingPassword ? 'MdLockopenSharp' : 'MdLockoutline'"
      @emitHandleClickOnIcon="handleClick"
    />

    <div class="my-1 block">
      <a class="" href="#">Esqueceu a senha?</a>
      <button class="rounded-sm bg-[#1A7BFF] px-1 py-1 text-white font-light w-full my-5">
        Entrar
      </button>
    </div>
  </form>
</template>
