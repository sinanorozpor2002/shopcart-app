# ⚡ شروع سریع پروژه

## گام‌های اساسی:

### 1️⃣ نصب پکیج‌ها
```bash
npm install --legacy-peer-deps
```

### 2️⃣ ایجاد حساب Sanity
- برو به https://sanity.io
- یه پروژه بساز و Project ID رو یادداشت کن
- از بخش API یه Token بگیر

### 3️⃣ تنظیم `.env.local`
فایل `.env.local` رو باز کن و اینا رو جایگزین کن:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=PROJECT_ID_واقعی_شما
SANITY_API_TOKEN=TOKEN_واقعی_شما
SANITY_API_READ_TOKEN=TOKEN_واقعی_شما
```

### 4️⃣ اجرای پروژه
```bash
npm run dev
```

### 5️⃣ اضافه کردن محصولات
- برو به: http://localhost:3000/studio
- لاگین کن با حساب Sanity
- محصولات رو از پنل ادمین اضافه کن

---

## 🎯 برای دیپلوی روی لیارا:

1. Build بگیر:
```bash
npm run build
```

2. لیارا CLI نصب کن:
```bash
npm install -g @liara/cli
```

3. لاگین و دیپلوی:
```bash
liara login
liara deploy --app اسم-برنامه
```

4. **مهم:** همه متغیرهای `.env.local` رو توی پنل لیارا هم اضافه کن!

---

📖 **برای راهنمای کامل، فایل `SETUP_GUIDE.md` رو ببین**
