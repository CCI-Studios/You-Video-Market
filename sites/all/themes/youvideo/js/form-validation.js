(function($) 
	{

		$(function(){

		$("#block-webform-client-block-10 .form-submit").click(function(event) {

		var email = $("#block-webform-client-block-10 .form-item-submitted-email-newsletter-email-address input").val();
  
		var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		var valid = emailReg.test(email);

		var categories = $("#edit-submitted-email-newsletter-selection input:checked").length;
		var agree = $("#block-webform-client-block-10 #edit-submitted-agree-1").prop('checked');


		if ( !valid || agree==false || categories==false ) 
		{	
		 event.preventDefault();
		 var div="<div id=\"error\"><p>Please fill all required fields</p></div>"
		 $('#error').remove();
		 $("#block-webform-client-block-10").append(div);
		 return false;
		}
		else
		{	
			 console.log('true');
			return true;
		} 
		});

	});

		
}(jQuery));