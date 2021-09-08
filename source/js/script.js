// Menu

const body = document.querySelector('main')
const header = document.querySelector('.header');
const navToggle = document.querySelector('.header__toggle');

header.classList.add('header--js')

const closeMenu = () => {
  (header.classList.contains('header--js')) ?
  header.classList.remove('header--js'):
    header.classList.add('header--js');
}

navToggle.addEventListener('click', function () {

  closeMenu();

  if (header.classList.contains('header--closed')) {
    header.classList.remove('header--closed');
    header.classList.add('header--opened');
    body.classList.add('body-lock');
  } else {
    header.classList.add('header--closed');
    header.classList.remove('header--opened');
    body.classList.remove('body-lock');
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    if (!header.classList.contains('header--closed')) {
      header.classList.remove('header--opened');
      header.classList.add('header--closed');
      body.classList.remove('body-lock')
    }
    closeMenu();
  }
});

const navLinks = document.querySelectorAll('.navigation__link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.add('header--closed');
    header.classList.remove('header--opened');
    body.classList.remove('body-lock')
    closeMenu();
  })
})

// Swiper


const swiper = new Swiper('.swiper-container', {
  // slidesPerView: 4,
  // slidesPerGroup: 4,
  // slidesPerColumn: 4,
  // slidesPerColumnFill:"row",
  // spaceBetween: 30,

  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30,
    }
  },

  navigation: {
    nextEl: '.products__button--next',
    prevEl: '.products__button--prewiev',
  },
  // ставми классы собственных кнопок, без доп от swiper

  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  //   type: 'fraction',
  // },
});


// Accordion

const accordion = document.querySelectorAll('.accordion');
const accordionToggle = document.querySelectorAll('.question__heading');


  accordion.forEach((item) => {
    item.classList.add('accordion--close');
  });


const emergenceToggle = () => {
  accordionToggle.forEach((toggle) => {
    toggle.classList.add('question__heading--close');
    toggle.classList.remove('question__heading--open')
  })
};

emergenceToggle();

accordionToggle.forEach((toggle) => {
  toggle.addEventListener('click', () => {

    emergenceToggle();
    // rem();

    const parent = toggle.parentNode;

    console.log(parent);

    if (parent.classList.contains('accordion--close')) {
      toggle.classList.remove('question__heading--close');
      toggle.classList.add('question__heading--open');
    } else {
      toggle.classList.remove('question__heading--open');
      toggle.classList.add('question__heading--close');
    }

    if (parent.classList.contains('accordion--close')) {
      accordion.forEach((item) =>
      item.classList.add('accordion--close'));
      parent.classList.remove('accordion--close');
    } else {
      parent.classList.add('accordion--close');
      console.log(item);
    }
  })
});
