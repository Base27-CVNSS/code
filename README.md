# ‹/› Vietflex Code

**Cửa hàng mã nguồn tiếng Việt: website, WebGIS, AI và ứng dụng số.** Giao diện lấy cảm hứng từ ảnh tham chiếu cộng đồng chia sẻ code, dùng thương hiệu và tài sản minh họa riêng.

[Website dự kiến](https://base27-cvnss.github.io/code/) · [Cài đặt](docs/SETUP.md) · [Đăng sản phẩm](docs/SELLER.md) · [Thương mại thật](docs/COMMERCE.md)

![Giao diện](assets/VF001.svg)

## Có gì trong bản này?

- Danh mục trái, banner, sản phẩm dạng lưới/danh sách, sidebar và footer đầy đủ.
- 16 bản ghi sản phẩm mẫu, tìm kiếm không dấu, lọc danh mục/miễn phí/nổi bật, sắp xếp và phân trang.
- Trang chi tiết liên kết bằng `#product/VF001`, tổng quan, hướng dẫn, giấy phép.
- Yêu thích và giỏ mẫu lưu trên trình duyệt; xuất danh sách quan tâm JSON.
- Ba file starter thực tế, tải miễn phí: sơ đồ tọa độ/GeoJSON, chat UI và portfolio.
- Responsive, bàn phím, hộp thoại native, trạng thái rỗng và lỗi tải dữ liệu.
- Không thư viện runtime, không CDN, không font ngoài; đường dẫn tương đối dùng được dưới `/code/`.
- Kiểm tra dữ liệu và build tự động; workflow GitHub Pages.

**Phạm vi:** đây là storefront/catalog mẫu. Sản phẩm trả phí, giá và ảnh là minh họa. Không có tài khoản, nạp tiền, upload server, thanh toán hoặc giao file trả phí. Starter nhỏ không phải bộ WebGIS/AI sản xuất hoàn chỉnh.

## Chạy nhanh

Cần Node.js 20+ cho build/check, Python 3 cho server mẫu.

```bash
git clone https://github.com/Base27-CVNSS/code.git
cd code
npm run dev
# http://localhost:8080
```

Không cần `npm install`. Đừng mở index.html bằng file:// vì fetch JSON cần HTTP.

```bash
node --check assets/app.js
npm run check
npm run build
```

## Cấu trúc

```text
index.html               Trang cửa hàng
assets/app.js            Tìm kiếm, chi tiết, giỏ, yêu thích
assets/style.css         Giao diện responsive
assets/VF*.svg           Ảnh minh họa riêng cho từng sản phẩm
data/products.json       Danh mục sản phẩm
starters/                Ba file mã nguồn miễn phí
docs/                    Cài đặt, bán hàng, kiến trúc thương mại
scripts/                 Kiểm tra và build
.github/workflows/       Xuất bản GitHub Pages
```

## Xuất bản

Settings → Pages → Source → **GitHub Actions**. Push lên `main` hoặc chạy workflow thủ công. Theo dõi Actions cho đến khi job deploy xanh. URL dự kiến: https://base27-cvnss.github.io/code/ . Workflow có `enablement: true`, nhưng GitHub có thể yêu cầu chủ repo bật Pages thủ công.

## Giấy phép

MIT áp dụng cho mã nguồn cửa hàng và ba starter. Không trao quyền đối với sản phẩm của bên thứ ba. Các ảnh SVG trong repo được tạo riêng cho bản mẫu; không sao chép logo, ảnh sản phẩm hay thông tin liên hệ của website tham chiếu.
