# بيان التعديلات الشامل وخطة التطوير المعتمدة لموقع UKABCS
**UKABCS Comprehensive Changes Manifest & Phased Implementation Plan**
*التاريخ: 17 سبتمبر 2026 | وثيقة التوثيق والتخطيط الاستراتيجي الشاملة*

---

## مقدمة
بناءً على التوجيهات الصوتية والملاحظات التصميمية والملفات التفصيلية للمنح الثلاث الرسمية، تم إعداد هذا الملف كمرجع توثيقي شامل ومخزن مركزي لكافة التعديلات والمتطلبات، ليكون مرجعاً موحداً قبل وأثناء التنفيذ خطوة بخطوة.

---

## 1. صفحة البداية والرئيسية (Home Page - `src/pages/index.astro`)

### 1.1 الهيرو سيكشن (Hero Section)
- **الملاحظة**: غياب طبقة التظليل الغامقة (Dark Navy Overlay) مما يجعل الخلفية الساطعة تتنافر مع النصوص البيضاء.
- **التعديل**: تطبيق طبقة تظليل كحلية غامقة نصف شفافة موحدة:
  ```css
  background: linear-gradient(rgba(8, 17, 31, 0.82), rgba(8, 17, 31, 0.86)),
              url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=90&w=2200&auto=format&fit=crop') center / cover;
  ```
- **الهدف**: وضوح فائق للعناوين والنصوص والأزرار وتوافق كامل مع النمط المتبع في `PageHero.astro`.

### 1.2 تصحيح واستبدال الصور غير المناسبة عبر الأقسام
- **قسم لماذا تنضم للعضوية (Why Become a Member)**:
  - *الصورة الحالية*: صورة مخ/دماغ بشري لا تناسب سياق علوم الأحياء الحاسوبية والجمعية.
  - *الصورة البديلة*: صورة مجتمع أكاديمي وبحثي حديث / باحثين يعملون على محاكاة حيوية وتحليل بيانات.
- **قسم العلوم الدقيقة والمفتوحة (Rigorous, Open & Inclusive Science)**:
  - *الصورة الحالية*: غير معبرة ومشتتة.
  - *الصورة البديلة*: تصوير علمي متخصص للمعلوماتية الحيوية، تسلسل الحمض النووي، أو نمذجة جزيئية حاسوبية.
- **قسم دعم التقدم العلمي (Support Scientific Progress - Donation Section)**:
  - *الصورة الحالية*: صورة سرير مستشفى/طبي غير ملائمة نهائياً لمنظمة أكاديمية بحثية.
  - *الصورة البديلة*: مختبر حاسوبي وأكاديمي متقدم أو بيئة بحثية متطورة تلائم تمكين الباحثين.

### 1.3 شريط الشركاء والمتعاونين (Partners & Collaborators Ribbon)
- **الملاحظة**: ضرورة إبراز شعارات/صور الشركاء في إطار دائري (Circular Avatar/Logo) بجانب اسم الشركة ووصفها.
- **التعديل**: تحديث `PartnerRibbonSection.astro` ليدعم عرض صورة الشريك الرسمية (Logo) داخل دائرة واضحة، مع الاحتفاظ بالحروف الأولى كبديل جمالي في حال عدم توفر صورة.

---

## 2. صفحة عن الجمعية (About Us - `src/pages/about-us.astro`)

### 2.1 قسم الرؤية والرسالة (Mission & Vision Section)
- **الملاحظة**: صورة قسم "Our Direction" بحاجة للتعبير عن التعاون العلمي الدولي والشراكة البحثية.
- **التعديل**: استخدام صورة تمثل العمل البحثي المشترك، التعاون الأكاديمي عبر الحدود، أو تحليلات النمذجة الجزيئية المتقدمة في بيئة تعاونية.

### 2.2 توحيد زر الدعوة للإجراء الثلاثي (Unified 3-Button Ready to Join CTA)
- **الملاحظة**: تحويل قسم "Ready to Join UKABCS" في نهاية الصفحة إلى 3 أزرار رئيسية واضحة وموحدة عبر الموقع:
  1. `Apply for Membership` (`/memberships`)
  2. `Join as a Partner` (`/partnerships`)
  3. `Contact Us` (`#contact` مع تفعيل نموذج المودال السريع)
- **التعميم**: تحديث مكون `PromoCTASection.astro` ليعتمد هذا النموذج الثلاثي القياسي في كافة الصفحات التي تستخدمه.

---

## 3. منظومة البرامج والمنح (Programmes & Grants Architecture)

### 3.1 حالة المنح الحالية في بطاقات العرض
- المنح الثلاث الرسمية انتهت فترات التقديم لجولاتها السابقة، لذا يجب أن تظهر حالة المنح كـ **Closed** مع الإشارة للموعد النهائي المنقضي وإتاحة زر استعراض التفاصيل لمتابعة نتائج الدورة وترقب الدورات القادمة:
  - بطاقة 1: **UKABCS Capacity Building Grants 2026** (الحالة: `Closed` - Deadline: 1 Nov 2025).
  - بطاقة 2: **UKABCS Graduation Project Capacity Building Grants** (الحالة: `Closed` - Deadline: 30 July).
  - بطاقة 3: **UKABCS INNOFUND GRANT** (الحالة: `Closed` - Current Round Closed: 10 Sept).

### 3.2 هيكل مقالات المنح وتجربة القراءة (Dedicated Grant Articles UX)
- عند الضغط على "Explore Call Details →": يتم فتح صفحة مقال كاملة ومفصلة للمنحة (`/news/ukabcs-capacity-building-grant-2026`, `/news/ukabcs-graduation-project-grant-2026`, `/news/ukabcs-innofund-grant`).
- **تحسين تجربة القراءة (Prose Layout)**:
  - إزالة كلاس `.card-aceternity` وتأثيرات الهافر غير المريحة عند قراءة النصوص الطويلة.
  - استخدام حاوية قراءة مقالية رصينة ونظيفة (`.article-prose-container`) تتيح تصفح الجداول والموديلات بسلاسة تامة.
- **قسم الملفات المرفقة الثابت في نهاية المقالة (Mandatory Attached Documents Section)**:
  - إضافة قسم بارز مخصص في نهاية كل مقال منحة يحتوي على بطاقات التحميل المباشر لكافة الملفات الرسمية بصيغها الدقيقة (DOCX, PDF) وأحجامها وروابطها الرسمية السحابية.

### 3.3 بوابة مركزية موحدة للمنح (Central All-Grants Directory / Portal)
- توفير فهرس مركزي يجمع كافة المنح الحالية والسابقة في جدول أو شبكة موحدة تمثل الـ Single Source of Truth لحالة كل منحة وروابطها.

### 3.4 الهيدر وقوائم التنقل (Header Navigation)
- توفير روابط واضحة تقود لصفحة نظرة عامة على البرامج (`/programmes-grants`) ولبوابة المنح وقائمة الفرص.

### 3.5 قسم الدعوة للإجراء الموسع في صفحة المنح (Large Prominent Grants CTA)
- تصميم قسم كامل وكبير في صفحة البرامج والمنح بعنوان:
  `"Interested in UKABCS Grant or Research Collaboration?"`
- يحتوي على زرين رئيسيين:
  1. `Browse All Grants` (استعراض كافة المنح والأرشيف).
  2. `Join Academic Society` (الانضمام للجمعية الأكاديمية كمحكمين ومراجعين Reviewers لتقييم ملفات الجامعات والمنح).

### 3.6 إضافة مسار الجمعية الأكاديمية في العضوية (`src/pages/memberships.astro`)
- إضافة قسم مخصص في صفحة العضوية لـ **Academic Society & Peer Review Board**:
  - استقطاب أساتذة الجامعات والباحثين للمشاركة في اللجان العلمية لتحكيم المنح ومراجعة مقترحات المشاريع.
  - إبراز المزايا الأكاديمية: شهادات تحكيم معتمدة، أولوية في الشراكات الدولية، إعفاءات نشر علمي.

---

## 4. التفاصيل الكاملة للمنح الثلاث الرسمية

### 4.1 المنحة الأولى: UKABCS Capacity Building Grants 2026
- **المسمى**: Professional Diploma in Computational Chemistry 2026
- **الهدف**: تمكين الجامعات والمؤسسات البحثية من إدماج الذكاء الاصطناعي والكيمياء الحاسوبية في أبحاثها، وتأهيل جيل من الباحثين للمنافسة عالمياً.
- **حجم التغطية والميزانية**:
  - ميزانية إجمالية مغطاة بالكامل: **£32,000 إسترليني** لكل مؤسسة جامعية.
  - تدريب 5 فرق بحثية (كل فريق = 10 باحثين، بإجمالي 50 باحثاً).
  - التدريب والبنية التحتية: £22,000 (5 × £4,400).
  - رسوم نشر الأوراق البحثية بالمؤتمرات (APC): £7,500 (5 × £1,500).
  - رسوم عروض البوسترات العلمية: £2,500 (5 × £500).
- **الرسوم الإدارية وسياسة الإعفاء (Waiver Policy)**:
  - رسوم إدارية رمزية تدفع لمرة واحدة لشركة التنفيذ (Bioinformatics Gate): £100 للدول المتقدمة / £50 للدول النامية.
  - سياسة إعفاء متدرجة للجامعات بالدول النامية: إعفاء جزئي بنسبة 25% أو 50% أو 75% بناءً على خطاب رسمي من الجامعة. لا يوجد إعفاء كامل 100%.
- **المحتوى الأكاديمي (14 موديول متكامل)**:
  1. Introduction to Drug Discovery & CADD
  2. Cheminformatics Databases & File Formats
  3. Protein Structure Prediction & Analysis
  4. Protein Alignment & Phylogenetics
  5. Gene Prediction & Protein–Protein Interaction
  6. ADME/Tox Prediction & Personalized Medicine
  7. Pharmacophore Modeling & Virtual Screening
  8. 3D-QSAR & Lead Optimization
  9. Structural Interaction Fingerprint Analysis
  10. Molecular Docking & Screening
  11. Quantum Calculations (DFT)
  12. Molecular Dynamics Simulation
  13. Google Colab Integration & Cloud-Based Analysis
  14. Scientific Writing & Poster Presentation
- **المخرجات المعتمدة**: ورقة بحثية محكمة منشورة في مجلة IJBTCS، بوستر علمي دولي في مؤتمر لندن، دبلومة مهنية وشهادة تدريب معتمدة لكل مشارك.
- **بيانات التواصل والتقديم**:
  - البريد: `Programmes-Grants@ukabcs.co.uk`
  - رابط التقديم: `https://app.site123.com/application-form-ukabcs-capacity-building-grant-1?w=11213251?w=11213251`
- **الملفات المرفقة الرسمية**:
  1. [Application Form (DOCX - 2,988 KB)](https://files.cdn-files-a.com/uploads/11213251/normal_68f8bf6261ade.docx)
  2. [Timeline & Project Plan (DOCX - 2,973 KB)](https://files.cdn-files-a.com/uploads/11213251/normal_68dabe5f75c67.docx)
  3. [Template Agreement (DOCX - 1,547 KB)](https://files.cdn-files-a.com/uploads/11213251/normal_68dabb31dc253.docx)
  4. [Guidance Notes (DOCX - 3,013 KB)](https://files.cdn-files-a.com/uploads/11213251/normal_68dabb3ec23d2.docx)

---

### 4.2 المنحة الثانية: UKABCS Graduation Project Capacity Building Grants
- **المسمى**: منح بناء القدرات لمشاريع التخرج لطلاب البكالوريوس
- **الخلفية والقيادة الأكاديمية**: مستوحاة ومبنية على مبادرة د. نورهان حسن (الباحث الرئيسي بكلية العلوم - جامعة القاهرة، دكتوراه بمرتبة الشرف العليا من جامعة مونستر بألمانيا، باحثة ما بعد الدكتوراه بمستشفى كولونيا الجامعي، وحائزة جوائز Falling Walls Young Talent وLife Science Editors JEDI 2025).
- **الجامعات الفائزة والمشاركة بالدورة الأولى**: جامعة القاهرة، جامعة كوردوفان، جامعة أم درمان، جامعة حلوان (العاصمة)، جامعة البصرة، جامعة الحجة، جامعة الأزهر بأسيوط، جامعة الأزهر، وجامعة UNIFAL-MG بالبرازيل.
- **هيكل البرنامج (Two-Phase Framework)**:
  - **المرحلة الأولى (Phase I - Prerequisite Training)**: تدريب تحضيري إلزامي لـ 5 مسارات تدريبية معتمدة من بوابة المعلوماتية الحيوية (Bioinformatics Gate Egypt):
    - الرسوم الأساسية: £100 إسترليني لكل طالب.
    - دعم UKABCS بنسبة 25%: يدفع الطالب £75 فقط مقسمة على 3 أقساط ميسرة.
    - في حال مساهمة الجامعة بـ £25: يدفع الطالب £50 فقط على 3 أقساط.
  - **المرحلة الثانية (Phase II - Graduation Project Implementation)**: تنفيذ مجاني بالكامل لمشروع التخرج:
    - صفر مصاريف تنفيذ للطالب.
    - مكافأة سنوية للمشرف الأكاديمي (PI Allowance): **£1,200 إسترليني سنوياً** ولمدة 3 سنوات بإجمالي **£3,600 إسترليني كاش للمشرف**.
    - حزمة دعم عيني تقني وخدمي متكاملة بقيمة **£3,250+ إسترليني** لكل فريق (نشر علمي في IJBTCS، منصة Science Freelance، منصة Get Docs Talk للذكاء الاصطناعي، ونظام ClientFlow CRM لإدارة الأبحاث).
    - رسوم استضافة وإدارة البنية الرقمية للمشروع: £20-£25 رمزية تدفع للشريك التقني لتغطية السيرفرات والدومينات وتتبع المشروع.
- **المسارات الخمسة المؤهلة**:
  - الفئة الأولى (المسارات الأكاديمية): تصميم الأدوية حاسوبياً، والمعلوماتية الحيوية التطبيقية.
  - الفئة الثانية (مسارات الابتكار والمنتجات): تطوير المنتجات العلمية بالذكاء الاصطناعي، والعمل الحر العلمي المتقدم.
  - الفئة الثالثة (المسار الهجين المكثف): أبحاث علمية + تطوير برمجيات بالذكاء الاصطناعي (5 أشهر).
- **مواعيد الدورة**: نافذة التقديم الأصلية 15 يونيو – 15 يوليو، ومددت حتى 30 يوليو.
- **بيانات التواصل والتقديم**:
  - البريد: `Programmes-Grants@ukabcs.co.uk`
  - رابط التقديم: `https://clientflow-crm.com/f/ukabcs/ukabcs-graduation-project-grant/ukabcs-graduation-project-grant`
- **الملفات المرفقة الرسمية**:
  1. [Application Form (DOCX - 2,968 KB)](https://files.cdn-files-a.com/uploads/11213251/normal_6a2ee3e7198a7.docx)
  2. [Guideline Note (DOCX - 2,968 KB)](https://files.cdn-files-a.com/uploads/11213251/normal_6a2ee4082581a.docx)
  3. [Timeline & Project Plan (DOCX - 2,968 KB)](https://files.cdn-files-a.com/uploads/11213251/normal_6a2ee420538e1.docx)
  4. [Grant Agreement (DOCX - 3,006 KB)](https://files.cdn-files-a.com/uploads/11213251/normal_6a7b69b9bdf49.docx)

---

### 4.3 المنحة الثالثة: UKABCS INNOFUND GRANT
- **المسمى**: INNOFUND Grant — Graduation Project Capacity Building Track
- **الخلفية والقيادة الأكاديمية**: مبادرة الدكتور أحمد الحسين (مدير برنامج التكنولوجيا الحيوية الجزيئية بكلية العلوم - جامعة الجلالة، مصر)، بهدف إيجاد نموذج دعم دولي مرن وشامل لمشاريع التخرج لا يشترط كوتة كبيرة، بل يتيح لأي مشرف أو قسم أكاديمي التقديم لمشروع واحد (10-12 طالباً) أو حتى 20 مشروعاً.
- **الإطار الزمني والدورات الثلاث سنوية (Tri-Annual Calls)**:
  - إطار عام قائم لمدة 3 سنوات، ودورة مشاركة متجددة سنوياً للمشرف تصل إلى 5 سنوات.
  - الجولة 1 (خريفية): تفتح 20 أغسطس – تغلق 10 سبتمبر.
  - الجولة 2 (شتوية): تفتح 20 ديسمبر – تغلق 10 يناير.
  - الجولة 3 (ربيعية): تفتح 20 أبريل – تغلق 10 مايو.
- **هيكل الدعم والرسوم**:
  - تدريب تمهيدي (Phase I): خصم 25% معتمد للطالب ليدفع £75 فقط على 3 أقساط (£50 إذا ساهمت الجامعة بـ £25).
  - تنفيذ المشروع (Phase II): ممول بالكامل 100% + رسم استضافة ورقمي رمزي مسطح مقداره **£15 إسترليني فقط لكامل الفريق** (وليس لكل طالب).
  - حزمة دعم عيني تعادل أكثر من **£3,250 إسترليني** لكل فريق.
- **مزايا استثنائية للمشرف الأكاديمي (Principal Investigator Benefits)**:
  1. عضوية أكاديمية قيادية معتمدة في الجمعية UKABCS لمدة تصل إلى 5 سنوات قابلة للتجديد سنوياً.
  2. قسيمة نشر علمي مجانية بقيمة 100% (Full APC Waiver) لأي ورقة بحثية في مجلة IJBTCS.
  3. أولوية في شبكات التحكيم والتعاون البحثي الدولي.
- **بيانات التواصل والتقديم**:
  - البريد: `Programmes-Grants@ukabcs.co.uk`
  - رابط التقديم: `https://clientflow-crm.com/f/ukabcs/ukabcs-innofund-grant/ukabcs-innofund-grant`
- **الملفات المرفقة الرسمية**:
  1. [Application Form (DOCX - 2,972 KB)](https://files.cdn-files-a.com/uploads/11213251/normal_6a881c243396d.docx)
  2. [Guideline Note (DOCX - 2,973 KB)](https://files.cdn-files-a.com/uploads/11213251/normal_6a881c52b3e79.docx)
  3. [Timeline & Project Plan (PDF - 379 KB)](https://files.cdn-files-a.com/uploads/11213251/normal_6a85ac753b39a.pdf)
  4. [Grant Agreement (DOCX - 2,974 KB)](https://files.cdn-files-a.com/uploads/11213251/normal_6a881c98520c6.docx)

---

## 5. خطة مراحل التنفيذ البرمجية (Phased Implementation Roadmap)

### المرحلة الأولى: الصفحة الرئيسية وصفحة عن الجمعية
- ضبط طبقة التظليل الكحلية الغامقة الموحدة في هيرو الصفحة الرئيسية (`src/pages/index.astro`).
- استبدال الصور غير المناسبة في `src/config/home.ts` و`DonationSection.astro`.
- تحديث `PartnerRibbonSection.astro` ليعرض صور/شعارات الشركاء في الدوائر بجانب النصوص.
- تحديث صورة الرؤية والرسالة في `src/pages/about-us.astro`.
- تحديث مكون `PromoCTASection.astro` ليدعم الأزرار الثلاثة القياسية:
  (Apply for Membership / Join as a Partner / Contact Us).

### المرحلة الثانية: نشر وتوثيق المقالات الكاملة للمنح الثلاث
- إنشاء أو تحديث سجلات المحتوى في `src/content/news/` للمنح الثلاث:
  1. `ukabcs-capacity-building-grant-2026.md`
  2. `ukabcs-graduation-project-grant-2026.md`
  3. `ukabcs-innofund-grant.md`
- تضمين كافة نصوص الموديلات، الميزانيات، الشروط، الروابط، وجداول الرسوم كما وردت بدون اختزال.
- تصميم مكون الملفات المرفقة `GrantAttachments.astro` ليعرض الملفات المرفقة في نهاية كل مقال ببطاقات أنيقة مع أيقونة التحميل، الحجم، والنوع.
- تهيئة صفحة المقال (`src/pages/news/[slug].astro`) لإزالة تأثيرات الهافر غير المرغوبة، وضمان تجربة قراءة مقالية رصينة.

### المرحلة الثالثة: تحديث صفحة البرامج والمنح (`programmes-grants.astro`)
- تعديل كروت المنح في قسم "Current Open Calls":
  - تغيير الحالة إلى **Closed** (بلون مميز وبادج واضح).
  - إظهار تاريخ الموعد النهائي السابق.
  - ربط كل كارت بصفحة المقالة التفصيلية الخاصة به مع زر `Explore Call Details →`.
- إضافة السيكشن الكبير البارز:
  `"Interested in UKABCS Grant or Research Collaboration?"` مع زري `Browse All Grants` و `Join Academic Society`.

### المرحلة الرابعة: تعزيز صفحة العضوية بالجمعية الأكاديمية (`memberships.astro`)
- إضافة قسم مخصص لـ **Academic Society & Peer Review Board**:
  - توضيح دور الأساتذة والمحكمين في لجان التحكيم والتقييم للمنح.
  - تفعيل دعوة الانضمام والتقديم لتحكيم مقترحات الأبحاث والجامعات.

### المرحلة الخامسة: التحقق الشامل والفحص النهائي
- تشغيل اختبار البناء الساكن الكامل: `npm.cmd run build`.
- التأكد من سلامة جميع المسارات الـ 30+ والروابط والملفات القابلة للتحميل.
