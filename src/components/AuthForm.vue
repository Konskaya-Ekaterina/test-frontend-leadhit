<template>
  <form class="auth-form" id="auth-form" @submit.prevent>
    <div class="auth-form__field auth-form__field_id">
      <label for="site-id" class="auth-form__label auth-form__label_id">ID сайта</label>
      <input id="site-id" type="text" class="auth-form__input auth-form__input_id" v-model="siteId"
             @input="onInputSiteId"/>
      <div class="auth-form__error auth-form__error_id" :style="{visibility: siteIdError ? 'visible' : 'hidden'}">
        id сайта должен содержать 24 символа
      </div>
    </div>
    <button type="submit" class="auth-form__btn auth-form__btn_submit" @click.prevent="submitAuthForm">Войти</button>
  </form>
</template>

<script>
export default {
  name: "AuthForm",
  data() {
    return {
      siteId: '',
      siteIdError: false
    }
  },
  methods: {
    onInputSiteId() {
      this.siteIdError = false
    },
    submitAuthForm() {
      if (this.siteId.length !== 24) {
        this.siteIdError = true
      } else {
        this.$store.dispatch('login', {siteId: this.siteId})
        this.siteIdError = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.auth-form {
  min-width: 300px;
  max-width: 400px;
  width: 100%;
  min-height: 400px;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.auth-form__field {
  width: 100%;
  margin-bottom: 20px;
}

.auth-form__label {
  width: 100%;
  display: block;
  margin: 0 auto 10px;
  padding-left: 10px;
  color: #2c3e50;
  font-size: 18px;
}

.auth-form__input {
  width: 100%;
  display: block;
  margin: 0 auto 15px;
  padding: 10px 15px;
  border: 2px solid #07395e;
  border-radius: 5px;
  outline: none;
  transition: all 0.2s;

  &:hover {
    box-shadow: 1px 5px 20px 10px rgba(120, 150, 180, 0.1);
  }

  &:focus {
    background-color: transparent;
  }
}

.auth-form__error {
  width: 100%;
  margin: 0 auto;
  padding: 10px 15px;
  font-size: 12px;
  color: #d51212;
  background-color: #f9ebeb;
  border-radius: 5px;
}

.auth-form__btn {
  padding: 15px 20px;
  color: #2591b3;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  background: #e1f1f8;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

</style>
