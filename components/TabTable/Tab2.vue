<script setup></script>

<template lang="pug">
div
  table.table-fixed
    thead
      tr
        th(class="w-2/12") 變異基因
        th(class="w-2/12") 藥物名稱
        th(class="w-2/12") 健保 / 自費
        th(class="w-1/12") 
        th(class="w-5/12 text-left") 說明
    tbody.leading-6
      
      //- 截剋瘤
      tr.text-center
        td(rowspan="5") ALK
        td 截剋瘤
          span.block crizotinib, Xalkori
        td.icon 健保
          span.block.text-sm (第一線)
        td 第1代
          span.block 藥物
        td.text-left(rowspan="3") 口服藥，
          br
          | 第 1 代截剋瘤是針對曾接受一種含鉑化療處置，和 ROS-1 陽性的晚期非小細胞肺癌病患，由於藥物無法完全通過血腦障壁進入腦部治療腦轉移。
          br
          | 後來才發展出第 2 代立克癌和安立適，適用於截剋瘤治療時惡化或無法耐受的 ALK 陽性及晚期非小細胞肺癌病患，藥物可直接穿透腦部血腦障壁，不需再以電療方式消除轉移的腦腫瘤。

      //- 立克癌
      tr.text-center
        td 立克癌
          span.block ceritinib, Zykadia
        td.icon 健保
          span.block.text-sm (第一線)
        td 第2代
          span.block 藥物

      //- 安立適
      tr.text-center
        td 安立適
          span.block alectinib, Alecensa
        td.icon 健保
          span.block.text-sm (第一線)
        td 第2代
          span.block 藥物


      //- 癌能畢
      tr.text-center
        td 癌能畢
          span.block brigatinib, Alunbrig
        td.icon 健保
          span.block.text-sm (第二線，健保給付適用於截剋瘤治療後惡化之 ALK 陽性的晚期非小細胞肺癌患者)
        td 第2代
          span.block 藥物
        td.text-left 口服藥
      
      //- 瘤利剋
      tr.text-center
        td 瘤利剋
          span.block lorlatinib, Lorviqua
        td.icon 健保
          span.block.text-sm (第二線、第三線，健保給付適用於立克癌或安立適治療中惡化併有腦部轉移之 ALK 陽性晚期非小細胞肺癌病患)
        td 第3代
          span.block 藥物
        td.text-left 口服藥。
          br
          | 第二線：第一線使用第二代 ALK 標靶藥物
          br
          | 第三線：使用過兩個以上 ALK 標靶藥物
          
</template>

<style scoped lang="sass">

</style>
