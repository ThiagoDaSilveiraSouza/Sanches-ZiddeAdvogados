export const scrollTo = (targetId: string) => {
  const targetElement = document.querySelector(targetId) as HTMLDivElement;
  const targetElementDistance = targetElement?.offsetTop;
  const targetScrollY =
    targetElementDistance >= 80
      ? targetElementDistance - 80
      : targetElementDistance;
  window.scroll(0, targetScrollY);
};
