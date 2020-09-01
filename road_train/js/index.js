document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let services = document.querySelector('.menu_services'),
        servicesList = document.querySelector('.services'),
        consultBtn = document.querySelector('.phone_btn-consult'),
        overlayConsult = document.querySelector('.overlay-consult'),
        overlaySearch = document.querySelector('.overlay-search'),
        modal = document.querySelector('.modal'),
        close = document.querySelector('.close'),
        check = document.querySelector('.checkbox_check'),
        search = document.querySelector('.search_input'),
        searchResult = document. querySelector('.search_result');        

    //выпадение списка услуг при наведении в меню на "услуги"
    services.addEventListener('mouseover', function () {
        servicesList.style.display = 'block';
    });

    //скрытие списка услуг при наведении вне меню
    services.addEventListener('mouseout', function () {
        servicesList.style.display = 'none';
    });

    //открытие модального окна с формой консультации при клике на кнопку "бесплатная консультация"
    consultBtn.addEventListener('click', function() {
        overlayConsult.style.display = 'block';
        modal.style.display = 'block';
    });
    
    //закрытие модального окна с формой консультации при клике на крестик
    close.addEventListener('click', function() {
        overlayConsult.style.display = 'none';
        modal.style.display = 'none';
    });

    //закрытие затемнения и модального окна с формой консультации при клике вне модального окна
    overlayConsult.addEventListener('click', function(event) {
        if (!modal.contains(event.target)) {
            overlayConsult.style.display = 'none';
            modal.style.display='none';
        } 
    });

    //изменение стиля чекбокса соглашения в модальном окне, при клике на него
    check.addEventListener('click', function() {
        if (check.classList.contains('checkbox_check_noactive')) {
            check.classList.remove('checkbox_check_noactive');
        } else {
            check.classList.add('checkbox_check_noactive');
        }
    });
    
    //открытие найденных элементов при введении текста в инпут
    search.oninput = function() {
        overlaySearch.style.display = 'block';
        searchResult.style.display = 'flex';
    };

    //закрытие затемнения и модального окна с результатами поиска при клике вне модального окна
    overlaySearch.addEventListener('click', function(event) {
        if (!searchResult.contains(event.target)) {
            overlaySearch.style.display = 'none';
            searchResult.style.display='none';
        } 
    });
});