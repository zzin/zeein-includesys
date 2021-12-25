<?php
$post_date = get_the_date();
$terms = get_the_terms($post->ID, 'portfoliotax');
$classes = '';

echo '
  <div class="grid-item pb-6 md:p-2 lg:p-3'.$classes.'">
    <div class="card bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 opacity-0 transition-opacity">
      '.get_the_post_thumbnail($post->ID, 'large', array( 'class'=> 'card-img-top w-full' )).'
      <div class="card-body relative p-5">
        <div class="post-date absolute -top-3 left-2 h-7 py-1 px-4 bg-white dark:bg-gray-900 rounded-full text-sm text-gray-600">'.$post_date.'</div>
        <h5 class="card-title text-lg font-medium text-gray-900 dark:text-gray-200">'.get_the_title().'</h5>
        <ul class="text-sm my-2">
          <li class="text-gray-600">'.get_field('client').'</li>
          <li class="text-gray-500">'.get_field('platform').'</li>
        </ul>
        <div class="card-desc word-break-keep-all text-gray-600">'.get_the_content().'</div>
      </div>
    </div>
  </div>
';
?>