"use strict";

function tabs() {
    const tabHeader = document.querySelector('.service-header');
    const tab = tabHeader.querySelectorAll('.service-header-tab');
    const tabContent = document.querySelectorAll('.service-tab');

    // в функцию передаем индекс таба
    function toggleTabContent(index) {
        for(let i = 0; i < tabContent.length; i++) {
            if(index === i) {
                tab[i].classList.add('active');
                tabContent[i].classList.remove('d-none');
            } else {
                tab[i].classList.remove('active');
                tabContent[i].classList.add('d-none');
            }
        }
    }

    tabHeader.addEventListener('click', function(event) {
        let target = event.target;
        
        // closest() проверяет у элемента селектор
        target = target.closest('.service-header-tab');

        if(target) {
            tab.forEach(function(item, i) {
                if(item === target) {
                    toggleTabContent(i);
                }
            });
        }
    });
}

export default tabs;