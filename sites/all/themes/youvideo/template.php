<?php
// Add some cool text to the search block form
function youvideo_form_alter(&$form, &$form_state, $form_id) {
  
    // HTML5 placeholder attribute

    $form['title']['#attributes']['placeholder'] = t('SEARCH');
 
}

function youvideo_preprocess_page()
{
	drupal_add_library('system', 'jquery.cookie');
}

function youvideo_mediaelement_video(&$var)
{
	$var['attributes']['preload'] = 'none';
	return theme_mediaelement_video($var);
	
}
?>
			