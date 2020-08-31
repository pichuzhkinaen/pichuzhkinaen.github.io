document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let product = document.querySelectorAll('.product'),
        varietyProduct = document.querySelectorAll('.svg-text_subtitle'),
        textBottom = document.querySelectorAll('.text-bottom');

    // console.log(textBottom[1].innerHTML);
    
    //изменение цвета рамки и круга при клике
    for (let i = 0; i < product.length; i++) {
        product[i].addEventListener('click', function() {
            if (product[i].classList.contains('product_active')) {
                product[i].classList.remove('product_active');
            } else {
                product[i].classList.add('product_active');
            }
        });
    }

    //изменение цвета текста внизу при неактивном товаре
    for (let i = 0; i < product.length; i++) {
        if (product[i].classList.contains('product_disabled')) {
            textBottom[i].innerHTML = `Печалька, ${varietyProduct[i].innerHTML} закончился.`;
            textBottom[i].classList.add('text-bottom_disabled');
        }
    }
});