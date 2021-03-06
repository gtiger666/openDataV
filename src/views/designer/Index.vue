<template>
  <div class="home">
    <Toolbar @recovery="recoveryDraft" />

    <main>
      <!-- 左侧组件列表 -->
      <section class="left">
        <SideBar />
      </section>
      <!-- 中间画布 -->
      <section class="center scrollbar">
        <Ruler :borderStyle="rulerBorderStyle">
          <div
            class="content scrollbar"
            @drop="handleDrop"
            @dragover="handleDragOver"
            @mousedown="handleMouseDown"
            @mouseup="deselectCurComponent"
          >
            <Editor />
          </div>
        </Ruler>
      </section>
      <!-- 右侧属性列表 -->
      <section class="right">
        <TabPane />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash-es'
import Editor from '@/components/Editor/Index.vue'
import Toolbar from '@/components/Pane/Toolbar.vue'
import Ruler from '@/components/Editor/Ruler.vue'
import TabPane from '@/components/Pane/TabPane.vue'
import SideBar from '@/components/Pane/SideBar/SideBar.vue'
import { componentList } from '@/views/index' // 左侧列表数据
import { useBasicStoreWithOut } from '@/store/modules/basic'
import { useSnapShotStoreWithOut } from '@/store/modules/snapshot'
import { ref, onMounted, onUnmounted, reactive, watch } from 'vue'
import { getUIComponents } from '@/api'
import { useRoute } from 'vue-router'
import { useStorage } from '@vueuse/core'
import { eventBus } from '@/bus/useEventBus'

const basicStore = useBasicStoreWithOut()
const snapShotStore = useSnapShotStoreWithOut()

const storageCanvasData = useStorage('canvasData', '', window?.localStorage)
const storageCanvasStyle = useStorage('canvasStyle', '', window?.localStorage)

const websk = ref<WebSocket | null>(null)

const rulerBorderStyle = reactive<{
  type: 'dashed' | 'solid' | 'dotted'
  width: number
  color: string
}>({
  type: 'dashed',
  width: 1,
  color: 'red'
})

const route = useRoute()

onMounted(async () => {
  let index = ''
  if (route.params.index) {
    index = route.params.index as string
  }
  snapShotStore.clearSnapshot()
  basicStore.clearCanvas()
  if (index) {
    await restore(index)
  }
})

const restore = async (index: string) => {
  const resp = await getUIComponents(index)
  if (!resp) {
    return
  }
  snapShotStore.recordSnapshot()
  basicStore.setLayoutData(resp)
}

const handleDrop = (e) => {
  e.preventDefault()
  e.stopPropagation()
  const componentName = e.dataTransfer.getData('componentName')
  if (componentName) {
    const component = cloneDeep(componentList[componentName].component)
    component.style.top = e.offsetY
    component.style.left = e.offsetX
    snapShotStore.recordSnapshot()
    basicStore.addComponent({ component })
  }
}

const handleDragOver = (e) => {
  e.preventDefault()
  e.dataTransfer.dropEffect = 'copy'
}

const handleMouseDown = () => {
  basicStore.setClickComponentStatus(false)
}

const deselectCurComponent = () => {
  if (!basicStore.isClickComponent) {
    basicStore.setCurComponent(null, undefined)
  }
}

// 恢复草稿
const recoveryDraft = () => {
  // 用保存的数据恢复画布
  if (storageCanvasData.value) {
    basicStore.setComponentData(JSON.parse(storageCanvasData.value))
  }

  if (storageCanvasStyle.value) {
    basicStore.setCanvasStyle(JSON.parse(storageCanvasStyle.value))
  }
}

watch(
  () => basicStore.canvasStyleData.dataWs,
  (newValue) => {
    websk.value?.close()
    if (newValue) {
      websk.value = initWebsocket('actual', newValue)
    }
  }
)

const initWebsocket = (key: string, url: string): WebSocket => {
  const ws = new WebSocket(url)

  ws.onopen = () => {
    console.log('websocket连接成功')
  }

  ws.onclose = () => {
    console.log('websocket连接被关闭')
  }

  ws.onmessage = (ev) => {
    const data = JSON.parse(ev.data)
    eventBus.emit(key, data)
  }

  return ws
}

onUnmounted((): void => {
  websk.value?.close()
})
</script>

<style scoped lang="less">
@layer components {
  .home {
    @apply h-screen bg-white flex flex-col;
  }

  main {
    @apply relative flex;

    max-height: calc(100vh - 60px);
    flex: 1;
  }

  .left {
    position: relative;
    width: 200px;

    transition: all 0.3s;
  }

  .right {
    width: 260px;

    transition: all 0.3s;
  }

  .center {
    @apply bg-gray-50 overflow-auto;

    flex: 1;
  }

  .content {
    @apply overflow-auto;

    box-shadow: 0 0 15px 7px;
  }

  // .scrollbar::-webkit-scrollbar {
  //   width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  //   height: 4px;
  //   scrollbar-arrow-color: red;
  // }

  // .scrollbar::-webkit-scrollbar-thumb {
  //   /*滚动条里面小方块*/
  //   border-radius: 5px;
  //   -webkit-box-shadow: inset 0 0 5px rgba(128, 128, 128, 0.5);
  //   background: darkslategray;
  //   scrollbar-arrow-color: red;
  // }
  // .scrollbar::-webkit-scrollbar-track {
  //   /*滚动条里面轨道*/
  //   -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  //   border-radius: 0;
  //   background: darkgray;
  // }

  .placeholder {
    @apply text-gray-800 text-center;
  }
}
</style>
