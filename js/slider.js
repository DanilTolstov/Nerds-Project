const sliderControls = document.querySelectorAll(".slider-controls > button");
const sliderContent = document.querySelectorAll(".features-list > li");
if (sliderControls.length !== sliderContent.length) console.warn('Bad slider configuration')

function clearStyle(elements, style) {
    elements.forEach(function (value, key) {
        console.log(value, key)
        value.classList.remove(style);
    })
}

for (let i = 0; i < sliderControls.length; i++) {
    sliderControls[i].addEventListener('click', function (evt) {
        clearStyle(sliderControls, 'slider-control-active');
        clearStyle(sliderContent, 'features-item-active');
        sliderControls[i].classList.add('slider-control-active');
        sliderContent[i].classList.add('features-item-active');
    })
}


