# UKABCS Website — الخطة الرئيسية لإعادة بناء الصفحات

**الحالة:** جاهزة للتنفيذ بعد اعتماد البيانات المعلّمة `VERIFY`  
**النطاق:** تخطيط ومحتوى وبنية الصفحات فقط؛ لا نشر ولا تعديل مباشر على SITE123  
**مصادر الحقيقة المستخدمة:** طلب المستخدم، صفحات SITE123 الحية، والكود المحلي الحالي  
**الأولوية:** تنفيذ صفحة بصفحة مع قبول بصري ووظيفي مستقل لكل صفحة

> هذه الوثيقة هي المصدر التنفيذي الرئيسي لهذا الطلب، وتعلو على المسودات السابقة عند التعارض.

## 1. الهدف ومعيار النجاح

الموقع النهائي يجب أن يشرح للزائر، بلا معرفة مسبقة:

1. ما هي UKABCS وما الذي تقدمه.
2. لماذا ينضم كعضو، وما الفرق بين العضوية والمزايا المقدمة من الشركاء.
3. أين يجد البرامج والمنح والدعوات المفتوحة والمغلقة.
4. الفرق بين الأخبار، الإعلانات، الدعوات المفتوحة، والمقالات البحثية.
5. من يدير UKABCS، وكيف تُتخذ القرارات، وأين توجد السياسات والتقارير.
6. من هم الشركاء وما مساهماتهم وما الميزة الفعلية للعضو.
7. ما المشروعات الممولة، في أي سنة، وما تفاصيل كل مشروع.

لا تعتبر الصفحة منجزة لمجرد وجود المحتوى؛ يجب أن يكون تسلسلها مفهومًا، الروابط تعمل، وكل ادعاء أو مبلغ أو خصم مستند إلى مصدر معتمد.

## 2. قرارات معمارية ثابتة

- المشروع يظل Astro ولا يُستبدل بإطار جديد.
- البيانات المتكررة تنتقل إلى Content Collections أو ملفات إعداد مركزية؛ لا نسخ مكرر داخل الصفحات.
- المقالات والدعوات والمشروعات والشراكات والسياسات لها روابط تفصيل مستقلة، وليست Modals.
- `PageHero.astro` هو Hero موحد لكل الصفحات الداخلية.
- المقاطع التحريرية الكبيرة تستخدم Section كاملة بعرض الصفحة، لا Card عائمة.
- Cards تستخدم للفهرسة والملخصات فقط، بلا حدود ظاهرة عند Hover.
- Light/Dark يظهر كأيقونة فقط بلا خلفية Card.
- أي قيمة خصم غير مؤكدة تعرض `PENDING_APPROVAL` في البيانات ولا تُنشر للزوار.
- Newsletter لا يرسل بريدًا من المتصفح مباشرة؛ يذهب إلى Endpoint مملوك للخادم/ClientFlow مع موافقة ونتيجة نجاح واضحة.

## 3. خريطة التصفح النهائية

الترتيب المعتمد:

1. Home
2. About
3. Membership
4. Programmes & Grants
5. Funded Projects
6. News
7. Partnerships
8. Governance

قائمة Governance المنسدلة:

- Board of Trustees & Leadership → `/governance`
- Transparency & Reports → `/transparency`
- Policies & Legal Information → `/legal`

يجب إزالة أي تكرار لـNews، ويجب أن يكون كل Parent قابلًا للضغط وليس مجرد فاتح قائمة.

## 4. نماذج البيانات المطلوبة

### 4.1 Partner Benefit

الحقول: `partnerName`, `logo`, `website`, `category`, `shortDescription`, `services[]`, `discountValue`, `discountType`, `eligibility`, `terms`, `validFrom`, `validUntil`, `partnershipSlug`, `verified`.

الفئات الثابتة: `Computing`, `Services`, `Publishing`, `Software`, `Training`.

### 4.2 Partnership Article

الحقول: `partnerName`, `partnerLogo`, `companyLocation`, `companyProfile`, `specialisation`, `services[]`, `contributionType`, `contributionValue`, `agreementDate`, `directorName`, `directorImage`, `ukabcsRepresentative`, `ukabcsRepresentativeImage`, `memberOffer`, `offerTerms`, `acknowledgements`, `featuredImage`, `sourceUrl`.

### 4.3 Call

الحقول: `title`, `programme`, `kind`, `status`, `language`, `summary`, `opensAt`, `closesAt`, `eligibility`, `budget`, `detailSlug`, `applicationUrl`, `attachments[]`, `featuredImage`.

`kind`: `journal | conference | education | software | grant`.  
`status`: `open | upcoming | closed`.

### 4.4 News Item

الحقول: `title`, `contentType`, `datePublished`, `status`, `author`, `summary`, `body`, `featuredImage`, `sourceUrl`, `relatedItems[]`.

`contentType`: `research-article | news | open-call | announcement`.

### 4.5 Funded Project

الحقول: `title`, `awardYear`, `programmeYear`, `institution`, `country`, `faculty`, `mainPI`, `grantType`, `summary`, `fullBody`, `coverage`, `budget`, `outcomes`, `featuredImage`, `sourceUrl`, `verificationStatus`.

فصل `awardYear` عن `programmeYear` ضروري لأن مصدر SITE123 يضع إعلانات Grant 2026 داخل قسم عنوانه 2025.

### 4.6 Governance Person / Policy

- الشخص: `name`, `country`, `role`, `bio`, `photo`, `order`, `active`, `sourceUrl`.
- السياسة: `title`, `slug`, `summary`, `body`, `effectiveDate`, `reviewDate`, `download`, `publicationStatus`.

## 5. الخطة صفحة بصفحة

### 5.1 Membership — `/memberships`

الترتيب:

1. Hero يعرّف العضوية في جملة واضحة.
2. Section كاملة: What UKABCS Membership Means، لماذا تنضم، وما الذي تتيحه العضوية.
3. Section كاملة: community/shared infrastructure مع وصف صريح للخدمات.
4. فئات العضوية الأربع.
5. الخطوات: اختيار الفئة → اختيار الخطة → التسجيل → استلام البطاقة والرقم.
6. خطط العضوية وأسعارها بعد التحقق من £300/£500/£1000 وشروط التجديد.
7. Section كاملة لمزايا الشركاء، لا مجموعة Cards غامضة.
8. Section كاملة لـScientific Integrity & Peer Review مع أدوار reviewer/accreditation/editorial.
9. FAQ ثم CTA كاملة.

الإصلاحات:

- إصلاح الروابط التي تعيد المستخدم لنفس الصفحة.
- حذف عناوين مثل “Free Benefits” إن لم تشرح القيمة.
- عدم خلط مبالغ تبرعات الشركاء مع خصم العضو.
- كل CTA يذهب إلى وجهة صحيحة ومحددة.

### 5.2 Member Benefits — `/memberships/benefits`

- Hero مختصر ثم تنبيه دائم: “You must be an active UKABCS member to access these offers.”
- شريط Filters يعمل فعليًا للفئات الخمس وAll، مع حالة فارغة.
- Grid مبسط: اسم الشريك يسارًا، الفئة يمينًا، logo، وصف قصير، قيمة الخصم، eligibility/terms.
- الأزرار: `View partnership details` و`Access / Apply` فقط عند وجود رابط معتمد.
- صفحة الشراكة تشرح الشركة والخدمات والمساهمة ثم تعرض عرض العضو في النهاية.
- لا تعرض `£10k/£35k/£220k` كخصم؛ هذه contribution values وليست member discount.

### 5.3 Publications & Conferences — `/publications`

1. Hero وتعريف البرنامج.
2. About مدمج ومحرر بلغة بشرية.
3. نوعا الدعم كـSections واضحين: Publication Support وConference Support.
4. Tabs في المنتصف: `Journal & Publication` و`Conference`.
5. كل Tab يعرض Calls في Grid ثلاثي، مع status/language/summary و`Explore Full Call`.
6. الدعوات الأربع المستخرجة من SITE123 تُصنف: دعوتان Conference، Conference Participation Grant، Open-Access Publication Grant.
7. Official Journal Section مع بيانات موثقة فقط.
8. Eligibility، Subscribe، Contact، وCTA.

### 5.4 Educational Support — `/educational-support`

1. Hero ثم About.
2. Important Notice كامل العرض.
3. Non-Financial Support وFinancial Support كقسمين واضحين.
4. أربعة Tabs/Groups: Courses & Training، Books & Audio Resources، Competitions & Grants، Career & Mentorship.
5. Calls كـ3 Cards في الصف على الشاشات الكبيرة و`Explore Full Call`.
6. استيراد دعوات العربي/الإنجليزي للكورس والكتاب الصوتي من SITE123.
7. لا يظهر Apply إلا داخل صفحة الدعوة.

### 5.5 Women Researchers Support — `/women-in-science`

- فصل Dedicated Grants الخاضعة للتحكيم عن Practical Support غير التنافسي.
- شرح Eligibility وavailability/priority بوضوح.
- عرض الخدمات الست المستخرجة من المصدر.
- KidCamp Section كاملة مع الرابط المعتمد.
- “A Word from UKABCS” Section تحريرية بدون تكرار النص.
- Contact/Submit CTA واضح، مع تصحيح `Cheek` إلى `Check` و`Appling` إلى صياغة سليمة.

### 5.6 Scientific Software Support — `/scientific-software`

- تغيير عنوان `Active Software Support Calls` إلى `Software Support Calls`.
- Calls بGrid ثلاثي وبحجم Cards طبيعي.
- Card لا يحتوي Apply؛ يحتوي `Explore Full Call` فقط.
- صفحة Call تدمج القوائم الطويلة إلى فقرات منظمة مع الحفاظ على Budget.
- Attached Files Section بعرض كامل والملفات في عمود واضح في المنتصف.
- Newsletter Section وJoin Academic Community كSections كاملة.
- عمل تجربة بصرية لـDigital Campus full-width قبل تثبيت الاختيار.

### 5.7 Partnerships — `/partnerships` و`/partnerships/[slug]`

- Hero وتعريف Why Partner With Us.
- أنواع الشراكات والعملية في Sections متوازنة.
- استبدال عنوان “£427,000 Active Research Credits” بعنوان عام لا يتقادم.
- Listing يعرض partner logo وصورة صغيرة دائرية، نوع المساهمة، ووصفًا مختصرًا.
- استيراد المقالات الخمس الحية: Exovion، HealOra، EBO Bio Solution، IJBTCS، Bioinformatics Gate.
- صفحة التفاصيل تتبع قالب الشركة/الخدمات/المساهمة/التاريخ/الشكر/عرض العضو.
- لا تنشر صور المدير أو ممثل UKABCS قبل توفر أصول معتمدة.
- تمييز Partnership application عن Donation form.

### 5.8 Funded Projects — `/funded-projects` و`/funded-projects/[slug]`

- Hero موحد، ثم Tabs/Filters حسب السنة الصحيحة.
- استيراد 14 مقالًا حيًا وصورها: 8 Capacity Building و6 Graduation/related grants.
- عدم اعتماد تقسيم SITE123 الحالي 2025/2026 آليًا؛ مراجعة `awardYear` و`programmeYear` لكل سجل.
- كل Card: صورة، المؤسسة، البلد، نوع المنحة، السنة، ملخص، View Project.
- صفحة التفاصيل: الإعلان، المؤسسة وPI، الأهداف، المراحل، التغطية/الميزانية، الأثر، والروابط ذات الصلة.
- إزالة fallback Unsplash عند توفر الصورة المصدرية.

### 5.9 News Hub — `/news` و`/news/[slug]`

- Hero: News & Insights Hub وتعريف ما يوجد بالصفحة.
- Tabs منفصلة: Research Articles، News، Open Calls، Announcements.
- Open Calls لا تختلط مع Announcements.
- Status filter للدعوات: Open/Upcoming/Closed.
- السياسات لا تظهر داخل News؛ المصدر الحالي يكرر Policies & Governance ويجب فصله.
- مقال Helwan brain-cancer research ينتقل إلى Research Articles/Project Update بنوع واضح.
- كل Article Card يفتح صفحة مخصصة، والـCTA النهائي Section كاملة.

### 5.10 Governance — `/governance`

التسمية العامة: `Board of Trustees & Leadership`.

الترتيب:

1. Hero.
2. Governance Framework.
3. Organisational Structure وخط القرار الخماسي.
4. Board Responsibilities.
5. Team/Board Section بصور وأسماء وأدوار الأشخاص السبعة المستخرجين.
6. Standing Committees الخمس.
7. Decision-Making & Meetings.
8. Transparency and Renewal.
9. رابط التقارير والسياسات.

يجب إزالة تكرار أسماء المجلس، والتحقق من الأدوار والصور؛ صفحة المصدر تعرض 3 أصول صور فقط بينما القائمة تحتوي 7 أشخاص.

### 5.11 Transparency — `/transparency`

القرار: لا نضغط السياسات القانونية المختلفة في مقال واحد. الصفحة تكون فهرسًا خفيفًا، وكل سياسة لها صفحة مستقلة لأن لها غرضًا وتاريخ مراجعة مختلفين.

الفهرس: Grant-making، Due Diligence، Conflict of Interest، Financial Governance، Annual Reports & Budgets، EDI، GDPR.

يجب حذف النص التجريبي الموجود حاليًا تحت COI وعدم نشر أي ادعاء امتثال غير موثق.

### 5.12 Legal — `/legal`

- فهرس لأربع وثائق: Privacy، Terms، Cookies، Accessibility.
- كل وثيقة صفحة/Anchor تحريرية واضحة مع effective/review dates.
- مراجعة قانونية بشرية قبل النشر؛ الخطة لا تعتبر النص الحالي رأيًا قانونيًا.

### 5.13 Newsletter / Subscribe

- حقلا Name وEmail مع consent checkbox ورسالة خصوصية.
- الإرسال إلى ClientFlow Newsletter Form أو endpoint مخصص؛ لا `mailto:` ولا مفاتيح API في الواجهة.
- تخزين source page وconsent timestamp وUTM إن وجدت.
- حالات: idle، validating، submitting، success، duplicate، failure.
- VERIFY: تزويد URL النهائي لقائمة Newsletter في ClientFlow قبل التنفيذ.

### 5.14 Header والهوية

- تطبيق ترتيب التنقل المحدد في القسم 3.
- Governance dropdown يحتوي الثلاث صفحات فقط.
- إزالة الخلفية المربعة من theme toggle مع إبقاء focus ring المتاح.
- ضبط الألوان من tokens فقط، وفحص contrast في الوضعين.

## 6. سجل المصادر الحية

- Governance: `governance-leadership-1`
- Transparency: `transparency`
- Legal: `policies-legal-information`
- Membership: `memberships`
- Publications: `publications-conferences-support`
- Education: `events-educational-support`
- Women: `women-researchers-support`
- Partnerships: `partnerships-collaborations-1`
- Funded Projects: `funded-projects` + 14 detail routes
- News: `news`

صور المصدر يجب تنزيلها فقط أثناء التنفيذ إلى مجلدات `public/images/...` بأسماء دلالية، مع حفظ `sourceUrl`؛ لا hotlink نهائي إلى CDN.

## 7. بوابات القبول

لكل صفحة:

- مراجعة محتوى مقابل المصدر.
- لا placeholder عام أو نص SITE123 تجريبي.
- كل filter/tab قابل للوحة المفاتيح وله حالة active واضحة.
- كل رابط داخلي يولد 200 محليًا.
- فحص 390px و768px و1440px.
- `npm.cmd run build` و`git diff --check`.
- تقرير منفصل: local / committed / pushed / deployed / production accepted.

## 8. عناصر VERIFY قبل النشر

- أسعار وخطط العضوية وشروط التجديد.
- نسب خصومات الأعضاء وشروطها ومددها.
- أسماء/أدوار/صور Board النهائية.
- السنة الصحيحة لكل مشروع من الـ14.
- أرقام المساهمات وصور المديرين وممثلي UKABCS.
- حالة كل Call وتواريخ الفتح والإغلاق.
- Newsletter ClientFlow endpoint وسياسة consent.
- مراجعة قانونية لصفحات Legal/Policies.
