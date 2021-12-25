<?php

if( !function_exists('wh_log') ) :
  function wh_log($log_msg)
  {
    $baseFolder = trailingslashit( wp_upload_dir()['basedir'] )."log";
    if (!file_exists($baseFolder)) {
      wp_mkdir_p( $baseFolder );
    }
    $log_file_data = $baseFolder.'/log_' . date('d-M-Y') . '.log';
    // if you don't add `FILE_APPEND`, the file will be erased each time you add a log
    file_put_contents($log_file_data, print_r($log_msg, true) . "\n", FILE_APPEND);
  }
endif;


function zeein_loadmore_ajax_handler(){
  $args = json_decode( stripslashes( $_POST['query'] ), true );
  $args['paged'] = $_POST['page'] + 1; // we need next page to be loaded
  query_posts( $args );
  if ( have_posts() ) :
    while(have_posts()): the_post();
      get_template_part( 'template-parts/loop', 'work' );
    endwhile;
  endif;
  wp_reset_query();
  wp_die();
}


add_action('wp_ajax_loadmore', 'zeein_loadmore_ajax_handler'); // wp_ajax_{action}
add_action('wp_ajax_nopriv_loadmore', 'zeein_loadmore_ajax_handler'); // wp_ajax_nopriv_{action}
?>