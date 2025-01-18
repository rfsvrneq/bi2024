<script setup></script>

<template lang="pug">
div
  h3.my-4
    img.inline.w-8(src="/assets/img/tab-plan/tabs-plan-1.png")
    .inline.text-3xl.font-genjyuu-bold.align-bottom.pl-1 尋求意見

  .tabs-plan-style
    img.pic(src="/assets/img/tab-plan/tabs-plan-1-2.svg")
    p 被診斷確定為晚期癌症，可能會感到心慌，不知道要找誰治療，而想要聽聽其他醫師專家的建議，這並無不妥。建議徵詢第二意見的時間點最好是在確定診斷的時候，因為一開始的週全治療計畫相當重要，可能決定病人未來的治療成績。或者也可以詢問生活圈一些熟悉親友推薦的醫師。
    p.mt-5 記得徵詢第二意見的對象必須是對的醫師，且要事先準備相關的影像檢查、病理切片報告方便醫師精準判讀，才不致耽誤病情；如果可以，建議找一位信任的家人或朋友陪伴一同聆聽，甚至錄音紀錄。

    p.text-center.text-base.mt-10
      | (
      span.text-orange-500 務必
      | 適情徵求醫護人員同意下方得進行)

  
</template>

<style scoped lang="sass">
.tabs-plan-style  
  @apply border-4 border-gray-600 text-gray-600 text-xl bg-white
  position: relative
  border-radius: 35px
  padding: 2.5rem
  @media screen and (max-width: 430px)
    padding: 3rem 1.5rem 2rem 1.5rem
  .pic
    position: absolute
    width: 130px
    right: -19px
    top: -76px
</style>
