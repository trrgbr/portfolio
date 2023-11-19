document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.wrapper');
  const card = document.querySelectorAll('.card');
  const contactButtonWrapper = document.querySelector('.button-wrapper');
  const headerH1 = document.querySelector('h1.intro');
  const contactButtonEL = document.querySelector('.intro-box .button');
  const yearEl = document.querySelector('span.year');
  yearEl.innerHTML = new Date().getFullYear();

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };
  const buttonObserver = new IntersectionObserver(buttonTouch, options);
  buttonObserver.observe(headerH1);

  //floating button
  function buttonTouch(button) {
    button.forEach((button) => {
      if (button.isIntersecting) {
        contactButtonEL.classList.remove('floating');
      } else {
        contactButtonEL.classList.add('floating');
      }
    });
  }

  const header = document.querySelector('header');

  //haburger icon
  const menuClick = function (e) {
    this.parentNode.classList.toggle('active');
    this.classList.toggle('active');
    header.classList.toggle('open');

    if (!this.classList.contains('active')) {
      document.querySelectorAll('.menu-item').forEach((el, idx) => {
        el.classList.remove('animate');
      });
    } else {
      document.querySelectorAll('.menu-item').forEach((el, idx) => {
        setTimeout(() => {
          el.classList.add('animate');
        }, idx * 50);
      });
    }
  };

  document.querySelector('.hamburger').addEventListener('click', menuClick);

  document.querySelectorAll('.navigation__item.menu-item a').forEach((navItem) => {
    navItem.addEventListener('click', function () {
      document.querySelector('.hamburger').classList.remove('active');
      document.querySelector('.navigation__item.menu-button').classList.remove('active');
      header.classList.remove('open');
    });
    document.querySelectorAll('.menu-item').forEach((el, idx) => {
      el.classList.remove('animate');
    });
  });

  //change color theme
  const themeIcon = document.querySelector('.theme-button');

  themeIcon.addEventListener('click', function () {
    let attrValue = document.querySelector('html').getAttribute('data-theme') === '' ? 'dark' : '';
    if (attrValue === 'dark') {
      document.querySelector('.fa-sun').classList.remove('hide');
      document.querySelector('.fa-moon').classList.add('hide');
    } else {
      document.querySelector('.fa-sun').classList.add('hide');
      document.querySelector('.fa-moon').classList.remove('hide');
    }
    document.querySelector('html').setAttribute('data-theme', `${attrValue}`);
  });
});

// remove the start layer
window.addEventListener('load', function () {
  const hexagonEl = document.querySelector('.hexagon');

  document.querySelector('body').style.overflow = 'hidden';
  setTimeout(function () {
    hexagonEl.classList.add('close');
  }, 3500);
  setTimeout(function () {
    hexagonEl.remove();
    document.querySelector('body').style.overflow = 'auto';
  }, 4500);
});
