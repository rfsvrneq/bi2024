<script setup></script>

<template lang="pug">
div
  .img-ttl.relative.pb-16.mb-5.border-b-1.border-blue-400
    img.absolute.top-0.left-0(src="/assets/img/tab/tab5-1.svg", class="w-[310px]")
    h3.font-genjyuu-bold.text-3xl.relative(class="pl-[120px] pt-1") 整體存活期
      span.block.pl-7(class="text-[10px] leading-4 -mt-1") (Overall survival）

  .tab-style
    p 是直接分析比較病人存活時間長短。
    p 例如：存活期 10 個月，代表這個癌症病人整體平均存活是 10 個月。

    img(src="/assets/img/tab/tab5-2.svg" class="w-[420px] mr-10 block ml-auto mb-5 md:mb-0")

  p.text-base.bg-orange-400.inline-block.text-white.px-2.rounded 延伸閱讀
  a.block.text-sm.underline.text-blue-400.mt-1(href="") 【很多癌症專有名詞聽不懂，醫生講的到底是什麼意思？】

</template>

<style scoped lang="sass">
.tab-style
  @apply text-xl font-openhuninn text-justify leading-8 lg:text-2xl lg:leading-10
</style>
