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
        th(class="w-6/12 text-left") 說明
    tbody.leading-6
      
      //- 艾瑞莎
      tr.text-center
        td(rowspan="5") EGFR
        td 艾瑞莎
          span.block getinib, Iressa
        td 健保
          span.block.text-sm (第一線、第二線)
        td 第1代
          span.block 藥物
        td.text-left(rowspan="2") 第1代的愛瑞莎、得舒緩均為口服藥，為具有 EGFR-TK 突變，局部侵犯性或轉移性非小細胞肺癌病患的第1線治療，或先前已做過化學治療，但仍局部惡化或轉移的肺腺癌病患第2線用藥。

      //- 得舒緩
      tr.text-center
        td 得舒緩
          span.block erlotinib, Tarceva
        td.icon 健保
          span.block.text-sm (第一線、第二線)
        td 第1代
          span.block 藥物

      //- 妥復克
      tr.text-center
        td 妥復克
          span.block afatinib, Giotrif
        td.icon 健保
          span.block.text-sm  (第一線，若於其他標靶藥物無效後使用則不予給付)
        td 第2代
          span.block 藥物
        td.text-left 口服藥，
          br
          | 第2代的妥復克亦適用於具有 EGFR-TK 突變，局部晚期或轉移性非小細胞肺癌病患的第1線治療。

      //- 肺欣妥
      tr.text-center
        td 肺欣妥
          span.block dacomitinib, Vizimpro
        td.icon 健保
          span.block.text-sm  (第一線，適用於單獨使用)
        td 第2代
          span.block 藥物
        td.text-left 口服藥，
          br
          | 適用於帶有 EGFR 突變之局部晚期或轉移性非小細胞肺癌 (NSCLC) 成年病患的第一線治療。

      //- 泰格莎
      tr.text-center
        td 泰格莎
          span.block osimertinib, Tagrisso
        td.icon 健保有條件
          span.block.text-sm (第一線、第二線)
            br
            | 1.具 19Del 基因突變且具腦轉移的病人得經事前審查核准後，使用治疾病惡化；
            br
            | 2. 先前已使用過 EGFR標靶藥物治療失敗，且具有 EGFR T790M基因突變之第二線治療。(2024/10/1 起擴大給付到 3B 患者的一線治療)
        td 第3代
          span.block 藥物
        td.text-left 口服藥，
          br
          | 第3代泰格莎則用於曾以第1代或第2代標靶藥物治療，但仍產生 T790M 抗藥突變基因的肺腺癌病患。
      
      //- 肺倍恩
      tr.text-center
        td EGFR
          br
          | exon 20
          br
          | insertion
        td 肺倍恩
          span.block amivantamab, Rybrevant
        td 自費
        td
        td.text-left(rowspan="2") 靜脈注射，
          br
          | 單一療法適用於罹患帶有表皮生長因子受體 (EGFR) exon 20 插入突變之局部晚期或轉移性非小細胞肺癌 (NSCLC) 的成人病人，作為含鉑類化學療法治療失敗後之治療。
  
</template>

<style scoped lang="sass">

</style>
