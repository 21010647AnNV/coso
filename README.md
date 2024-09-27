This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Hướng dẫn

Thao tác với Khách Hàng Tiềm Năng:
- Hiện từng thông tin: http://20.212.111.173:5000/khachhangtiemnang/id (thay bằng id mong muốn)
- Hiện tất cả thông tin: http://20.212.111.173:5000/khachhangtiemnang
- Thêm thông tin khách hàng khác: http://20.212.111.173:5000/khachhangtiemnang [POST]
- Cập nhật thông tin từng khách hàng: http://20.212.111.173:5000/khachhangtiemnang/id [PUT]
- Xóa thông tin từng khách hàng: http://20.212.111.173:5000/khachhangtiemnang/id [DELETE]

Thao tác với Nhà Cung Cấp:
- Hiện từng thông tin: http://20.212.111.173:5000/nhacungcap/id (thay bằng id mong muốn)
- Hiện tất cả thông tin: http://20.212.111.173:5000/nhacungcap
- Thêm thông tin nhà cung cấp khác: http://20.212.111.173:5000/nhacungcap [POST]
- Cập nhật thông tin từng nhà cung cấp: http://20.212.111.173:5000/nhacungcap/id [PUT]
- Xóa thông tin từng nhà cung cấp: http://20.212.111.173:5000/nhacungcap/id [DELETE]