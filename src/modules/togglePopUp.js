"use strict";

function togglePopUp () {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.popup-btn');
    const popupContent = popup.querySelector('.popup-content');
    
    let countFrame = 0;

    function animationModal() {
        let animationId = requestAnimationFrame(animationModal);

        countFrame++;
        if (countFrame < 50) {
            popupContent.style.top = countFrame + 200 + 'px';
        } else {
            countFrame = 0;
            cancelAnimationFrame(animationId);
        }
    }

    popupBtn.forEach(function(item) {
        item.addEventListener('click', function() {
            popup.style.display = 'block';
            if(document.documentElement.clientWidth > 768) {
                animationModal();
            }
        });
        
    });

    popup.addEventListener('click', function(event) {
        let target = event.target;

        if(target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');

            if(!target) {
                popup.style.display = 'none';
            }
        }
    });
}

export default togglePopUp;