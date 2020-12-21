<template>
  <div>
    <b-navbar
      toggleable="lg"
      class="color fixed-top"
      type="dark"
      variant="info"
    >
      <b-navbar-brand to="/" class="offset-1">
        <img
          height="30"
          width="30"
          src="@/assets/logo.png"
          class="d-inline-block align-top"
          alt="Kitten"
        />
        {{ text.SMS }}
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/kms/dashboard">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto mr-4">
          <b-nav-item right to="/kms/tutor/registration">
            {{ text.REGISTER }}
          </b-nav-item>
          <b-nav-item v-b-modal.login-model>
            {{ text.LOGIN }}
          </b-nav-item>
          <b-nav-item-dropdown right>
            <template #button-content>
              Rahul
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Loginmodel />
  </div>
</template>
<script>
import Loginmodel from './LoginModel'
import { SMS, REGISTER, LOGIN } from '@/constant/Text'
export default {
  data() {
    return {
      text: {
        SMS: SMS,
        REGISTER: REGISTER,
        LOGIN: LOGIN
      }
    }
  },
  components: {
    Loginmodel
  }
}
</script>
<style scoped>
.fixed-top {
  position: fixed;
  width: 100%;
}
.color {
  background-color: #40739e !important;
}
</style>
