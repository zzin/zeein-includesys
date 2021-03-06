<?php get_header();?>
<main id="primary" class="site-main" data-barba="container" data-barba-namespace="page-about-us">
  <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <?php get_template_part( 'template-parts/split/split', 'entry-header' ); ?>
    <div class="entry-content">
      <div class="container mx-auto px-6 md:px-8">
        <div class="grid grid-cols-2 gap-10 mb-10">
          <div class="py-5">
            <figure>
              <img src="<?=get_template_directory_uri()?>/assets/public/images/logo-color.svg" alt="color logo">
            </figure>
          </div>
          <div>
            <h2 class="text-xl md:text-3xl font-semibold mb-4 md:mb-6 word-break-keep-all">프로그램을 처음 학습할 때 접하게 되는 C언어</h2>
            <div class="text-base md:text-xl word-break-keep-all">
              <div class="md:leading-10 tracking-tight">
                프로그램을 처음 학습할 때 C언어를 접하게 됩니다.<br />
                그리고, 코드 첫 줄에 #include를 적어주어 기본으로 필요한 함수를 명시합니다.<br />
                인클루드시스는 초심의 자세로 "고객에게 꼭 필요한 파트너"라는 의지를 담아 #include를 형상화 하였습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-6 md:px-8">
        <div class="">
          <h2 class="text-xl md:text-3xl font-semibold mb-6 md:mb-10 word-break-keep-all">프로그램을 처음 학습할 때 접하게 되는 C언어</h2>
          <div class="text-lg md:text-2xl word-break-keep-all">
            <div class="md:leading-10 tracking-tight">
              프로그램을 처음 학습할 때 C언어를 접하게 됩니다.<br />
              그리고, 코드 첫 줄에 #include를 적어주어 기본으로 필요한 함수를 명시합니다.<br />
              인클루드시스는 초심의 자세로 "고객에게 꼭 필요한 파트너"라는 의지를 담아 #include를 형상화 하였습니다.
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-6 md:px-8 my-32">
        <div class="grid grid-cols-4 gap-10 font-semibold text-center">
          <div>
            <div class="num-up text-8xl" data-num="12">0</div>
            <p>클라이언트</p>
          </div>
          <div>
            <div class="num-up text-8xl" data-num="126">0</div>
            <p>프로젝트</p>
          </div>
          <div>
            <div class="num-up text-8xl" data-num="35">0</div>
            <p>업력</p>
          </div>
          <div>
            <div class="flex justify-center items-center text-5xl"><span class="num-up text-8xl" data-num="10">0</span>+</div>
            <p>평균 경력</p>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-6 md:px-8">
        <div class="grid grid-cols-2 mb-20 md:mb-40 gap-10">
          <div>
            <figure>
              <img src="<?=bloginfo('template_url');?>/assets/public/images/img-aboutus-glow.jpg" alt="성장하는 회사">
            </figure>
          </div>
          <div>
            <h2 class="text-xl md:text-3xl font-semibold mb-6 md:mb-10 word-break-keep-all">통신사 서비스를 구축, 운영 해오며 성장 하였습니다.</h2>
            <div class="text-base md:text-xl word-break-keep-all">
              <dl class="grid grid-cols-1 md:grid-cols-12">
                <dt class="grid-cols-1 md:col-span-2 font-semibold">설립일</dt>
                <dd class="grid-cols-1 md:col-span-10 md:mb-3 pb-4 md:pb-0 border-b border-gray-200 dark:border-gray-800 mb-4 md:border-0">2011년 1월 1일</dd>
                <dt class="grid-cols-1 md:col-span-2 font-semibold">대표이사</dt>
                <dd class="grid-cols-1 md:col-span-10 md:mb-3 pb-4 md:pb-0 border-b border-gray-200 dark:border-gray-800 mb-4 md:border-0">조상현</dd>
                <dt class="grid-cols-1 md:col-span-2 font-semibold">주소</dt>
                <dd class="grid-cols-1 md:col-span-10 md:mb-3 pb-4 md:pb-0 border-b border-gray-200 dark:border-gray-800 mb-4 md:border-0">서울특별시 마포구 월드컵북로 8길 21, 인클루드빌딩 3층</dd>
                <dt class="grid-cols-1 md:col-span-2 font-semibold">업종/형태</dt>
                <dd class="grid-cols-1 md:col-span-10 md:mb-3 pb-4 md:pb-0 border-b border-gray-200 dark:border-gray-800 mb-4 md:border-0">서비스 / 소프트웨어 개발 및 공급, 시스템 통합 및 구축</dd>
                <dt class="grid-cols-1 md:col-span-2 font-semibold">인증현황</dt>
                <dd class="grid-cols-1 md:col-span-10 md:mb-3 pb-4 md:pb-0 border-b border-gray-200 dark:border-gray-800 mb-4 md:border-0">벤쳐기업, 기업부설 연구소</dd>
                <dt class="grid-cols-1 md:col-span-2 font-semibold">사업분야</dt>
                <dd class="grid-cols-1 md:col-span-10 md:mb-3 pb-4 md:pb-0 border-b border-gray-200 dark:border-gray-800 mb-4 md:border-0">시스템 모바일 웹/App 사업, 컨텐츠 마켓 플래스 개발 사업, 대용량 서비스 기술운영 / 고도화 사업</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div class="overflow-x-hidden swiper-zone">
        <div class="container mx-auto px-6 md:px-8 mb-4 md:mb-8">
          <div class="swiper-wrap -mx-2 lg:-mx-3 xl:-mx-4 relative" data-component="swiper-history">
            <div class="swiper-wrapper">
<?php while(have_rows('history')) : the_row(); ?>
            <div class="swiper-slide">
              <div class="py-10 px-2 lg:px-3 xl:px-4">
                <div class="card-history bg-gray-50 p-6 md:p-8 w-full dark:bg-gray-900">
                  <h3 class="title text-4xl font-bold mb-5"><?=get_sub_field('year');?></h3>
                  <div class="desc text-sm md:text-base">
                    <?=get_sub_field('desc'); ?>
                  </div>
                </div>
              </div>
            </div>
<?php endwhile; ?>
            </div>
            <!-- <div class="swiper-button-wrapper">
              <div class="swiper-button-next swiper-next dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div class="swiper-button-prev swiper-prev dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <div id="map" style="width:100%;height:500px;" class="dark:grayscale"></div>
    </div>
  </article>
</main>
<?php get_footer();?>