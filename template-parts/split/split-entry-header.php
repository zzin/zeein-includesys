<?php
$bg = get_the_post_thumbnail_url(get_the_ID(), 'full');
?>
<header class="entry-header bg-center bg-no-repeat bg-cover relative pt-24 pb-10 md:pt-36 md:pb-12 mb-12 md:mb-32 before:inset-0 before:bg-black before:bg-opacity-50 before:absolute" style="background-image:url('<?=$bg?>')">
  <div class="container mx-auto px-6 md:px-8">
    <?php the_title( '<h1 class="entry-title pt-10 mb-10 md:pt-16 md:mb-16 font-semibold text-5xl md:text-7xl capitalize text-white dark:text-indigo-700">', '</h1>' ); ?>
  </div>
</header>