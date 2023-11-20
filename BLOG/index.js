$(document).ready(function() {
  
	window.scrollTo(0, 1);
	
	$('.js #menu-toggle').click(function (e) {
		$('#page_container').addClass('active');
		e.preventDefault();
    });
    
    $('#return').click(function(e){
    	$('#page_container').removeClass('active');
    	e.preventDefault();
    });
    
});
