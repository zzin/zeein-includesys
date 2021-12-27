<?php get_header();?>
<main id="primary" class="site-main" data-barba="container" data-barba-namespace="page-about-us">
  <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <?php get_template_part( 'template-parts/split/split', 'entry-header' ); ?>
    <div class="entry-content">
      <div class="container mx-auto px-6 md:px-8">
        <figure>
          <img src="<?=get_template_directory_uri()?>/assets/public/images/logo-color.svg" alt="color logo">
        </figure>
        <div class="mb-20 md:mb-40">
          <h2 class="text-2xl md:text-4xl font-semibold mb-4 md:mb-6 word-break-keep-all">프로그램을 처음 학습할 때 접하게 되는 C언어</h2>
          <div class="text-lg md:text-2xl word-break-keep-all">
            <div class="md:leading-10 tracking-tight">
              프로그램을 처음 학습할 때 C언어를 접하게 됩니다.<br />
              그리고, 코드 첫 줄에 #include를 적어주어 기본으로 필요한 함수를 명시합니다.<br />
              인클루드시스는 초심의 자세로 "고객에게 꼭 필요한 파트너"라는 의지를 담아 #include를 형상화 하였습니다.
            </div>
          </div>
        </div>
        <div class="mb-20 md:mb-40">
          <h2 class="text-2xl md:text-4xl font-semibold mb-4 md:mb-6 word-break-keep-all">통신사 서비스를 구축, 운영 해오며 성장 하였습니다.</h2>
          <div class="text-lg md:text-2xl word-break-keep-all">
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
      <div class="overflow-x-hidden">
        <div class="container mx-auto px-6 md:px-8 mb-4 md:mb-8">
          <div class="swiper-wrap -mx-2 lg:-mx-3 xl:-mx-4 relative" data-component="swiper-history">
            <div class="swiper-wrapper">
<?php while(have_rows('history')) : the_row(); ?>
            <div class="swiper-slide">
              <div class="py-10 px-2 lg:px-3 xl:px-4">
                <div class="card-history border border-gray-100 bg-gray-50 p-6 md:p-8 rounded-md dark:border-gray-800 w-full dark:bg-gray-900">
                  <h3 class="title text-2xl md:text-4xl font-medium mb-5"><?=get_sub_field('year');?></h3>
                  <div class="desc text-sm md:text-base">
                    <?=get_sub_field('desc'); ?>
                  </div>
                </div>
              </div>
            </div>
<?php endwhile; ?>
            </div>
            <div class="swiper-button-wrapper">
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
            </div>
          </div>
        </div>
      </div>
      <div id="map" style="width:100%;height:500px;" class="dark:grayscale"></div>
    </div>
  </article>
</main>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=a983d31a0e3ac4f6ece571fab081dc94&libraries=services"></script>
<script>
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
  mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 4 // 지도의 확대 레벨
  };

// 지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 지도 줌 막기
map.setZoomable(false);

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 지도에 교통정보를 표시하도록 지도타입을 추가합니다
map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

var marker;
// 주소로 좌표를 검색합니다
geocoder.addressSearch('서울 마포구 월드컵북로8길 21 인클루드빌딩 3층', function(result, status) {
  // 정상적으로 검색이 완료됐으면
  if (status === kakao.maps.services.Status.OK) {
    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    // 결과값으로 받은 위치를 마커로 표시합니다
    marker = new kakao.maps.Marker({
      map: map,
      position: coords
    });

    // // 인포윈도우로 장소에 대한 설명을 표시합니다
    // var infowindow = new kakao.maps.InfoWindow({
    //     content: '<div class="rounded-md" style="width:150px;text-align:center;padding:6px 0;">인클루드시스</div>'
    // });
    // infowindow.open(map, marker);

    // 커스텀 오버레이에 표시할 내용입니다
    // HTML 문자열 또는 Dom Element 입니다
    var content = '<div class ="bg-white text-xs py-2 px-5"><span class="left"></span><span class="center">카카오!</span><span class="right"></span></div>';

    // 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
    position: coords,
    content: content
});

// 커스텀 오버레이를 지도에 표시합니다
customOverlay.setMap(map);

    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
    map.setCenter(coords);
  }
});

window.addEventListener('resize', () => {
  var markerPosition = marker.getPosition();
  map.relayout();
  map.setCenter(markerPosition);
}, true);

</script>
<?php get_footer();?>