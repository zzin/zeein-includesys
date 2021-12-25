<?php get_header();?>
<main id="primary" class="site-main" data-barba="container" data-barba-namespace="page-contact">
  <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <?php get_template_part( 'template-parts/split/split', 'entry-header' ); ?>
    <div class="entry-content">
      <div class="container mx-auto px-6 md:px-8">
        <div class="mb-5 md:mb-10">
          <h2 class="text-xl md:text-3xl font-semibold mb-1 md:mb-2 word-break-keep-all">인클루드시스는 'Technology-Business Partner'가 되고자 합니다.</h2>
          <small class="text-sm md:text-base text-gray-600">문의 주시면 담당자 확인 후 바로 연락 드리겠습니다.</small>
        </div>
        <form id="formRequest" name="form-request" method="post" autocomplete="off" enctype="multipart/form-data">
          <h3 class="text-lg md:text-xl font-semibold mb-2">가. 문의 분야을 선택하세요. <small class="text-xs font-normal text-gray-400">중복 선택 가능</small></h3>
          <div class="mb-6 md:mb-10">
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 checkbox-group required">
              <label class="custom-label-checkbox">
                <input type="checkbox" class="checkbox" name="type[]" value="java"/>
                <div class="text">자바 어플리케이션</div>
              </label>
              <label class="custom-label-checkbox">
                <input type="checkbox" class="checkbox" name="type[]" value="app"/>
                <div class="text">앱 개발</div>
              </label>
              <label class="custom-label-checkbox">
                <input type="checkbox" class="checkbox" name="type[]" value="big"/>
                <div class="text">대용량 서비스</div>
              </label>
              <label class="custom-label-checkbox">
                <input type="checkbox" class="checkbox" name="type[]" value="advance"/>
                <div class="text">고도화</div>
              </label>
              <label class="custom-label-checkbox">
                <input type="checkbox" class="checkbox" name="type[]" value="system"/>
                <div class="text">시스템 통합 및 구축</div>
              </label>
              <label class="custom-label-checkbox">
                <input type="checkbox" class="checkbox" name="type[]" value="site"/>
                <div class="text">사이트 제작 및 개발</div>
              </label>
              <label class="custom-label-checkbox">
                <input type="checkbox" class="checkbox" name="type[]" value="maintenance"/>
                <div class="text">유지보수</div>
              </label>
              <label class="custom-label-checkbox">
                <input type="checkbox" class="checkbox" name="type[]" value="etc"/>
                <div class="text">기타</div>
              </label>
            </div>
          </div>

          <h3 class="text-lg md:text-xl font-semibold mb-2">나. 기본 정보를 입력하세요.</h3>
          <div class="mb-6 md:mb-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              <div>
                <label class="text-base mb-1 block" for="req_company">이름 / 회사명 <span class="text-sm text-red-500">*</span></label>
                <input autocomplete="off" autocorrect="off" autocapitalize="off" type="text" name="req_company" id="req_company" class="border border-gray-300 placeholder-gray-400 bg-white text-sm w-full h-10 p-2 focus:outline-none focus:border-gray-600 focus:ring-gray-600 rounded-md focus:ring-1" placeholder="이름 혹은 회사명 입력" aria-label="이름 / 회사명" required value="" />
              </div>
              <div>
                <label class="text-base mb-1 block" for="req_tel">연락처 <span class="text-sm text-red-500">*</span></label>
                <input autocomplete="off" autocorrect="off" autocapitalize="off" type="tel" name="req_tel" id="req_tel" class="border border-gray-300 placeholder-gray-400 bg-white text-sm w-full h-10 p-2 focus:outline-none focus:border-gray-600 focus:ring-gray-600 rounded-md focus:ring-1" placeholder="연락처 입력" aria-label="연락처" required value="" />
              </div>
              <div>
                <label class="text-base mb-1 block" for="req_email">이메일 <span class="text-sm text-red-500">*</span></label>
                <input autocomplete="off" autocorrect="off" autocapitalize="off" type="email" name="req_email" id="req_email" class="border border-gray-300 placeholder-gray-400 bg-white text-sm w-full h-10 p-2 focus:outline-none focus:border-gray-600 focus:ring-gray-600 rounded-md focus:ring-1" placeholder="이메일 입력" aria-label="이메일" required value="" />
              </div>
            </div>
          </div>

          <h3 class="text-lg md:text-xl font-semibold mb-2">다. 프로젝트 정보를 입력하세요.</h3>
          <div class="mb-6 md:mb-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              <div>
                <label class="text-base mb-1 block" for="req_project">프로젝트명 <span class="text-sm text-red-500">*</span></label>
                <input autocomplete="off" autocorrect="off" autocapitalize="off" type="text" name="req_project" id="req_project" class="border border-gray-300 placeholder-gray-400 bg-white text-sm w-full h-10 p-2 focus:outline-none focus:border-gray-600 focus:ring-gray-600 rounded-md focus:ring-1" placeholder="프로젝트명" aria-label="프로젝트명" required value="" />
              </div>
              <div>
                <label class="text-base mb-1 block" for="req_since">희망 제작기간 <span class="text-sm text-red-500">*</span></label>
                <div class="relative">
                  <select name="req_since" id="req_since" class="form-select appearance-none block w-full h-10 p-2 border border-gray-300 placeholder-gray-400 bg-white text-sm focus:outline-none focus:border-gray-600 focus:ring-gray-600 rounded-md focus:ring-1" aria-label="희망 제작기간" required>
                    <option value='' selected>희망 제작기간 선택</option>
                    <option value="asap">가장 빠르게(ASAP)</option>
                    <option value="1">1개월 이내</option>
                    <option value="3">3개월 이내</option>
                    <option value="6">6개월 이내</option>
                  </select>
                  <svg class="absolute right-3 top-3 h-4 w-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div>
                <label class="text-base mb-1 block" for="req_budget">책정 예산 금액 <span class="text-sm text-red-500">*</span></label>
                <input autocomplete="off" autocorrect="off" autocapitalize="off" type="text" name="req_budget" id="req_budget" class="border border-gray-300 placeholder-gray-400 bg-white text-sm w-full h-10 p-2 focus:outline-none focus:border-gray-600 focus:ring-gray-600 rounded-md focus:ring-1" placeholder="만단위로 입력 ex) 100 = 100만원" aria-label="책정 예산 금액" required value="" />
              </div>
              <div>
                <label class="text-base mb-1 block" for="req_file">파일 첨부</label>
                <div class="relative">
                  <input type="file" name="req_file" id="req_file" class="block w-full text-sm
                    file:mr-4 file:p-2 file:h-10
                    file:rounded-md file:border-0
                    file:text-sm file:font-medium
                    file:bg-gray-100 file:text-gray-600
                    hover:file:bg-gray-200" />
                </div>
              </div>
              <div>
                <label class="text-base mb-1 block" for="req_content">문의 내용 <span class="text-sm text-red-500">*</span></label>
                <textarea autocomplete="off" autocorrect="off" autocapitalize="off" name="req_content" id="req_content" class="border border-gray-300 placeholder-gray-400 bg-white text-sm w-full h-52 p-2 focus:outline-none focus:border-gray-600 focus:ring-gray-600 rounded-md focus:ring-1" placeholder="문의 내용 입력" aria-label="문의 내용" required></textarea>
              </div>
              <div class="pt-0 md:pt-6">
                <strong class="text-xs md:text-sm text-gray-400 font-normal">입력하신 정보는 문의내용을 확인을 위해서만 사용하며 수집항목, 목적, 보유기간은 다음과 같습니다.</strong>
                <ul class="list-disc text-gray-400 text-xs pl-4">
                  <li>수집항목 : 성명, 연락처, 이메일, 프로젝트 관련 정보</li>
                  <li>수집목적 : 문의에 따른 결과 회신</li>
                  <li>보유기간 : 위 목적 달성시 까지</li>
                </ul>
              </div>
              <div>
                <div class="mb-5">
                  <label class="inline-flex items-center">
                    <input type="checkbox" name="agree" value="agree" id="agree" class="
                      appearance-none
                      w-4 h-4
                      rounded
                      border-2
                      border-gray-200
                      bg-gray-200
                      focus:bg-gray-200
                      text-gray-700
                      focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
                      checked:bg-gray-600 checked:border-gray-300
                    " required />
                    <span class="ml-2 text-gray-600">개인정보 수집 및 이용에 동의 합니다.</span>
                  </label>
                </div>
                <div>
                  <div id="msg-wrap" class="text-xs"></div>
                  <button type="submit" class="btn-submit appearance-none w-full h-12 p-2 bg-indigo-500 text-indigo-100 font-medium rounded-md">문의하기</button>
                </div>
              </div>
            </div>

          </div>

        </form>

      </div>
    </div>
  </article>
</main>
<?php get_footer();?>