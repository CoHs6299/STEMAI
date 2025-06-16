<template>
  <div class="flex flex-col items-center py-25 bg-base-100">
    <div class="absolute left-0 -translate-x-2/3 bottom-0 pointer-events-none" aria-hidden="true">
      <div class="w-200 h-200 rounded-full bg-gradient-to-br from-blue-300 opacity-60 blur-[200px]"></div>
    </div>
    <header class="text-center space-y-2 mb-15">
      <h1 class="text-5xl font-extrabold">智能学习助手</h1>
      <p class="text-lg font-light mt-2">个性化学习体验，AI 支持的教育平台</p>
    </header>
    <div class="rounded-4xl shadow-[0px_0px_20px_rgba(0,0,0,0.2)] max-w-4xl w-full py-4">
      <div class="flex flex-col space-y-6 items-center">
        <h2 class="text-2xl font-semibold text-center">
          今天你想了解什么？
        </h2>
        <draggable
            v-model="selectedTopics"
            item-key="id"
            group="topics"
            class="flex flex-wrap items-center justify-center gap-3 p-4 rounded-xl min-h-[100px] w-11/12 border-2 border-dashed"
            :class="{'border-blue-400': selectedTopics.length > 0, 'border-gray-300': selectedTopics.length === 0}"
        >
          <template #item="{element, index}">
            <div class="flex items-center bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full cursor-pointer transition-all">
              <span>{{ element.name }}</span>
              <button @click="removeTopic(index)" class="ml-2 text-white/70 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          </template>
          <template #header>
            <p v-if="selectedTopics.length === 0" class="text-gray-400">将主题拖到此处，可随意组合</p>
          </template>
        </draggable>
        <div class="w-full pt-4">
          <div class="flex flex-wrap items-center justify-center gap-3">
            <draggable
                :list="hotTopics"
                item-key="id"
                :group="{ name: 'topics', pull: 'clone', put: false }"
                :sort="false"
                class="flex flex-wrap items-center justify-center gap-3"
            >
              <template #item="{element}">
                <div class="bg-violet-100 text-violet-800 text-sm font-semibold px-4 py-2 rounded-full cursor-move transition-shadow hover:shadow-md">
                  <span>{{ element.name }}</span>
                  <button @click.stop="removeHotTopic(index)" class="text-violet-500 hover:text-violet-800 font-bold text-lg leading-none" title="删除这个主题">×</button>
                </div>
              </template>
            </draggable>
          </div>
        </div>

        <div class="flex gap-2">
          <input
              type="text"
              v-model="newTopicName"
              @keyup.enter="addCustomTopic"
              placeholder="输入自定义主题..."
              class="flex-grow input input-bordered w-full px-4 py-2 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          <button @click="addCustomTopic" class="btn">
            添加
          </button>
        </div>
        <button @click="startExploration" class="btn btn-primary px-8 py-2 text-white">
          去探索
        </button>
        <div class="divider"></div>
        <p class="text-center text-gray-500">
          创建账户以保存您的学习进度和个性化推荐
        </p>
        <div class="flex justify-center space-x-4">
          <router-link to="/auth" class="btn btn-outline">登录</router-link>
          <router-link to="/register" class="btn btn-primary">注册账户</router-link>
        </div>
      </div>
    </div>
    <p class="mt-20 text-center text-gray-500">
      开启您的个性化学习之旅，获得量身定制的课程内容
    </p>
  </div>
</template>

<script setup>
import { ref} from 'vue'
import draggable from "vuedraggable";
import {ElMessage} from "element-plus";

const hotTopics = ref([
  { id: 101, name: '高中物理' },
  { id: 102, name: '文言文' },
  { id: 103, name: '线性代数' },
  { id: 104, name: '光合作用' },
]);
const selectedTopics = ref([]);
const newTopicName = ref('');

const startExploration = () => {
  if (selectedTopics.value.length === 0) {
    ElMessage({
      message: '请先选择主题',
      type: 'warning',
    })
    return;
  }
  const topicNames = selectedTopics.value.map(t => t.name).join('、');
  alert(`即将为您探索关于 “${topicNames}” 的知识...`);
  // 在这里可以替换为实际的API调用或页面跳转逻辑
};

const addCustomTopic = () => {
  const name = newTopicName.value;
  debugger;
  if (!name) {
    ElMessage({
      message: '主题名不可为空',
      type: 'warning',
    })
    return;
  }
  // 检查主题是否已存在
  if (hotTopics.value.some(topic => topic.name.toLowerCase() === name.toLowerCase())) {
    ElMessage({
      message: '这个主题已经存在了',
      type: 'warning',
    })
    return;
  }

  const newTopic = {
    id: Date.now() + Math.random(),
    name: name
  };
  hotTopics.value.push(newTopic);
  newTopicName.value = ''; // 清空输入框
};

const removeTopic = (index) => {
  selectedTopics.value.splice(index, 1);
};

const removeHotTopic = (index) => {
  hotTopics.value.splice(index, 1);
};

</script>

<style scoped>

</style>
