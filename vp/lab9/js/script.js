//Задание 1
var text = document.querySelector('.text');

var addBG = document.querySelector('.add-button-bg');

addBG.addEventListener('click', function() {
    text.classList.add('background-text');
});

var removeBG = document.querySelector('.remove-button-bg');

removeBG.addEventListener('click', function() {
    text.classList.remove('background-text');
}); 

var addBorder = document.querySelector('.add-button-border');

addBorder.addEventListener('click', function() {
    text.classList.add('border-text');
});

var removeBorder = document.querySelector('.remove-button-border');

removeBorder.addEventListener('click', function() {
    text.classList.remove('border-text');
});

var addLargeFont = document.querySelector('.large-button-font');

addLargeFont.addEventListener('click', function() {
    text.classList.add('large-font');
});

var removeLargeFont = document.querySelector('.small-button-font');

removeLargeFont.addEventListener('click', function() {
    text.classList.remove('large-font');
});

//Задание 2
var largeImages = document.querySelectorAll('.large-img');
var smallImages = document.querySelectorAll('.small-img');

smallImages[0].addEventListener('click', function(event) {
    event.preventDefault();
    largeImages[2].classList.remove('active');
    largeImages[1].classList.remove('active');
    largeImages[0].classList.add('active');
});

smallImages[1].addEventListener('click', function(event) {
    event.preventDefault();
    largeImages[2].classList.remove('active');
    largeImages[1].classList.add('active');
});

smallImages[2].addEventListener('click', function(event) {
    event.preventDefault();
    largeImages[2].classList.add('active');
});
