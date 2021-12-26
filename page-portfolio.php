<?php
get_header();

$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
$args = array(
    'post_type'             => 'portfolio',
    'orderby'               => 'date',
    'order'                 => 'DESC',
    'post_status'           => 'publish',
    'posts_per_page'        => 10,
    'paged'                 => $paged,
);
$portfolioQuery = new WP_Query($args);
?>
<main id="primary" class="site-main" data-barba="container" data-barba-namespace="page-portfolio">
  <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <?php get_template_part( 'template-parts/split/split', 'entry-header' ); ?>
    <div class="entry-content mb-8 md:mb-12">
      <div class="px-6 md:px-8 mx-auto">
        <div class="masonry-wrapper">
          <div class="grid-sizer"></div>
<?php
if ($portfolioQuery->have_posts()) :
  while( $portfolioQuery->have_posts() ) : $portfolioQuery->the_post();
    echo '<div class="grid-item pb-6 md:p-2 lg:p-3">';
    get_template_part( 'template-parts/loop', 'portfolio' );
    echo '</div>';
  endwhile;
endif;
wp_reset_postdata();
?>
        </div>
      </div>
      <button class="appearnace-none bg-red-600 p-2 text-white border-0 hidden invisible" data-post="portfolio" data-security="<?php echo wp_create_nonce('load_more'); ?>" id="button-load-more">More</button>
    </div>
  </article>
</main>
<?php get_footer();?>