'use strict'

let detect = new MobileDetect(window.navigator.userAgent)

const slider = document.querySelector('.slider');
const sliderLine = document.querySelector('.slider__line');
const sliderBtn = document.querySelector('.slider__btn');

let moveSlider = 0; // Число, на которое прибавляется или отнимается положение линии слайдера по оси X
let halfWidth = sliderLine.children[0].offsetWidth / 2; // Половина от длины элемента слайдера
let startX = 0; // Стартовое положение X при нажатии на экран
let lastValueX = 0; // Произведение srartX и текущего значение clientX

slider.ontouchstart = (event)=>{

    startX = event.touches[0].clientX;
}

slider.ontouchmove = (event)=>{

    if(moveSlider < sliderLine.children[0].offsetWidth && (event.touches[0].clientX - startX) < lastValueX){

        lastValueX = event.touches[0].clientX - startX;
        moveSlider += 4;

        sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';

        if(moveSlider > halfWidth){ // Триггер на недотягивание, если true, то слайдер вернётся на первоначальное значение

            lastValueX = 0;

            moveSlider = sliderLine.children[0].offsetWidth;

            sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';
        }
    } else{
        lastValueX = event.touches[0].clientX - startX;

        moveSlider -= 4;

        sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';

        if(moveSlider < halfWidth){ // Триггер на недотягивание, если true, то слайдер вернётся на первоначальное значение

            lastValueX = 0;

            moveSlider = 0;

            sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';
        }
    }
}

slider.ontouchend = ()=>{

    if(moveSlider < halfWidth){ // Триггер на недотягивание, если true, то слайдер вернётся на первоначальное значение

        moveSlider = 0;

        lastValueX = 0;

        sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';

    } else{

        lastValueX = 0;

        moveSlider = sliderLine.children[0].offsetWidth;

        sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';
    }
}

sliderBtn.onclick = (event)=>{
    if(event.target.closest('#prev') && moveSlider > 0){

        moveSlider -= sliderLine.children[0].offsetWidth;

        sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';
        
    }

    if (event.target.closest('#next') && moveSlider < sliderLine.offsetWidth / 2) {

        moveSlider += sliderLine.children[0].offsetWidth;

        sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';
    }
}