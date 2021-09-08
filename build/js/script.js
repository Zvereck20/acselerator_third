// Menu

const page = document.querySelector('main')
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
    page.classList.add('body-lock');
  } else {
    header.classList.add('header--closed');
    header.classList.remove('header--opened');
    page.classList.remove('body-lock');
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    if (!header.classList.contains('header--closed')) {
      header.classList.remove('header--opened');
      header.classList.add('header--closed');
      page.classList.remove('body-lock')
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
  slidesPerView: 2,
  slidesPerGroup: 2,
  // slidesPerColumn: 4,
  // slidesPerColumnFill:"row",
  spaceBetween: 10,

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
    },
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

// Modal window

const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const closeModalButton = modal.querySelector('.modal__close');
const openModalButton = document.querySelector('.purchases__link--login');

const LOGIN_EMAIL = modal.querySelector('#login-email');
const LOGIN_PASSWORD = modal.querySelector('#login-password');
const LOGIN_BUTTON = modal.querySelector('.login__button');

function existVerticalScroll() {
  return document.body.offsetHeight > window.innerHeight
};

function getBodyScrollTop() {
  return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
};

// const setTabindex = () => {
//   MODAL_NAME.setAttribute('tabindex', 1);
//   MODAL_PHONE.setAttribute('tabindex', 2);
//   MODAL_QUESTION.setAttribute('tabindex', 3);
//   MODAL_BUTTON.setAttribute('tabindex', 4);
//   MODAL_CHECKBOX.setAttribute('tabindex', 5);
//   closeModalButton.setAttribute('tabindex', 6);
// }

// const removeTabindex = () => {
//   MODAL_NAME.removeAttribute('tabindex');
//   MODAL_PHONE.removeAttribute('tabindex');
//   MODAL_QUESTION.removeAttribute('tabindex');
//   MODAL_BUTTON.removeAttribute('tabindex');
//   MODAL_CHECKBOX.removeAttribute('tabindex');
//   closeModalButton.removeAttribute('tabindex');
// }

openModalButton.addEventListener('click', e => {
  e.preventDefault();

  body.dataset.scrollY = getBodyScrollTop();

  modal.classList.remove('visually-hidden');

  LOGIN_EMAIL.focus();

  if (existVerticalScroll()) {
    body.classList.add('body-lock')
    body.style.top = `-${body.dataset.scrollY}px`
  };

  // setTabindex();
  focusLock.on(modal);
})

closeModalButton.addEventListener('click', e => {
  e.preventDefault();

  modal.classList.add('visually-hidden');

  if (existVerticalScroll()) {
    body.classList.remove('body-lock')
    window.scrollTo(0, body.dataset.scrollY)
  };

  // removeTabindex();
  focusLock.off(modal);
})

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    if (!modal.classList.contains('visually-hidden')) {
      modal.classList.add('visually-hidden');
    }

    if (existVerticalScroll()) {
      body.classList.remove('body-lock')
      window.scrollTo(0, body.dataset.scrollY)
    }

    // removeTabindex();
    focusLock.off(modal);
  };
});

modal.addEventListener('click', (evt) => {
  if (evt.target === modal) {
    modal.classList.add('visually-hidden');
  }

  if (existVerticalScroll()) {
    body.classList.remove('body-lock')
    window.scrollTo(0, body.dataset.scrollY)
  };

  // removeTabindex();
  focusLock.off(modal);
});
