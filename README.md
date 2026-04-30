# 🍔 Food Ordering Platform — Frontend

<div align="center">

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-5.0-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![MUI](https://img.shields.io/badge/Material_UI-5.14-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.7-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Formik](https://img.shields.io/badge/Formik-2.4-172B4D?style=for-the-badge)

**Giao diện người dùng hiện đại** cho nền tảng đặt món ăn trực tuyến — xây dựng bằng React 18 + JavaScript, tích hợp đầy đủ luồng đặt hàng từ khám phá menu, giỏ hàng, thanh toán đến theo dõi đơn hàng, cùng trang quản trị dành cho nhà hàng.

[🔗 Backend Repo](https://github.com/NgSang0127/FoodOrderingWebBE) · [👤 Tác giả](https://github.com/NgSang0127) · [🐛 Báo lỗi](https://github.com/NgSang0127/foodorderingui/issues)

</div>

---

## 📋 Mục lục

- [Tổng quan dự án](#-tổng-quan-dự-án)
- [Tính năng chính](#-tính-năng-chính)
- [Tech Stack](#-tech-stack)
- [Cấu trúc dự án](#-cấu-trúc-dự-án)
- [Luồng hoạt động](#-luồng-hoạt-động)
- [Yêu cầu hệ thống](#-yêu-cầu-hệ-thống)
- [Hướng dẫn cài đặt & chạy](#-hướng-dẫn-cài-đặt--chạy)
- [Biến môi trường](#-biến-môi-trường)
- [Scripts](#-scripts)
- [Kiến trúc State Management](#-kiến-trúc-state-management)
- [Kết nối Backend API](#-kết-nối-backend-api)
- [Đóng góp](#-đóng-góp)
- [Tác giả](#-tác-giả)

---

## 🎯 Tổng quan dự án

**Food Ordering UI** là phần giao diện người dùng (frontend) của hệ thống đặt món ăn trực tuyến — một dự án thực hành full-stack của **Nguyễn Công Sáng** nhằm xây dựng nền tảng thương mại điện tử trong lĩnh vực F&B. Ứng dụng phục vụ hai nhóm người dùng chính:

- **Khách hàng (Customer)**: Duyệt menu theo nhà hàng/danh mục, thêm vào giỏ hàng, đặt hàng, theo dõi trạng thái đơn và quản lý tài khoản cá nhân.
- **Chủ nhà hàng / Admin (Restaurant Owner)**: Quản lý thực đơn (CRUD món ăn, danh mục), theo dõi và cập nhật trạng thái đơn hàng, quản lý thông tin nhà hàng.

Dự án được phát triển bằng **Create React App** với **JavaScript**, sử dụng **Redux** cho state management tập trung, **Formik + Yup** cho form validation và **Material UI** cho component system.

---

## ✨ Tính năng chính

### 👤 Xác thực & Tài khoản
- Đăng ký tài khoản mới (khách hàng / chủ nhà hàng)
- Đăng nhập với email + mật khẩu, xác thực qua **JWT Token**
- Quản lý hồ sơ cá nhân: cập nhật thông tin, ảnh đại diện
- Phân quyền theo vai trò: `CUSTOMER`, `RESTAURANT_OWNER`
- **Route Guard** bảo vệ trang theo role — redirect nếu chưa đăng nhập hoặc sai quyền

### 🍽️ Khám phá & Menu
- Trang chủ hiển thị danh sách nhà hàng nổi bật, slider/carousel banner
- Tìm kiếm và lọc nhà hàng theo tên, địa điểm, danh mục ẩm thực
- Xem chi tiết nhà hàng: thông tin, giờ mở cửa, đánh giá
- Duyệt menu theo danh mục, xem chi tiết từng món ăn (ảnh, mô tả, giá)

### 🛒 Giỏ hàng & Đặt hàng
- Thêm / Xoá / Cập nhật số lượng món trong giỏ hàng (Redux Store)
- Giỏ hàng persist qua các trang, hiển thị tổng giá trị real-time
- Xem lại đơn hàng trước khi xác nhận (Order Review)
- Đặt hàng và theo dõi trạng thái: `PENDING → CONFIRMED → PREPARING → OUT_FOR_DELIVERY → DELIVERED`
- Lịch sử đơn hàng đã đặt

### 🏪 Quản lý Nhà hàng (Restaurant Owner)
- Dashboard tổng quan: đơn hàng mới, doanh thu, thống kê
- **CRUD Danh mục món ăn** (Food Category): thêm, sửa, xoá danh mục
- **CRUD Món ăn** (Menu Item): thêm, sửa, xoá món ăn, upload ảnh
- Quản lý **đơn hàng đến**: xem danh sách, cập nhật trạng thái từng đơn
- Cập nhật thông tin nhà hàng: tên, địa chỉ, giờ mở cửa, loại ẩm thực

### 📋 Form & Validation
- **Formik** + **Yup** — validation schema toàn diện cho mọi form:
  - Đăng ký / Đăng nhập
  - Thêm / Sửa món ăn
  - Cập nhật hồ sơ
  - Form thanh toán / địa chỉ giao hàng
- Hiển thị lỗi inline, submit handling, loading state

### 🎨 UI/UX
- **Material UI v5** — component library nhất quán và chuyên nghiệp
- **Tailwind CSS** — utility class cho layout và custom styling linh hoạt
- **Font Awesome Icons** — icon set phong phú (solid, regular, brands)
- **React Slick** — carousel cho banner và danh sách nhà hàng nổi bật
- **Responsive Design** — tương thích đầy đủ mobile, tablet, desktop
- Loading spinner, skeleton loading, error state, empty state
- Date/Time picker cho đặt lịch, giờ mở cửa (`@mui/x-date-pickers` + Day.js)

---

## 🛠️ Tech Stack

### Core Framework
| Công nghệ | Phiên bản | Mục đích |
|---|---|---|
| React | 18.3.1 | UI framework |
| JavaScript (ES6+) | — | Ngôn ngữ lập trình chính |
| Create React App | 5.0.1 | Project scaffold & build toolchain |

### State Management
| Thư viện | Phiên bản | Mục đích |
|---|---|---|
| Redux | 5.0.1 | Global state management |
| React Redux | 9.1.2 | React bindings cho Redux |
| Redux Thunk | 3.1.0 | Async action middleware (API calls) |

### UI Components & Styling
| Thư viện | Phiên bản | Mục đích |
|---|---|---|
| Material UI (MUI) | 5.14.6 | Component library chính |
| MUI Icons Material | 5.14.6 | Material Design icons |
| MUI Lab | 5.0.0-alpha | Components đang beta (Timeline, LoadingButton...) |
| MUI X Date Pickers | 6.18.0 | Date/Time picker |
| Emotion React + Styled | 11.x | CSS-in-JS (MUI dependency) |
| Tailwind CSS | 3.4.3 | Utility-first CSS |
| Font Awesome | 6.5.2 | Icon library (solid, regular, brands) |
| React Slick | 0.30.2 | Carousel / Slider |
| Slick Carousel | 1.8.1 | CSS cho React Slick |

### Routing
| Thư viện | Phiên bản | Mục đích |
|---|---|---|
| React Router DOM | 6.23.1 | Client-side routing, nested routes |

### HTTP & Data Fetching
| Thư viện | Phiên bản | Mục đích |
|---|---|---|
| Axios | 1.7.2 | HTTP client, kết nối REST API |

### Form & Validation
| Thư viện | Phiên bản | Mục đích |
|---|---|---|
| Formik | 2.4.6 | Form state management |
| Yup | 1.4.0 | Schema-based validation |

### Utilities
| Thư viện | Phiên bản | Mục đích |
|---|---|---|
| Day.js | 1.11.11 | Xử lý và format ngày giờ (MUI Date Pickers adapter) |

---

## 📁 Cấu trúc dự án

```
foodorderingui/
├── public/
│   ├── index.html               # HTML entry point
│   └── favicon.ico
├── src/
│   ├── component/               # Reusable UI components
│   │   ├── Auth/                # Login, Register forms
│   │   ├── Cart/                # Giỏ hàng sidebar / drawer
│   │   ├── Home/                # Landing page, banner, restaurant list
│   │   ├── Menu/                # Menu items, category filter
│   │   ├── Order/               # Order tracking, order history
│   │   ├── Profile/             # User profile, address management
│   │   ├── Restaurant/          # Restaurant details page
│   │   └── Navbar/              # Header, navigation bar
│   │
│   ├── AdminComponent/          # Trang quản trị (Restaurant Owner)
│   │   ├── Admin.js             # Layout wrapper admin
│   │   ├── Dashboard/           # Tổng quan, thống kê
│   │   ├── Menu/                # CRUD món ăn
│   │   ├── Category/            # CRUD danh mục
│   │   ├── Order/               # Quản lý đơn hàng đến
│   │   └── Restaurant/          # Cập nhật thông tin nhà hàng
│   │
│   ├── State/                   # Redux store & slices
│   │   ├── store.js             # Redux store configuration
│   │   ├── Authentication/      # Auth slice + thunks (login, register, logout)
│   │   ├── Cart/                # Cart slice (add, remove, update quantity)
│   │   ├── Restaurant/          # Restaurant slice (list, detail, search)
│   │   ├── Menu/                # Menu & food item slice
│   │   ├── Order/               # Order slice (create, list, update status)
│   │   └── Admin/               # Admin-specific actions
│   │
│   ├── config/
│   │   └── api.js               # Axios instance + base URL + JWT interceptor
│   │
│   ├── util/                    # Utility functions, constants, formatters
│   │   └── uploadToCloudinary.js # Image upload helper
│   │
│   ├── App.js                   # Root component, Router setup
│   └── index.js                 # Entry point, Redux Provider
│
├── tailwind.config.js           # Tailwind CSS configuration
├── package.json                 # Dependencies & scripts
└── README.md
```

---

## 🔄 Luồng hoạt động

### Luồng Khách hàng đặt món

```
[Trang chủ]
    ↓ Chọn nhà hàng
[Restaurant Detail]
    ↓ Chọn món ăn → "Thêm vào giỏ"
[Redux Cart Store]  ←→  [Cart Sidebar/Drawer]
    ↓ "Đặt hàng"
[Order Checkout]
    ↓ Nhập địa chỉ + xác nhận
[POST /api/order → Spring Boot Backend]
    ↓ Đơn hàng được tạo
[Order Tracking] — theo dõi trạng thái real-time
```

### Luồng Chủ nhà hàng quản lý đơn

```
[Admin Dashboard]
    ↓ Xem danh sách đơn hàng mới
[Order Management]
    ↓ Click "Xác nhận" / "Đang chuẩn bị" / "Giao hàng"
[PUT /api/admin/order/:id/status]
    ↓ Trạng thái cập nhật
[Customer Order Tracking] — cập nhật phía khách hàng
```

---

## 💻 Yêu cầu hệ thống

| Công cụ | Phiên bản tối thiểu |
|---|---|
| Node.js | 14.x LTS trở lên (khuyến nghị 18.x) |
| npm | 6.x trở lên |
| Git | 2.x+ |

> **Lưu ý**: Backend Spring Boot phải đang chạy tại `http://localhost:8080` để ứng dụng hoạt động đầy đủ.

---

## 🚀 Hướng dẫn cài đặt & chạy

### 1. Clone repository

```bash
git clone https://github.com/NgSang0127/foodorderingui.git
cd foodorderingui
```

### 2. Cài đặt dependencies

```bash
npm install
```

### 3. Cấu hình Backend URL

Tạo file `.env` tại thư mục gốc:

```env
REACT_APP_API_BASE_URL=http://localhost:8080
```

### 4. Chạy ứng dụng

```bash
npm start
```

Ứng dụng sẽ chạy tại: **http://localhost:3000**

Trang tự động reload khi bạn chỉnh sửa code. Lỗi lint hiển thị trực tiếp trên console.

### 5. Build cho Production

```bash
npm run build
```

Output tối ưu hoá được tạo trong thư mục `build/` — sẵn sàng deploy lên Nginx, Apache hoặc các hosting service.

---

## 🌍 Biến môi trường

Tạo file `.env` tại thư mục gốc:

```env
# URL của Backend API (Spring Boot)
REACT_APP_API_BASE_URL=http://localhost:8080

# Cloudinary config (nếu dùng upload ảnh)
REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloud_name
REACT_APP_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

> Trong Create React App, tất cả biến môi trường phải có tiền tố `REACT_APP_` để được expose ra phía client.

Trong code JavaScript:

```javascript
const apiUrl = process.env.REACT_APP_API_BASE_URL;
```

---

## 📜 Scripts

| Script | Lệnh | Mô tả |
|---|---|---|
| `start` | `npm start` | Khởi động dev server tại port 3000 với HMR |
| `build` | `npm run build` | Build production-ready bundle vào `/build` |
| `test` | `npm test` | Chạy Jest test runner (interactive watch mode) |
| `eject` | `npm run eject` | Eject CRA config (không thể hoàn tác) |

---

## 🏗️ Kiến trúc State Management

Ứng dụng sử dụng **Redux** với **Redux Thunk** middleware cho toàn bộ global state:

```
┌────────────────────────────────────────────────┐
│              React Components                  │
│   (dispatch actions → read from store)         │
└────────────────┬───────────────────────────────┘
                 │ dispatch
                 ↓
┌────────────────────────────────────────────────┐
│              Redux Store                       │
│  ┌──────────┐ ┌──────────┐ ┌────────────────┐ │
│  │   auth   │ │   cart   │ │  restaurant    │ │
│  │  Slice   │ │  Slice   │ │    Slice       │ │
│  └──────────┘ └──────────┘ └────────────────┘ │
│  ┌──────────┐ ┌──────────┐                    │
│  │  order   │ │  menu    │  + admin slices    │
│  │  Slice   │ │  Slice   │                    │
│  └──────────┘ └──────────┘                    │
└────────────────────────────────────────────────┘
                 │
                 ↓ Redux Thunk (async actions)
┌────────────────────────────────────────────────┐
│           Axios API Service Layer              │
│   (Base URL, JWT Bearer token interceptor)     │
└────────────────────────────────────────────────┘
                 │
                 ↓ HTTP Requests
┌────────────────────────────────────────────────┐
│         Spring Boot Backend REST API           │
│              localhost:8080                    │
└────────────────────────────────────────────────┘
```

**Các Redux Slices:**

| Slice | Trạng thái quản lý |
|---|---|
| `auth` | user info, JWT token, isAuthenticated, loading |
| `cart` | danh sách món trong giỏ, tổng giá, số lượng |
| `restaurant` | danh sách nhà hàng, chi tiết nhà hàng, search results |
| `menu` | danh sách món ăn, danh mục, chi tiết món |
| `order` | đơn hàng hiện tại, lịch sử đơn hàng, trạng thái |

---

## 🔌 Kết nối Backend API

### Axios Instance với JWT Interceptor

```javascript
// src/config/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080',
});

// Tự động gắn JWT token vào mọi request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

### Ví dụ Redux Thunk Action

```javascript
// State/Restaurant/Action.js
export const getAllRestaurants = () => async (dispatch) => {
  dispatch({ type: GET_RESTAURANTS_REQUEST });
  try {
    const { data } = await api.get('/api/restaurants');
    dispatch({ type: GET_RESTAURANTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_RESTAURANTS_FAILURE, payload: error.message });
  }
};
```

### Các API Endpoint chính

| Method | Endpoint | Mô tả |
|---|---|---|
| `POST` | `/auth/signup` | Đăng ký tài khoản |
| `POST` | `/auth/signin` | Đăng nhập, nhận JWT |
| `GET` | `/api/restaurants` | Danh sách nhà hàng |
| `GET` | `/api/restaurants/:id/food` | Menu của nhà hàng |
| `POST` | `/api/order` | Tạo đơn hàng mới |
| `GET` | `/api/order/user` | Lịch sử đơn hàng của user |
| `PUT` | `/api/admin/order/:id/:status` | Cập nhật trạng thái đơn (Admin) |
| `POST` | `/api/admin/food` | Thêm món ăn mới (Admin) |
| `DELETE` | `/api/admin/food/:id` | Xoá món ăn (Admin) |

---

## 🖼️ Giao diện Ứng dụng

### Các trang chính

| Trang | Route | Mô tả |
|---|---|---|
| Trang chủ | `/` | Banner, danh sách nhà hàng nổi bật |
| Chi tiết nhà hàng | `/restaurant/:id` | Menu, thông tin, đánh giá |
| Giỏ hàng | `/cart` | Xem và chỉnh sửa giỏ hàng |
| Đặt hàng | `/checkout` | Địa chỉ giao hàng, xác nhận đơn |
| Theo dõi đơn hàng | `/my-orders` | Lịch sử và trạng thái đơn hàng |
| Hồ sơ | `/my-profile` | Thông tin cá nhân, địa chỉ |
| Đăng nhập | `/account/login` | Form đăng nhập |
| Đăng ký | `/account/register` | Form đăng ký |
| Admin Dashboard | `/admin/dashboard` | Tổng quan nhà hàng (Owner) |
| Quản lý Menu | `/admin/menu` | CRUD món ăn (Owner) |
| Quản lý Đơn | `/admin/orders` | Cập nhật trạng thái đơn (Owner) |

---

## 🔗 Liên quan: Backend API

Dự án này là frontend của hệ thống. Backend được xây dựng bằng **Spring Boot** với:

- **JWT Authentication** + Spring Security
- **MySQL** database
- **Redis** caching
- RESTful API với phân quyền RBAC (`CUSTOMER`, `RESTAURANT_OWNER`)

👉 Xem Backend tại: [FoodOrderingWebBE](https://github.com/NgSang0127/FoodOrderingWebBE)

---

## 🤝 Đóng góp

1. Fork repository
2. Tạo feature branch: `git checkout -b feature/ten-tinh-nang`
3. Commit thay đổi: `git commit -m 'feat: mô tả ngắn'`
4. Push branch: `git push origin feature/ten-tinh-nang`
5. Tạo Pull Request

---

## 👨‍💻 Tác giả

**NgSang0127**

- GitHub: [@NgSang0127](https://github.com/NgSang0127)
- Trường: International University — HCMIU (Vietnam National University, HCM City)

---

<div align="center">

Made with ❤️ by **Nguyễn Công Sáng**

⭐ Nếu dự án này hữu ích, hãy cho một star để ủng hộ!

</div>
