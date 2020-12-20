import { REGISTER } from '../constant/EndPoints'
import Api from './Api'
import { LOGIN, USER, LOGOUT } from '@/constant/Endpoints'

export default {
  register() {
    return Api().post(REGISTER, payload)
  },
  login(payload) {
    return Api().post(LOGIN, payload)
  },
  user() {
    return Api().get(USER)
  },
  logout() {
    return Api().get(LOGOUT)
  }
}
