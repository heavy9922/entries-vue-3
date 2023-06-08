import axios from 'axios'

const authApi = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
  params: {
    key:'AIzaSyAszC7F1ylXDUsLKTU6JhEW-mm3FGtJ698'
  }
})

export default authApi
