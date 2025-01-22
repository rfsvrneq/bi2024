<script setup>

const toggleClamp = (event) => {
  const storyDiv = event.currentTarget;
  if (storyDiv.classList.contains('line-clamp-3')) {
    storyDiv.classList.remove('line-clamp-3');
    storyDiv.classList.add('line-clamp-none');
  } else {
    storyDiv.classList.remove('line-clamp-none');
    storyDiv.classList.add('line-clamp-3');
  }
};


</script>

<template lang="pug">
div#story.bg-yellow-50(class="imp_event" data-title="lungcancercare" data-label="imp_section-lungcancercare-article")

  //- 4.抗癌真心話
  .container.max-w-3xl
    .font-genjyuu-bold.text-center(data-aos="fade-down")
      h2.capsule-ttl
        span.block 抗癌真心話

    .font-genjyuu-bold.text-center.my-10
      img(src="/assets/img/story-1.svg" class="w-[160px] mx-auto")
      h2.capsule-ttl-big
        span.block 抗癌學長姊的故事

    .tabs-style
      img.pic(src="/assets/img/tab-check/tabs-check-2-1.svg")
      .line-clamp-3.toggleClamp(@click="toggleClamp")
        .text-justify
          p 39 歲的阿彥（化名）在七年前夏天，突然有頭暈眼花的現象，原本以為是中暑，怎麼也沒料到竟然會是
            span.text-orange-500 肺癌第四期已轉移到腦部
            | 的緣故。知道自己初確診就是末期、還已經轉移到腦部，心情真的盪到谷底，無所適從，直到醫師提出治療建議要先進行腦手術前，都還是不敢相信自己就是個病患，因為在這之前真的沒有任何症狀！
          p.my-4 腦部手術做完後、醫師擔心腫瘤可能有殘存，建議要做電療；後來發現肺部腫瘤還有幾顆，建議要拿掉，所以又動了第二次手術，記得當時是先
            span.text-orange-500 進行了基因檢測，配對到能吃第二代標靶藥物，一吃就是六年，
            | 原以為就可以穩定下去，沒想到去年
            span.text-orange-500 出現抗藥性
            | 。
          p 剛聽到出現抗藥性，心情很沉重。醫師建議先以化學治療，但化療副作用真的很難熬，在做完六個療程後我就放棄了，後來醫師說我的情況可以改成使用第三代標靶藥物，只是當時並沒有健保給付，只能自費使用。老實說，當時孩子還小，我很怕一直吃下去會把家裡的錢都花光、拖垮老婆小孩。所以我給自己訂下目標，起碼要讓自己多活五年。不過欣慰的是，
            span.text-orange-500 治療到現在已經超過第七年了，病情已經穩定很多。
            | 現在每天覺得多一天就是賺到。
          p.mt-4 我想跟和我有同樣病況的病友們說，罹癌並不可怕，現在醫藥科技進步，已經有很多武器可以使用，只要跟醫師好好溝通、聽醫師的話好好治療，醫療團隊都能給很好的建議及解決方式，真的不用太擔心。


    .font-genjyuu-bold.text-center.my-10
      img(src="/assets/img/story-2.svg" class="w-[160px] mx-auto")

      h2.capsule-ttl-big.relative.px-10
        img(src="/assets/img/story-3.png" class="hidden sm:block w-[140px] absolute -top-4 -left-16")
        span.block(class="pl-0 sm:pl-14") 給晚期肺癌病友的話

      img(src="/assets/img/story-3.png" class="block sm:hidden w-[140px] mx-auto mt-5")

    .tabs-style
      img.pic(src="/assets/img/tab-check/tabs-check-2-1.svg")
      .line-clamp-3.toggleClamp(@click="toggleClamp")
        .text-justify
          p.font-openhuninn.text-xl.mb-2 高雄長庚肺癌團隊召集人 王金洲醫師
          p 晚期肺癌的治療目標著重在延長存活期並提升生活品質，一旦不幸確診為晚期肺癌，要先
            span.text-orange-500 了解自身病情包括分期、細胞型態與基因型態等，
            | 以找出最佳的治療策略。
          p.my-4 目前晚期肺癌的治療選項多元，可以化學藥物治療、標靶藥物治療、免疫製劑及輔助性血管抑制劑等，各有其治療效果。近二十年來，在治療藥物持續研發並推陳出新下，已不用擔心有無藥可用的狀況。
          p 對於可能面臨的抗藥性問題現代醫學也已有解方，臨床會根據病患狀況建議可重新進行病理切片與基因檢測，找出導致抗藥性的原因，並調整治療策略，例如更換標靶藥物、改用化療或進行免疫治療。如今已
            span.text-orange-500 有NGS次世代基因定序方式，可更精準地找出抗藥性基因，幫助制定更有效的治療策略。
            | 建議病人在出現藥物副作用時，要主動告知主治醫師，以便隨時調整藥物劑量或提供其他治療選項。
          p.mt-4 抗癌之路雖然辛苦，但
            span.text-orange-500 肺癌治療近年已有長足進步，建議要積極配合醫師治療方案、爭取最好的治療效果，同時也須尋求支持，如家人、朋友、病友團體、醫療團隊等都是後盾。
            | 每個病患狀況不同，治療方案也需要根據個別情況做調整，務必與主治醫師保持良好溝通、積極參與治療決策，保持積極心態，才能在抗癌之路上走得更穩健。

    
</template>

<style scoped lang="sass">
  .capsule-ttl
    @apply text-3xl text-white bg-blue-400 inline-block px-10 py-8 rounded-full text-center
    @media screen and (max-width: 480px)
      @apply text-3xl

  .capsule-ttl-big
    @apply text-4xl text-white bg-sky-300 inline-block px-10 py-10 rounded-full text-center
    @media screen and (max-width: 480px)
      @apply text-3xl px-5 py-10

  .tabs-style
    @apply border-4 border-gray-600 text-gray-600 text-lg text-center bg-white
    position: relative
    border-radius: 35px
    padding: 3rem 3rem 3rem 2rem
    @media screen and (max-width: 768px)
      padding: 1.5rem
      border-radius: 25px
    .pic
      position: absolute
      width: 120px
      right: -3px
      top: -2px
      @media screen and (max-width: 768px)
        width: 80px
        right: -3px
        top: -2px
    .toggleClamp
      cursor: pointer
      position: relative
      user-select: none
      padding-left: 2rem
    .line-clamp-3
      position: relative
      padding-right: 4rem
      padding-bottom: .4rem
      &::after
        content: ''
        position: absolute
        right: .35rem
        bottom: -.25rem
        background: url(/assets/img/cursor.svg) no-repeat
        background-size: auto 100%
        width: 55px
        height: 40px
      &::before
        content: '▶'
        position: absolute
        left: 0
        color: #FF6D04
    .line-clamp-none
      position: relative
      &::before
        content: '▼'
        position: absolute
        left: 0
        color: #FF6D04

</style>
