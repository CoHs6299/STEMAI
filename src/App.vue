<template>
  <div class="flex justify-center items-center">
    <!--导航栏-->
    <div class="fixed mt-1 top-0 navbar bg-base-100 rounded-2xl max-w-[99rem] shadow-xl opacity-98">
      <div class="navbar-start">
        <!-- 移动端汉堡按钮和下拉菜单 -->
        <div class="dropdown">
          <button tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </button>
          <ul tabindex="0" class="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/course-planning">课程规划</router-link></li>
            <li><a>互动学习</a></li>
          </ul>
        </div>
        <!-- 导航栏左侧logo -->
        <router-link to="/" class="link font-extrabold no-underline text-xl mx-2">STEMAI</router-link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <router-link class="btn btn-ghost" to="/">
          <img class="icon h-5 w-5" src="/home.svg" alt="home"></img>
          首页
        </router-link>
        <router-link to="/course-planning" class="btn btn-ghost">
          <img class="icon h-5 w-5" src="/coursePlan.svg" alt="coursePlan"></img>
          课程规划
        </router-link>
        <button class="btn btn-ghost">
          <img class="icon h-5 w-5" src="/learning.svg" alt="learning"></img>
          互动学习
        </button>
      </div>
      <div class="navbar-end">
        <a class="btn btn-primary mx-5">注册/登录</a>
      </div>
    </div>
  </div>
  <router-view/>
  <!--  hero页面 -->
</template>

<script setup>
</script>
