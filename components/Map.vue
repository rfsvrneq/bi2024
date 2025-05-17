<script setup>
import TaiwanMap from './TaiwanMap.vue'
import { mayors } from "@/composables/useMayors";

// 呼叫一次 gsap 實體
const gsap = useGSAP();

// 建立許諾 refs 陣列
const txtRefs = ref([]);

// 建立地圖 refs 陣列
const mapRefs = ref([]);

// 動態綁定多個許諾 ref 元素
const setPromise = index => el => {
  if (el) txtRefs.value[index] = el
}
// 動態綁定多個地圖 ref 元素
const setMap = index => el => {
  if (el) mapRefs.value[index] = el
}

onMounted(() => {

  txtRefs.value.forEach((el, index) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: mapRefs.value[index],
          start: "top center",
          end: "bottom center",
        },
        duration: 1,
        ease: "power2.out"
      }
    );
  });

  mapRefs.value.forEach((el, index) => {
    gsap.fromTo(
      el.querySelector("img"),
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
        },
        duration: 1
      }
    );
  });

});

</script>

<template lang="pug">

.parallax_map_container(v-for="(item, index) in mayors" :key="index" :ref="setMap(index)")
  .parallax_map_bg
    img(:src="item.map")

  .parallax_map(:ref="setPromise(index)")
    .promise
      h2.text-3xl.text-green-700.mb-5 {{ item.declaration }}
      p.text-gray-600.text-justify(class="leading-[1.5]") {{ item.promise }}

  
    
</template>

<style scoped lang="sass">

.parallax_map_container
  width: 100%
  height: 400vh
  position: relative
  

.parallax_map
  width: 100%
  height: 100%
  position: absolute
  pointer-events: none
  z-index: 1

.promise
  width: 460px
  height: min-content
  padding: 2rem
  background-color: white
  margin-right: 5%
  margin-left: auto
  

.parallax_map_bg
  width: 100%
  height: 100vh
  position: sticky
  top: 0
  z-index: 0
  overflow: hidden
  img
    width: 100%
    height: 100%
    object-fit: cover
</style>
