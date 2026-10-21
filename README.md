# HANYU ACADEMY — PREMIUM ONLINE CHINESE LANDING PAGE
> **“Mở lối ngôn ngữ. Kết nối tương lai.”**  
> Landing page bán khóa học tiếng Trung trực tuyến hiện đại, cao cấp và tối ưu hóa tỷ lệ chuyển đổi (CRO) dành riêng cho người Việt Nam.

---

## 1. TỔNG QUAN DỰ ÁN

Dự án được thiết kế và lập trình theo định hướng **Premium EdTech, Minimalist, Modern Editorial**, đáp ứng trọn vẹn 12 khu vực chức năng (sections) theo tiêu chuẩn đào tạo trực tuyến cao cấp:

- **Màu sắc chủ đạo**: Đỏ rượu vang (`#9F2638`), Đỏ nhấn (`#C73E4D`), Trắng kem (`#FAF8F4`), Trắng tinh khiết (`#FFFFFF`), Xanh đen sâu (`#17243A`), Xám chữ (`#6B7280`), Viền tinh tế (`#E8E3DD`).
- **Typography**: Kết hợp chuẩn mực giữa **Be Vietnam Pro** (cho toàn bộ tiếng Việt với dấu sắc nét, tương phản cao) và **Noto Sans SC** (cho các yếu tố chữ Hán và con dấu nghệ thuật).
- **Công nghệ**: HTML5 ngữ nghĩa, CSS3 hiện đại (CSS Variables, Flexbox, Grid, Clamp responsive), Vanilla JavaScript (ES6+), không phụ thuộc vào bất kỳ thư viện hoặc framework bên ngoài nào.

---

## 2. CẤU TRÚC THƯ MỤC

```text
hanyu-academy/
├── index.html                  # File cấu trúc HTML chính đầy đủ 12 sections
├── css/
│   └── style.css               # Toàn bộ CSS thiết kế cao cấp, responsive, biến màu
├── js/
│   └── main.js                 # Xử lý logic menu, cuộn trang, accordion, modal và form
├── assets/
│   ├── images/
│   │   ├── favicon.svg         # Favicon thương hiệu hình con dấu Hán ngữ
│   │   ├── hero-visual.svg     # Ảnh minh họa editorial không gian học trực tuyến
│   │   ├── course-beginner.svg # Minh họa Khóa 01 (Nhập môn & Ngữ âm)
│   │   ├── course-communication.svg # Minh họa Khóa 02 (Giao tiếp thực tế)
│   │   ├── course-hsk.svg      # Minh họa Khóa 03 (Luyện thi HSK)
│   │   ├── course-taiwan.svg   # Minh họa Khóa 04 (Tiếng Trung Đài Loan & Phồn thể)
│   │   ├── instructor-1.svg    # Ảnh đại diện Cô Mai Phương (Mẫu)
│   │   ├── instructor-2.svg    # Ảnh đại diện Thầy Hoàng Minh (Mẫu)
│   │   ├── instructor-3.svg    # Ảnh đại diện Cô Thanh Hằng (Mẫu)
│   │   ├── student-1.svg       # Avatar học viên Nguyễn Thu Trang (Mẫu)
│   │   ├── student-2.svg       # Avatar học viên Trần Quốc Đạt (Mẫu)
│   │   └── student-3.svg       # Avatar học viên Lê Thị Mai (Mẫu)
│   └── icons/
│       └── seal.svg            # Biểu tượng con dấu chữ 汉 (Hán) truyền thống
└── README.md                   # Tài liệu hướng dẫn sử dụng và phát triển
```

---

## 3. CÁC PHÂN ĐOẠN NỘI DUNG (12 SECTIONS)

1. **SECTION 1 — Header & Sticky Nav**: Logo HANYU ACADEMY kèm biểu tượng con dấu đỏ, menu liên kết trang chủ - lợi ích - khóa học - lộ trình - giảng viên - học phí - FAQ. Nút CTA "Tư vấn miễn phí". Tích hợp menu mobile hamburger drawer trượt mượt mà.
2. **SECTION 2 — Hero Section**: Bố cục 2 cột desktop (1 cột mobile). Tiêu đề truyền cảm hứng *"Tiếng Trung mở ra những cơ hội lớn hơn"*, CTA chính *"Khám phá khóa học"*, CTA phụ *"Nhận tư vấn miễn phí"*, cam kết 3 điểm và hình ảnh editorial hiện đại có ký tự trang trí `学`, `你好`, `未来`.
3. **SECTION 3 — Trust & Benefits**: 4 thẻ giá trị cốt lõi: Lộ trình rõ ràng, Tập trung ứng dụng, Phù hợp người Việt, Hỗ trợ theo mục tiêu. Minh bạch, không tạo số liệu giả.
4. **SECTION 4 — Course Catalog**: 4 khóa học cao cấp có bộ lọc danh mục (`Cho người mới`, `Giao tiếp`, `Luyện thi HSK`, `Đi Đài Loan`). Mỗi khóa có nút *"Xem khóa học"* (mở modal giáo trình chi tiết) và *"Đăng ký tư vấn"* (tự động điền tên khóa vào form).
5. **SECTION 5 — Learning Roadmap**: Timeline 4 giai đoạn tinh gọn (*01. Xây dựng nền tảng → 02. Tích lũy kiến thức → 03. Luyện tập ứng dụng → 04. Hướng đến mục tiêu*), đi kèm chữ Hán tương ứng (`起`, `承`, `转`, `合`).
6. **SECTION 6 — Why Hanyu Academy**: Bố cục 4 điểm khác biệt: Giải thích dễ hiểu bằng tiếng Việt (Hán-Việt), 70% thời lượng luyện tập phản xạ, mục tiêu đo lường được, lộ trình cá nhân hóa.
7. **SECTION 7 — Instructors**: Đội ngũ 3 giảng viên mẫu có ghi chú rõ ràng về thông tin demo để người quản trị dễ dàng cập nhật thông tin thật.
8. **SECTION 8 — Student Reviews**: 3 phản hồi trải nghiệm thực tế từ sinh viên, kỹ sư và nhân viên văn phòng (được gắn nhãn minh họa mẫu minh bạch).
9. **SECTION 9 — Pricing & Conversion**: 3 gói học phí được quản lý động từ mảng JavaScript `HANYU_PRICING_DATA` giúp dễ dàng thay đổi mức giá và ưu đãi bất kỳ lúc nào.
10. **SECTION 10 — Registration Form**: Form chuyển đổi cốt lõi gồm: Họ và tên, Số điện thoại (kiểm tra chuẩn số Việt Nam), Email, Khóa học quan tâm, Trình độ hiện tại, Mục tiêu học tập, Checkbox cam kết bảo mật. Kiểm tra dữ liệu tức thì, không xóa dữ liệu khi có lỗi, có hiệu ứng đang gửi và hộp thoại thông báo hoàn tất chuẩn demo.
11. **SECTION 11 — FAQ Accordion**: 6 câu hỏi thường gặp thiết kế accordion chuẩn ARIA cho bàn phím (`aria-expanded`, `Enter`/`Space`), hiệu ứng mở đóng êm ái.
12. **SECTION 12 — Final CTA & Footer**: Khung kêu gọi hành động cuối trang mạnh mẽ, chân trang 4 cột đầy đủ giới thiệu, liên kết nhanh, địa chỉ, hotline, email, mạng xã hội, chính sách bảo mật và bản quyền.

---

## 4. HƯỚNG DẪN MỞ VÀ CHẠY THỬ TRANG WEB

### Cách 1: Mở trực tiếp bằng trình duyệt (Nhanh nhất)
1. Mở thư mục `hanyu-academy` trong Finder hoặc File Explorer.
2. Nhấp đúp vào file `index.html` hoặc kéo file vào bất kỳ trình duyệt nào (Chrome, Safari, Edge, Firefox).
3. Trang web sẽ hiển thị đầy đủ hình ảnh, icon, font chữ và hiệu ứng hoạt động hoàn hảo mà không cần cài đặt thêm phần mềm.

### Cách 2: Sử dụng VS Code Live Server (Khuyên dùng khi lập trình)
1. Mở thư mục `hanyu-academy` hoặc `khoa-hoc-tieng-trung-landing-page` trong Visual Studio Code.
2. Cài đặt tiện ích mở rộng **Live Server** (của tác giả Ritwick Dey).
3. Nhấp chuột phải vào file `index.html` và chọn **"Open with Live Server"**.
4. Website sẽ tự động mở tại địa chỉ `http://127.0.0.1:5500/index.html` với tính năng tự động tải lại khi chỉnh sửa mã nguồn.

### Cách 3: Chạy bằng máy chủ nội bộ Python
Mở Terminal trong thư mục dự án và chạy lệnh:
```bash
python3 -m http.server 8000
```
Sau đó truy cập trình duyệt tại: `http://localhost:8000`

---

## 5. HƯỚNG DẪN TÙY BIẾN VÀ KẾT NỐI HỆ THỐNG THẬT

### 1. Thay đổi thông tin khóa học và giáo trình chi tiết
Mở file `js/main.js` và tìm đối tượng `HANYU_COURSES_DATA` ở đầu file. Bạn có thể dễ dàng sửa tên khóa học, học phí, thời lượng và các tuần học:
```javascript
const HANYU_COURSES_DATA = [
  {
    id: 'c01',
    title: 'Tiếng Trung cho người mới bắt đầu',
    fee: '2.450.000 đ',
    duration: '24 buổi (3 tháng)',
    // ...
  }
];
```

### 2. Thay đổi bảng giá và các gói học phí
Mở file `js/main.js` và chỉnh sửa đối tượng `HANYU_PRICING_DATA`:
```javascript
const HANYU_PRICING_DATA = [
  {
    id: 'plan-standard',
    name: 'Gói Toàn Diện',
    feeFormatted: '2.950.000',
    unit: 'khóa / 3.5 tháng',
    featured: true,
    badge: 'Khuyên Dùng',
    // ...
  }
];
```

### 3. Kết nối Form đăng ký với Backend API hoặc Google Sheets / CRM
Trong file `js/main.js`, lớp `FormSubmissionService` được thiết kế độc lập. Khi triển khai lên máy chủ thật, chỉ cần mở khóa đoạn mã `fetch()` bên dưới:
```javascript
class FormSubmissionService {
  static async submitLead(data) {
    const response = await fetch('https://api.yourdomain.com/v1/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Network error');
    return await response.json();
  }
}
```

### 4. Tích hợp Google Analytics 4 (GA4) hoặc Facebook Pixel
Hàm `trackConversionEvent(eventName, payload)` trong `js/main.js` đã sẵn sàng đẩy dữ liệu vào `window.dataLayer` và `window.fbq`. Bạn chỉ cần dán mã script GTM hoặc Pixel vào thẻ `<head>` của `index.html`.

---

## 6. TIÊU CHUẨN KỸ THUẬT VÀ TỐI ƯU HÓA

- **Responsive Design**: Đã kiểm thử tối ưu hiển thị trên Mobile (320px - 480px), Tablet (768px - 1024px) và Desktop lớn (1200px+).
- **Tránh che khuất tiêu đề**: Tất cả các thẻ `<section>` đều được cấu hình thuộc tính `scroll-margin-top: calc(var(--header-height) + 20px)`, đảm bảo khi nhấn link trên thanh menu, header sticky không bao giờ che mất nội dung tiêu đề.
- **Tối ưu trải nghiệm Form (CRO)**:
  - Nút *"Đăng ký tư vấn"* ở bất kỳ khóa học nào đều kích hoạt modal và tự động chọn chính xác khóa học đó trong danh sách thả xuống.
  - Form kiểm tra tính hợp lệ của số điện thoại Việt Nam (10 số, đầu số 03, 05, 07, 08, 09, hoặc +84).
  - Không bao giờ xóa trắng nội dung người dùng đã nhập nếu xảy ra lỗi xác thực.
- **Hỗ trợ Accessibility (A11y)**:
  - Đầy đủ thẻ `aria-expanded`, `aria-controls`, `role="region"`.
  - Hỗ trợ duyệt bằng phím Tab và mở đóng Accordion/Modal bằng phím `Enter`, `Space`, `Escape`.
  - Hỗ trợ chế độ giảm chuyển động `@media (prefers-reduced-motion: reduce)`.
