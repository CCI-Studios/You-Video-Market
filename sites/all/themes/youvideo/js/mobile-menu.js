(function($) 
	{

	$(function(){


	Drupal.behaviors.ExposedFilters = {
		attach: function(context) {   
		$(".mobile-menu p").once('toggleButton',function()
		{
			 $(".mobile-menu p").click(toggleButton);

		});		

	}}

	$(".mobile-menu p").click(toggleButton);
	function toggleButton() 
		{
			$('.view-category-menu-').slideToggle('slow');
		}

	});

		
}(jQuery));