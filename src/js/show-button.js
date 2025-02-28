//Show more

const brandButton = document.querySelector('.brands__show-more');
const brandWrapper = document.querySelector('.brands__wrapper');

const technickTypeButton = document.querySelector('.technic-type__show-more');
const technickTypeWrapper = document.querySelector('.technic-type__wrapper');

const pricesTypeButton = document.querySelector('.prices__show-more');
const pricesTypeWrapper = document.querySelector('.prices__wrapper');


showMore(brandButton, brandWrapper);

showMore(technickTypeButton, technickTypeWrapper);




function showMore(button, hiddingBlock) {
  let buttonText = button.lastElementChild;
  button.addEventListener('click', () => {
    if (buttonText.textContent != 'Скрыть') {
      hiddingBlock.classList.add('wrapper_showed');
      button.classList.add('read-more_opened');
      buttonText.textContent = 'Скрыть';
    } else {
      hiddingBlock.classList.remove('wrapper_showed');
      button.classList.remove('read-more_opened');
      buttonText.textContent = 'Показать все';
    }
  });

};
