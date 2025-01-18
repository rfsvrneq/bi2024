<script setup>
import Slide from '@/components/Slide/index.vue'

</script>

<template lang="pug">
div.overflow-x-auto
  //- 主視覺
  Kv

  //- 引言
  Intro

  //- 1.九大項_搞懂醫師說什麼
  Noun
  TabNoun

  //- 2.全方位治療計劃盤點
  //- PlanBefore
  //- TabPlanBefore

  //- 4大評估重點一次看：
  //- Point
  //- Dialog

  //- 治療計畫盤點（開始治療後）
  //- PlanAfter
  //- TabPlanAfter

  //- Story
  //- Health
  Slide
  //- Reference
  //- Sponsor
</template>

<style scoped lang="sass">
</style>
