/**
 * HANYU ACADEMY — MAIN JAVASCRIPT APPLICATION
 * Vanilla ES6+ Implementation
 * 
 * Modules:
 * 1. Configuration & Data Objects (Pricing & Courses)
 * 2. Analytics & Event Tracking Hook
 * 3. Sticky Header & Active Navigation ScrollSpy
 * 4. Mobile Navigation Drawer Controller
 * 5. Course Catalog Filter & Syllabus Modal
 * 6. FAQ Accordion (Accessible ARIA)
 * 7. Form Validation & Submission Service (CRO Core)
 * 8. Consultation Modal & Course Auto-Selection Flow
 * 9. Scroll Reveal Animations (IntersectionObserver)
 * 10. Floating CTA Widget Controller
 */

'use strict';

/* ==========================================================================
   1. CONFIGURATION DATA OBJECTS
   Centralized place to manage course details, syllabus, and pricing tiers
   ========================================================================== */

/**
 * Course details including curriculum modules for the Course Syllabus Modal
 */
const HANYU_COURSES_DATA = [
  {
    id: 'c01',
    code: 'KHÓA HỌC 01',
    title: 'Tiếng Trung cho người mới bắt đầu',
    tag: 'Nhập môn (A1 / HSK 1 - 2)',
    category: 'beginner',
    duration: '24 buổi (3 tháng)',
    schedule: '2 - 3 buổi/tuần • 90 phút/buổi',
    format: 'Trực tuyến tương tác trực tiếp qua Zoom (4 - 6 học viên)',
    fee: '2.450.000 đ',
    description: 'Chương trình được thiết kế chuẩn xác dành riêng cho người chưa từng tiếp xúc với tiếng Trung. Khắc phục triệt để các lỗi phát âm người Việt hay gặp phải.',
    outcomes: [
      'Nắm vững 100% hệ thống ngữ âm Pinyin và 4 thanh điệu chuẩn giọng Bắc Kinh.',
      'Hiểu quy tắc cấu tạo bộ thủ, ghi nhớ và viết được 150+ chữ Hán căn bản.',
      'Tự tin giao tiếp các chủ đề: chào hỏi, giới thiệu bản thân, hỏi giờ, mua sắm đơn giản.',
      'Đủ điều kiện chuyển tiếp thẳng lên lớp giao tiếp trung cấp hoặc luyện thi HSK 2.'
    ],
    modules: [
      { week: 'Tuần 1 - 2', content: 'Làm chủ bảng chữ cái Pinyin, nguyên âm, phụ âm và thanh điệu' },
      { week: 'Tuần 3 - 4', content: 'Cấu tạo chữ Hán, thứ tự nét viết, bộ thủ cơ bản và chào hỏi' },
      { week: 'Tuần 5 - 8', content: 'Số đếm, ngày tháng, hỏi giá tiền và các đoạn hội thoại thường nhật' },
      { week: 'Tuần 9 - 12', content: 'Ngữ pháp câu hoàn chỉnh, miêu tả thói quen, thi kết khóa và đánh giá đầu ra' }
    ]
  },
  {
    id: 'c02',
    code: 'KHÓA HỌC 02',
    title: 'Tiếng Trung giao tiếp thực tế',
    tag: 'Giao tiếp thực hành (A2 - B1)',
    category: 'communication',
    duration: '30 buổi (3.5 tháng)',
    schedule: '2 - 3 buổi/tuần • 90 phút/buổi',
    format: 'Trực tuyến tương tác nhóm nhỏ phản xạ (Tối đa 6 học viên)',
    fee: '2.950.000 đ',
    description: 'Rèn luyện phản xạ ngôn ngữ tức thì trong các tình huống thực tế đời sống, công sở và du lịch mà không cần dịch nhẩm sang tiếng Việt.',
    outcomes: [
      'Xóa bỏ rào cản ngại nói, hình thành phản xạ bật câu tự nhiên.',
      'Làm chủ 35+ ngữ cảnh giao tiếp: ăn uống, đi lại, phỏng vấn, công việc văn phòng.',
      'Mở rộng thêm 500+ từ vựng và các thành ngữ, quán dụng ngữ thông dụng trong đời sống.',
      'Khả năng đàm phán, trao đổi công việc cơ bản với đối tác Trung Quốc.'
    ],
    modules: [
      { week: 'Tuần 1 - 3', content: 'Phản xạ giao tiếp đời sống: Hỏi đường, phương tiện giao thông, đặt phòng' },
      { week: 'Tuần 4 - 7', content: 'Giao tiếp ẩm thực, mua sắm online, thanh toán điện tử WeChat / Alipay' },
      { week: 'Tuần 8 - 11', content: 'Tiếng Trung công sở: Viết email, trao đổi công việc, nghe điện thoại đối tác' },
      { week: 'Tuần 12 - 14', content: 'Xử lý tình huống phát sinh, phỏng vấn xin việc và dự án thực hành cá nhân' }
    ]
  },
  {
    id: 'c03',
    code: 'KHÓA HỌC 03',
    title: 'Luyện thi HSK',
    tag: 'Chứng chỉ quốc tế (HSK 1 - 4)',
    category: 'hsk',
    duration: '36 buổi (4 tháng)',
    schedule: '3 buổi/tuần • 90 phút/buổi',
    format: 'Trực tuyến bám sát cấu trúc đề thi khảo thí quốc tế',
    fee: '3.650.000 đ',
    description: 'Chiến thuật làm bài thi HSK tinh gọn. Tổng hợp toàn diện ngữ pháp, từ vựng trọng tâm và bộ đề thi thử được chấm chữa chi tiết.',
    outcomes: [
      'Nắm chắc 600 - 1200 từ vựng cốt lõi theo khung khảo thí HSK mới.',
      'Làm chủ kỹ thuật nghe bắt từ khóa và kỹ năng đọc lướt tìm thông tin nhanh.',
      'Thực hành 10+ bộ đề thi thử chuẩn cấu trúc đề thật với thời gian bấm giờ thực tế.',
      'Được giáo viên phân tích lỗi sai và tư vấn chiến thuật làm bài cá nhân hóa.'
    ],
    modules: [
      { week: 'Tuần 1 - 4', content: 'Hệ thống hóa toàn bộ ngữ pháp và từ vựng cốt lõi theo cấp độ thi' },
      { week: 'Tuần 5 - 8', content: 'Kỹ năng làm bài phần Nghe hiểu (Listening): Mẹo bẫy âm, nhận diện ngữ cảnh' },
      { week: 'Tuần 9 - 12', content: 'Kỹ năng Đọc hiểu & Viết: Phân tích cấu trúc câu phức, sắp xếp trật tự từ' },
      { week: 'Tuần 13 - 16', content: 'Giải đề thi thử chuyên sâu, chấm chữa trực tiếp và luyện tâm lý phòng thi' }
    ]
  },
  {
    id: 'c04',
    code: 'KHÓA HỌC 04',
    title: 'Tiếng Trung ứng dụng tại Đài Loan',
    tag: 'Định hướng Đài Loan (繁體 / Phồn thể)',
    category: 'taiwan',
    duration: '28 buổi (3 tháng)',
    schedule: '2 - 3 buổi/tuần • 90 phút/buổi',
    format: 'Trực tuyến tương tác trực tiếp bám sát đời sống Đài Loan',
    fee: '3.200.000 đ',
    description: 'Khóa học dành cho người lao động, du học sinh và người định cư tại Đài Loan. Làm quen chữ Phồn thể, khẩu ngữ bản địa và văn hóa công sở xưởng.',
    outcomes: [
      'Nhận biết và chuyển đổi thành thạo chữ Hán Giản thể và Phồn thể (繁體字).',
      'Sử dụng các thuật ngữ chuyên biệt tại Đài Loan (MRT, tiện ích 7-Eleven, bệnh viện...).',
      'Giao tiếp hiệu quả tại nhà xưởng, công ty, xí nghiệp với quản lý người Đài.',
      'Hiểu văn hóa và các phong tục tập quán cần lưu ý khi sinh sống tại Đài Loan.'
    ],
    modules: [
      { week: 'Tuần 1 - 3', content: 'Quy tắc chuyển đổi chữ Giản thể sang Phồn thể & phát âm khẩu âm Đài Loan' },
      { week: 'Tuần 4 - 6', content: 'Hội thoại đời sống thường nhật: Siêu thị, ngân hàng, thủ tục cư trú, đi lại' },
      { week: 'Tuần 7 - 10', content: 'Giao tiếp chuyên môn: Thuật ngữ an toàn lao động, máy móc, báo cáo công việc' },
      { week: 'Tuần 11 - 12', content: 'Ứng xử văn hóa công sở, xử lý tình huống khẩn cấp và kiểm tra tổng hợp' }
    ]
  }
];

/**
 * Pricing Data Object
 * Easily modify course pricing, promo status, and features from this central config
 */
const HANYU_PRICING_DATA = [
  {
    id: 'plan-basic',
    name: 'Gói Cơ Bản',
    target: 'Dành cho người mới bắt đầu từ con số 0',
    feeFormatted: '2.450.000',
    unit: 'khóa / 3 tháng',
    featured: false,
    badge: null,
    specs: [
      '24 buổi học trực tuyến tương tác qua Zoom',
      'Lớp học tối đa 6 học viên đảm bảo sửa âm',
      'Trọn bộ giáo trình PDF & file audio chuẩn',
      'Nhóm Zalo hỗ trợ giải đáp bài tập hằng ngày',
      'Cam kết đọc chuẩn Pinyin sau 4 tuần'
    ],
    courseName: 'Tiếng Trung cho người mới bắt đầu'
  },
  {
    id: 'plan-standard',
    name: 'Gói Toàn Diện',
    target: 'Nền tảng vững chắc kết hợp giao tiếp thực tế',
    feeFormatted: '2.950.000',
    unit: 'khóa / 3.5 tháng',
    featured: true,
    badge: 'Khuyên Dùng',
    specs: [
      '30 buổi học trực tuyến tương tác chuyên sâu',
      'Quy mô lớp nhỏ (4 - 6 học viên)',
      'Thực hành 35+ tình huống giao tiếp đời sống & việc làm',
      'Hệ thống video ghi hình xem lại khi vắng mặt',
      'Giáo viên kèm sửa bài nói 1-1 qua audio ghi âm',
      'Kiểm tra đánh giá năng lực định kỳ'
    ],
    courseName: 'Tiếng Trung giao tiếp thực tế'
  },
  {
    id: 'plan-target',
    name: 'Gói Mục Tiêu',
    target: 'Luyện thi HSK hoặc Định hướng Đài Loan',
    feeFormatted: '3.450.000',
    unit: 'khóa / 3 - 4 tháng',
    featured: false,
    badge: null,
    specs: [
      '28 - 36 buổi học chuyên đề trọng tâm',
      'Lộ trình bám sát đề thi HSK hoặc chữ Phồn thể Đài Loan',
      'Kho đề thi thử độc quyền có đáp án giải thích',
      'Tập dượt phỏng vấn visa / phỏng vấn xin việc',
      'Hỗ trợ thủ tục đăng ký thi chứng chỉ quốc tế',
      'Được học bù linh hoạt khi bận lịch đột xuất'
    ],
    courseName: 'Luyện thi HSK'
  }
];

/* ==========================================================================
   2. CONVERSION TRACKING HOOK
   Standardized tracking layer for Google Analytics 4, FB Pixel, or Custom CRM
   ========================================================================== */
function trackConversionEvent(eventName, payload = {}) {
  const timestamp = new Date().toISOString();
  const eventData = { event: eventName, timestamp, ...payload };
  
  // Console logging for developer inspection
  console.info(`[Hanyu Analytics Event]`, eventData);

  // Ready for Google Tag Manager / dataLayer hook
  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventData);
  }

  // Ready for Facebook Pixel hook
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, payload);
  }
}

/* ==========================================================================
   3. STICKY HEADER & SCROLL SPY
   ========================================================================== */
function initHeaderScrollSpy() {
  const header = document.getElementById('siteHeader');
  const navLinks = document.querySelectorAll('.main-nav .nav-link');
  const sections = document.querySelectorAll('section[id]');

  if (!header) return;

  // Handle header elevation on scroll
  const handleScroll = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // ScrollSpy active link highlighting
    let currentSectionId = '';
    const scrollOffset = scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollOffset >= top && scrollOffset < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/* ==========================================================================
   4. MOBILE NAVIGATION CONTROLLER
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileNav');
  const closeBtn = document.getElementById('mobileCloseBtn');
  const backdrop = document.getElementById('drawerBackdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer || !backdrop) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    backdrop.classList.add('active');
    toggleBtn.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    toggleBtn.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', () => {
    if (drawer.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  // Close drawer when any mobile link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   5. COURSE CATALOG FILTER & SYLLABUS MODAL
   ========================================================================== */
function initCourseCatalog() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const courseCards = document.querySelectorAll('.course-card');

  // Filter tabs behavior
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');
      trackConversionEvent('filter_courses', { category: filterValue });

      courseCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Course Detail Syllabus Modal
  const courseModal = document.getElementById('courseDetailModal');
  const cdTitle = document.getElementById('cdTitle');
  const cdTag = document.getElementById('cdTag');
  const cdBody = document.getElementById('cdBody');
  const cdCloseBtn = document.getElementById('courseModalCloseBtn');
  const cdCancelBtn = document.getElementById('courseModalCancelBtn');
  const cdEnrollBtn = document.getElementById('courseModalEnrollBtn');

  if (!courseModal) return;

  let currentSelectedCourseTitle = '';

  const openCourseDetail = (index) => {
    const course = HANYU_COURSES_DATA[index];
    if (!course) return;

    currentSelectedCourseTitle = course.title;
    cdTitle.textContent = course.title;
    cdTag.textContent = `${course.code} • ${course.tag}`;

    let outcomesHtml = course.outcomes.map(item => `<li>${item}</li>`).join('');
    let modulesHtml = course.modules.map(m => `
      <div style="margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid var(--color-border-light);">
        <strong style="color: var(--color-wine);">${m.week}:</strong>
        <span style="color: var(--color-text-body); margin-left: 6px;">${m.content}</span>
      </div>
    `).join('');

    cdBody.innerHTML = `
      <div style="margin-bottom: 20px;">
        <p style="font-size: 1.02rem; color: var(--color-navy); line-height: 1.6;">${course.description}</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; background-color: var(--color-cream); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 16px; margin-bottom: 24px;">
        <div>
          <span style="font-size: 0.78rem; color: var(--color-text-muted); display: block;">Thời lượng dự kiến</span>
          <strong style="color: var(--color-navy); font-size: 0.95rem;">${course.duration}</strong>
        </div>
        <div>
          <span style="font-size: 0.78rem; color: var(--color-text-muted); display: block;">Hình thức học</span>
          <strong style="color: var(--color-navy); font-size: 0.95rem;">${course.format}</strong>
        </div>
        <div>
          <span style="font-size: 0.78rem; color: var(--color-text-muted); display: block;">Học phí tham khảo</span>
          <strong style="color: var(--color-wine); font-size: 1.05rem;">${course.fee}</strong>
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <h4 style="font-size: 1.1rem; color: var(--color-navy); margin-bottom: 12px;">Mục tiêu &amp; Chuẩn đầu ra</h4>
        <ul style="list-style: disc; padding-left: 20px; line-height: 1.7; color: var(--color-text-body); font-size: 0.92rem;">
          ${outcomesHtml}
        </ul>
      </div>

      <div>
        <h4 style="font-size: 1.1rem; color: var(--color-navy); margin-bottom: 12px;">Phân bổ chương trình học</h4>
        <div style="font-size: 0.92rem;">
          ${modulesHtml}
        </div>
      </div>

      <p style="font-size: 0.8rem; color: var(--color-text-muted); font-style: italic; margin-top: 18px;">
        * Toàn bộ tài liệu giáo trình và bài tập sẽ được cung cấp miễn phí khi chính thức tham gia khóa học.
      </p>
    `;

    courseModal.classList.add('open');
    courseModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    trackConversionEvent('view_course_details', { course: course.title });
  };

  const closeCourseDetail = () => {
    courseModal.classList.remove('open');
    courseModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Bind "Xem khóa học" buttons
  document.querySelectorAll('.view-course-detail-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.getAttribute('data-course-index'), 10);
      openCourseDetail(index);
    });
  });

  if (cdCloseBtn) cdCloseBtn.addEventListener('click', closeCourseDetail);
  if (cdCancelBtn) cdCancelBtn.addEventListener('click', closeCourseDetail);

  // Clicking "Đăng ký tư vấn khóa này" from inside syllabus modal
  if (cdEnrollBtn) {
    cdEnrollBtn.addEventListener('click', () => {
      closeCourseDetail();
      openConsultationModal(currentSelectedCourseTitle);
    });
  }

  courseModal.addEventListener('click', (e) => {
    if (e.target === courseModal) closeCourseDetail();
  });
}

/* ==========================================================================
   6. PRICING GRID RENDERER
   Populates pricing packages dynamically from HANYU_PRICING_DATA
   ========================================================================== */
function initPricingRenderer() {
  const container = document.getElementById('pricingGrid');
  if (!container) return;

  const html = HANYU_PRICING_DATA.map(plan => {
    const featuredClass = plan.featured ? 'featured' : '';
    const badgeHtml = plan.badge ? `<span class="pricing-badge-popular">${plan.badge}</span>` : '';
    const specsHtml = plan.specs.map(spec => `
      <li class="pricing-spec-item">
        <span class="pricing-spec-icon">✓</span>
        <span>${spec}</span>
      </li>
    `).join('');

    return `
      <article class="pricing-card ${featuredClass} reveal-on-scroll">
        ${badgeHtml}
        <div class="pricing-header">
          <h3 class="pricing-plan-name">${plan.name}</h3>
          <p class="pricing-plan-target">${plan.target}</p>
          <div class="pricing-amount-box">
            <span class="pricing-currency">VNĐ</span>
            <span class="pricing-number">${plan.feeFormatted}</span>
            <span class="pricing-unit">/ ${plan.unit}</span>
          </div>
        </div>
        <ul class="pricing-specs-list">
          ${specsHtml}
        </ul>
        <div class="pricing-card-action">
          <button type="button" class="btn ${plan.featured ? 'btn-primary' : 'btn-outline'} btn-block register-pricing-btn" data-course="${plan.courseName}">
            Đăng ký tư vấn gói này
          </button>
        </div>
      </article>
    `;
  }).join('');

  container.innerHTML = html;

  // Bind clicks on rendered pricing CTA buttons
  container.querySelectorAll('.register-pricing-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const course = btn.getAttribute('data-course');
      openConsultationModal(course);
    });
  });
}

/* ==========================================================================
   7. FAQ ACCORDION (ACCESSIBLE ARIA)
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener('click', () => {
      const isExpanded = questionBtn.getAttribute('aria-expanded') === 'true';

      // Close all other accordion items for clean editorial experience
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherBtn = otherItem.querySelector('.faq-question');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherBtn && otherAnswer) {
            otherBtn.setAttribute('aria-expanded', 'false');
            otherAnswer.style.maxHeight = null;
          }
        }
      });

      // Toggle current item
      if (isExpanded) {
        questionBtn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        questionBtn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = `${answer.scrollHeight}px`;
        trackConversionEvent('faq_opened', { question: questionBtn.textContent.trim() });
      }
    });

    // Keyboard support: Enter / Space triggers click natively on button
  });
}

/* ==========================================================================
   8. FORM VALIDATION & SERVICE LAYER (CRO CORE)
   ========================================================================== */

/**
 * Service Layer for submitting leads
 * Decoupled from UI so it can be swapped to a real REST API endpoint or CRM webhook
 */
class FormSubmissionService {
  /**
   * Submit lead data
   * @param {Object} data 
   * @returns {Promise<Object>}
   */
  static async submitLead(data) {
    // Simulate real network request delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // DEMO MODE BEHAVIOR:
    // Returns mock successful verification with explicit transparency disclosure
    return {
      status: 'success',
      isDemoMode: true,
      data: data,
      message: 'Thông tin đăng ký đã được kiểm tra hợp lệ thành công.'
    };

    /* REAL PRODUCTION INTEGRATION SNIPPET:
    try {
      const response = await fetch('https://api.hanyuacademy.vn/v1/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Network error');
      return await response.json();
    } catch (err) {
      throw err;
    }
    */
  }
}

/**
 * Phone number validation for Vietnamese phone numbers
 * Matches prefixes 03, 05, 07, 08, 09 or +84 format
 */
function isValidVietnamesePhone(phone) {
  const sanitized = phone.replace(/[\s\-\.\(\)]/g, '');
  const vnPhoneRegex = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;
  return vnPhoneRegex.test(sanitized);
}

/**
 * Email validation
 */
function isValidEmail(email) {
  if (!email || email.trim() === '') return true; // Optional field
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Binds and validates a form instance
 */
function setupFormValidation(formElement, isModal = false) {
  if (!formElement) return;

  const prefix = isModal ? 'm' : '';

  const getElem = (name) => {
    return formElement.querySelector(`[name="${name}"]`);
  };

  const getErrorElem = (name) => {
    const errorId = isModal ? `merror-${name}` : `error-${name}`;
    return document.getElementById(errorId);
  };

  const showError = (name, message) => {
    const input = getElem(name);
    const errBox = getErrorElem(name);
    if (input) input.classList.add('is-invalid');
    if (errBox) {
      errBox.textContent = message;
      errBox.classList.add('show');
    }
  };

  const clearError = (name) => {
    const input = getElem(name);
    const errBox = getErrorElem(name);
    if (input) input.classList.remove('is-invalid');
    if (errBox) {
      errBox.textContent = '';
      errBox.classList.remove('show');
    }
  };

  // Real-time error clearing on typing
  const fields = ['fullname', 'phone', 'email', 'course', 'goal', 'consent'];
  fields.forEach(field => {
    const input = getElem(field);
    if (input) {
      input.addEventListener('input', () => clearError(field));
      input.addEventListener('change', () => clearError(field));
    }
  });

  // Submit Handler
  formElement.addEventListener('submit', async (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Fullname
    const fullnameInput = getElem('fullname');
    const fullname = fullnameInput ? fullnameInput.value.trim() : '';
    if (!fullname) {
      showError('fullname', 'Vui lòng nhập họ và tên của bạn.');
      isValid = false;
    } else if (fullname.length < 2) {
      showError('fullname', 'Họ và tên quá ngắn. Vui lòng nhập tối thiểu 2 ký tự.');
      isValid = false;
    } else {
      clearError('fullname');
    }

    // Validate Phone
    const phoneInput = getElem('phone');
    const phone = phoneInput ? phoneInput.value.trim() : '';
    if (!phone) {
      showError('phone', 'Vui lòng cung cấp số điện thoại để nhận tư vấn.');
      isValid = false;
    } else if (!isValidVietnamesePhone(phone)) {
      showError('phone', 'Số điện thoại không hợp lệ (Ví dụ hợp lệ: 0912 345 678).');
      isValid = false;
    } else {
      clearError('phone');
    }

    // Validate Email (Optional)
    const emailInput = getElem('email');
    const email = emailInput ? emailInput.value.trim() : '';
    if (email && !isValidEmail(email)) {
      showError('email', 'Địa chỉ email chưa đúng định dạng.');
      isValid = false;
    } else {
      clearError('email');
    }

    // Validate Course Select
    const courseInput = getElem('course');
    const course = courseInput ? courseInput.value : '';
    if (!course) {
      showError('course', 'Vui lòng chọn khóa học bạn đang quan tâm.');
      isValid = false;
    } else {
      clearError('course');
    }

    // Validate Goal (for in-page form)
    const goalInput = getElem('goal');
    if (goalInput) {
      if (!goalInput.value) {
        showError('goal', 'Vui lòng chọn mục tiêu học tập chính của bạn.');
        isValid = false;
      } else {
        clearError('goal');
      }
    }

    // Validate Consent Checkbox
    const consentInput = getElem('consent');
    if (consentInput && !consentInput.checked) {
      showError('consent', 'Vui lòng tích đồng ý với chính sách bảo mật để tiếp tục.');
      isValid = false;
    } else {
      clearError('consent');
    }

    if (!isValid) {
      // Focus on first invalid input
      const firstInvalid = formElement.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Form is completely valid -> Process submission
    const submitBtn = formElement.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.classList.add('is-submitting');
      submitBtn.disabled = true;
    }

    // Gather Form Payload
    const formDataObj = {
      fullname,
      phone,
      email: email || 'Không cung cấp',
      course,
      level: (formElement.querySelector('input[name="level"]:checked') || formElement.querySelector('input[name="mlevel"]:checked') || {}).value || 'Chưa từng học',
      goal: goalInput ? goalInput.value : 'Tư vấn nhanh qua modal',
      submittedAt: new Date().toLocaleString('vi-VN'),
      source: isModal ? 'Popup Modal' : 'In-Page Form'
    };

    try {
      const response = await FormSubmissionService.submitLead(formDataObj);
      
      // Track Analytics
      trackConversionEvent('lead_form_submitted', {
        course: formDataObj.course,
        source: formDataObj.source
      });

      // Close modal if submitting from modal
      if (isModal) {
        const consultationModal = document.getElementById('consultationModal');
        if (consultationModal) consultationModal.classList.remove('open');
      }

      // Display Status / Demo Disclosure Modal
      showFeedbackModal(response.data);

    } catch (err) {
      alert('Có lỗi kết nối tạm thời. Vui lòng thử lại sau giây lát.');
    } finally {
      if (submitBtn) {
        submitBtn.classList.remove('is-submitting');
        submitBtn.disabled = false;
      }
    }
  });
}

/**
 * Displays transparent feedback modal explaining demo mode and verified data
 */
function showFeedbackModal(data) {
  const modal = document.getElementById('feedbackModal');
  const title = document.getElementById('feedbackTitle');
  const desc = document.getElementById('feedbackDesc');
  const metaBox = document.getElementById('feedbackMetaBox');
  const closeBtn = document.getElementById('feedbackCloseBtn');

  if (!modal) return;

  title.textContent = 'Đã Xác Nhận Đăng Ký (Demo Mode)';
  desc.innerHTML = `
    Cảm ơn bạn <strong>${data.fullname}</strong>! Dữ liệu của bạn đã được kiểm tra tính hợp lệ và xử lý hoàn tất qua lớp dịch vụ phía frontend.
  `;

  metaBox.innerHTML = `
    <div style="font-weight: 700; margin-bottom: 8px; color: var(--color-wine);">THÔNG TIN GHI NHẬN ĐẦY ĐỦ:</div>
    <div>• <strong>Họ tên:</strong> ${data.fullname}</div>
    <div>• <strong>Số điện thoại:</strong> ${data.phone}</div>
    <div>• <strong>Email:</strong> ${data.email}</div>
    <div>• <strong>Khóa học quan tâm:</strong> ${data.course}</div>
    <div>• <strong>Trình độ ban đầu:</strong> ${data.level}</div>
    <div>• <strong>Mục tiêu:</strong> ${data.goal}</div>
    <div style="margin-top: 10px; padding-top: 8px; border-top: 1px dashed var(--color-border); font-size: 0.8rem; color: var(--color-text-muted);">
      ⚠️ <em>Ghi chú kỹ thuật: Trang web đang ở chế độ Frontend Demo. Để gửi trực tiếp vào CRM hoặc Google Sheet thực tế, bạn chỉ cần cấu hình URL endpoint trong hàm <code>FormSubmissionService.submitLead()</code> tại file <code>js/main.js</code>.</em>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.onclick = closeModal;
  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };
}

/* ==========================================================================
   9. CONSULTATION MODAL & COURSE AUTO-SELECTION
   ========================================================================== */
function openConsultationModal(courseName = '') {
  const modal = document.getElementById('consultationModal');
  const selectElem = document.getElementById('m-courseSelect');

  if (!modal) return;

  if (selectElem && courseName) {
    // If exact course matches, select it
    let matched = false;
    for (let i = 0; i < selectElem.options.length; i++) {
      if (selectElem.options[i].value === courseName) {
        selectElem.selectedIndex = i;
        matched = true;
        break;
      }
    }
    // Fallback if not direct match
    if (!matched && courseName !== 'Tư vấn chung' && courseName !== 'Tất cả khóa học') {
      selectElem.value = 'Chưa quyết định / Cần tư vấn thêm';
    }
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  trackConversionEvent('open_consultation_modal', { preselectedCourse: courseName });
}

function initConsultationModal() {
  const modal = document.getElementById('consultationModal');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Global button binder: Any button with class .open-modal-btn
  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const course = btn.getAttribute('data-course') || '';
      openConsultationModal(course);
    });
  });

  // Course card "Đăng ký tư vấn" buttons
  document.querySelectorAll('.register-course-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const course = btn.getAttribute('data-course') || '';
      
      // Also update in-page form select if user prefers scrolling down
      const inPageSelect = document.getElementById('courseSelect');
      if (inPageSelect && course) {
        inPageSelect.value = course;
      }

      openConsultationModal(course);
    });
  });

  // Footer links to modal
  document.querySelectorAll('.open-modal-from-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const course = link.getAttribute('data-course') || '';
      openConsultationModal(course);
    });
  });

  // Legal footer modals placeholder dialogs
  const policyTrig = document.getElementById('policyTrigger');
  const termsTrig = document.getElementById('termsTrigger');
  const discTrig = document.getElementById('disclaimerTrigger');

  const showLegalNotice = (titleText, bodyText) => {
    const modal = document.getElementById('feedbackModal');
    const title = document.getElementById('feedbackTitle');
    const desc = document.getElementById('feedbackDesc');
    const metaBox = document.getElementById('feedbackMetaBox');
    const closeBtn = document.getElementById('feedbackCloseBtn');
    if (!modal) return;

    title.textContent = titleText;
    desc.textContent = bodyText;
    metaBox.innerHTML = `<em>Chính sách mẫu được biên soạn cho mục đích minh họa và tuân thủ các quy định bảo mật thông tin học viên.</em>`;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    closeBtn.onclick = () => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };
  };

  if (policyTrig) {
    policyTrig.addEventListener('click', (e) => {
      e.preventDefault();
      showLegalNotice(
        'Chính Sách Bảo Mật Thông Tin',
        'HANYU ACADEMY cam kết bảo mật tuyệt đối thông tin cá nhân của học viên, bao gồm tên, số điện thoại và email. Dữ liệu chỉ dùng cho mục đích xếp lớp và tư vấn học tập.'
      );
    });
  }

  if (termsTrig) {
    termsTrig.addEventListener('click', (e) => {
      e.preventDefault();
      showLegalNotice(
        'Điều Khoản Sử Dụng Dịch Vụ',
        'Học viên được hưởng trọn quyền lợi tham gia lớp học trực tuyến, nhận tài liệu học tập và bảo lưu khóa học theo quy chế đào tạo hiện hành của học viện.'
      );
    });
  }

  if (discTrig) {
    discTrig.addEventListener('click', (e) => {
      e.preventDefault();
      showLegalNotice(
        'Quy Chế Bản Demo',
        'Trang web này được xây dựng với mục đích minh họa giao diện cao cấp và khả năng chuyển đổi. Các thông tin về số liệu, chứng chỉ mẫu và học phí tham khảo có thể tùy chỉnh dễ dàng theo thực tế kinh doanh.'
      );
    });
  }
}

/* ==========================================================================
   10. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    elements.forEach(el => el.classList.add('is-revealed'));
  }
}

/* ==========================================================================
   11. FLOATING CTA CONTROLLER
   ========================================================================== */
function initFloatingWidget() {
  const widget = document.getElementById('floatingWidget');
  if (!widget) return;

  const handleWidgetScroll = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    // Show widget when user scrolls past Hero section (around 500px)
    if (scrollY > 500) {
      widget.classList.add('visible');
    } else {
      widget.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', handleWidgetScroll, { passive: true });
}

/* ==========================================================================
   INITIALIZATION ON DOM READY
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Navigation & Header
  initHeaderScrollSpy();
  initMobileNav();

  // 2. Catalogs & Pricing
  initCourseCatalog();
  initPricingRenderer();

  // 3. FAQ & Interactions
  initFaqAccordion();

  // 4. Forms & Conversion
  setupFormValidation(document.getElementById('leadForm'), false);
  setupFormValidation(document.getElementById('modalLeadForm'), true);
  initConsultationModal();

  // 5. Scroll Animations & Widgets
  initScrollReveal();
  initFloatingWidget();

  console.info('🚀 HANYU ACADEMY application successfully initialized.');
});
