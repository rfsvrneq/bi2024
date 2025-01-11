const dialogs = reactive({});
const currentDialogKey = ref(null);

export const dataDialogs = reactive({
  dialogs: {},
});

export const useDialog = () => {
  const open = (key, options) => {
    if (!dialogs[key]) {
      console.warn(`Dialog with key "${key}" does not exist.`);
      return;
    }
    currentDialogKey.value = key;
    dataDialogs.dialogs[key] = {
      content: options.content || null,
      cancel: {
        btnName: options.cancel?.btnName || "╳",
        onComplete: options.cancel?.onComplete || (() => {}),
      },
    };
    dialogs[key].showModal();
  };

  const close = () => {
    const key = currentDialogKey.value;
    if (key && dialogs[key]) {
      dialogs[key].close();
      currentDialogKey.value = null;
    }
  };

  const register = (key, dialogRef) => {
    dialogs[key] = dialogRef;
  };

  return { open, close, register, currentDialogKey };
};
