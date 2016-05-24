(function($) 
	{

		$(function(){

			
			$('input#edit-submitted-email-newsletter-email-address').attr('placeholder','Email*');

			if($('#block-views-videos-view-block-1').length > 0)
			{
				$('.page-taxonomy-term #content').css('display','none');
			}

			$("#block-block-4").click(function(e) 
			{	

				var win_width=$( window ).width();

				if(win_width>500)
				{
					$('#block-webform-client-block-10').fadeIn();
					$('#block-webform-client-block-10').addClass('overlay');	
				}

				else
				{
					window.location.href = "/sign";
				}
				
			});

			 $('.close-button').click(function(){
			 	$('#block-webform-client-block-10,.overlay,#block-block-10,#block-block-11').fadeOut();
			 	$(this).parent().find('video')[0].player.pause();
			 	
			 });
			
			$(document).mouseup(function (e)
			{	
				var container =$('#block-webform-client-block-10,.overlay,#block-block-10,#block-block-11');
				if (!container.is(e.target)
					        && container.has(e.target).length === 0) 
					    {
					    	console.log("click outside popup");
					        container.fadeOut();
    					 	container.find('video').each(function(i){
    					 		console.log("stopping video "+i);
    					 		this.player.pause();
    					 	});

					    }
			});

		
			if($("#block-webform-client-block-9").length > 0)
			{	
				$('#block-webform-client-block-9 p').css('display','none');
			}

			
			if (document.location.href.indexOf('submitted') > -1  )
			{
				$('#block-block-10').fadeIn();
				$('#block-block-10').addClass('overlay');	
			}

			if (document.location.href.indexOf('contact-form-submit') > -1  )
			{
				$('#block-block-11').fadeIn();
				$('#block-block-11').addClass('overlay');	
			}

			$('#block-block-3').click(function(){

				window.location.href = "/contact";

			});

			$('video').mediaelementplayer({

				  iPhoneUseNativeControls: false, 
			});
			
 			if (navigator.userAgent.match(/(iPhone)/)) {
			   $('.mejs-overlay-button').css('display','none');
}
	});

		
}(jQuery));