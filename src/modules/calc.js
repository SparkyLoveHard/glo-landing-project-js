"use strict";

function calc() {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcDay = document.querySelector('.calc-day');
    const calcCount = document.querySelector('.calc-count');
    const totalValue = document.getElementById('total');

    const calcItem = calcBlock.querySelectorAll('input');

    calcItem.forEach(function(e) {
        e.addEventListener('input', function() {
            e.value = e.value.replace(/\D/, '');
        });
    });

    function countSum(price) {
        let total = 0;
        let countValue = 1;
        let dayValue = 1;

        const typeValue = calcType.options[calcType.selectedIndex].value;
        const squareValue = +calcSquare.value;

        if(calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }
        
        if(calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }

        if (typeValue && squareValue) {
            total = price * typeValue * squareValue * countValue * dayValue;
        } 

        totalValue.textContent = parseInt(total);
    }

    calcBlock.addEventListener('change', function(e) {
        const target = e.target;

        if(target.matches('select') || target.matches('input')) {
            countSum(100);
        }
    });
}

export default calc;