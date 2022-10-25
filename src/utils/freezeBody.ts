export const freezeBody = (isFreeze: boolean) => {
  document.body.style.overflow = isFreeze ? "hidden" : "auto";
};
