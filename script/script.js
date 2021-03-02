'use strict';
window.addEventListener('DOMContentLoaded', () => {
	// Таймер
	function countTimer(deadline) {
		const timerHours = document.getElementById('timer-hours'),
			timerMinutes = document.getElementById('timer-minutes'),
			timerSeconds = document.getElementById('timer-seconds');

		const getTimeRemaining = () => {
			const dateStop = new Date(deadline).getTime(),
				dateNow = new Date().getTime(),
				timeRemaining = (dateStop - dateNow) / 1000,
				seconds = Math.floor(timeRemaining % 60),
				minutes = Math.floor((timeRemaining / 60) % 60),
				hours = Math.floor(timeRemaining / 3600);

			return {
				seconds,
				minutes,
				hours,
				timeRemaining
			};
		};

		const updateClock = () => {
			const timer = getTimeRemaining();
			if (timer.timeRemaining <= 0) {
				timerHours.textContent = '00';
				timerMinutes.textContent = '00';
				timerSeconds.textContent = '00';
				return false;
			} else if (timer.timeRemaining > 0) {
				for (let key in timer) {
					if (timer[key] < 10) {
						timer[key] = '0' + timer[key];
					}
				}
				timerHours.textContent = timer.hours;
				timerMinutes.textContent = timer.minutes;
				timerSeconds.textContent = timer.seconds;
			}
		};
		let idInterval;
		if (updateClock() !== false) {
			idInterval = setInterval(updateClock, 1000);
		} else {
			clearInterval(idInterval);
		}
	}
	countTimer('25 jul 2021');

	// Меню
	function toggleMenu() {

		const btnMenu = document.querySelector('.menu');
		const menu = document.querySelector('menu');
		const closeBtn = document.querySelector('.close-btn');

		const menuItems = menu.querySelectorAll('ul>li');

		function handlerMenu() {
			menu.classList.toggle('active-menu');
			// if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
			// 	menu.style.transform = `translate(0)`;
			// } else {
			// 	menu.style.transform = `translate(-100%)`;
			// }
		}

		btnMenu.addEventListener('click', handlerMenu);
		closeBtn.addEventListener('click', handlerMenu);

		for (let i = 0; i < menuItems.length; i++) {
			menuItems[i].addEventListener('click', handlerMenu);
		}

	}
	toggleMenu();

	// Poppup
	function togglePopUp () {
		const popup = document.querySelector('.popup');
		const popupBtn = document.querySelectorAll('.popup-btn');
		const popupClose = document.querySelector('.popup-close');
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
					// animation function
					animationModal();
				}
			});
			
		});

		popupClose.addEventListener('click', function() {
			popup.style.display = 'none';
		});


		
	}

	togglePopUp();
});