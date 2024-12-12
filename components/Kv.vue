<script setup></script>

<template lang="pug">
div#kv.relative.pt-20.bg-custom-grey-100(class="imp_event" data-title="pfizermigraine2024" data-label="imp_section-pfizer-migraine-kv")
  .flex.flex-col-reverse
    .w-full.relative.bottom-0.left-0(class="lg:absolute")
      img(src="/assets/img/kv.svg" class="w-12/12 sm:w-11/12 md:w-12/12 lg:w-8/12 xl:w-7/12 max-w-[800px]")

    .container.text-center(class="lg:text-right")
      .kv-ttl.inline-block
        img.w-32.mx-auto.mb-4(src="/assets/img/kv-lung.svg" class="sm:mb-8 sm:w-40")
        .font-genjyuu-bold.leading-none.text-center(class="text-[50px] sm:text-[80px]")
          h2 晚期肺癌
          h2.mt-4.mb-4(class="sm:mb-8") 全照護指南
        .font-openhuninn.font-bold.leading-none.text-center(class="text-2xl sm:text-[36px]")
          h3.mb-2 治療趨勢、身心照護身心照護
          h3 全方位抗癌懶人包

    
</template>

<style scoped lang="sass">
#kv
  background: url(/assets/img/kv-bg.svg) no-repeat, #fbf9ef
  background-size: 75% auto, cover
  background-position: right top, center
  min-height: 720px
</style>
