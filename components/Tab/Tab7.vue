<script setup></script>

<template lang="pug">
div
  .img-ttl.relative.pb-20.mb-5.border-b-1.border-blue-400
    img.absolute.top-0.left-0(src="/assets/img/tab/tab7-1.svg", class="w-[310px]")
    h3.font-genjyuu-bold.text-3xl.relative(class="pl-32 pt-4") 腫瘤反應率

  .tab-style
    p 腫瘤大小變化的比率，能作為醫師端評估治療成效的指標，用在評估癌症治療是否有效，或者臨床試驗過程中腫瘤大小變化；通常反應率越高表示治癒效果越好。

    img(src="/assets/img/tab/tab7-2.svg" class="w-[200px] mr-10 block ml-auto mb-5 md:mb-0")

</template>

<style scoped lang="sass">
.tab-style
  @apply text-xl font-openhuninn text-justify leading-8 lg:text-2xl lg:leading-10
</style>
