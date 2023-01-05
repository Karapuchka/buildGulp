'use strict'

// Анимация при загрузке страницы
document.addEventListener('DOMContentLoaded', ()=>{

    gsap.from('.menu__list__item',{
        delay: 1,
        duration: 1.8,
        y: 30,
        opacity: 0,
        ease: 'back.out(4)',
        stagger: {
            from: 'left',
            each: .5,
        }
    })
})

let detect = new MobileDetect(window.navigator.userAgent)

const sliderLine = document.querySelector('.slider__line');
const sliderBtns = document.querySelector('.slider__btns');
const slider     = document.querySelector('.slider');
const menu       = document.querySelector('.menu');

// Пермены для работы со свайпом слайдера
let moveSlider = 0; // Число, на которое прибавляется или отнимается положение линии слайдера по оси X
let itemWidth  = sliderLine.children[0].offsetWidth // Длина одного элемента слайдера
let lineStart  = 0; // Начальная точнка текущего слайда
let lineEnd    = itemWidth; // Конечная точка текущего слайда
let startX     = 0; // Стартовое положение на оски X при нажатии по экрану
let endX       = 0; // Конечное положение на оски X при отжатии от экрана

// Проверка устройства входа (В этом фрагменте присваиваем анимацию для кнопок)
if(!detect.mobile()){
    
    document.onpointerover = (event)=>{

        if(event.target.classList.contains('btn')){

            event.target.classList.add('btn-active')
        }
    }

    document.onpointerout = (event)=>{

        if(event.target.classList.contains('btn')){

            event.target.classList.remove('btn-active')
        }
    }

} else {

    document.onclick = (event)=>{
        if(event.target.classList.contains('btn')){

            event.target.classList.add('btn-active');

            setTimeout(()=>{
                
                event.target.classList.remove('btn-active')
            }, 700)
        }
    }
}

// Событие начала свайпа (момент нажатия на экран)
slider.ontouchstart = (event)=>{

    startX = event.touches[0].clientX; //Необходим на определения в какую сторону производится свайп
}

// Момент свайпа (самого движения пальца)
slider.ontouchmove = (event)=>{

    endX = event.touches[0].clientX;

    if(moveSlider > 0 && endX > startX){

        moveSlider -= 4;

        sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';
        
    }

    if(moveSlider < sliderLine.offsetWidth - itemWidth && endX < startX) {

        moveSlider += 4;

        sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';
    }

}

// События при окончании свайпа (момент, когда пользователь отжимает палец от экрана)
slider.ontouchend = ()=>{

    if(startX > itemWidth / 2 && lineStart < sliderLine.offsetWidth - itemWidth){

        if(endX < itemWidth / 2){

            moveSlider = lineEnd;

            sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';

            lineStart += sliderLine.children[0].offsetWidth;
            lineEnd   += sliderLine.children[0].offsetWidth;

        } else{

            moveSlider = lineStart;

            sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';
        }
    }

    if(startX < itemWidth / 2 && lineEnd >= itemWidth){

        if(endX > itemWidth / 2){

            moveSlider = lineStart;

            sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';

            lineStart -= sliderLine.children[0].offsetWidth;
            lineEnd   -= sliderLine.children[0].offsetWidth;
            
        } else {

            moveSlider = lineEnd;

            sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';
        }
    }
}

// События для кнопок слайдера
sliderBtns.onclick = (event)=>{

    if(event.target.closest('#slider-btn-one') && moveSlider > 0){

        lineStart = 0;
        lineEnd   = sliderLine.children[0].offsetWidth;

        moveSlider = 0;

        sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';
        
        sliderBtns.children[0].classList.add('slider__btns__btn-active');
        sliderBtns.children[1].classList.remove('slider__btns__btn-active');
        sliderBtns.children[2].classList.remove('slider__btns__btn-active');
    }

    if (event.target.closest('#slider-btn-two') && moveSlider < sliderLine.offsetWidth / 2) {

        lineStart = sliderLine.children[0].offsetWidth;
        lineEnd   = sliderLine.children[0].offsetWidth * 2;

        moveSlider = sliderLine.children[0].offsetWidth;

        sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';

        sliderBtns.children[0].classList.remove('slider__btns__btn-active');
        sliderBtns.children[1].classList.add('slider__btns__btn-active');
        sliderBtns.children[2].classList.remove('slider__btns__btn-active');
    }

    if (event.target.closest('#slider-btn-tree') && moveSlider < sliderLine.offsetWidth / 2) {

        lineStart = sliderLine.children[0].offsetWidth * 2;
        lineEnd   = sliderLine.children[0].offsetWidth * 3;

        moveSlider = sliderLine.children[0].offsetWidth * 2;

        sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';

        sliderBtns.children[0].classList.remove('slider__btns__btn-active');
        sliderBtns.children[1].classList.remove('slider__btns__btn-active');
        sliderBtns.children[2].classList.add('slider__btns__btn-active');
    }
}

menu.onclick = (event)=>{

    let idItem = event.target.getAttribute('id');

    switch (idItem) {

        case 'menu-item-timer':
            
            lineStart = 0;
            lineEnd   = sliderLine.children[0].offsetWidth;

            moveSlider = 0;

            sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';

            sliderBtns.children[0].classList.add('slider__btns__btn-active');
            sliderBtns.children[1].classList.remove('slider__btns__btn-active');
            sliderBtns.children[2].classList.remove('slider__btns__btn-active');

            closingMenu();

            break;

        case 'menu-item-stopwatch':

            lineStart = sliderLine.children[0].offsetWidth;
            lineEnd   = sliderLine.children[0].offsetWidth * 2;
    
            moveSlider = sliderLine.children[0].offsetWidth;
    
            sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';

            sliderBtns.children[0].classList.remove('slider__btns__btn-active');
            sliderBtns.children[1].classList.add('slider__btns__btn-active');
            sliderBtns.children[2].classList.remove('slider__btns__btn-active');

            closingMenu();
            
            break;

        case 'menu-item-options':

            lineStart = sliderLine.children[0].offsetWidth * 2;
            lineEnd   = sliderLine.children[0].offsetWidth * 3;

            moveSlider = sliderLine.children[0].offsetWidth * 2;

            sliderLine.style.transform = 'translateX('+ -moveSlider + 'px)';
            
            sliderBtns.children[0].classList.remove('slider__btns__btn-active');
            sliderBtns.children[1].classList.remove('slider__btns__btn-active');
            sliderBtns.children[2].classList.add('slider__btns__btn-active');
            
            closingMenu();

            break;
    
        default:

            console.log('Error: не попал по кнопке. С мужчинами такое часто случается, не загоняйся по этому поводу ( ´･･)ﾉ(._.`)');

            break;
    }
}

function closingMenu(){
    gsap.to('.menu', {
        opacity: 0,
        duration: .7,
    })

    setTimeout(()=>{
        gsap.to('.menu', {
            display: 'none',
        })
    })
}