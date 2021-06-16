'strict';

const titleElm = document.querySelector('.js-setActiveClass');
console.log(titleElm);
titleElm.classList.add('is-active');

// ↓↓↓以下に実装してください
document.querySelector('.keep').onclick=function(){
    this.style.backgroundColor="#3fb811";

};

// ↑↑↑ここまで