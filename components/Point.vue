<script setup>

const dialog = useDialog();

const openDialog = (dialogId) => {
  dialog.open(dialogId); // 根据传递的 dialogId 打开对应的 dialog
};
</script>

<template lang="pug">
div#point.bg-blue-50
  
  .container.max-w-3xl
    .img-ttl.text-center.text-orange-500.mb-5
      h3.font-genjyuu-bold.text-3xl 談晚期肺癌治療策略
    
    .flex.items-center.justify-center
      img(src="/assets/img/story-4.png", class="w-[140px]")
      .ml-5.text-lg
        p.text-2xl.font-openhuninn.mb-1 高雄長庚肺癌團隊召集人 王金洲醫師 
        p 晚期病人的治療目標是希望存活期能長、生活品質也能更好。
        p 如果積極配合治療，晚期肺癌病人仍有不錯的生活品質與生存期。
    
    h2.capsule-ttl(data-aos="fade-down")
      span.block.text-orange-500.mb-2 沒有最好的治療，只有最適合的治療！
      span.block.font-openhuninn(class="text-lg md:text-xl leading-6") 建議與主治醫師討論最適合自己的第一線治療策略，以爭取最佳存活期！

    //- 3.四大評估_popup
    h3.img-ttl-2.text-2xl.font-bold.px-5.py-6.text-center.mt-10.mb-5 4大評估重點一次看：

    .grid.gap-5.text-lg(class="grid-cols-1 md:grid-cols-2")
    
      a.point-pop-link.bg-orange-200.text-center.py-4.rounded-full(@click="openDialog('dialog1')")
        p.font-genjyuu-bold.text-3xl.mb-2
          span.text-white Ａ.
          span.mx-4 藥物療效
          span.text-white +
        span.block 我有哪些治療的選擇？
        span.block 治療的目標與期待為何？
    
      a.point-pop-link.bg-orange-200.text-center.py-4.rounded-full(@click="openDialog('dialog2')")
        p.font-genjyuu-bold.text-3xl.mb-2
          span.text-white Ｂ.
          span.mx-4 藥物副作用
          span.text-white +
        span.block 副作用是否會影響我的生活？
        span.block 治療的目標與期待為何？

      a.point-pop-link.bg-orange-200.text-center.py-4.rounded-full(@click="openDialog('dialog3')")
        p.font-genjyuu-bold.text-3xl.mb-2
          span.text-white Ｃ.
          span.mx-4 抗藥後的治療
          span.text-white +
        span.block 一旦抗藥後還有哪些治療選擇？
        span.block 如何達到最佳的存活期？
    
      a.point-pop-link.bg-orange-200.text-center.py-4.rounded-full(@click="openDialog('dialog4')")
        p.font-genjyuu-bold.text-3xl.mb-2
          span.text-white Ｄ.
          span.mx-4 經濟考量
          span.text-white +
        span.block 治療有健保給付嗎？
        span.block 我的經濟狀況可以負擔抗藥後治療嗎？
    
</template>

<style scoped lang="sass">
  .capsule-ttl
    @apply font-genjyuu-bold text-2xl px-5 py-4 rounded-3xl sm:rounded-full text-center border-3 border-blue-400 md:text-3xl mt-8
  
  .img-ttl-2
    background: url(/assets/img/point-1.svg) no-repeat
    background-size: 100% 100%
    color: white

  .point-pop-link
    transition: all 0.2s
    user-select: none
    cursor: pointer
    &:hover, &:active, &:focus
      @apply bg-orange-500
      @apply text-orange-100
    
</style>
