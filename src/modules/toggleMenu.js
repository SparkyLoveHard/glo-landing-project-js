"use strict";

function toggleMenu() {
    const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu');

    function handlerMenu() {
        menu.classList.toggle('active-menu');
    }

    btnMenu.addEventListener('click',  handlerMenu);
    menu.addEventListener('click', function(event) {
        let target = event.target;

        if(target.classList.contains('close-btn')) {
            handlerMenu();
        } else {
            target = target.closest('ul>li>a');
            if (target) {
                handlerMenu();
            }
        }
    });
}

export default toggleMenu;