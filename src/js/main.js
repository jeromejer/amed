(function ($) {
    "use strict";
/*--
Commons Variables
-----------------------------------*/
var windows = $(window);

    
  
/*------------------------------
    sidebar Category Active
------------------------------*/
$('#side-menu-toggole li.has-sub.open').children('ul').slideDown();
$('#side-menu-toggole li.has-sub > a').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.parent('li').hasClass('open')) {
        $this.parent('li').removeClass('open');
        $this.siblings('ul').slideUp();
    } else {
        $this.parent('li').siblings('li').removeClass('open');
        $this.parent('li').siblings('li').children('ul').slideUp();
        $this.parent('li').addClass('open');
        $this.siblings('ul').slideDown();
    }
});
$('#side-menu-toggole > ul > li.has-sub > a').append('<span class="holder"></span>');

$('.file-tree ul li.is-folder').children('ul').slideUp();
$('.file-tree ul li.is-folder.open').children('ul').slideDown();
$('.file-tree ul li.is-folder > span').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.parent('li').hasClass('open')) {
        $this.parent('li').removeClass('open');
        $this.parent('li').children('ul').slideUp();
    } else {
        $this.parent('li').siblings('li').removeClass('open');
        $this.parent('li').siblings('li').children('ul').slideUp();
        $this.parent('li').addClass('open');
        $this.parent('li').children('ul').slideDown();
    }
});

/*------------------------
	Sticky Sidebar Active
-------------------------*/
$('#sticky-sidebar').theiaStickySidebar({
  // Settings
  additionalMarginTop: 0
})    
    
/*--
    Mobile Menu
-----------------------------------*/
var mobileWidth = 991;

var mainMenuNav = $('.aaa');
var mainMenuNavUl = mainMenuNav[0].querySelector('ul');
var navyMenuUl = document.querySelector('.bbb ul');

var navyList = Array.from(navyMenuUl.children);
var contactList = Array.from(mainMenuNav[0].querySelector('ul').children);

var navyInit = function () {
    console.log(navyList, contactList)
    if (document.body.clientWidth <= mobileWidth) {
        console.log('mob')
        navyMenuUl.innerHTML = '';
        contactList.forEach(function(li){
            navyMenuUl.appendChild(li)
        });
        mainMenuNavUl.innerHTML = '';
        navyList.forEach(function(li){
            mainMenuNavUl.appendChild(li)
        });
    } else {
        console.log('desc')
        navyMenuUl.innerHTML = '';
        navyList.forEach(function(li){
            navyMenuUl.appendChild(li)
        });
        mainMenuNavUl.innerHTML = '';
        contactList.forEach(function(li){
            mainMenuNavUl.appendChild(li)
        });
    }
}

navyInit();
window.addEventListener('resize', navyInit);


mainMenuNav.meanmenu({
    meanScreenWidth: mobileWidth,
    meanMenuContainer: '.mobile-menu',
    meanMenuClose: '<span class="menu-close"></span>',
    meanMenuOpen: '<span class="menu-bar"></span>',
    meanRevealPosition: 'right',
    meanMenuCloseSize: '0',
});
/*------------------------
	Clipboar Active
-------------------------*/
$('.cbtn').on('click', function() {
    var $this = $(this);
    var clipboard = new ClipboardJS('.cbtn');

    clipboard.on('success', function(e) {
      $this.text('Copied!');

      setTimeout(function() {
        $this.text('Copy');
      }, 2000);
    });
});
    
    
/*--
    Sliders
-----------------------------------*/
// Testimonial Slider (Content)
$('.testimonial-slider').slick({
    infinite: true,
    arrows: false,
    fade: false,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    
});

    
/*--
    Magnific Popup
-----------------------------------*/
$('.image-popup').magnificPopup({
    type: 'image',
});
$('.gallery-popup').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true,
    },
});
$('.video-popup').magnificPopup({
    type: 'iframe',
});

/*----------------------------------
    ScrollUp Active
-----------------------------------*/
$.scrollUp({
    scrollText: '<i class="arrow-up-icon"></i>',
    easingType: 'linear',
    scrollSpeed: 300,
    animation: 'fade'
});

/*--
	MailChimp
-----------------------------------*/
$('#mc-form').ajaxChimp({
	language: 'en',
	callback: mailChimpResponse,
	// ADD YOUR MAILCHIMP URL BELOW HERE!
	url: 'http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'

});
function mailChimpResponse(resp) {
	
	if (resp.result === 'success') {
		$('.mailchimp-success').html('' + resp.msg).fadeIn(900);
		$('.mailchimp-error').fadeOut(400);
		
	} else if(resp.result === 'error') {
		$('.mailchimp-error').html('' + resp.msg).fadeIn(900);
	}  
}
    
})(jQuery);	