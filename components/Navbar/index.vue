<script setup>
  const nav = [
    {
      title: '首頁',
      active: false,
      type: '#kv',
      label: 'menu_首頁',
    },
    {
      title: '秒懂治療',
      active: false,
      type: '#noun',
      label: 'menu_秒懂治療',
    },
    {
      title: '治療前計畫盤點',
      active: false,
      type: '#planBefore',
      label: 'menu_治療計畫盤點（治療前）',
    },
    {
      title: '治療後計畫盤點',
      active: false,
      type: '#planAfter',
      label: 'menu_治療計畫盤點（治療後）',
    },
    {
      title: '抗癌真心話',
      active: false,
      type: '#story',
      label: 'menu_抗癌真心話',
    },
    {
      title: '破除肺癌迷思',
      active: false,
      type: '#slide',
      label: 'menu_破除肺癌迷思',
    },
  ]
  
let burgerTrigger = ref(false);
let isActive = ref('');

// 點擊導覽列移動
const moveTo = (ta) => {
    const offset = 0;
    const target = document.querySelector(ta);
    if (target) {
      const targetOffset = target.offsetTop - 30 - offset;
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
      burgerTrigger.value = false;
      isActive.value = ta;
    }
  };

</script>

<template lang="pug">
div#topbar.w-full.fixed.top-0.left-0.z-20(class="h-[64px]")
  
  nav.flex.justify-between.items-center.h-full.container.max-w-6xl.py-0
    
    //- logo
    a.block(href="https://cancer.commonhealth.com.tw/", target="_blank") 
      img.w-full(src="/assets/img/logo.svg", alt="康健雜誌")

    //- 漢堡
    a.burger-trigger(href="#", :class="{ 'active': burgerTrigger == true }", @click.prevent="burgerTrigger = !burgerTrigger")
      span.first
      span.middle
      span.last
    
    //-導覽列
    .nav-wrap(:class="{ 'active': burgerTrigger == true }")
      //-選單
      .nav
        .item
          a.click_event.text-white.text-lg.ml-0.md_ml-5(
            data-title="lungcancercare"
            v-for="(nav, index) in nav"
            :href="nav.type"
            :class="{ 'active': isActive === nav.type, 'first-border': index === 0 }"
            @click.prevent="moveTo(nav.type)"
            :data-label="nav.label"
            v-html="nav.title"
          )
          
</template>

<style scoped lang="sass">

$nav-item-a: #ffffff !default
$nav-item-a-hover: #fef9cb !default
$nav-wrap-bg: #8bc2dd !default
$burger: white !default
$nav-wrap-bg-mobile: #8bc2dd !default
$nav-item-a-mobile: white !default
$nav-item-a-hover-mobile: white !default


#topbar
  background-color: $nav-wrap-bg
  .item
    a
      color: $nav-item-a
      font-weight: bold
      margin-left: .5rem
      margin-right: .5rem
      span
        color: #2d89bd
      &:hover
        color: $nav-item-a-hover
        span
          color: $nav-item-a-hover


  
  //-行動裝置漢堡與導覽列
  @media screen and (max-width: 1024px)
    padding-right: 15px

    //漢堡
    .burger-trigger
      z-index: 999
      display: flex
      justify-content: center
      align-items: center
      flex-wrap: wrap
      width: 40px
      height: 40px
      outline: 0
      &, & span
        transition: .2s
        backface-visibility: hidden
        transform-style: preserve-3d
      span
        position: relative
        display: block
        width: 100%
        height: 2px
        background: $burger

      //open
      &.active
        .first, .last
          background: $burger
        .middle
          opacity: 0
        .first
          top: 13px
          transform: rotate(45deg)
        .last
          bottom: 13px
          transform: rotate(135deg)

    //-導覽列
    .nav-wrap
      z-index: 99
      position: fixed
      top: 0
      left: 0
      right: 0
      bottom: 0
      overflow: hidden
      opacity: 0
      transform-origin: right top
      transform: translateY(-100%)
      transition: transform .4s ease, opacity .4s ease
      background-color: $nav-wrap-bg-mobile

      // open
      &.active
        opacity: 1
        transform: translateY(0)

      //-選單
      .nav
        z-index: 99
        width: 100%
        height: 100%
        display: flex
        align-items: center
        justify-content: center
      .item
        width: 100%
        a
          display: block
          text-align: center
          width: 100%
          font-size: 1.35rem
          margin-bottom: 1rem
          margin-left: 0
          padding-top: .5rem
          padding-bottom: .5rem
          transition: color .3s ease
          color: $nav-item-a-mobile
          &:hover
            background: $nav-item-a-hover-mobile
            color: $nav-wrap-bg-mobile
            transition: color .3s ease

  //-mobile
  @media screen and (max-width: 540px)
    //漢堡
    .burger-trigger
      width: 30px
      height: 30px
      //open
      &.active
        .first
          top: 10px
        .last
          bottom: 10px

</style>
