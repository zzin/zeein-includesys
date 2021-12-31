<?php
global $slug;
$bg = get_the_post_thumbnail_url(get_the_ID(), 'full');
?>
<header class="entry-header bg-center bg-no-repeat bg-cover relative pt-24 pb-10 md:pt-36 md:pb-12 mb-12 md:mb-32 before:inset-0 before:bg-black before:bg-opacity-50 before:absolute" style="background-image:url('<?=$bg?>')">
  <div class="container mx-auto px-6 md:px-8 relative">
    <div class="pt-10 mb-10 md:pt-16 md:mb-16">
    <h1 class="entry-title font-semibold text-5xl md:text-7xl capitalize text-white dark:text-indigo-700 inline-flex" style="line-height: .75; padding-bottom: .125rem;">
      <?php if ($slug === 'about-us') :?>
        <div data-char=".">A</div>
        <div data-char="B">R</div>
        <div data-char="O">T</div>
        <div data-char=".">U</div>
        <div data-char="T">O</div>
        <div data-char=".">&nbsp;</div>
        <div data-char="U">B</div>
        <div data-char=".">S</div>
      <?php elseif ($slug === 'portfolio') : ?>
        <div data-char="P">G</div>
        <div data-char=".">O</div>
        <div data-char="R">S</div>
        <div data-char=".">T</div>
        <div data-char="F">L</div>
        <div data-char="O">D</div>
        <div data-char=".">L</div>
        <div data-char=".">I</div>
        <div data-char="O">C</div>
      <?php elseif ($slug === 'contact') : ?>
        <div data-char=".">C</div>
        <div data-char="O">C</div>
        <div data-char=".">N</div>
        <div data-char=".">T</div>
        <div data-char="A">B</div>
        <div data-char="C">O</div>
        <div data-char=".">T</div>
      <?php endif; ?>
    </h1>
    </div>
  </div>
</header>