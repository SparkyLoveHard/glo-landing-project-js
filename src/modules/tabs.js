"use strict";

function tabs () {
    const tabHeader = document.querySelector('.service-header');
    const tab = tabHeader.querySelectorAll('.service-header-tab');
    const tabContent = document.querySelectorAll('.service-tab');

    tabContent[1].classList.add('d-none');
    tabContent[2].classList.add('d-none');

    function toggleTabContent(index) {
        for (let i = 0; i < tab.length; i++) {
            if (index === i) {
                tab[i].classList.add('active');
                tabContent[i].classList.remove('d-none');
            } else {
                tabContent[i].classList.add('d-none');
                tab[i].classList.remove('active');
            }
        }
    }

    tabHeader.addEventListener('click', function(event)  {
        let target = event.target;
        target = target.closest('.service-header-tab');
        if (target) {
            tab.forEach(function(item, i) {
                if (item === target) {
                    toggleTabContent(i);
                }
            });
        }
    });
}

export default tabs;