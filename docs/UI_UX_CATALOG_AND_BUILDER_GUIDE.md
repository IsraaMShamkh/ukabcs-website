# 📘 UKABCS UI/UX Catalog & Future Website Builder Guide
> **الدليل الشامل للسكاشن، المكونات، ونظام بناء المواقع المستقبلية**

---

## 📌 1. التقنيات والنظام الذي تم البناء به (Architecture & Tech Stack)

تم بناء هذا الموقع باستخدام **أحدث الهياكل والتقنيات البرمجية للمواقع الحديثة (Modern Web Architecture)**، حيث يجمع بين السرعة الخارقة (Performance)، التواؤم التام مع محركات البحث وذكاء الآلات (SEO & GEO)، والتصاميم التفاعلية المبهرة (Rich UI/UX Animations).

### 🛠️ التقنيات الأساسية (Core Tech Stack):
1. **Astro 5 (`Astro Framework`)**:
   - الإطار الأساسي للبناء، ويتميز بكونه **Zero-JS by Default** لضمان سرعة تحميل فائقة جداً وملاءمة تامة لـ SEO.
2. **React 19 (`@astrojs/react`)**:
   - مُستخدم لبناء المكونات التفاعلية المعقدة والديناميكية (Interactive Islands).
3. **Tailwind CSS + CSS Design Tokens (`src/styles/tokens.css` & `global.css`)**:
   - نظام التنسيق والتصميم، يعتمد على متغيرات CSS موحدة للألوان، الخطوط، المسافات، والظلال لضمان هوية بصرية متميزة ومتناسقة.
4. **Aceternity UI + Shadcn UI**:
   - مكتبات التصميم التفاعلية الفاخرة التي توفر المؤثرات البصرية، الحركة ثلاثية الأبعاد (3D Wobble, Draggable Cards, Focus Blur)، والبطاقات العصرية.
5. **Framer Motion (`motion`)**:
   - محرك التحريك والأنيميشن السلس لجميع العناصر التفاعلية.
6. **Lucide Icons (`lucide-astro`)**:
   - حزمة الأيقونات السريعة والمتناسقة.

---

## 🎨 2. نظام البناء وإدارة المحتوى (Single Source of Truth)

الموقع مصمم بنظام **Component-Driven Modular Architecture**:
- **فصل المحتوى عن التصميم**: لا يتم كتابة النصوص مباشرة داخل أصل المكونات، بل توجد في ملفات الإعدادات:
  - `src/config/site.ts` (بيانات الموقع الأساسية، الهيدر، الفوتر، الروابط).
  - `src/config/home.ts` (نصوص الصفحة الرئيسية وجميع السكاشن).
- **التعديل البسيط**: لتغيير أي نص أو رابط في أي سكشن، يتم التعديل في ملف الـ `config` فقط وسيتم تحديث السكشن فوراً.

---

## 📚 3. كتالوج السكاشن المتاحة بالمشروع (UI/UX Section Catalog)

يمكنك استخدام هذه السكاشن لبناء أي صفحة جديدة أو موقع جديد عن طريق تجميعها بسهولة:

### 1️⃣ سكاشن الهيرو والواجهة الرئيسية (Hero Sections)
* **Images Slider Hero (`src/components/ui/images-slider.tsx`)**
  * **المصدر:** Aceternity UI
  * **الوصف:** سلايدر صور خلفية عالي الجودة بتنقلات سلسة، مع نصوص وأزرار تفاعلية فوق الصورة.
  * **الاستخدام:** الواجهة الرئيسية للموقع.
* **Page Hero (`src/components/hero/PageHero.astro`)**
  * **المصدر:** Astro Custom Component
  * **الوصف:** هيرو مخصص للصفحات الفرعية يحتوي على شريط المسار (Breadcrumbs)، العنوان الرئيسي، ونسبة شفافة أنيقة.

### 2️⃣ سكاشن البطاقات والشبكات التفاعلية (Interactive Cards & Grids)
* **Focus Cards (`src/components/ui/focus-cards.tsx`)**
  * **المصدر:** Aceternity UI
  * **الوصف:** بطاقات تفاعلية؛ عند وضع المؤشر على بطاقة يتم إبرازها وتغبيش (Blur) باقي البطاقات بحركة انسيابية.
  * **الاستخدام:** عرض الخدمات، أو مجالات التخصص، أو الخدمات الرئيسية.
* **Bento Features Grid (`src/components/sections/FeaturesBentoSection.astro`)**
  * **المصدر:** Shadcn / Aceternity Style
  * **الوصف:** تقسيم شبكي عالي الجودة (Bento Layout) يقسم المميزات ببطاقات ذات أحجام مختلفة غير تقليدية.
  * **الاستخدام:** عرض ميزات المنتج أو خدمات الشركة بالتفصيل.
* **Wobble Card (`src/components/ui/wobble-card.tsx`)**
  * **المصدر:** Aceternity UI
  * **الوصف:** بطاقات تتفاعل مع حركة الماوس بزوايا ثلاثية الأبعاد (3D Wobble) وهالة ضوئية.
  * **الاستخدام:** الدعوة للإجراء الخاصة (Special CTA) أو النشرات البريدية المهمة.
* **Draggable Cards Wall (`src/components/ui/draggable-card.tsx`)**
  * **المصدر:** Aceternity UI + Framer Motion
  * **الوصف:** بطاقات تفاعلية يمكن للمستخدم سحبها وإفلاتها بحرية في الشاشة.
  * **الاستخدام:** عرض فئات الأعضاء، الشركاء، أو آراء العملاء بشكل ممتع وتفاعلي.
* **Apple Cards Carousel (`src/components/ui/apple-cards-carousel.tsx`)**
  * **المصدر:** Aceternity UI
  * **الوصف:** شريط بطاقات أفقي مستوحى من تصميم شركة Apple للتنقل التفاعلي.

### 3️⃣ سكاشن المحتوى والعرض البصري (Content & Showcase Sections)
* **Image Comparison Slider (`src/components/sections/ImageComparisonSection.astro`)**
  * **المصدر:** Custom Interactive Section
  * **الوصف:** شريط سحب تفاعلي لمقارنة صورتين (قبل / بعد).
  * **الاستخدام:** عرض نتائج الأعمال، التحولات البصرية، أو المقارنات العلمية والتقنية.
* **Content Tabs (`src/components/ui/ContentTabs.astro`)**
  * **المصدر:** Astro / React UI Component
  * **الوصف:** تبويبات أنيقة لتقسيم المحتوى حسب الفئة بدون الحاجة لإعادة تحميل الصفحة.
* **Articles / Blog / News Section (`src/components/sections/ArticlesBlogEventsSection.astro`)**
  * **المصدر:** Custom UI Cards (`src/components/cards/NewsCard.astro`)
  * **الوصف:** كروت عصرية للمقالات والأخبار مع تصنيفات وتواريخ قراءة.
* **Team Section & Animated Tooltip (`src/components/sections/TeamSection.astro` + `animated-tooltip.tsx`)**
  * **المصدر:** Aceternity UI
  * **الوصف:** عرض صور أعضاء الفريق مع تأثير Tooltip منبثق ومتحرك يحتوي على الاسم والوظيفة عند التمرير على الصورة.

### 4️⃣ سكاشن التفاعل، الثقة والنتائج (Social Proof & Stats)
* **Numbers Counter Section (`src/components/sections/NumbersCounterSection.astro`)**
  * **المصدر:** Custom Stats Component
  * **الوصف:** عدادات إحصائية رقمية عريضة وعصرية لإبراز الإنجازات والأرقام (مثال: +150 مشروع، +5000 عضو).
* **Partner Ribbon (`src/components/sections/PartnerRibbonSection.astro`)**
  * **المصدر:** Custom Ribbon Component
  * **الوصف:** شريط منظم لشعارات الشركاء والمؤسسات الداعمة.
* **Animated Testimonials (`src/components/ui/animated-testimonials.tsx`)**
  * **المصدر:** Aceternity UI
  * **الو冲:** عرض آراء العملاء والتوصيات مع انتقال انسيابي بين الصور والشهادات.
* **FAQ Accordion (`src/components/sections/FaqSection.astro` + `FaqAccordion.astro`)**
  * **المصدر:** Custom Accordion
  * **الوصف:** قائمة أسئلة وأجوبة قابلة للطي والتوسع بسلاسة.
* **Newsletter & Contact Section (`src/components/sections/NewsletterSection.astro` & `ContactSection.astro`)**
  * **المصدر:** Responsive Form Components
  * **الوصف:** نماذج اشتراك في النشرة البريدية ونماذج تواصل مباشرة مع حقول مدققة.
* **Floating Dock (`src/components/ui/floating-dock.tsx`)**
  * **المصدر:** Aceternity UI
  * **الوصف:** شريط أدوات عائم في أسفل الشاشة للتنقل السريع بين الصفحات بحركات إكسبوننشال مستوحي من MacOS.

---

## 🚨 4. القانون الذهبي والضوابط الصارمة لبناء المواقع (Strict Assembly Rules)

> ⚠️ **قاعدة صارمة ومطلقة (Mandatory Rule):**
> 1. **ممنوع بتاتاً برمجة أو تصميم أي سكشن جديد من الصفر!**
> 2. **يُمنع إنشاء أشكال أو كود UI مخصص جديد.**
> 3. **طريقة العمل الوحيدة:** عند طلب موقع جديد أو إعطاء رابط جديد، يقوم المساعد الذكي بقراءة محتوى الموقع المطلوبة، ثم **اختيار السكاشن المناسبة حصرياً من الكتالوج أعلاه**، وتسكين المحتوى والنصوص داخل هذه السكاشن فقط عبر ملفات الـ `config`.

---

## 🚀 5. طريقة بناء أي موقع جديد مستقبلاً (Future Website Builder Guide)

عندما ترغبين في بناء موقع جديد مستقبلاً، يمكنك اتباع هذه الخطوات البسيطة:

### 📋 الخطوات:
1. **افتحي هذا الملف** (`docs/UI_UX_CATALOG_AND_BUILDER_GUIDE.md`) واختاري السكاشن التي تناسب موقعك الجديد.
2. **أعطي الذكاء الاصطناعي (المساعد) الطلب بالشكل التالي:**

> **صيغة الطلب الموصى بها للذكاء الاصطناعي:**
> 
> "أريد بناء موقع جديد برابط [ضع الرابط هنا].
> 🛑 **قاعدة حاسمة:** ممنوع برمجة أي سكشن جديد من الصفر! قم بحسب المحتوى وتسكينه فقط داخل السكاشن التالية المأخوذة من الكتالوج الموجود في `docs/UI_UX_CATALOG_AND_BUILDER_GUIDE.md`:
> 1. Hero: `Images Slider Hero`
> 2. Services: `Focus Cards`
> 3. Features: `Bento Features Grid`
> 4. Showcase: `Image Comparison Slider`
> 5. Stats: `Numbers Counter Section`
> 6. Special Callout: `Wobble Card`
> 7. Testimonials: `Animated Testimonials`
> 8. FAQ: `FAQ Accordion`
> 9. Navigation Dock: `Floating Dock`
> 
> قم بتوزيع المحتوى في ملفات الـ Config وتركيب الصفحة بهذه السكاشن المعتمدة فقط."

---

## 📂 5. خريطة الملفات والهيكل (Directory Reference)

```
UKABCS Website/
├── docs/
│   └── UI_UX_CATALOG_AND_BUILDER_GUIDE.md   <-- (هذا الملف - المرجع الدائم)
├── src/
│   ├── components/
│   │   ├── hero/            # سكاشن الهيرو
│   │   ├── sections/        # السكاشن المصممة والمعتمدة
│   │   ├── ui/              # مكونات Aceternity & Shadcn UI
│   │   ├── cards/           # بطاقات العرض للبرامج والأخبار والمشاريع
│   │   └── react/           # التجميع التفاعلي لسكاشن React
│   ├── config/
│   │   ├── site.ts          # إعدادات الموقع والهيدر والفوتر
│   │   └── home.ts          # نصوص وسكاشن الصفحة الرئيسية
│   ├── styles/
│   │   ├── global.css       # تنسيقات Tailwind والأشكال العامة
│   │   └── tokens.css       # المتغيرات الهندسية (Design Tokens)
│   └── pages/               # الصفحات المسارات بالموقع
```

---
*تم إنشاء هذا الملف ليكون المرجع الرسمي للدليل والكتالوج الخاص بالتصميم ونظام بناء المواقع.*
