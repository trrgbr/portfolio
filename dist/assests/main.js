const wrapper = document.querySelector('.wrapper');
const card = document.querySelectorAll('.card');
const contactButtonWrapper = document.querySelector('.button-wrapper');
const contactButtonEL = document.querySelector('.intro-box .button');

document.addEventListener('DOMContentLoaded', () => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  };
  const buttonObserver = new IntersectionObserver(buttonTouch, options);
  buttonObserver.observe(contactButtonWrapper);

  //navbar show hide
  window.onscroll = function (e) {
    if (this.oldScroll > this.scrollY) {
      header.classList.remove('hide');
    }
    if (this.oldScroll < this.scrollY) {
      header.classList.add('hide');
    }
    this.oldScroll = this.scrollY;
  };
});

//close header if click outside
window.addEventListener('click', function (e) {
  if (!document.getElementById('header').contains(e.target)) {
    document.querySelector('.hamburger').classList.remove('active');
    document.querySelector('.navigation__item.menu-button').classList.remove('active');
  }
});

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

const anchor = document.querySelectorAll('a');

document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });

  anchor.addEventListener('touchstart', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

const header = document.querySelector('header');
const hexagonEl = document.querySelector('.hexagon');

// remove the start layer
window.addEventListener('load', function () {
  setTimeout(function () {
    hexagonEl.classList.add('close');
  }, 3500);
  setTimeout(function () {
    hexagonEl.remove();
    document.querySelector('body').style.overflow = 'auto';
  }, 4500);
});

//top by refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.addEventListener('scroll', function () {
  document.querySelector('.hamburger').classList.remove('active');
  document.querySelector('.navigation__item.menu-button').classList.remove('active');
});

//haburger icon
const menuTouchClick = function (e) {
  this.parentNode.classList.toggle('active');
  this.classList.toggle('active');
};

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.hamburger').addEventListener('click', menuTouchClick);
  document.querySelector('.hamburger').addEventListener('touch', menuTouchClick);
});

document.querySelectorAll('.navigation__item.menu-item').forEach((navItem) => {
  navItem.addEventListener('click', function () {
    document.querySelector('.hamburger').classList.remove('active');
    document.querySelector('.navigation__item.menu-button').classList.remove('active');
  });
  navItem.addEventListener('touchstart', function () {
    document.querySelector('.hamburger').classList.remove('active');
    document.querySelector('.navigation__item.menu-button').classList.remove('active');
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

themeIcon.addEventListener('touchstart', function () {
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
