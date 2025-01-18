<script setup></script>

<template lang="pug">
div
  .img-ttl.relative.pb-20.mb-5.border-b-1.border-blue-400
    img.absolute.top-0.left-0(src="/assets/img/tab/tab2-1.svg", class="w-[280px]")
    h3.font-genjyuu-bold.text-3xl.relative(class="pl-32 pt-4") 肺癌分期

  .tab-style
    p 肺癌的分期是醫師決定治療計畫的依據，期別區分方式是：
    p.mb-8 根據腫瘤細胞是否侷限於肺部，或者已經擴散到淋巴或其他器官而定。

    p 由於早期肺癌（第一期與第二期）難以被偵測，而非小細胞肺癌的進展快速不適用於常見的癌症分期，所以臨床上會將非小細胞肺癌與小細胞肺癌做出區隔：
    ul.list-disc.pl-5
      li 小細胞肺癌分期：侷限期與擴散期。
      li 非小細胞肺癌分期：可分第0期、第一期、第二期、第三期、第四期。

    p.text-base.bg-orange-400.inline-block.text-white.px-2.rounded.mt-10 延伸閱讀
    a.block.text-sm.underline.text-blue-400(href="https://event.commonhealth.com.tw/2022lungcancer/#stage" target="_blank") 【肺癌標靶治療新解 |找出腫瘤基因尖變 精準用藥-康健雜誌】

</template>

<style scoped lang="sass">
.tab-style
  @apply text-xl font-openhuninn leading-8 text-justify lg:text-2xl lg:leading-10

li::marker
  @apply text-orange-500
</style>
