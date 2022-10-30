window.onload = () => {
  const da = new DynamicAdapt("max");  
  da.init();
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  const burger = document.querySelector('.burger');
  const close = document.querySelector('.close');
  const sidebar = document.querySelector('.left-side');
  const body = document.querySelector('body');
  burger.addEventListener('click', () => {
    sidebar.classList.add('left-side--active');
    body.classList.add('scroll-lock');
    body.append(overlay);
  })
  close.addEventListener('click', () => {
    sidebar.classList.remove('left-side--active');
    setTimeout(() => {
      overlay.remove();
      body.classList.remove('scroll-lock');
    }, 300);
  })
}