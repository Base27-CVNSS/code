# Cài đặt và xuất bản Vietflex Code

## 1. Chuẩn bị

Git để tải repo. Node.js 20+ để kiểm tra/build. Python 3 để chạy máy chủ phát triển. Không có dependency npm cần cài; package.json chỉ chứa lệnh.

## 2. Tải và chạy

```bash
git clone https://github.com/Base27-CVNSS/code.git
cd code
npm run dev
```

Mở http://localhost:8080. Trên Windows nếu không có `python3`, chạy `py -m http.server 8080`. Nếu cổng bận: `python3 -m http.server 8081` rồi mở localhost:8081. Dừng bằng Ctrl+C.

## 3. Chỉnh cửa hàng

- Tên, banner, footer, kênh hỗ trợ: index.html.
- Màu và responsive: assets/style.css, biến `--green`, `--brown`, `--orange`.
- Danh mục: data/products.json; đọc SELLER.md trước khi thêm.
- Chi tiết, chính sách, hành vi giỏ: assets/app.js.
- Favicon: assets/favicon.svg.
- Thay links GitHub Issues bằng kênh liên hệ thật do bạn sở hữu nếu cần.

Không ghi token, mật khẩu, mã nguồn trả phí vào repo công khai. Không thêm số bán hàng, đánh giá hoặc cam kết chưa xác minh.

## 4. Kiểm tra và build

```bash
node --check assets/app.js
npm run check
npm run build
python3 -m http.server 8080 --directory dist
```

`dist/` chỉ gồm nội dung công khai cần phục vụ. Check xác nhận ID duy nhất, giá hợp lệ, ảnh và file tải tồn tại. Kiểm tra thủ công: tìm kiếm không dấu, lọc, phân trang, giỏ/yêu thích sau tải lại, mở liên kết chi tiết, đóng dialog bằng Escape, ba file tải, màn hình 390px.

## 5. GitHub Pages chi tiết

1. Mở repo → Settings → Pages.
2. Build and deployment → Source → GitHub Actions.
3. Mở Actions → Validate and deploy GitHub Pages → Run workflow (main), hoặc push thay đổi lên main.
4. Workflow kiểm tra JS, dữ liệu, build dist; tải artifact và deploy qua OIDC.
5. Chờ cả build và deploy xanh, mở URL ở environment github-pages.
6. URL mặc định: https://base27-cvnss.github.io/code/ . Tên path phân biệt chữ hoa/thường.

Workflow có quyền `contents: read`, `pages: write`, `id-token: write`. Nếu báo Pages chưa bật/403/404 trong configure-pages, chủ repo bật Source như bước 2. Nếu Actions bị tắt, bật trong Settings → Actions → General. Repo phải đáp ứng điều kiện hosting Pages của tài khoản.

## 6. Domain riêng

Trong Settings → Pages nhập domain bạn sở hữu. Cấu hình DNS theo hướng dẫn GitHub hiện hành và chờ xác minh, rồi bật Enforce HTTPS. Không tự nhập domain ví dụ vào cấu hình sản xuất. Đường dẫn tài sản tương đối hỗ trợ cả root domain và project path.

## 7. Lỗi thường gặp

- Trang trắng/danh mục không tải: không mở file://; kiểm tra data/products.json trả HTTP 200 và JSON hợp lệ.
- Ảnh lỗi: tên file phân biệt hoa/thường, cần assets/ID.svg.
- Pages 404: kiểm tra Pages bật, workflow deploy xanh, URL đúng, artifact có index.html tại gốc.
- Thay đổi chưa hiện: chờ workflow mới, tải lại bỏ cache, đối chiếu commit của run.
- Giỏ không lưu: trình duyệt có thể chặn localStorage; trang vẫn hoạt động nhưng dữ liệu mất khi đóng.
- Markdown docs trên website có thể hiển thị dạng văn bản; đọc bản định dạng đẹp ở repo GitHub.

## 8. Hosting khác

Upload toàn bộ dist lên hosting tĩnh; không chỉ index.html. Không cần rewrite SPA vì chi tiết dùng hash route. Để chạy offline sau tải, chạy server HTTP tại thư mục; bản này chưa có service worker tự cache.
