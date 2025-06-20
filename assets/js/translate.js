// 语言切换占位脚本：
// 未来可集成 i18n 库或调用翻译 API，实现一键中英互译
var btn = document.getElementById('lang-toggle');
btn.addEventListener('click', function() {
  var current = document.body.getAttribute('data-lang');
  var next = current === 'en' ? 'zh' : 'en';
  document.body.setAttribute('data-lang', next);
  btn.textContent = next === 'en' ? '中文' : 'EN';
  // TODO: 根据 data-lang 值，自动替换页面文本或加载对应语言包
});