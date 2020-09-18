document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    //появление и исчезновение строки поиска
    let searchIcon = document.querySelector('.search_icon'),
        searchInput = document.querySelector('.search_input');
    // console.log(searchIcon);

    function searchInputHiding() {
        searchInput.style.display = 'none';
    }
    searchInputHiding();

    searchIcon.addEventListener('click', function() {
        if (searchInput.style.display == 'inline-block') {
            searchInput.classList.remove('search_input_active');
            searchInput.classList.add('search_input_no-active');

            setTimeout(searchInputHiding, 500); //для видимой анимации нужно, чтобы инпут поиска исчез после ее завершения, т.е. спустя 0,5 секунды, когда удалится активный стиль и применится неактивный
        } else {
            searchInput.style.display = 'inline-block';
            searchInput.classList.remove('search_input_no-active');
            searchInput.classList.add('search_input_active');
        }
    });


    //переключение страниц секции new items
    let prev = document.querySelector('.items_count-prev'),
        next = document.querySelector('.items_count-next'),
        count = document.querySelector('.items_count-text'),
        items = document.querySelectorAll('.items'),
        countCurrentPage = 1;

        prev.addEventListener('click', switchItems); 
        next.addEventListener('click', switchItems);  

    //значение new item при загрузке страницы (первая страница из "количества страниц" - <01/03>)
    function startItems() {

        count.innerHTML = '0' + countCurrentPage + '/0' + items.length;

        for (let i = 0; i < items.length; i++) {
            items[i].style.display = 'none';
        }
        items[0].style.display = 'grid';
    }
    startItems();

    function switchItems() {
            
        if (this == prev) {
            if (countCurrentPage >= 2) {
                // console.log(countCurrentPage);
                // console.log(items[countCurrentPage]);
                // console.log(countCurrentPage - 1);

                //т.к. countCurrentPage = числу, начинающемуся с 1, а индекс страниц начинается с 0, приводим значения к 1
                items[countCurrentPage - 1].style.display = 'none';
                items[countCurrentPage - 2].style.display = 'grid';

                countCurrentPage = countCurrentPage - 1;
                count.innerHTML = '0' + countCurrentPage + '/0' + items.length; 
            }
                
        } else if (this == next) {
            // console.log(countCurrentPage);
            // console.log(this);
            if (countCurrentPage <= items.length - 1) {
                items[countCurrentPage - 1].style.display = 'none';
                items[countCurrentPage].style.display = 'grid';

                countCurrentPage = countCurrentPage + 1;
                count.innerHTML = '0' + countCurrentPage + '/0' + items.length;
            }
        }
    }


    //гамбургер-меню
    const menu = document.querySelector('.menu-main'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu-main_active');
    });
    
}); 