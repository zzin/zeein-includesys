<?php
$terms = get_the_terms($post->ID, 'portfoliotax');
$img = get_the_post_thumbnail_url($post->ID, 'large', array( 'class'=> 'card-img-top w-full' ));
$classes = '';
?>
<div class="card-portfolio border border-gray-100 p-8 rounded-md max-w-md dark:border-gray-800">
  <h3 class="text-base text-gray-800 mb-2 dark:text-gray-200"><?=get_the_title();?></h3>
  <div class="meta-date text-gray-400 text-sm dark:text-gray-600"><?=get_the_date();?></div>
  <div class="meta-tag text-gray-400 text-xs mt-6">
    <span class="border border-gray-200 inline-block px-2 py-1 rounded-sm mr-1 dark:border-gray-800 dark:text-gray-400">ajx5</span>
    <span class="border border-gray-200 inline-block px-2 py-1 rounded-sm mr-1 dark:border-gray-800 dark:text-gray-400">webtob</span>
    <span class="border border-gray-200 inline-block px-2 py-1 rounded-sm mr-1 dark:border-gray-800 dark:text-gray-400">zeus</span>
    <span class="border border-gray-200 inline-block px-2 py-1 rounded-sm mr-1 dark:border-gray-800 dark:text-gray-400">oracle11g</span>
  </div>
  <figure class="aspect-video relative mt-6">
    <div class="img inset-0 rounded-xl absolute bg-no-repeat bg-cover bg-top shadow-lg dark:shadow-indigo-500/30" style="background-image:url('<?=$img;?>')"></div>
  </figure>
  <div class="content text-sm text-gray-600 mt-6 dark:text-gray-400"><?=nl2br(get_the_content());?></div>
  <div class="flex justify-between items-center mt-6">
    <div class="client text-xs text-gray-400 dark:text-gray-600"><?=get_field('client');?></div>
    <span class="bg-gray-100 text-xs text-gray-400 inline-block py-2 px-3 rounded-md dark:bg-gray-900">Web</span>
  </div>
</div>