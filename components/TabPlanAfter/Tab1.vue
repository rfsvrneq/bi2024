<script setup>

const dialog = useDialog();

const openDialog = (dialogId) => {
  dialog.open(dialogId); // 根据传递的 dialogId 打开对应的 dialog
};
</script>

<template lang="pug">
div
  h3.my-4
    img.inline.w-8(src="/assets/img/tab-plan/tabs-plan-1.png")
    .inline.text-3xl.font-genjyuu-bold.align-bottom.pl-1 生活照護盤點

  .tabs-check-style
    img.pic(src="/assets/img/tab-plan/tabs-plan-1-2.svg")
    p.bg-orange-500.text-white.inline-block.text-2xl.font-openhuninn.px-4.py-2.rounded-full 出現副作用怎麼辦？

    .flex.items-center(class="mt-5 md:-mt-5 -space-x-2 sm:-space-x-8 pl-5")
      img(src="/assets/img/tab-check/tabs-check-1-1.svg" class="w-3/12 sm:w-2/12 relative")
      .text-left.bg-orange-50.py-4(class="px-6 sm:px-14")
        h3.text-2xl.text-orange-500.font-openhuninn 化學治療
          span.icon.ml-2 ▾
        p 肺癌化療出現副作用狀況因人而異，不一定會發生，且有方法可以改善，不用太焦慮，可在要進行化療前，先向醫護人員詢問及預防照護方法。


    //- 副作用pop
    .grid.m-8(class="grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 m-4 sm:m-8")
      a.side-link(@click="openDialog('dialog5')") 噁心、嘔吐
        span ＋
        img(src="/assets/img/tab-check/tabs-check-1-14.svg")
      a.side-link(@click="openDialog('dialog6')") 腹 瀉
        span ＋
        img(src="/assets/img/tab-check/tabs-check-1-2.svg")
      a.side-link(@click="openDialog('dialog7')") 疲倦感
        span ＋
        img(src="/assets/img/tab-check/tabs-check-1-3.svg")
      a.side-link(@click="openDialog('dialog8')") 便 祕
        span ＋
        img(src="/assets/img/tab-check/tabs-check-1-4.svg")
      a.side-link(@click="openDialog('dialog9')") 口腔及咽喉潰瘍
        span ＋
        img(src="/assets/img/tab-check/tabs-check-1-5.svg")
      a.side-link(@click="openDialog('dialog10')") 掉 髮
        span ＋
        img(src="/assets/img/tab-check/tabs-check-1-6.svg")

    //- 延伸閱讀
    .text-left.ml-5
      p.text-base.bg-orange-400.inline-block.text-white.px-2.rounded 延伸閱讀
      a.block.text-sm.underline.text-blue-400.mt-1(href="https://cancer.commonhealth.com.tw/article/79" target="_blank") 【化療 5 大副作用都有方法可對治】

    img(src="/assets/img/tab-check/tabs-check-1-7.svg" class="w-4/12 mr-10 ml-auto -mb-12 -mt-4")
    .text-left.bg-orange-50.pb-4.pt-10(class="px-6 sm:px-14")
      h3.text-2xl.text-orange-500.font-openhuninn 放射線治療
        span.icon.ml-2 ▾
      p 晚期肺癌因出現轉移，化學治療可能會無法抑制腦部、胸部或骨頭位置，依不同照射位置可能出現不同症狀，這些副作用可能會持續到治療結束後4-6周左右，這期間可攝取均衡營養、充分休息及睡眠，若皮膚出現受傷，要避免穿太緊繃的衣物，或塗抹適當的護膚產品以保持濕潤。

    //- 小人pop
    .people-pop
      a.side-link(@click="openDialog('dialog11')") 腦 部
        span ＋
      a.side-link(@click="openDialog('dialog12')") 長期放療的
        br
        | 慢性副作用
        span ＋
      a.side-link(@click="openDialog('dialog14')") 胸 部
        span ＋
      a.side-link(@click="openDialog('dialog13')") 急性副作用
        span ＋
      a.side-link(@click="openDialog('dialog15')") 骨 頭
        span ＋

    //- 延伸閱讀
    .text-left.ml-5.mb-14
      p.text-base.bg-orange-400.inline-block.text-white.px-2.rounded 延伸閱讀
      a.block.text-sm.underline.text-blue-400.mt-1(href="https://cancer.commonhealth.com.tw/article/661" target="_blank") 【什麼是肺癌放射線治療？肺癌放療6大副作用一次說明】

    .flex.items-start(class="mt-5 md:-mt-5 -space-x-2 sm:-space-x-8 pr-5")
      .text-left.bg-orange-50.py-4(class="px-6 sm:px-14")
        h3.text-2xl.text-orange-500.font-openhuninn 標靶藥物
          span.icon.ml-2 ▾
        p 標靶藥物的副作用通常比化療、放療低，但仍有可能發生，像是EGFR類藥物會有皮膚乾癢、長青春痘般的疹子、甲溝炎、腹瀉等；ALK藥物則可能出現如食慾不振、噁心、水腫、血糖升高等副作用。雖然還有少數病人可能出現肝功能異常或肺炎症狀，但在用藥前，醫師通常會先抽血檢測，選擇適合的藥物。若出現不適症狀時，應儘快告知主治醫師，商討解決方法。
      img(src="/assets/img/tab-check/tabs-check-1-9.svg" class="w-3/12 sm:w-2/12 -mt-10 relative")

    //- 副作用pop
    .grid(class="grid-cols-2 gap-8 px-8 md:px-20 mt-5")
      a.side-link(@click="openDialog('dialog16')") 痘痘、疹子
        span ＋
        img(src="/assets/img/tab-check/tabs-check-1-10.svg")
      a.side-link(@click="openDialog('dialog17')") 甲溝炎
        span ＋
        img(src="/assets/img/tab-check/tabs-check-1-11.svg")

    //- 延伸閱讀
    .text-left.ml-5.mb-14
      p.text-base.bg-orange-400.inline-block.text-white.px-2.rounded 延伸閱讀
      a.block.text-sm.underline.text-blue-400.mt-1(href="https://cancer.commonhealth.com.tw/article/72" target="_blank") 【標靶治療副作用，9 個皮膚照護重點】

    h3.text-2xl.text-orange-500.font-openhuninn.text-left.ml-5 營養怎麼顧？

    //- 副作用pop
    .grid(class="grid-cols-2 gap-8 px-8 md:px-20 mt-5")
      a.side-link(@click="openDialog('dialog18')") 飲食禁忌/飲食原則
        span ＋
        img(src="/assets/img/tab-check/tabs-check-1-12.svg")
      a.side-link(@click="openDialog('dialog19')") 營養補充/養肺食材
        span ＋
        img(src="/assets/img/tab-check/tabs-check-1-13.svg")

    //- 延伸閱讀
    .text-left.ml-5.mt-5
      p.text-base.bg-orange-400.inline-block.text-white.px-2.rounded 延伸閱讀
      a.block.text-sm.underline.text-blue-400.mt-1(href="https://cancer.commonhealth.com.tw/article/389" trarget="_blank") 【肺癌飲食禁忌有什麼？肺癌飲食菜單 4 要點、5 大養肺食材一次看】

  
</template>

<style scoped lang="sass">
.tabs-check-style  
  @apply border-4 border-gray-600 text-gray-600 text-lg text-center bg-white
  position: relative
  border-radius: 35px
  padding: 3rem 0
  .pic
    position: absolute
    width: 150px
    right: -21px
    top: -87px
  .side-link
    @apply font-genjyuu-bold text-xl leading-5 transition-all
    cursor: pointer
    span
      @apply text-orange-300 text-xl pl-1
    img
      @apply p-6 -mt-4
      @media screen and (max-width: 480px)
        @apply p-2 -mt-2
    &:hover, &:focus
      transform: scale(1.05)
      @apply transition-all
      span
        @apply text-orange-500
  .people-pop
    background: url(/assets/img/tab-check/tabs-check-1-8.svg) no-repeat
    background-position: center
    width: 80%
    height: 400px
    display: block
    margin: 0 auto
    position: relative
    margin-top: 2rem
    .side-link
      display: block
      position: absolute
      padding: .25rem .5rem
      border-bottom: 2px solid #333333
      @media screen and (max-width: 480px)
        font-size: 1rem
        padding: .25rem .25rem
        border-bottom: none
        span
          font-size: 1rem
    .side-link:nth-child(1)
      top: 2%
      right: 20%
      @media screen and (max-width: 768px)
        right: 15%
      @media screen and (max-width: 480px)
        right: 0%
    .side-link:nth-child(2)
      top: 15%
      right: 65%
      @media screen and (max-width: 480px)
        left: -10%
        right: auto
        width: 100px
    .side-link:nth-child(3)
      top: 24%
      right: 20%
      @media screen and (max-width: 768px)
        right: 10%
      @media screen and (max-width: 480px)
        right: -5%
    .side-link:nth-child(4)
      top: 50%
      right: 65%
      @media screen and (max-width: 480px)
        left: -10%
        right: auto
    .side-link:nth-child(5)
      top: 60%
      right: 20%
      @media screen and (max-width: 768px)
        right: 10%
      @media screen and (max-width: 480px)
        right: -5%

</style>
