<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package zeein
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
    />
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php
	wp_head();
	global $slug, $portfolioQuery;
	$slug = get_post_field('post_name', get_post());
	$addClass = 'bg-white dark:bg-black dark:text-gray-200';
	if ( is_page() ) {
		$addClass .= ' page-slug-' .$slug;
	}
	?>
	<script>
		(function() {
			document.documentElement.classList.remove('dark');
			// const checkbox = document.getElementById('toggleTheme');
			if (localStorage.getItem('theme') === 'dark') {
				document.documentElement.classList.add('dark');
				// checkbox.checked = true;
			}
		})();
	</script>
</head>

<body <?php body_class($addClass); ?> data-barba="wrapper">
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'zeein' ); ?></a>
	<div id="loading-wrap"></div>
	<header id="masthead" class="site-header fixed top-0 w-full z-10">
		<div class="container mx-auto px-6 md:px-8 relative h-100px">
			<div class="site-branding absolute top-1/2 -translate-y-1/2 z-10">
				<h1 class="site-title">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-logo block uppercase text-2xl md:text-4xl font-medium hover:text-inherit text-white hover:text-white visited:text-white" rel="home">include</a>
				</h1>
			</div><!-- .site-branding -->
			<div class="toggle-dark absolute top-1/2 -translate-y-1/2 right-16 opacity-0 transition-opacity z-10 select-none">
				<label for="toggleTheme" class="flex items-center cursor-pointer">
					<div class="relative">
						<input type="checkbox" id="toggleTheme" class="sr-only">
						<div class="block bg-gray-100 w-14 h-8 rounded-full dark:bg-gray-800"></div>
						<!-- icon : day -->
						<div class="icon-day absolute w-4 h-4 top-2 right-2">
							<svg width="100%" height="100%" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g><path d="M8,2c0.553,0 1,-0.448 1,-1c0,-0.552 -0.447,-1 -1,-1c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm0,14c0.553,0 1,-0.448 1,-1c0,-0.552 -0.447,-1 -1,-1c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm4.8,-8c0,2.651 -2.149,4.8 -4.8,4.8c-2.651,0 -4.8,-2.149 -4.8,-4.8c0,-2.651 2.149,-4.8 4.8,-4.8c2.651,-0 4.8,2.149 4.8,4.8Zm0.857,-4.243c-0.391,0.391 -1.024,0.391 -1.414,0c-0.391,-0.39 -0.391,-1.023 -0,-1.414c0.39,-0.39 1.023,-0.39 1.414,0c0.39,0.391 0.39,1.024 -0,1.414Zm-9.899,9.9c-0.391,0.39 -1.024,0.39 -1.414,-0c-0.391,-0.391 -0.391,-1.024 -0,-1.414c0.39,-0.391 1.023,-0.391 1.414,-0c0.391,0.39 0.391,1.023 -0,1.414Zm10.242,-5.657c0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1c-0.552,0 -1,0.448 -1,1Zm-14,0c-0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1c-0.552,0 -1,0.448 -1,1Zm12.243,5.657c-0.391,-0.391 -0.391,-1.024 0,-1.414c0.391,-0.391 1.024,-0.391 1.414,-0c0.391,0.39 0.391,1.023 0,1.414c-0.39,0.39 -1.023,0.39 -1.414,-0Zm-9.9,-9.9c-0.39,-0.39 -0.39,-1.023 0,-1.414c0.391,-0.39 1.024,-0.39 1.415,0c0.39,0.391 0.39,1.024 -0,1.414c-0.391,0.391 -1.024,0.391 -1.415,0Z" style="fill:#ffb800;"/></g></svg>
						</div>
						<!-- icon : night -->
						<div class="icon-night absolute w-4 h-4 top-2 left-2">
							<svg width="100%" height="100%" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M14.739,11.217c-0.464,0.084 -0.942,0.127 -1.43,0.127c-4.418,0 -8,-3.581 -8,-8c-0,-0.791 0.115,-1.556 0.329,-2.278c-2.168,1.19 -3.638,3.494 -3.638,6.142c-0,3.866 3.134,7 7,7c2.375,-0 4.473,-1.183 5.739,-2.991Z" style="fill:#ffb800;"/></svg>
						</div>

						<div class="dot absolute left-1 top-1 bg-gray-400 w-6 h-6 rounded-full dark:bg-gray-600"></div>
					</div>
				</label>
			</div>
			<nav id="site-navigation" class="main-navigation">
				<a href="https://smartstore.naver.com/veverywhere" target="_blank" class="goto-shop">
					<i class="icon icon--shop"></i>
				</a>
				<button class="menu-toggle h-8 w-8 appearnace-none border-0 block absolute right-4 top-1/2 -translate-y-1/2 z-20" aria-controls="primary-menu" aria-expanded="false">
					<span class="bg-gray-900 dark:bg-gray-200"></span>
					<span class="bg-gray-900 dark:bg-gray-200"></span>
					<span class="bg-gray-900 dark:bg-gray-200"></span>
				</button>
				<div class="menu-wrap">
				<?php
				wp_nav_menu(
					array(
						'theme_location' 		=> 'menu-1',
						'menu_id'        		=> 'primary-menu',
						'walker'						=> new cssmenu_walker_nav_menu(),
					)
				);
				?>
				</div>
			</nav><!-- #site-navigation -->
		</div>
	</header><!-- #masthead -->