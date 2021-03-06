<?php

/**
 * @file
 * Renders an index page.
 *
 * Available variables:
 * $parent      Either the VI object or a $term object.
 * $list        The list of terms.
 * $pager_alpha A pager to filter by first letter. Used for alphabetical lists.
 * $pager       A regular pager or NULL if unnecessary.
 */
if ($parent->description) {
  echo '<p class="vocabindex-desc">' . $parent->description . '</p>';
}
echo $pager_alpha . $list . $pager_alpha . $pager;