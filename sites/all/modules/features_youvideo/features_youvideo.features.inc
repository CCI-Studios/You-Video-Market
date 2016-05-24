<?php
/**
 * @file
 * features_youvideo.features.inc
 */

/**
 * Implements hook_views_api().
 */
function features_youvideo_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function features_youvideo_image_default_styles() {
  $styles = array();

  // Exported image style: video_cover.
  $styles['video_cover'] = array(
    'name' => 'video_cover',
    'label' => 'video cover',
    'effects' => array(
      2 => array(
        'label' => 'Crop and scale manually',
        'help' => 'Crop and scale a user-selected area, respecting the ratio of the destination width and height.',
        'effect callback' => 'manualcrop_crop_and_scale_effect',
        'dimensions callback' => 'image_resize_dimensions',
        'form callback' => 'manualcrop_crop_and_scale_form',
        'summary theme' => 'manualcrop_crop_and_scale_summary',
        'module' => 'manualcrop',
        'name' => 'manualcrop_crop_and_scale',
        'data' => array(
          'width' => 335,
          'height' => 184,
          'upscale' => 0,
          'respectminimum' => 1,
          'onlyscaleifcrop' => 0,
          'style_name' => 'video_cover',
        ),
        'weight' => 0,
      ),
    ),
  );

  return $styles;
}

/**
 * Implements hook_node_info().
 */
function features_youvideo_node_info() {
  $items = array(
    'videos_content' => array(
      'name' => t('Videos content'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
