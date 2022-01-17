<script lang="ts" setup>import { nextTick, ref, onMounted, onUnmounted } from 'vue';
const listDom = ref(null)
// 每次滚动条滚动的距离
const distance = 500
const speed = distance / 30
// 左移动
const prveClick = () => {
  if (listDom.value.scrollLeft === 0) {
    return
  }
  const sum = listDom.value.scrollLeft - distance
  function render() {
    if (listDom.value.scrollLeft - 10 < 0) {
      listDom.value.scrollLeft = 0
      return
    }
    if (listDom.value.scrollLeft > sum) {
      listDom.value.scrollLeft -= distance / speed
      requestAnimationFrame(render)
    }
  }
  requestAnimationFrame(render)
}
// 右移动
const nextClick = () => {
  const hubWidth = listDom.value.scrollWidth - listDom.value.offsetWidth
  const sum = listDom.value.scrollLeft + distance
  if (listDom.value.scrollLeft === hubWidth) {
    return
  }
  function render() {
    if (listDom.value.scrollLeft >= hubWidth) {
      listDom.value.scrollLeft = hubWidth
      return
    }
    if (listDom.value.scrollLeft < sum) {
      listDom.value.scrollLeft += distance / speed
      requestAnimationFrame(render)
    }
  }
  requestAnimationFrame(render)
}
let isMove = ref(false)
let moveLeft = 0
// 拖动链条
const onDown = (e: any) => {
  moveLeft = e.clientX
  isMove.value = true
}
onMounted(() => {
  document.body.addEventListener('mousemove', (e) => {
    if (isMove.value) {
      const x = e.clientX - moveLeft
      listDom.value.scrollLeft -= x / 40
    }
  })
  document.body.addEventListener('mouseup', (e) => {
    if (isMove.value) {
      isMove.value = false
    }
  })
})
onUnmounted(() => {
  document.body.removeEventListener('mousemove', () => { })
  document.body.removeEventListener('mouseup', () => { })
})
</script>
<template>
  <div class="rolling">
    <div class="rolling-left flex flex-center pointer" @click="prveClick">
      <i class="iconfont icon-arrow-left font-24"></i>
    </div>
    <div class="rolling-right flex flex-center pointer" @click="nextClick">
      <i class="iconfont icon-arrow-right font-24"></i>
    </div>
    <div class="rolling-list" ref="listDom" @mousedown="onDown">
      <ul class="list flex">
        <li class="item flex" :class="{ pointer: !isMove }" v-for="item in 12 " :key="item">
          <div class="item-icon">
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13503724594%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644828436&t=d80df2d2948bbb98e0029c7697e24524"
            />
            <p class="text-center text-over font-12">推波</p>
          </div>
          <div class="item-text">
            <h5>标题一</h5>
            <p>标题二</p>
            <p>标题三</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.rolling {
  position: relative;
  display: block;
  width: 100%;
  .rolling-left,
  .rolling-right {
    position: absolute;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: rgba($color: #000000, $alpha: 0.1);
    top: 0;
    bottom: 0;
    margin: auto;
    transition: all 400ms;
  }
  .rolling-left {
    left: 20px;
  }
  .rolling-right {
    right: 20px;
  }
  &:hover .rolling-left,
  &:hover .rolling-right {
    background-color: rgba($color: #000000, $alpha: 0.3);
    color: white;
    &:hover {
      background-color: rgb(55, 125, 231);
    }
  }
}
.rolling-list {
  overflow-x: auto;
  padding: 4px;
  padding-bottom: 10px;
  transition: all 400ms;
  cursor: move;
  &::-webkit-scrollbar {
    width: 0;
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(109, 189, 255);
  }
  .list {
    height: 100%;
    transition: all 400ms;
    .item {
      // border: 1px solid red;
      box-shadow: 0 0 8px #ccc;
      white-space: nowrap;
      padding: 10px;
      margin-right: 20px;
      border-radius: 4px;
      background-color: white;
      transition: box-shadow 400ms;
      user-select: none;
      &:hover {
        box-shadow: 0 0 8px #666;
      }
      .item-icon {
        margin-right: 10px;
        img {
          height: 50px;
          width: 50px;
          border-radius: 50%;
          -webkit-user-drag: none;
        }
      }
      .item-text {
        p {
          display: inline-block;
        }
      }
    }
  }
}
</style>