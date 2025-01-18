
export const dataDialog = reactive({
  contentComponent: null, // 動態渲染組件
  cancel: {
    btnName: "╳",
    onComplete: () => {},
  },
});

const dialogRef = ref(null); // 儲存組件的 show / close

export const useDialog = () => {

  // 根據傳入的 dialogId 動態加載不同的組件，並顯示在對話框中
  // defineAsyncComponent 動態加載組件
  const open = (dialogId) => {
    switch (dialogId) {
      case 'dialog1':
        dataDialog.contentComponent = markRaw(defineAsyncComponent(() => import('@/components/Dialog/Dialog1Content.vue')));
        break;

      case 'dialog2':
        dataDialog.contentComponent = markRaw(defineAsyncComponent(() => import('@/components/Dialog/Dialog2Content.vue')));
        break;

      case 'dialog3':
        dataDialog.contentComponent = markRaw(defineAsyncComponent(() => import('@/components/Dialog/Dialog3Content.vue')));
        break;

      case 'dialog4':
        dataDialog.contentComponent = markRaw(defineAsyncComponent(() => import('@/components/Dialog/Dialog4Content.vue')));
        break;

      case 'dialog5':
        dataDialog.contentComponent = markRaw(defineAsyncComponent(() => import('@/components/Dialog/Dialog5Content.vue')));
        break;

      case 'dialog6':
        dataDialog.contentComponent = markRaw(defineAsyncComponent(() => import('@/components/Dialog/Dialog6Content.vue')));
        break;

      case 'dialog7':
        dataDialog.contentComponent = markRaw(defineAsyncComponent(() => import('@/components/Dialog/Dialog7Content.vue')));
        break;

      case 'dialog8':
        dataDialog.contentComponent = markRaw(defineAsyncComponent(() => import('@/components/Dialog/Dialog8Content.vue')));
        break;

      case 'dialog9':
        dataDialog.contentComponent = markRaw(defineAsyncComponent(() => import('@/components/Dialog/Dialog9Content.vue')));
        break;

      case 'dialog10':
        dataDialog.contentComponent = markRaw(defineAsyncComponent(() => import('@/components/Dialog/Dialog10Content.vue')));
        break;

      case 'dialog11':
        dataDialog.contentComponent = markRaw(defineAsyncComponent(() => import('@/components/Dialog/Dialog11Content.vue')));
        break;

      case 'dialog12':
        dataDialog.contentComponent = markRaw(defineAsyncComponent(() => import('@/components/Dialog/Dialog12Content.vue')));
        break;

      case 'dialog13':
        dataDialog.contentComponent = markRaw(defineAsyncComponent(() => import('@/components/Dialog/Dialog13Content.vue')));
        break;

      case 'dialog14':
        dataDialog.contentComponent = markRaw(defineAsyncComponent(() => import('@/components/Dialog/Dialog14Content.vue')));
        break;

      case 'dialog15':
        dataDialog.contentComponent = markRaw(defineAsyncComponent(() => import('@/components/Dialog/Dialog15Content.vue')));
        break;

      case 'dialog16':
        dataDialog.contentComponent = markRaw(defineAsyncComponent(() => import('@/components/Dialog/Dialog16Content.vue')));
        break;

      case 'dialog17':
        dataDialog.contentComponent = markRaw(defineAsyncComponent(() => import('@/components/Dialog/Dialog17Content.vue')));
        break;

      case 'dialog18':
        dataDialog.contentComponent = markRaw(defineAsyncComponent(() => import('@/components/Dialog/Dialog18Content.vue')));
        break;

      case 'dialog19':
        dataDialog.contentComponent = markRaw(defineAsyncComponent(() => import('@/components/Dialog/Dialog19Content.vue')));
        break;

      default:
        dataDialog.contentComponent = null;
        break;
    }
    if (dialogRef.value) dialogRef.value.showModal();
  };

  // 清空對話框的內容並關閉對話框
  const close = () => {
    dataDialog.contentComponent = null;  // 關閉時清空內容
    dialogRef.value.close();
  };

  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.value) {
      close(); // 如果點擊的是對話框的背景，則關閉
    }
  };

  onMounted(() => {
    dialogRef.value = document.querySelector("#dialog");
    if (dialogRef.value) {
      dialogRef.value.addEventListener("click", handleBackdropClick);
    }
  });

  return { open, close };
};
