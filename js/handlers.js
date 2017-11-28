$(document).ready(function(){
	
	// Initialize Tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// Handle smooth scroll
	$('.navbar a, footer a[href="#myPage"], #about a[href="#work"]').on('click', function(e){
		if(this.hash !==''){
			e.preventDefault();
			
			var hash = this.hash;
			
			$('html, body').animate({
			
			scrollTop: $(hash).offset().top
			},900, function(){
			
				window.location.hash = hash;
			});
		
		};
	
	
	});
	
	// show title one letter by one letter
	var title = 'A self-taught web developer';
	
	var index = 0;
	
	var showMessage = function(){

		var myVar = setInterval(function(){
			
			if (index !== title.length) {
				
					$('#myPage p .text').append('<em>'+ title[index]+'</em>');
					index++;
	
			}
				
			else{
				clearInterval(myVar);
				$('#myPage p .text').fadeOut(3000);
				setTimeout(function(){
					$('#myPage p .text').html('');
					$('#myPage p .text').show();
					index = 0 ;
					showMessage();
				},3100);
			}
		}, 150);
		
	}
	
	showMessage();
		
});