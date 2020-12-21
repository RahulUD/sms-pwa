<template>
  <div>
    <b-modal
      no-close-on-backdrop
      centered
      hide-header
      hide-footer
      size="md"
      class="background-color"
      id="login-model"
    >
      <form class="form-signin" @submit.prevent>
        <div class="text-center mb-4">
          <img
            class="mb-4"
            src="@/assets/logo.png"
            alt=""
            width="72"
            height="72"
          />
          <h2 class="h3 mb-3 font-weight-normal">{{ text.SMS_FULL }}</h2>
        </div>

        <div class="form-label-group">
          <input
            type="text"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            v-model="form.email"
            autofocus
          />
          <label for="inputEmail">{{ text.EMAIL_LEVEL }}</label>
          <p class="error-message" v-if="hasError">
            {{ errorMessage.email }}
          </p>
        </div>

        <div class="form-label-group">
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            v-model="form.password"
          />
          <label for="inputPassword">{{ text.PASSWORD_LEVEL }}</label>
          <p class="error-message" v-if="hasError">
            {{ errorMessage.password }}
          </p>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" />
            {{ text.REMEMBER_ME_LEVEL }}
          </label>
        </div>
        <div class="row">
          <div class="col-6">
            <button class="btn btn-primary btn-block" @click="submitHandle">
              {{ text.SIGN_IN }}
            </button>
          </div>
          <div class="col-6">
            <button class="btn btn-danger btn-block" @click="cancelHandle">
              {{ text.CANCEL }}
            </button>
          </div>
        </div>
        <div class="mt-2">
          <a href="#">{{ text.REGISTER_HERE }}</a>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { resetFormData, getErrorMessage } from '@/utility/CommonFormMethod'
import { required, email, minLength, alphaNum } from 'vuelidate/lib/validators'
// const alpha = helpers.regex('alpha', /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/)

import {
  CANCEL,
  REGISTER_HERE,
  SIGN_IN,
  SMS_FULL,
  EMAIL_LEVEL,
  PASSWORD_LEVEL,
  REMEMBER_ME_LEVEL
} from '@/constant/Text'
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
        device_name: ''
      },
      errorMessage: null,
      hasError: false,
      text: {
        CANCEL: CANCEL,
        REGISTER_HERE: REGISTER_HERE,
        SIGN_IN: SIGN_IN,
        SMS_FULL: SMS_FULL,
        EMAIL_LEVEL: EMAIL_LEVEL,
        PASSWORD_LEVEL: PASSWORD_LEVEL,
        REMEMBER_ME_LEVEL: REMEMBER_ME_LEVEL
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8),
        alphaNum
      }
    }
  },
  methods: {
    cancelHandle() {
      if (this.form) {
        this.form = resetFormData(this.form)
      }
      if (this.errorMessage) {
        this.errorMessage = resetFormData(this.errorMessage)
      }
      this.$bvModal.hide('login-model')
    },
    validationHandle() {
      if (this.$v.$invalid) {
        this.hasError = true
        this.errorMessage = getErrorMessage(this.$v)
      }
    },
    submitHandle(event) {
      this.validationHandle()
    }
  }
}
</script>
<style scoped>
.error-message {
  color: red;
}
.form-signin {
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: auto;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input,
.form-label-group label {
  height: 3.125rem;
  padding: 0.75rem;
}

.form-label-group label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0; /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  pointer-events: none;
  cursor: text; /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:-moz-placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: 0.25rem;
}

.form-label-group input:not(:-ms-input-placeholder) {
  padding-top: 1.25rem;
  padding-bottom: 0.25rem;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: 0.25rem;
}

.form-label-group input:not(:-moz-placeholder-shown) ~ label {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 12px;
  color: #777;
}

.form-label-group input:not(:-ms-input-placeholder) ~ label {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 12px;
  color: #777;
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 12px;
  color: #777;
}
/* Fallback for Edge
-------------------------------------------------- */
@supports (-ms-ime-align: auto) {
  .form-label-group {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
  }

  .form-label-group label {
    position: static;
  }

  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}
</style>
