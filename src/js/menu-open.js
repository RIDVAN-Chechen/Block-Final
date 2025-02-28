let transparent = document.querySelector('.transparent');

const menuOpButton = document.querySelector('.header__menu-button');
const menuClButton = document.querySelector('.aside__close');
const asideMenu = document.querySelector('.aside');


const feedOpButton = document.querySelector('.header__feed-button');
const feedClButton = document.querySelector('.feedback__close');
const feedMenu = document.querySelector('.feedback');



const callOpButton = document.querySelector('.header__call-button');
const callClButton = document.querySelector('.call__close');
const callMenu = document.querySelector('.call');



menuOpen(menuOpButton, menuClButton, asideMenu);

menuOpen(feedOpButton, feedClButton, feedMenu);

menuOpen(callOpButton, callClButton, callMenu);

function menuOpen(openButton, closeButton, menu) {
  let menuOp = 'open_' + menu.classList[0];
  openButton.addEventListener('click', () => {
    if (menu.classList[menu.classList.length - 1] != menuOp) {
      menu.classList.add(menuOp);
      transparentTurn(true);
    }
  });
  closeButton.addEventListener('click', () => {
    if (menu.classList[menu.classList.length - 1] == menuOp) {
      menu.classList.remove(menuOp);
      transparentTurn(false);
    }
  });
}

function transparentTurn(turn) {
  if (turn == true) {
    transparent.classList.add('transparent_off');
  } else {
    transparent.classList.remove('transparent_off');
  }
}
