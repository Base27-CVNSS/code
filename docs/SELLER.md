# Thêm sản phẩm và vận hành danh mục

## Schema hiện tại

```json
{
  "id": "VF017",
  "title": "Tên sản phẩm",
  "category": "GIS & WebGIS",
  "stack": "HTML / JavaScript",
  "price": 0,
  "kind": "map",
  "featured": false,
  "version": "1.0.0",
  "license": "MIT",
  "description": "Mô tả trung thực chức năng",
  "features": ["Chức năng đã có"],
  "status": "starter",
  "download": "starters/VF017.html"
}
```

1. Chọn ID duy nhất; thêm bản ghi vào data/products.json.
2. Đặt ảnh minh họa tại assets/VF017.svg (schema hiện dùng SVG theo ID). Nếu dùng ảnh PNG/JPG, bổ sung trường image và cập nhật đường dẫn trong app.js, check.mjs.
3. Sản phẩm miễn phí phải có file download thật. Chỉ dùng đường dẫn tương đối do chủ repo kiểm soát.
4. Chạy npm run check, build và xem giao diện trước khi push.
5. Category mới tự xuất hiện trong sidebar và select; chips nhanh có thể chỉnh trong app.js.

## Sản phẩm thương mại

Bản hiện tại dùng status `catalog-demo` và gắn nhãn giá mẫu. Chưa có gói nguồn trả phí hoặc seller thật. Không đổi nhãn thành bán thật chỉ bằng việc sửa JSON: cần hoàn thành COMMERCE.md, cập nhật UI, schema và kiểm tra trước.

Hồ sơ sản phẩm thật nên có: tác giả, ảnh thật, demo an toàn, phiên bản, ngày cập nhật, changelog, dependency/runtime, yêu cầu hosting, cấu hình .env.example không chứa bí mật, DB migrations/seed, tài liệu backup, hướng dẫn cài, test khởi động, giấy phép và phạm vi hỗ trợ. Với GIS ghi rõ CRS, nguồn dữ liệu và quyền tái sử dụng.

Không public ZIP trả phí, không đưa URL kho riêng vào JSON công khai. Repo này chỉ công khai cửa hàng và starter được phép phân phối.

## Bàn giao đề xuất

- Source có lockfile và kiểm tra build.
- Hướng dẫn từng bước, dữ liệu mẫu đã loại thông tin cá nhân.
- Quyền sử dụng cụ thể: số site/dự án, sửa code, tái phân phối.
- Thời gian hỗ trợ, việc nào tính thêm phí, điều kiện hoàn tiền.
- Không dùng logo cổng thanh toán hoặc tuyên bố bảo đảm khi chưa ký kết/tích hợp.
