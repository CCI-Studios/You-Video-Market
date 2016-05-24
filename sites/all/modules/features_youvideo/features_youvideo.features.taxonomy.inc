<?php
/**
 * @file
 * features_youvideo.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function features_youvideo_taxonomy_default_vocabularies() {
  return array(
    'newsletter' => array(
      'name' => 'Newsletter1',
      'machine_name' => 'newsletter',
      'description' => 'Simplenews newsletter categories.',
      'hierarchy' => 0,
      'module' => 'simplenews',
      'weight' => 0,
      'rdf_mapping' => array(
        'rdftype' => array(
          0 => 'skos:ConceptScheme',
        ),
        'name' => array(
          'predicates' => array(
            0 => 'dc:title',
          ),
        ),
        'description' => array(
          'predicates' => array(
            0 => 'rdfs:comment',
          ),
        ),
      ),
    ),
  );
}
