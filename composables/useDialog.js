const dialogRef = ref(null);

export const dataDialog = reactive({
  content: "",
  cancel: {
    btnName: "",
    onComplete: () => {
    },
  },
});


export const useDialog = () => {

  const open = (option) => {
    if (option) {
      dataDialog.content = option.content || "內容";
      dataDialog.cancel = option.cancel;

      dataDialog.cancel.btnName = option.cancel.btnName || "╳";
    }
    dialogRef.value.showModal();
  };

  const close = (type) => {
    dialogRef.value.close();
  };

  onMounted(() => {
    dialogRef.value = document.querySelector("#dialog"); // 取得 dialog 元素
  });

  return { open, close };
};
