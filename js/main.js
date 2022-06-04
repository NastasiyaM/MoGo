$(function(){
    $('.header__slider').slick({
        arrows: false,    
        dots: true,
        fade: true,   
    });
    $('.quote__slider').slick({
      arrows:true, // показать стрелки
      dots:false, // не показывать точки
    });
    
    $('.testimonial__slider').slick({
      arrows:true, // показать стрелки
      dots:false, // не показывать точки
    });
    

});

// начало аккордиона
var acc = document.getElementsByClassName("service-2__accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {

var panel = this.nextElementSibling;
if (panel.style.maxHeight){
  panel.style.maxHeight = null;
} else {
  let active = document.querySelectorAll(".service-2__items .service-2__accordion.active");
  for(let j = 0; j < active.length; j++){
    active[j].classList.remove("active");
    active[j].nextElementSibling.style.maxHeight = null;
  }
  this.classList.toggle("active");
  panel.style.maxHeight = panel.scrollHeight + "px";
}
});
}
// конец аккордеона


// начало бургер меню
function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.menu__btn', '.menu__lines');
  let links = menu.find('.menu__link');
  let overlay = menu.find('.menu__overlay');
  
  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  
  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
  
  function toggleMenu(){
    menu.toggleClass('burger-menu_active');
    
    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}

burgerMenu('.header__menu');