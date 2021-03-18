'use strict';
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changeImg from './modules/changeImg';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

// Таймер
countTimer('25 jul 2021');
// Меню
toggleMenu();

// Poppup
togglePopUp();
// табы
tabs();
// слайдер
slider();
// Секция наша команда
changeImg();
// Калькулятор
calc();
// AjAX FORM		
sendForm();