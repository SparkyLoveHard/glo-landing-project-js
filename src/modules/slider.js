"use strict";

function slider() {
    const slide = document.querySelectorAll('.portfolio-item');
    const dots = document.querySelector('.portfolio-dots');
    const slider = document.querySelector('.portfolio-content');

    let currentSlide = 0,
        interval;

    function prevSlide(elem, index, strClass) {
        elem[index].classList.remove(strClass);
    }

    function nextSlide(elem, index, strClass) {
        elem[index].classList.add(strClass);
    }

    function addDot(elements) {
        let liDots = document.createElement('li');
        liDots.classList.add('dot');
        liDots.classList.add('dot-active');
        dots.append(liDots);
        for (let i = 1; i < elements; i++) {
            liDots = document.createElement('li');
            liDots.classList.add('dot');
            dots.append(liDots);
        }
        let arrDots = document.querySelectorAll('.dot');
        return arrDots;
    }

    const dot = addDot(slide.length);

    function autoPlaySlide() {
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    }

    function startSlide(time = 3000) {
        interval = setInterval(autoPlaySlide, time);
    }

    function stopSlide() {
        clearInterval(interval);
    }

    slider.addEventListener('click', function(event) {
        event.preventDefault();

        let target = event.target;

        if (!target.matches('.portfolio-btn, .dot')) {
            return;
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if (target.matches('#arrow-right')) {
            currentSlide++;
        } else if (target.matches('#arrow-left')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dot.forEach(function(elem, index) {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }

        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', function(event) {
        if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
            stopSlide();
        }
    });

    slider.addEventListener('mouseout', function(event) {
        if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
            startSlide(2000);
        }
    });

    startSlide(2000);
}

export default slider;