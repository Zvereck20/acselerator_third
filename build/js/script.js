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
    page.classList.remove('body-lock')
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

const hidden = document.querySelectorAll('.sidebar__checkbox');
const hiddenToggle = document.querySelectorAll('.sidebar__checkbox button');


accordion.forEach((item) => {
  item.classList.add('accordion--close');
});

hidden.forEach((item) => {
  item.classList.add('sidebar__checkbox--close');
});

const emergenceToggle = () => {
  accordionToggle.forEach((toggle) => {
    toggle.classList.add('question__heading--close');
    toggle.classList.remove('question__heading--open')
  })
};

const emergenceHidden = () => {
  hiddenToggle.forEach((toggle) => {
    toggle.classList.add('sidebar--close');
  })
};

emergenceToggle();
emergenceHidden();

accordionToggle.forEach((toggle) => {
  toggle.addEventListener('click', () => {

    emergenceToggle();

    const parent = toggle.parentNode;

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
    }
  })
});

hiddenToggle.forEach((toggle) => {
  toggle.addEventListener('click', () => {

    const parent = toggle.parentNode;

    if (parent.classList.contains('sidebar__checkbox--close')) {
      toggle.classList.remove('sidebar--close');
      toggle.classList.add('sidebar--open');
    } else {
      toggle.classList.remove('sidebar--open');
      toggle.classList.add('sidebar--close');
    }

    if (parent.classList.contains('sidebar__checkbox--close')) {
      accordion.forEach((item) =>
        item.classList.add('sidebar__checkbox--close'));
      parent.classList.remove('sidebar__checkbox--close');
    } else {
      parent.classList.add('sidebar__checkbox--close');
    }
  })
});


// Modal window

const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const closeModalButton = modal.querySelector('.modal__close');
const openModalButton = document.querySelector('.purchases__link--login');

const LOGIN_FORM = document.querySelector('.login__field');
const LOGIN_EMAIL = LOGIN_FORM.querySelector('#login-email');
const LOGIN_PASSWORD = LOGIN_FORM.querySelector('#login-password');
const LOGIN_BUTTON = LOGIN_FORM.querySelector('.login__button');

function existVerticalScroll() {
  return document.body.offsetHeight > window.innerHeight
};

function getBodyScrollTop() {
  return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
};

const setTabindex = () => {
  LOGIN_EMAIL.setAttribute('tabindex', 1);
  LOGIN_PASSWORD.setAttribute('tabindex', 2);
  modal.querySelector('.login__links-type--password').setAttribute('tabindex', 3);
  LOGIN_BUTTON.setAttribute('tabindex', 4);
  modal.querySelector('.login__links-type--account').setAttribute('tabindex', 5);
  modal.querySelector('.login__links-type--enter').setAttribute('tabindex', 6);
  closeModalButton.setAttribute('tabindex', 7);
}

const removeTabindex = () => {
  LOGIN_EMAIL.removeAttribute('tabindex');
  LOGIN_PASSWORD.removeAttribute('tabindex');
  modal.querySelector('.login__links-type--password').removeAttribute('tabindex');
  LOGIN_BUTTON.removeAttribute('tabindex');
  modal.querySelector('.login__links-type--account').removeAttribute('tabindex');
  modal.querySelector('.login__links-type--enter').removeAttribute('tabindex');
  closeModalButton.removeAttribute('tabindex');
}

openModalButton.addEventListener('click', e => {
  e.preventDefault();

  body.dataset.scrollY = getBodyScrollTop();

  modal.classList.remove('visually-hidden');

  LOGIN_EMAIL.focus();

  if (existVerticalScroll()) {
    body.classList.add('body-lock')
    body.style.top = `-${body.dataset.scrollY}px`
  };

  setTabindex();
  focusLock.on(modal);
})

closeModalButton.addEventListener('click', e => {
  e.preventDefault();

  modal.classList.add('visually-hidden');

  if (existVerticalScroll()) {
    body.classList.remove('body-lock')
    window.scrollTo(0, body.dataset.scrollY)
  };

  removeTabindex();
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

    removeTabindex();
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

  removeTabindex();
  focusLock.off(modal);
});

LOGIN_FORM.addEventListener('submit', (evt) => {
  evt.preventDefault();

  localStorage.setItem('login_email', LOGIN_EMAIL.value);
  LOGIN_EMAIL.value = '';
  LOGIN_PASSWORD.value = '';

  modal.classList.add('visually-hidden');

  if (existVerticalScroll()) {
    body.classList.remove('body-lock')
    window.scrollTo(0, body.dataset.scrollY)
  };
});

// Checkbox

const checkboxForm = document.querySelector('.sidebar__search');
const openCheckbox = document.querySelector('.sidebar__open');
const closeCheckbox = document.querySelector('.sidebar__close');
const checkboxWrap = document.querySelector('.sidebar__modal');
const checkboxSend = document.querySelector('.sidebar__button--apply');
const checkboxClear = document.querySelector('.sidebar__button--clear');
const input = checkboxForm.querySelectorAll('input[type="checkbox"]');

openCheckbox.addEventListener('click', (evt) => {
  evt.preventDefault();

  body.dataset.scrollY = getBodyScrollTop();

  checkboxForm.style.display = 'block';
  checkboxWrap.classList.add('modal');
  body.classList.add('body-lock');

  focusLock.on(modal);
})

closeCheckbox.addEventListener('click', (e) => {
  e.preventDefault();

  checkboxForm.style.display = 'none';
  checkboxWrap.classList.remove('modal');

  body.classList.remove('body-lock')

  focusLock.off(modal);
})

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    if (checkboxWrap.classList.contains('modal')) {
      checkboxWrap.classList.remove('modal')
      checkboxForm.style.display = 'none';
    }

    body.classList.remove('body-lock')
    focusLock.off(modal);
  };
});

checkboxWrap.addEventListener('click', (evt) => {
  if (evt.target === checkboxWrap) {
    checkboxWrap.classList.remove('modal')
    checkboxForm.style.display = 'none';
    body.classList.remove('body-lock')
  }

  focusLock.off(modal);
});

const clear = () => {
  input.forEach((i) => {
    i.removeAttribute("checked");
  })
  checkboxForm.querySelector('#necklaces').setAttribute('checked', 'checked');
  checkboxForm.querySelector('#chokers').setAttribute('checked', 'checked');
  checkboxForm.querySelector('#earrings').setAttribute('checked', 'checked');
  checkboxForm.querySelector('#gold').setAttribute('checked', 'checked');
  checkboxForm.querySelector('#pink').setAttribute('checked', 'checked');
};

checkboxSend.addEventListener('click', (evt) => {
  evt.preventDefault();

  clear();

  if (checkboxWrap.classList.contains('modal')) {
    checkboxWrap.classList.remove('modal')
    checkboxForm.style.display = 'none';
    body.classList.remove('body-lock');
    focusLock.off(modal);
  }
});

checkboxClear.addEventListener('click', clear);
