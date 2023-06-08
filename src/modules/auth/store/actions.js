// export const myAcion = async ({commit}) => {}
import authApi from '@/api/authApi'
export const createUser = async ({ commit }, user) => {
  const { name, email, password } = user
  try {
    let body = { email, password, returnSecureToken: true }
    const { data } = await authApi.post(':signUp', body)
    const { idToken, refreshToken } = data
    body = { displayName: name, idToken }
    await authApi.post(':update', body)
    delete user.password
    commit('loginUser', { user, idToken, refreshToken })
    return { ok: true }
  } catch (error) {
    console.error(error.response)
    return { ok: false, message: error.response.data.error.message }
  }
}

export const loginUser = async ({ commit }, user) => {
  const { email, password } = user
  try {
    let body = { email, password, returnSecureToken: true }
    const { data } = await authApi.post(':signInWithPassword', body)
    const { displayName, idToken, refreshToken } = data
    user.name = displayName
    commit('loginUser', { user, idToken, refreshToken })
    return { ok: true }
  } catch (error) {
    console.error(error.response)
    return { ok: false, message: error.response.data.error.message }
  }
}

export const checkauth = async ({ commit }, user) => {
  const idToken = localStorage.getItem('idToken')
  const refreshToken = localStorage.getItem('refreshToken')
  if (!idToken) {
    commit('logout')
    return { ok: false, message: 'Not there is token in auth' }
  }

  try {
    const { data } = await authApi.post(':lookup', { idToken })
    const { displayName, email } = data.users[0]
    const user = {
      name: displayName,
      email,
    }
    commit('loginUser', { user, idToken, refreshToken })
    return { ok: true }
  } catch (error) {
    commit('logout')
    return { ok: false, message: error.response.data.error.message }
  }
}
