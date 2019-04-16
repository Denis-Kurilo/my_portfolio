$(document).ready(function() {
// maskedinput 
$(".contact-form__input-phone--maskedinput").mask("8(999)999-99-99");

//validate
  $('#contact-form').validate({
    rules: {
      names: { required: true},
      email: { required: true, email: true},
      phone: { required: false},
      message: { required: true},
      checkbox: { required: true},
      service: { required: true},
    },
    messages: {
      name: "Пожалуйста введите свое имя",
      names: "Пожалуйста введите свое имя",
      email: {
        required: "Пожалуйста введите свой email",
        email: "Email должен быть в формате name@domein.com. Возможно вы ввели email с ошибкой."
      },
      message: "Пожалуйста введите текст сообщения",

      checkbox: "Подтвердите что даете разрешение на обработку данных",
    },

    
    //Вызываем функцию ajaxFormSubmit
    submitHandler: function(form) {
      ajaxFormSubmit();
    }

  })

// Функция AJAX запрса на сервер
  function ajaxFormSubmit(){
    var string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку. 

    // Формируем ajax запрос
    $.ajax({
      type: "POST", // Тип запроса - POST
      url: "../src/php/mail.php", // Куда отправляем запрос
      data: string, // Какие даные отправляем, в данном случае отправляем переменную string
      
      // Функция если все прошло успешно
      success: function(html){
       $("input[type=text], textarea").val("");
        $('#answer').html(html).slideUp(5000);
        //$('#answer').html(html);
      }
    });

    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
    return false; 
  }

//validate
  $('#order-forms').validate({
    rules: {
      names: { required: true},
      email: { required: true, email: true},
      phone: { required: false},
      message: { required: true},
      checkbox: { required: true},
      service: { required: true},
    },
    messages: {
      name: "Пожалуйста введите свое имя",
      names: "Пожалуйста введите свое имя",
      email: {
        required: "Пожалуйста введите свой email",
        email: "Email должен быть в формате name@domein.com. Возможно вы ввели email с ошибкой."
      },
      message: "Пожалуйста введите текст сообщения",

      checkbox: "Подтвердите что даете разрешение на обработку данных",
    },

    
    //Вызываем функцию ajaxFormSubmit
    submitHandler: function(form) {
      ajaxFormSubmit2();
    }

  })


  // Функция AJAX запрса на сервер
  function ajaxFormSubmit2(){
    var string = $("#order-forms").serialize(); // Соханяем данные введенные в форму в строку. 

    // Формируем ajax запрос
    $.ajax({
      type: "POST", // Тип запроса - POST
      url: "../src/php/mail.php", // Куда отправляем запрос
      data: string, // Какие даные отправляем, в данном случае отправляем переменную string
      
      // Функция если все прошло успешно
      success: function(html){
       $("input[type=text], textarea").val("");
        $('#answer').html(html).slideUp(5000);
        //$('#answer2').html(html);
      }
    });

    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
    return false; 
  }

//typed	
  /*var typed = new Typed(".hero-typed-text", {
    	strings: [
    	"низкие цены.",
    	 "самые оптимальные сроки разработки.",
    	 "чистый код и адаптивная верстка.",
    	 "2 месяца бесплатной техподдержки."
    	 ],
    	typeSpeed: 80,
    	backSpeed: 40,
    	loop: true
  });	*/

//slide2id - плавная прокрутка по ссылкам внутри страницы
  $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
      highlightSelector:"nav a"
  });

  // MixItUp
$('#folio').mixItUp({
  selectors: {
    target: '.mix',
    filter: '.filter'
    //sort:'.sort'
  },
  load: {
    filter: 'all'
    //sort:'myorder:asc'
  },
  controls: {
    enable: 'true',
    activeClass: 'filter-block__button--active'
  },
  animation: {
    enable: true,
    effects: 'fade scale',
    duration: 1000
  },
  layout: {
    //display: 'block'
    containerClass: 'list'
  },
  /*callbacks: {
    onMixLoad: function(){
      alert('Helow World');
    },
    onMixStart: function(){
      alert('Start');
    },
    onMixEnd: function(){
      alert('End');
    }
  }*/
});

//progressBar
$(function() {
    $('.chart').easyPieChart({
        barColor: '#913838',
        //trackColor: '#fff'
        scaleColor: '#913838',
        lineWidth: 7,
        //size: 250
        //scaleLength: ''
        rotate: 0,
        animate: object = {
          duration: 2000,
          enabled: true
        }
    });
});

//wow.js
wow = new WOW(
  {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       300,       
    mobile:       true,       // default
    live:         true,       // default
  })
  wow.init();

//popup
  $('.popup-link').magnificPopup({
     
  });


// Мобильная навигация
var navToggleButton = $('.navigation__toggle');
var navToggleIcon = $('.navigation__toggle .fas');
var navBlock = $('.nav__list');
var navBlockLogo = $('.logo');
var navLink = $('.nav__list a');
var navBlockOpen = 'navigation__list--open';
var navBlockOpenLogo = 'logo--mobile-open';
var iconNavOpen = 'fa-bars';
var iconNavClose = 'fa-times';

navToggleButton.on('click', function(e){
  e.preventDefault();
  navBlock.toggleClass(navBlockOpen);
  navBlockLogo.toggleClass(navBlockOpenLogo);


//replacing-icon
 if(navToggleIcon.hasClass(iconNavOpen) ){
    navToggleIcon.removeClass(iconNavOpen);
    navToggleIcon.addClass(iconNavClose);
    navBlockLogo.addClass(navBlockOpenLogo);
  }else{
    navToggleIcon.addClass(iconNavOpen);
    navToggleIcon.removeClass(iconNavClose);
    navBlockLogo.removeClass(navBlockOpenLogo);
  }
})
 navLink.on('click', function(){
  navBlock.removeClass(navBlockOpen);
  navBlockLogo.removeClass(navBlockOpenLogo);

//replacing-icon
  if(navToggleIcon.hasClass(iconNavOpen) ){
    navToggleIcon.removeClass(iconNavOpen);
    navToggleIcon.addClass(iconNavClose);
  }else{
    navToggleIcon.addClass(iconNavOpen);
    navToggleIcon.removeClass(iconNavClose);
  }
})

navBlockLogo.on('click', function(){
  navBlock.removeClass(navBlockOpen);
  navBlockLogo.toggleClass(navBlockOpenLogo);

  if(navToggleIcon.hasClass(iconNavOpen) ){
    navToggleIcon.removeClass(iconNavOpen);
    navToggleIcon.addClass(iconNavClose);
  }else{
    navToggleIcon.addClass(iconNavOpen);
    navToggleIcon.removeClass(iconNavClose);
  }
})








/*var navToggleButton = $('.navigation__toggle');
var navToggleIcon = $('.navigation__toggle .fa');
var navBlock = $('.nav__list');
var navBlockOpen = 'navigation__list--open';
var menu = $('.nav ul');

var navLink = $('.nav__list a');
var iconNav = 'fa-bars';
var iconClose = 'fa-times';

  navToggleButton.on('click', function(e){
    e.preventDefault();
    navBlock.toggleClass(navBlockOpen);

    if ( navToggleIcon.hasClass(iconNav) ){
      navToggleIcon.removeClass(iconNav);
      navToggleIcon.addClass(iconClose);

    } else {
      navToggleIcon.removeClass(iconClose);
      navToggleIcon.addClass(iconNav);
    } 
$('.logo').toggleClass('logo--mobile-open');


    if(menu.hasClass('navigation__list--open')){
      $('body').css('overflow', 'hidden')
    }else{
      $('body').css('overflow', 'visible')
    }
  })

 


navLink.on('click', function(){

    if ( navBlock.hasClass(navBlockOpen) ) {
      if ( navToggleIcon.hasClass(iconNav) ){
        navToggleIcon.removeClass(iconNav);
        navToggleIcon.addClass(iconClose);
      } else {
        navToggleIcon.removeClass(iconClose);
        navToggleIcon.addClass(iconNav);
      }
    }

    navBlock.removeClass(navBlockOpen);
    
  })*/

//Animate arrow-top
$(function (){
  $("#arrow-top").hide();
  $(window).scroll(function(){
    if ($(this).scrollTop() > 400) {
      $("#arrow-top").fadeIn(3000);
    }else{
      $("#arrow-top").fadeOut();
    }
  });

  $("#arrow-top a").click(function(){
    $("body, html").animate({
      scrollTop:0
    }, 900);
    return false;
  }); 
});


//Прижать footer 
(function(){

    footer();

    $(window).resize(function() {
      footer();
    });

    function footer() {
      var docHeight = $(window).height(),
        footerHeight = $('footer').outerHeight(),
        footerTop = $('footer').position().top + footerHeight;

      if (footerTop < docHeight) {
        $('footer').css('margin-top', (docHeight - footerTop) + 'px');
      }
    }

  })();


});