// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});

$(window).load(function() {
	$(".medium-box").click(function(){
	    window.location = $(this).find("a:first").attr("href");	    
	    return false;
	});
});
