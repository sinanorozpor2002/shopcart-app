# 🚀 راهنمای کامل راه‌اندازی پروژه ShopCart

این راهنما به شما کمک میکنه که پروژه رو به صورت کامل راه‌اندازی کنید.

---

## ✅ قدم ۱: نصب پکیج‌ها

```bash
npm install --legacy-peer-deps
```

---

## 🗄️ قدم ۲: راه‌اندازی Sanity CMS

### ۲.۱ ایجاد حساب و پروژه Sanity

1. برو به: https://sanity.io
2. ثبت نام کن (رایگان)
3. یه پروژه جدید بساز:
   - **Project name**: shopcart (یا هر اسم دلخواهی)
   - **Dataset**: production

### ۲.۲ دریافت API Token

1. توی داشبورد Sanity، برو: **Settings → API**
2. روی **Add API Token** کلیک کن:
   - **Token name**: Development
   - **Permissions**: **Editor**
3. توکن رو کپی کن

### ۲.۳ تنظیم متغیرهای محیطی

فایل `.env.local` رو باز کن و این مقادیر رو با اطلاعات واقعی جایگزین کن:

```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=اینجا Project ID رو بذار
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-03-20
SANITY_API_TOKEN=اینجا API Token رو بذار
SANITY_API_READ_TOKEN=اینجا همون API Token رو دوباره بذار
```

### ۲.۴ راه‌اندازی Sanity Studio (پنل ادمین)

پروژه یه پنل ادمین داخلی داره که میتونی ازش برای اضافه کردن محصولات استفاده کنی:

1. سرور رو اجرا کن:
```bash
npm run dev
```

2. برو به: http://localhost:3000/studio
3. لاگین کن با حساب Sanity
4. از پنل ادمین محصولات، دسته‌بندی‌ها و برندها رو اضافه کن

**توجه:** اگه خطا داد، اول باید پروژه رو با Sanity لینک کنی:

```bash
npx sanity init --project <your-project-id> --dataset production
```

---

## 💳 قدم ۳: راه‌اندازی Stripe (پرداخت آنلاین)

### ۳.۱ ایجاد حساب Stripe

1. برو به: https://stripe.com
2. ثبت نام کن (رایگان)
3. از Dashboard کلیدهای Test API رو بگیر

### ۳.۲ تنظیم Stripe در `.env.local`

```env
# Stripe Payment Configuration
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxx
```

**توجه:** برای webhook secret باید Stripe CLI نصب کنی یا از داشبورد webhook بسازی.

---

## 🔐 قدم ۴: راه‌اندازی Clerk (احراز هویت)

**این مرحله اختیاری است.** اگه میخوای قابلیت لاگین/ثبت نام داشته باشی:

### ۴.۱ ایجاد حساب Clerk

1. برو به: https://clerk.com
2. ثبت نام کن (رایگان)
3. یه Application جدید بساز

### ۴.۲ دریافت کلیدها

از Dashboard:
- **Publishable Key** (شروع میشه با `pk_test_`)
- **Secret Key** (شروع میشه با `sk_test_`)

### ۴.۳ فعال‌سازی Clerk در پروژه

۱. فایل `.env.local` رو تکمیل کن:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxx
```

۲. فایل `middleware.ts` رو باز کن و خطوط comment شده رو uncomment کن:

```typescript
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();
```

۳. فایل `app/(client)/layout.tsx` رو باز کن و ClerkProvider رو uncomment کن:

```typescript
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      {/* ... */}
    </ClerkProvider>
  );
}
```

۴. فایل `components/Header.tsx` و `components/SignIn.tsx` رو هم باید برگردونی به حالت اصلی.

---

## 🚀 قدم ۵: اجرای پروژه

```bash
npm run dev
```

سایت روی http://localhost:3000 اجرا میشه! 🎉

---

## 📦 قدم ۶: آماده‌سازی برای دیپلوی روی لیارا

### ۶.۱ ساخت Build

```bash
npm run build
```

### ۶.۲ تنظیمات لیارا

1. برو به https://console.liara.ir
2. یه برنامه **Node.js** جدید بساز
3. از بخش **تنظیمات → متغیرهای محیطی** همه متغیرهای `.env.local` رو اضافه کن
4. **مهم:** `NEXT_PUBLIC_BASE_URL` رو به آدرس واقعی سایتت تغییر بده (مثلاً: `https://myshop.liara.run`)

### ۶.۳ دیپلوی

```bash
# نصب Liara CLI (اگه نصب نکردی)
npm install -g @liara/cli

# لاگین
liara login

# دیپلوی
liara deploy --app نام-برنامه-شما
```

یا میتونی از **Git** هم وصلش کنی و خودکار دیپلوی بشه.

---

## 🎨 نکات مهم

### اضافه کردن محصولات نمونه

1. برو به `/studio`
2. اول **Categories** (دسته‌بندی) بساز
3. بعد **Brands** (برندها) بساز
4. بعد **Products** (محصولات) بساز و عکس، قیمت و... اضافه کن

### تست پرداخت Stripe

از کارت تست Stripe استفاده کن:
- شماره کارت: `4242 4242 4242 4242`
- تاریخ انقضا: هر تاریخ آینده (مثلاً 12/34)
- CVV: هر 3 رقم (مثلاً 123)

---

## 🆘 مشکلات رایج

### خطای "Missing environment variable"
- مطمئن شو همه متغیرهای `.env.local` رو پر کردی
- بعد از تغییر `.env.local` حتماً سرور رو ری‌استارت کن

### محصولی نمایش داده نمیشه
- مطمئن شو از Sanity Studio محصول اضافه کردی
- مطمئن شو محصولات رو **Publish** کردی

### خطای Clerk
- اگه Clerk نمیخوای، فایل‌های مربوطه رو comment کن (مثل الان)

---

## 📞 پشتیبانی

اگه مشکلی داشتی:
- مستندات Sanity: https://www.sanity.io/docs
- مستندات Next.js: https://nextjs.org/docs
- مستندات Clerk: https://clerk.com/docs
- مستندات Stripe: https://stripe.com/docs

---

**موفق باشی! 🚀**
