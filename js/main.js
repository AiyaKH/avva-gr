"use strict"

const titles = document.querySelectorAll('.accordion_title');
const contents = document.querySelectorAll('.accordion_content');

titles.forEach(item => item.addEventListener('click',() => {
    const activeContent = document.querySelector('#' + item.dataset.tab);

    if (activeContent.classList.contains('active')) {
        activeContent.classList.remove('active');
        item.classList.remove('active');
        activeContent.style.maxHeight = 0;
    } 
    else {
        contents.forEach ( Element => {
            Element.classList.remove('active');
            Element.style.maxHeight = 0;
        });

        titles.forEach(Element => Element.classList.remove('active'));

        item.classList.add('active');
        activeContent.classList.add('active');
        activeContent.style.maxHeight = activeContent.scrollHeight + "px";
    }
}))

// document.querySelector('[data-tab="tab-3"]').classList.add('active');
// document.querySelector('#tab-1').classList.add('active');
// document.querySelector('#tab-1').style.maxHeight = document.querySelector('#tab-1').scrollHeight + "px";


const images = document.querySelectorAll('.slider-img');
const controlls = document.querySelectorAll('.controlls');
let imageIndex = 0;

function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
}

controlls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
            let index = imageIndex - 1;

            if (index < 0) {
                index = images.length - 1;
            }

            show(index);
        } else if (event.target.classList.contains('next')) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    })
})

show(imageIndex);

const slider = document.querySelector('.slider-cont');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();