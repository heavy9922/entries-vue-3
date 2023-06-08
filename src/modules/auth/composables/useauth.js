import { useStore } from 'vuex'
import { computed } from 'vue'
const useAuth = () => {
  const store = useStore()
  const createUser = async (user) => {
    const resp = await store.dispatch('auth/createUser', user)
    return resp
  }

  const loginUser = async (user) => {
    const resp = await store.dispatch('auth/loginUser', user)
    return resp
  }
  const chechStatus = async () => {
    const resp = await store.dispatch('auth/checkauth')
    return resp
  }
  const logoutUser = () => {
    store.commit('auth/logout')
    store.commit('journal/clearEntries')
  }
  return {
    createUser,
    loginUser,
    chechStatus,
    logoutUser,

    authStatus: computed(() => store.getters['auth/currentState']),
    username: computed(() => store.getters['auth/getName']),
  }
}

export default useAuth
