'use strict';

var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;

// project switcher hover
export function switcherHover() {
  const prevBtn = document.querySelectorAll('.prev-btn');
  const nextBtn = document.querySelectorAll('.next-btn');

  const crewBtn = document.querySelector('#crew-social');
  const elloBtn = document.querySelector('#ello-social');
  const pinterestBtn = document.querySelector('#pinterest-social');
  const instagramBtn = document.querySelector('#instagram-social');
  const facebookBtn = document.querySelector('#facebook-social');
  const mapBtn = document.querySelector('#location');

  const btnPopup = document.querySelector('.btn-popup');

  const hoverArr = [ prevBtn[0] ,nextBtn[0] ,crewBtn ,elloBtn ,pinterestBtn ,instagramBtn ,facebookBtn, mapBtn ];
  const hoverArrWords = [ 'Previous project' , 'Next project' , 'About' , 'Shop' , 'Pinterest' , 'Instagram' , 'Facebook', 'Visit us' ];

  hoverArr.forEach((item, index) => {
    item.addEventListener('mouseover', (e) => {
      btnPopup.innerHTML = hoverArrWords[index];
      btnPopup.classList.add('active');
    });
    item.addEventListener('mouseleave', (e) => {
      btnPopup.classList.remove('active');
    });
  })

  document.addEventListener('mousemove', (event) => {
    btnPopup.style.left = event.clientX + 10 + 'px';
    btnPopup.style.top = event.clientY - 50 + 'px';
  })
}

// poster scroll
export function posterScrollFunc() {
  const posterScrollTop = document.querySelectorAll('.poster-scroll-top');
  const posterScrollBottom = document.querySelectorAll('.poster-scroll-bottom');

  const posterScrollBtns = document.querySelectorAll('.poster-wrapper > .poster-scroll');

  let scrollBtnsTop = [];
  let scrollBtnsBot = [];

  let scrollRate = [];

  posterScrollBtns.forEach((item, i) => {
    scrollBtnsTop[i] = item.children[0];
    scrollBtnsBot[i] = item.children[1];
    scrollRate[i] = 0;

    scrollDiv(false, scrollBtnsTop[i].parentNode.parentNode.children[0], scrollRate[i]);

    scrollBtnsTop[i].addEventListener('click', () => {
      if (scrollRate[i] <= 0) {
        scrollRate[i] = 0;
      } else {
        scrollRate[i] += -100;
      }
      scrollDiv(false, scrollBtnsTop[i].parentNode.parentNode.children[0], scrollRate[i]);
    });
    scrollBtnsBot[i].addEventListener('click', () => {
      scrollRate[i] += 100;
      scrollDiv(false, scrollBtnsBot[i].parentNode.parentNode.children[0], scrollRate[i]);
    });
  });
}

function scrollDiv(maxScroll, divElem, previousScrollTop) {
  if (maxScroll) {
    divElem.scrollTop = -previousScrollTop;
  }
  else {
    divElem.scrollTop = previousScrollTop;
  }
}

