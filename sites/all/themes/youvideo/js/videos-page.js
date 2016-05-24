(function($) 
	{

		$(function(){

			if ($.cookie("video_layout") == "grid")
			{
				$("body").addClass("grid");
			}
			else if ($.cookie("video_layout") == "list")
			{
				$("body").addClass("list");
			}
			
			$('.views-field-field-viedo-cover').click(video);
			$('a#watch').parent().parent().click(video);

			function video(event)
			{
			    event.preventDefault();
				$(this).parent().find(".views-field-nothing-1 .popup-wrapper,.popup-wrapper").addClass("overlay overlay-video").fadeIn();
			}

			if ($(".view-filters input ").css('font-family') === 'Lucida Grande')
			{
			  $('.view-filters ::-webkit-input-placeholder ').css({'background-position': 'calc(50% - 65px)'});
			}

			$("a#grid-icon").click(grid);
			$("a#list-icon").click(list);

			Drupal.behaviors.ExposedFilters = {
     		   attach: function(context) {         

					$('.views-field-field-viedo-cover').click(video);
					$('a#watch').parent().parent().click(video);
					$("a#grid-icon").click(grid);
					$("a#list-icon").click(list);

	 				if (navigator.userAgent.match(/(iPhone)/)) {
				 	  $('.mejs-overlay-button').css('display','none');
					}


					function grid(event)
					{
					 	event.preventDefault();

				 		$('body').removeClass('list').addClass('grid');
				 		$.cookie("video_layout", "grid", { path: '/' });	
					}

					function list(event)
					{
					  	event.preventDefault();
					  	$('body').removeClass('grid').addClass('list');
				 		$.cookie("video_layout", "list", { path: '/' });
					}

					$('.view-filters #edit-title').focus(function(){
						$('#edit-submit-videos-view,#edit-submit-mostrecent').fadeIn('slow');
					});

					$('.view-filters #edit-title').focusout(function(){
						$('#edit-submit-videos-view,#edit-submit-mostrecent').fadeOut();

					});
					
					 $('.close-button').click(function(){
					 	$('#block-webform-client-block-10,.overlay,#block-block-10,#block-block-11').fadeOut();
					 });

					 $(".mobile-menu p").once('toggleButton',function()
					{
						 $(".mobile-menu p").click(toggleButton);

					});
				 	function toggleButton() 
					{
						$('.view-category-menu-').slideToggle('slow');
					}
					
					 $('.close-button').click(function(){
					 	$('#block-webform-client-block-10,.overlay,#block-block-10,#block-block-11').fadeOut();
					 	$(this).parent().find('video')[0].player.pause();
					 	
					 });

			 }}

			function grid(event)
			{
			 	event.preventDefault();

		 		$('body').removeClass('list').addClass('grid');
		 		$.cookie("video_layout", "grid", { path: '/' });
	 		
			}

			function list(event)
			{
			  	event.preventDefault();
			  	$('body').removeClass('grid').addClass('list');
		 		$.cookie("video_layout", "list", { path: '/' });
			}

			$('.view-filters #edit-title').focus(function(){
				$('#edit-submit-videos-view,#edit-submit-mostrecent').fadeIn('slow');
			});

			$('.view-filters #edit-title').focusout(function(){
				$('#edit-submit-videos-view,#edit-submit-mostrecent').fadeOut();

			});
			
 
	});

		
}(jQuery));