
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});



$(document).on('click', 'header nav a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


$('.flat-section .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
   responsive:{
        320:{
            items:1
        },
        640:{
            items:2
        },
        678:{
            items:3
        }
    }
})

 document.addEventListener(
                "DOMContentLoaded", () => {
                    new Mmenu( "#menu", {
                       "offCanvas": {
                          "position": "left"
                       },
                       "theme": "dark"
                    });
                }
            );