<template>
  <span class="login100-form-title p-b-41"> Registro </span>
  <form
    class="login100-form validate-form p-b-33 p-t-5"
    @submit.prevent="onSubmit"
  >
    <div class="wrap-input100 validate-input" data-validate="Ingrese su nombre">
      <input
        class="input100"
        type="text"
        placeholder="Nombre"
        v-model="userForm.name"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe82a;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Ingrese su correo">
      <input
        class="input100"
        type="email"
        placeholder="Correo"
        v-model="userForm.email"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe818;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Ingrese password">
      <input
        class="input100"
        type="password"
        placeholder="Contraseña"
        v-model="userForm.password"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe80f;"></span>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <button type="submit" class="login100-form-btn">Crear cuenta</button>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <router-link :to="{ name: 'login' }">¿Ya tienes una cuenta?</router-link>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useauth from "../composables/useauth";
import Swal from "sweetalert2";
export default {
  setup() {
    const router = useRouter();
    const { createUser } = useauth();
    const userForm = ref({
      name: "yeferson",
      email: "yefersoncasti@gmail.com",
      password: "Admin1234",
    });

    return {
      userForm,
      onSubmit: async () => {
        const { ok, message } = await createUser(userForm.value);
        if (!ok) Swal.fire("Error", message, "error");
        else router.push({ name: "no-entry" });
      },
    };
  },
};
</script>

<style>
</style>