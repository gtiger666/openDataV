<template>
  <div class="mark-line">
    <div
      v-for="line in lines"
      :key="line"
      class="line"
      :class="line.includes('x') ? 'xline' : 'yline'"
      :ref="setLineRef"
      v-show="lineStatus[line] || false"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useBasicStoreWithOut } from '@/store/modules/basic'
import { useEventBus } from '@/bus/useEventBus'
import { getComponentRotatedStyle } from '@/utils/utils'
import { DOMRectStyle } from '@/types/component'

const basicStore = useBasicStoreWithOut()

const linesRef = ref<Array<any>>([])

const lines = reactive<Array<string>>(['xt', 'xc', 'xb', 'yl', 'yc', 'yr'])
const diff = ref<number>(3)
const lineStatus = reactive<{
  xt: boolean
  xc: boolean
  xb: boolean
  yl: boolean
  yc: boolean
  yr: boolean
}>({
  xt: false,
  xc: false,
  xb: false,
  yl: false,
  yc: false,
  yr: false
})

const setLineRef = (el) => {
  linesRef.value.push(el)
}

const hideLine = () => {
  Object.keys(lineStatus).forEach((line) => {
    lineStatus[line] = false
  })
}

interface EventParams {
  isDownward: boolean
  isRightward: boolean
}

useEventBus('move', (event) => {
  showLine((event as EventParams).isDownward, (event as EventParams).isRightward)
})
useEventBus('unmove', () => {
  hideLine()
})

const showLine = (isDownward, isRightward) => {
  const components = basicStore.componentData
  const curComponentStyle = getComponentRotatedStyle(basicStore.curComponent!.style as DOMRectStyle)
  const curComponentHalfwidth = ((curComponentStyle.width as number) || 0) / 2
  const curComponentHalfHeight = ((curComponentStyle.height as number) || 0) / 2

  hideLine()
  components.forEach((component) => {
    if (component == basicStore.curComponent) return
    const componentStyle = getComponentRotatedStyle(component.style)
    const { top, left, bottom, right } = componentStyle
    const componentHalfwidth = componentStyle.width / 2
    const componentHalfHeight = componentStyle.height / 2

    const conditions = {
      top: [
        {
          isNearly: isNearly(curComponentStyle.top, top),
          lineNode: linesRef.value[0], // xt
          line: 'xt',
          dragShift: top,
          lineShift: top
        },
        {
          isNearly: isNearly(curComponentStyle.bottom, top),
          lineNode: linesRef.value[0], // xt
          line: 'xt',
          dragShift: top - ((curComponentStyle.height as number) || 0),
          lineShift: top
        },
        {
          // 组件与拖拽节点的中间是否对齐
          isNearly: isNearly(
            ((curComponentStyle.top as number) || 0) + curComponentHalfHeight,
            top + componentHalfHeight
          ),
          lineNode: linesRef.value[1], // xc
          line: 'xc',
          dragShift: top + componentHalfHeight - curComponentHalfHeight,
          lineShift: top + componentHalfHeight
        },
        {
          isNearly: isNearly(curComponentStyle.top, bottom),
          lineNode: linesRef.value[2], // xb
          line: 'xb',
          dragShift: bottom,
          lineShift: bottom
        },
        {
          isNearly: isNearly(curComponentStyle.bottom, bottom),
          lineNode: linesRef.value[2], // xb
          line: 'xb',
          dragShift: (bottom as number) - ((curComponentStyle.height as number) || 0),
          lineShift: bottom
        }
      ],
      left: [
        {
          isNearly: isNearly(curComponentStyle.left, left),
          lineNode: linesRef.value[3], // yl
          line: 'yl',
          dragShift: left,
          lineShift: left
        },
        {
          isNearly: isNearly(curComponentStyle.right, left),
          lineNode: linesRef.value[3], // yl
          line: 'yl',
          dragShift: left - ((curComponentStyle.width as number) || 0),
          lineShift: left
        },
        {
          // 组件与拖拽节点的中间是否对齐
          isNearly: isNearly(
            ((curComponentStyle.left as number) || 0) + curComponentHalfwidth,
            left + componentHalfwidth
          ),
          lineNode: linesRef.value[4], // yc
          line: 'yc',
          dragShift: left + componentHalfwidth - curComponentHalfwidth,
          lineShift: left + componentHalfwidth
        },
        {
          isNearly: isNearly(curComponentStyle.left, right),
          lineNode: linesRef.value[5], // yr
          line: 'yr',
          dragShift: right,
          lineShift: right
        },
        {
          isNearly: isNearly(curComponentStyle.right, right),
          lineNode: linesRef.value[5], // yr
          line: 'yr',
          dragShift: (right as number) - ((curComponentStyle.width as number) || 0),
          lineShift: right
        }
      ]
    }

    const needToShow: Array<any> = []
    const { rotate } = basicStore.curComponent!.style
    Object.keys(conditions).forEach((key) => {
      // 遍历符合的条件并处理
      conditions[key].forEach((condition) => {
        if (!condition.isNearly) return

        // 修改当前组件位移
        basicStore.setShapeSingleStyle({
          key,
          value:
            rotate != 0
              ? translatecurComponentShift(key, condition, curComponentStyle)
              : condition.dragShift
        })

        condition.lineNode.style[key] = `${condition.lineShift}px`
        needToShow.push(condition.line)
      })
    })

    // 同一方向上同时显示三条线可能不太美观，因此才有了这个解决方案
    // 同一方向上的线只显示一条，例如多条横条只显示一条横线
    if (needToShow.length) {
      chooseTheTureLine(needToShow, isDownward, isRightward)
    }
  })
}

const isNearly = (dragValue, targetValue) => {
  return Math.abs(dragValue - targetValue) <= diff.value
}

const translatecurComponentShift = (key, condition, curComponentStyle) => {
  const { width, height } = basicStore.curComponent!.style
  if (key == 'top') {
    return Math.round(condition.dragShift - ((height as number) - curComponentStyle.height) / 2)
  }

  return Math.round(condition.dragShift - ((width as number) - curComponentStyle.width) / 2)
}

const chooseTheTureLine = (needToShow, isDownward, isRightward) => {
  // 如果鼠标向右移动 则按从右到左的顺序显示竖线 否则按相反顺序显示
  // 如果鼠标向下移动 则按从下到上的顺序显示横线 否则按相反顺序显示
  if (isRightward) {
    if (needToShow.includes('yr')) {
      lineStatus.yr = true
    } else if (needToShow.includes('yc')) {
      lineStatus.yc = true
    } else if (needToShow.includes('yl')) {
      lineStatus.yl = true
    }
  } else {
    // eslint-disable-next-line no-lonely-if
    if (needToShow.includes('yl')) {
      lineStatus.yl = true
    } else if (needToShow.includes('yc')) {
      lineStatus.yc = true
    } else if (needToShow.includes('yr')) {
      lineStatus.yr = true
    }
  }

  if (isDownward) {
    if (needToShow.includes('xb')) {
      lineStatus.xb = true
    } else if (needToShow.includes('xc')) {
      lineStatus.xc = true
    } else if (needToShow.includes('xt')) {
      lineStatus.xt = true
    }
  } else {
    // eslint-disable-next-line no-lonely-if
    if (needToShow.includes('xt')) {
      lineStatus.xt = true
    } else if (needToShow.includes('xc')) {
      lineStatus.xc = true
    } else if (needToShow.includes('xb')) {
      lineStatus.xb = true
    }
  }
}
</script>

<style scoped>
@layer components {
  .mark-line {
    @apply h-full;
  }

  .line {
    @apply bg-blue-300 absolute z-50;
  }

  .xline {
    @apply w-full h-px;
  }

  .yline {
    @apply w-px h-full;
  }
}
</style>
