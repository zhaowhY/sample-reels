export function setRemInit() {
  // postcss-px2rem的内容
  // 基准大小
  const baseSize = 192;
  // 设置 rem 函数
  function setRem() {
    // 当前页面宽度相对于 1920 宽的缩放比例，可根据自己需要修改。
    const scale = document.documentElement.clientWidth / 1920;
    // 设置页面根节点字体大小
    document.documentElement.style.fontSize = `${baseSize * scale}px`;
    if (Number(document.documentElement.style.fontSize.slice(0, -2)) <= 1280) {
      document.documentElement.style.fontSize = '128px';
    }
  }
  // 初始化
  setRem();
  // 改变窗口大小时重新设置 rem
  window.addEventListener('resize', setRem);
}
