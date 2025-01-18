<script setup></script>

<template lang="pug">

//- 1.九大項_搞懂醫師說什麼
div#noun
  .container
    .flex.items-center(class="flex-col md:flex-row")
      .font-genjyuu-bold(class="w-12/12 md:w-7/12 mb-5 md:mb-0")
        h2.capsule-ttl 初確診晚期肺癌，搞懂醫師說什麼
        p.text-2xl.mt-8.leading-9.tracking-wide.text-justify 診斷為晚期肺癌時，先不恐慌或抗拒，在醫藥科技進步下，癌症幾乎已經成為慢性病，藥物的選擇越來越多元，治療效果也遠比20年前好得多。現在，最要緊的是，儘可能地穩住陣腳，先儘快與醫師討論病況，但在討論前，有些名詞必須先知道：

      .flex-auto
        img(src="/assets/img/glossary-1.svg" class="mx-auto w-8/12")
    
</template>

<style scoped lang="sass">
  #noun
    background: url(/assets/img/bg-2.svg) no-repeat
    background-size: cover
    background-position: center top
  .capsule-ttl
    @apply text-3xl text-white bg-blue-400 inline-block px-5 py-4 rounded-full text-center
</style>
