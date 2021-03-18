"use strict";

function sendForm() {
    	// Секция оставить заявку
	const nameForms = document.querySelectorAll('input[placeholder="Ваше имя"]');
	const messageForms = document.querySelectorAll('input[placeholder="Ваше сообщение"]');
	const mailForms = document.querySelectorAll('input[placeholder="E-mail"]');
	const numberPhoneForms = document.querySelectorAll('input[placeholder="Номер телефона"]');
	
	function checkBlur(e) {
		if (e.target.matches('input[placeholder="Ваше имя"]')) {
			e.target.value = e.target.value[0].toUpperCase() + e.target.value.substr(1).toLowerCase();
		}
		e.target.value = e.target.value.replace(/-+/gi, '-').trim(); // убирем множество тире
		e.target.value = e.target.value.replace(/\s+/gi, ' ').trim(); // убираем пробелы
	}

	nameForms.forEach(function(e) {
		e.addEventListener('input', function() {
			e.value = e.value.replace(/[^А-яа-яЁё-\s]/gi, '');
		});
		e.addEventListener('focusout', checkBlur);
	});

	messageForms.forEach(function(e) {
		e.addEventListener('input', function() {
			e.value = e.value.replace(/[^А-Яа-я\- ]/g, '');
		});
		e.addEventListener('focusout', checkBlur);
	});

	mailForms.forEach(function(e) {
		e.addEventListener('input', function() {
			e.value = e.value.replace(/[^A-Za-z\-@_'`!\.\*]/g, ''); 
		});
		e.addEventListener('focusout', checkBlur);
	});

	numberPhoneForms.forEach(function(e) {
		e.addEventListener('input', function() {
			e.value = e.value.replace(/[^0-9\+]/g, '');
		});
		e.addEventListener('focusout', checkBlur);
	});
    ////////////////////////////////////////////////////////////
    const errorMessage = 'Что то пошло не так...';
    const loadMessage = 'Загрузка';
    const successMessage = 'Спасибо! Мы скоро с вами свяжемся';

    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const form3 = document.getElementById('form3');

    function clearInputs() {
        let allFormInputs = document.querySelectorAll('input');
        allFormInputs.forEach(function(item) {
            item.value = '';
        });
    }

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `
        font-size: 2rem;
        color: red;
    `;

    function postData(body) {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });
    }
    
    function formPostData(event, form) {
        event.preventDefault();
        form.appendChild(statusMessage);
        
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        let body = {};

        formData.forEach(function(value, key) {
            body[key] = value;
        });

        clearInputs();

        const popup = document.querySelector('.popup');

        postData(body)
            .then(function(response) {
                if(response.status !== 200) {
                    throw new Error('status network not 200.');
                }
                statusMessage.textContent = successMessage;
                setTimeout(function() {
                    statusMessage.textContent = '';
                    popup.style.display = 'none'; 
                }, 5000);
               
            })
            .catch(function(error) {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
    }	
    
    // хедер форма
    form1.addEventListener('submit', function(event) {
        event.preventDefault();
        form1.appendChild(statusMessage);
        let allFormInputs = form1.querySelectorAll('input');
        if(allFormInputs[0].value.length < 2 || allFormInputs[1].value.length < 3 || 
            allFormInputs[2].value.length > 12 || allFormInputs[2].value.length < 8) {
            statusMessage.textContent = 'Введите корректные данные!!!';
        } else {
            formPostData(event, form1);
        }
    });

    // футер форма
    form2.addEventListener('submit', function(event) {
        event.preventDefault();
        form2.appendChild(statusMessage);
        let allFormInputs = form2.querySelectorAll('input');
        if(allFormInputs[0].value.length < 2 || allFormInputs[1].value.length < 3 || 
            allFormInputs[2].value.length < 8 ||allFormInputs[2].value.length > 12 || 
            allFormInputs[3].value.length < 10) {
            statusMessage.textContent = 'Введите корректные данные!!!';
        } else {
            formPostData(event, form2);
        }
    });

    // модальное окно форма
    form3.addEventListener('submit', function(event) {
        event.preventDefault();
        form3.appendChild(statusMessage);
        let allFormInputs = form3.querySelectorAll('input');
        if(allFormInputs[0].value.length < 2 || allFormInputs[1].value.length < 8 || 
            allFormInputs[1].value.length > 12 || allFormInputs[2].value.length < 3) {
            statusMessage.textContent = 'Введите корректные данные!!!';
        } else {
            formPostData(event, form3);
        }
    });
}

export default sendForm;