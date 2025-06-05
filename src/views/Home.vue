<script setup>

</script>

<template>
  <div class="flex flex-col items-center py-25 bg-base-100">
    <header class="text-center space-y-2 mb-15">
      <h1 class="text-5xl font-extrabold">智能学习助手</h1>
      <p class="text-lg font-light mt-5">个性化学习体验，AI 支持的教育平台</p>
    </header>
    <div class="rounded-4xl shadow-[0px_0px_20px_rgba(0,0,0,0.2)] inset-ring-blue-500 max-w-4xl w-full px-4 py-5 lg:py-10">
      <div class="flex flex-col space-y-6 items-center">
        <h2 class="text-2xl font-semibold text-center">
          今天你想了解什么？
        </h2>
        <textarea class="textarea min-h-50 min-w-11/12 rounded-xl" placeholder="例如：我想学习高中物理中的力学知识..."></textarea>
        <button class="btn btn-primary px-8 py-2 text-white">
          去探索
        </button>
        <div class="divider"></div>
        <p class="text-center text-gray-500">
          创建账户以保存您的学习进度和个性化推荐
        </p>
        <div class="flex justify-center space-x-4">
          <button class="btn btn-outline">登录</button>
          <button class="btn btn-primary">注册账户</button>
        </div>
      </div>
    </div>
    <p class="mt-20 text-center text-gray-500">
      开启您的个性化学习之旅，获得量身定制的课程内容
    </p>
  </div>
</template>

<style scoped>

</style>
