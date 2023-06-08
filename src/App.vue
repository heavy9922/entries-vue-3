<template>
  <h1 v-if="authStatus === 'authenticating'">{{ authStatus }}</h1>
  <router-view v-else />
</template>

<script>
import useAuth from "./modules/auth/composables/useauth";
export default {
  setup() {
    const { authStatus, chechStatus } = useAuth();
    chechStatus();
    return {
      authStatus,
    };
  },
};
</script>