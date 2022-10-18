export const scrollTo = (targetId: string) => {
  const targetElement = document.querySelector(targetId) as HTMLDivElement;
  const targetElementDistance = targetElement?.offsetTop;
  window.scroll(0, targetElementDistance);
};
