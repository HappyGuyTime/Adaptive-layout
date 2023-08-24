let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');
let headerLink = document.querySelector('.header__link');
let menu = document.querySelectorAll('.nav__link');

burger.addEventListener(
  'click', () => {
    burger.classList.toggle('burger--active');
    nav.classList.toggle('nav--active');

    if (burger.classList.contains('burger--active')) {
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Закрыть меню');
      headerLink.style.visibility = 'hidden';
    }
    else{
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Открыть меню');
      headerLink.removeAttribute('style');
    }

    if (nav.classList.contains('nav--active')) {
      nav.style.transition = 'visibility var(--transition-timing) ease-in-out, transform var(--transition-timing) ease-in-out';
    }

    document.body.classList.toggle('stop-scroll');
  }
);

nav.addEventListener('transitionend', () => {
  if (!nav.classList.contains('nav--active')) {
    nav.removeAttribute('style');
  }
});

menu.forEach(
  link => {
    link.addEventListener(
      'click', () => {
        burger.classList.remove('burger--active');
        nav.classList.remove('nav--active');
        document.body.classList.remove('stop-scroll');
      }
    )
  }
);


let headerBtnSearch = document.querySelector('.header__btn-search');
let closeBtn = document.querySelector('.search__btn-close');
let search = document.querySelector('.search');
let searchInput = document.querySelector('.search__input');

headerBtnSearch.addEventListener(
  'click', () => {
    search.classList.add('search--active');
    setTimeout(() => {
      searchInput.focus();
    }, 100);
  }
);


closeBtn.addEventListener(
  'click', () => {
    search.classList.remove('search--active');
    setTimeout(() => {
      headerBtnSearch.focus();
    }, 100);
  }
);


let slider = document.querySelector('.hero__slider');

let swiper = new Swiper(
  slider, {
  wrapperClass: 'hero__wrapper-slides',
  slideClass: 'hero__slide',
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.hero__pagination',
    clickable: true
  },
  autoplay: {
    delay: 5000,
  }
});


document.addEventListener('DOMContentLoaded', () => {
  let workBtns = document.querySelectorAll('.work__btn');
  let workContents = document.querySelectorAll('.work__content');

  workBtns.forEach(
    function (workBtn) {
      workBtn.addEventListener(
        'click', function (e) {
          const path = e.currentTarget.dataset.path;

          workBtns.forEach(function (btn) { btn.classList.remove('work__btn--active') });
          workBtn.classList.add('work__btn--active');

          workContents.forEach(function (workContent) { workContent.classList.remove('work__content--active') });
          document.querySelector(`[data-target="${path}"]`).classList.add('work__content--active');
        }
      );
    }
  );
});


document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.questions__item');

  questions.forEach(el => {
    el.addEventListener('click', (e) => {
      el.classList.toggle('questions__item--active');

      const questionsBtn = e.currentTarget.querySelector('.questions__btn');
      const questionsContent = e.currentTarget.querySelector('.questions__content');

      if (el.classList.contains('questions__item--active')) {
        questionsBtn.setAttribute('aria-expanded', true);
        questionsContent.setAttribute('aria-hidden', false);
        questionsContent.style.maxHeight = questionsContent.scrollHeight + 'px';
      }
      else {
        questionsBtn.setAttribute('aria-expanded', false);
        questionsContent.setAttribute('aria-hidden', true);
        questionsContent.style.maxHeight = null;
      }
    });
  });
});