// 全局内容滚动
export function bodyToScroll(isScroll: boolean, num?: number) {
  if (isScroll) {
    document.body.style.overflowY = "auto";
    document.documentElement.style.overflowY = "auto";
  } else {
    document.body.style.overflowY = "hidden";
    document.documentElement.style.overflowY = "hidden";
  }
  if (num ?? false) {
    window.scrollTo({
      top: num,
      behavior: "smooth",
    });
  }
}

export function linkUrl(url: string) {
  if (url) {
    location.href = url;
  }
}

export const isAndroid = () => {
  const u = navigator.userAgent;
  if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
    return true;
  }
  return false;
};

export function downloadType(type?: number) {
  switch (type) {
    case 1: // google play
      window.location.href = `https://play.google.com/store/apps/details?id=456`;
      break;
    case 2: // apple
      linkUrl("https://www.pgyer.com/zOUKy2");
      // window.location.href = `itms-appss://apps.apple.com/cn/app/id0000000000`
      break;
    default:
      if (isAndroid()) {
        window.location.href = `https://play.google.com/store/apps/details?id=456`;
      } else {
        // linkUrl(`scheme: 'itms-apps://' `)
        linkUrl("https://www.pgyer.com/zOUKy2");
        // window.location.href = `itms-appss://apps.apple.com/cn/app/id0000000000`
      }
  }
}
