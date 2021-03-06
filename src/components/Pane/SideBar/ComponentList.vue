<template>
  <div @dragstart="handleDragStart" style="height: calc(100vh - 100px)">
    <div class="components">
      <el-scrollbar>
        <el-menu :unique-opened="true">
          <el-sub-menu v-for="(key, index) in componentKeys" :index="index.toString()" :key="index">
            <template #title>
              <span :class="`icon iconfont ${iconMap[key]}`"></span>
              <span>{{ key }}</span>
            </template>
            <el-menu-item
              v-for="(item, i) in componentGroup[key!]"
              :key="i"
              :index="`${index}-${i}`"
              draggable="true"
              :data-component="item.component"
            >
              <template #title>
                <span>{{ item.label }}</span>
              </template>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ComponentGroup } from '@/enum'
import { componentList } from '@/views/index'
import type { ComponentInfo } from '@/types/component'
import { computed } from 'vue'
import iconMap from '../icon'
import { ElMenu, ElMenuItem, ElSubMenu, ElScrollbar } from 'element-plus'

const componentKeys = computed(() => {
  return Object.keys(ComponentGroup).map((item) => {
    return ComponentGroup[item]
  })
})

const componentGroup = computed(() => {
  const groups: { group: string; component: ComponentInfo } = {} as any
  Object.keys(componentList)
    .filter((key) => {
      if (componentList[key].component.show !== false) {
        return componentList[key]
      }
    })
    .forEach((key) => {
      const group = componentList[key].component.group
      if (!group) {
        return
      }

      if (!groups[group]) {
        groups[group] = []
      }
      groups[group].push(componentList[key].component)
    })
  return groups
})

const handleDragStart = (e) => {
  e.dataTransfer.setData('componentName', e.target.dataset.component)
}
</script>

<style scoped>
@layer components {
  .component-list {
    @apply flex flex-wrap justify-between p-2.5;
  }

  .component {
    @apply border border-solid border-gray-300 cursor-pointer mb-2.5 text-center text-gray-600;
    @apply px-0.5 py-1.5 flex items-center justify-center active:cursor-pointer rounded-md;
    @apply w-full;

    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }

  .el-menu {
    width: 200px;
  }
  ul :deep(.el-sub-menu__title) {
    height: 36px;
    line-height: 36px;
  }
  ul :deep(.el-menu-item) {
    height: 30px;
    line-height: 30px;
  }

  .components {
    display: flex;
    height: 100%;
  }

  .components ul {
    flex: 1;
    /* width: 50px; */
    background-color: #f5f7fa;
    text-shadow: 0 5px 5px #aaa;
  }

  div.preview {
    flex: 3;
    display: flex;
    overflow: auto;
    flex-direction: column;
  }

  div .group {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 12px;
    box-shadow: -5px 5px 10px #ccc;
  }

  li a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }

  .components li {
    border-bottom: 1px solid #e4e7ed;
    border-right: 1px solid #e4e7ed;
  }

  .active {
    border-right: none !important;
    background-color: #fff;
    color: #409eff;
    text-shadow: 0 10px 10px #aaa;
  }
  .iconfont {
    @apply mr-1 text-xl;
  }
}
</style>
