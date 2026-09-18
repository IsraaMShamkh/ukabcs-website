# دليل وتلخيص التعديلات الأخيرة لموقع UKABCS Website
**تاريخ التحديث:** 18 سبتمبر 2026  
**رابط المعاينة المحلي (Local Dev Server):** [http://localhost:4321/](http://localhost:4321/)

---

## 1. ملخص التعديلات والتحديثات الأخيرة (Recent Modifications)

تم بناء وتنسيق الموقع باستخدام **Astro 5** مدمجاً مع نظام التصميم الحديث **Aceternity UI & Fluent Design** ليعكس الطابع الأكاديمي الدولي لجمعية UKABCS.

### أهم الإنجازات والتغييرات الرئيسية:
1. **هيكلة مجموعات المحتوى (Content Collections Architecture):**
   - تم إنشاء نظام إدارة محتوى ديناميكي مرن يعتمد على ملفات Markdown (`.md`) و JSON داخل المجلد `src/content/`.
   - يتضمن المحتوى تقسيمات رئيسية مستقلة:
     - `funded-projects`: مشاريع وأبحاث الجامعات المموّلة.
     - `calls`: المنح والدعوات البحثية (تتضمن حالات Open / Closed).
     - `news`: الأخبار والإعلانات الرسمية والمقالات Scientific Articles.
     - `governance`: أعضاء مجلس الإدارة والهيكل الإداري.
     - `partnerships`: الاتفاقيات والشراكات الأكاديمية والصناعية.
     - `benefits`: المزايا وتخفيضات الخدمات لأعضاء الجمعية.
     - `policies`: سياسات الشفافية والحوكمة والقوانين.

2. **تطوير صفحات العرض الديناميكية (Dynamic Routing & Page Templates):**
   - **صفحة المشاريع المموّلة (`/funded-projects`):** تفهرس جميع مشاريع التمويل المقبولة للجامعات (مثل جامعة القاهرة، الأزهر، أسيوط، البصرة، كردفان، حلوان، حجة.. إلخ).
   - **صفحة تفاصيل المشروع (`/funded-projects/[slug]`):** تعرض المقال والمحتوى التفصيلي لأي مشروع مموّل بشكل مستقّل مع الشعار والمؤسسة ورئيس الفريق والـ Metadata الكاملة.
   - **صفحة البرامج والمنح (`/programmes-grants`):** تعرض المنح الأكاديمية والطلبات وحالة كل منحة (`open` أو `closed`).
   - **صفحة الأخبار والإعلانات (`/news` و `/news/[slug]`):** لنشر المقالات والأخبار والتحديثات الأكاديمية.
   - **صفحة الحوكمة والشفافية (`/governance` و `/transparency`):** لعرض الكادر الإداري وسياسات التدقيق.

3. **تحديث واجهاتAceternity UI و Fluent Design:**
   - تصميم بطاقات تفاعلية أنيقة (Dynamic Cards) مع حركات ناعمة upon hover.
   - إضافة شارات الحالة (Pill Badges) للمنح والمشاريع (مثل: Closed Call / Open Call / Verified Award).
   - بناء الهيدر والفوتر وتضمين الهوية البصرية الرسمية للجمعية UKABCS.

---

## 2. خريطة المحتوى وأماكن المقالات (Content Map & Article Locations)

| نوع المحتوى | المجلد الخاص به في المشروع | رابط العرض بالموقع |
| :--- | :--- | :--- |
| **المشاريع المموّلة (Funded Projects)** | [`src/content/funded-projects/`](file:///d:/Code%20Projectes/UKABCS%20Website/src/content/funded-projects) | `/funded-projects/[slug]` |
| **الأخبار والمقالات (News & Articles)** | [`src/content/news/`](file:///d:/Code%20Projectes/UKABCS%20Website/src/content/news) | `/news/[slug]` |
| **المنح والفرص (Grant Calls)** | [`src/content/calls/`](file:///d:/Code%20Projectes/UKABCS%20Website/src/content/calls) | `/programmes-grants` أو `/calls/[slug]` |
| **أعضاء الإدارة (Governance)** | [`src/content/governance/`](file:///d:/Code%20Projectes/UKABCS%20Website/src/content/governance) | `/governance` |
| **الشراكات (Partnerships)** | [`src/content/partnerships/`](file:///d:/Code%20Projectes/UKABCS%20Website/src/content/partnerships) | `/partnerships` |

---

## 3. كيفية إضافة مشروع أو مقال جديد خطوة بخطوة (How to Add New Articles)

### أ) لإضافة مشروع مموّل جديد (Funded Project Article):
أنشئ ملفاً جديداً بصيغة `.md` داخل [`src/content/funded-projects/`](file:///d:/Code%20Projectes/UKABCS%20Website/src/content/funded-projects) (مثل: `2026-cairo-university-new.md`):

```markdown
---
title: "Cairo University Research Team Wins UKABCS Capacity Building Grant 2026"
awardYear: 2026
year: 2026
institution: "Cairo University (Faculty of Science)"
country: "Egypt"
grantType: "Capacity Building Grant"
datePublished: "2026-09-18"
featured: true
summary: "Pioneering AI-driven computer-aided drug discovery workflows."
featuredImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop"
---

هنا يكتب المحتوى الكامل للمقال والمشروع بصيغة Markdown...
يمكنك كتابة التفاصيل الأكاديمية والنتائج وفريق العمل هنا وسيقوم الموقع بتنسيق الصفحة تلقائياً.
```

### ب) لإضافة منحة جديدة وتحديد حالتها مفتوحة أو مغلقة (Open vs Closed Call):
في ملفات المنح داخل [`src/content/calls/`](file:///d:/Code%20Projectes/UKABCS%20Website/src/content/calls) أو [`src/content/news/`](file:///d:/Code%20Projectes/UKABCS%20Website/src/content/news):
تأكدي من خيار `status`:
- `status: "open"` -> لظهور المنحة كـ **Open Call** متاحة للتقديم.
- `status: "closed"` -> لظهور المنحة كـ **Closed Call** انتهى التقديم عليها.
- `status: "upcoming"` -> لمنحة قادمة قريباً.

---

## 4. تشغيل الموقع محلياً (Running Locally)

الموقع يعمل الآن بالفعل على الجهاز عبر الخادم المحلي:
- **الرابط:** [http://localhost:4321/](http://localhost:4321/)
