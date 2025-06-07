<template>
  <div class="flex flex-col items-center py-25 bg-base-100">
    <div class="absolute left-0 bottom-0 pointer-events-none" aria-hidden="true">
      <div class="w-200 h-200 rounded-full bg-gradient-to-tr from-blue-500 opacity-70 blur-[160px]"></div>
    </div>
    <h1 class="font-bold text-2xl mb-5">欢迎使用智能学习助手</h1>
    <p class="font-extralight text-xl mb-5">登录您的账户以获得个性化的学习体验</p>
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-2xl max-w-xl w-full border-2 py-10 px-5">
      <label class="label">邮箱</label>
      <input type="email" class="input validator w-full" placeholder="example@exmple.com" />
      <div class="validator-hint">请输入正确格式的邮箱地址</div>
      <label class="label">密码</label>
      <input type="password" class="input w-full" placeholder="••••••••" />
      <button class="btn mt-4 btn-primary">登录</button>
      <div class="flex justify-between mt-8">
        <router-link class="text-blue-600 text-center text-sm" to="/reset-password">忘记密码?</router-link>
        <router-link class="text-blue-600 text-center text-sm" to="/reset-password">注册</router-link>
      </div>
    </fieldset>
  </div>

</template>

<script setup>
</script>

<style scoped>
</style>
