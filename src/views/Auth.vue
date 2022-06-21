<template>
  <div class="auth">
    <h1 class="auth__title">LeadHit</h1>
    <auth-form/>
  </div>
</template>

<script>
import AuthForm from "@/components/AuthForm";

export default {
  name: 'Auth',
  components: {
    AuthForm
  }
}
</script>

<style lang="scss" scoped>

.auth {
  width: 100%;
  min-width: 300px;
}

.auth__title {
  text-align: center;
}

</style>
