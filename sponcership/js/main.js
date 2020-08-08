 //water ripple effect
 $('.bg-overly').ripples();
    $('.slider-data').ripples();
    $('.carousel-control-prev').ripples();
    $('.carousel-control-next').ripples();
	
	//change styling on scroll
$(document).ready(function(){
   $(window).scroll(function() { // check if scroll event happened
     if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
       $(".navigation").css("background", "rgb(52, 58, 64)"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
     } else {
       $(".navigation").css("background", "transparent"); // if not, change it back to transparent
     }
   });
 });
 
 //accordian
 $('.collapse').on('shown.bs.collapse', function(){
	$(this).parent().find('.fa-plus').removeClass('fa-plus').addClass('fa-minus')
	}).on('hidden.bs.collapse', function(){
	$(this).parent().find('.fa-minus').removeClass('fa-minus').addClass('fa-plus') });
	


//decrease time of carousel
$('.carousel').carousel({
  interval: 4000
})

//wow animation
wow = new WOW(
      {
        animateClass: 'animated'

      }
    );
    wow.init();
	
//counter
   jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    });
  
  
  //scroll

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
