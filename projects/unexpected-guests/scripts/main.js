window.addEventListener('DOMContentLoaded', function() {
    'use strict';


    // Popup
    const wrapper = document.querySelector('.wrapper'),
          popupBtn = document.querySelector('.popup-button'),
          popupForm = document.querySelector('.popup'),
          close = document.querySelector('.form__close');

    popupBtn.addEventListener('click', function() {
        popupForm.classList.add('open');
        wrapper.classList.add('overflow-hidden');
    });

    close.addEventListener('click', function() {
        popupForm.classList.remove('open');
        wrapper.classList.remove('overflow-hidden');
    });


    // Carousel
    const mainCarouselSlides = document.querySelectorAll('.carousel-main__slide'),
          smallCarouselSlides = document.querySelectorAll('.carousel-small__slide');

    for (let i = 0; i < smallCarouselSlides.length; i++) {
        smallCarouselSlides[i].addEventListener('click', togleSlide);
    }

    function togleSlide(e) {
        const target = e.target.parentNode,
              idSmallSlide = target.id;
        console.log(target);
        console.log(idSmallSlide);

        for (let i = 0; i < smallCarouselSlides.length; i++) {
            smallCarouselSlides[i].classList.remove('hide');
            mainCarouselSlides[i].classList.add('hide');
        }
        target.classList.add('hide');
        mainCarouselSlides[idSmallSlide - 1].classList.remove('hide');
    }

    // Мобильное меню
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu');

    hamburger.addEventListener('click', function() {
        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            menu.classList.remove('open');
        } else {
            hamburger.classList.add('active');
            menu.classList.add('open');
            
            // Перемещение popup в мобильное меню
            const mobileMenu = document.querySelector('.menu.open');
            const popup = document.querySelector('.popup-button');
            console.log(mobileMenu);
            console.log(popup);
            mobileMenu.appendChild(popup);
        }
    });  
});