<template>
  <div class="flex flex-col items-center py-25 bg-base-100">
    <div class="absolute left-0 bottom-0 pointer-events-none" aria-hidden="true">
      <div class="w-200 h-200 rounded-full bg-gradient-to-tr from-blue-500 opacity-70 blur-[160px]"></div>
    </div>
    <h1 class="font-bold text-2xl mb-5">创建您的账户</h1>
    <h1 class="font-bold text-2xl mb-5"></h1>
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-2xl max-w-xl w-full border-2 py-10 px-5">
      <label class="label text-sm">用户名</label>
      <input type="text" class="input w-full" />
      <label class="label text-sm">邮箱</label>
      <input type="email" class="input validator w-full" placeholder="example@exmple.com" />
      <div class="validator-hint">请输入正确格式的邮箱地址</div>
      <label class="label text-sm">密码</label>
      <input type="password" class="input w-full" placeholder="••••••••" />
      <label class="label text-sm">确认密码</label>
      <input type="password" class="input w-full" placeholder="••••••••" />
      <button class="btn mt-4 btn-primary">注册</button>
    </fieldset>
  </div>

</template>

<script setup>
</script>

<style scoped>
</style>
