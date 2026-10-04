# Từ cửa hàng tĩnh đến bán mã nguồn thực tế

## Bản hiện tại làm gì?

Danh mục công khai, starter tải trực tiếp, giỏ quan tâm và yêu thích lưu trên thiết bị. Giỏ không phải đơn hàng; file JSON xuất ra chỉ là danh sách quan tâm. Không có thanh toán, đăng nhập, số dư, đơn hàng, upload hoặc giao code thương mại. Giá là mẫu, không phải chào bán được xác nhận.

## Kiến trúc cần bổ sung

Frontend Pages → API HTTPS → database (products, users, orders, payments, entitlements) + kho object riêng lưu ZIP + payment provider.

1. POST /orders nhận product IDs; server đọc giá/tiền tệ từ DB, không tin giá trong trình duyệt. Trả order ID và checkout URL.
2. Cổng thanh toán gửi webhook đến server. Xác minh chữ ký bằng secret ở môi trường server, kiểm tra order, amount, currency, trạng thái và chống xử lý lặp bằng provider event ID duy nhất.
3. Server đánh dấu paid trong transaction và cấp entitlement. Redirect thành công ở frontend không được coi là đã thanh toán.
4. Người mua đăng nhập; GET /orders/:id/download kiểm tra chủ đơn và entitlement, cấp signed URL có hạn cho kho private. Đặt giới hạn tải phù hợp và audit log.
5. Hoàn tiền/revoke cập nhật quyền tải; không thể thu hồi bản đã tải. Chính sách cần nêu rõ.

## Hợp đồng API dự kiến

| Route | Vai trò |
| --- | --- |
| GET /products | Sản phẩm đang bán, giá server |
| POST /orders | Tạo đơn có idempotency key |
| POST /payments/webhook | Xác minh, đối soát, cập nhật thanh toán |
| GET /me/orders | Đơn của người đã đăng nhập |
| GET /orders/:id/download | URL tải giới hạn thời gian |
| POST /seller/products | Seller đã xác minh gửi sản phẩm |

Các route trên là thiết kế, chưa được triển khai trong repo này.

## Điều kiện trước mở bán

Có sản phẩm thật và chứng minh quyền bán; cấu hình đơn vị bán và kênh liên hệ; giấy phép, phí, hỗ trợ, hoàn tiền, riêng tư; kiểm thử sandbox payment/webhook/duplicate/refund; bảo vệ session, rate limiting, kiểm tra upload, malware scan, giới hạn CORS, lưu backup và đối soát. Không nhúng API keys vào app.js hoặc repo Pages.

## Quyền riêng tư bản demo

Chỉ lưu VF product IDs trong localStorage với keys vf-cart, vf-favorites. Không gửi chúng về server, không thu PII, không analytics. GitHub Pages là nhà cung cấp hosting và có thể ghi nhật ký truy cập. Người dùng xóa dữ liệu website trong trình duyệt để xóa local state.
