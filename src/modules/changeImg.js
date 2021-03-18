"use strict";
// Секция наша команда
function changeImg() {
    const imgsOurCommand = document.querySelectorAll('.command__photo');
    imgsOurCommand.forEach(function(e) {
        let imgFirst = e.src;

        e.addEventListener('mouseenter', function() {
            if(e.tagName === 'IMG') {
                e.src = e.dataset.img;
            } 
        });
        e.addEventListener('mouseleave', function() {
            e.src = imgFirst;
        });
    });
}

export default changeImg;