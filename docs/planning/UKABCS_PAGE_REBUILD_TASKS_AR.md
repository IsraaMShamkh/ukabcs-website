# UKABCS Website — مهام التنفيذ التفصيلية

**مرجع الخطة:** `docs/planning/UKABCS_PAGE_REBUILD_MASTER_PLAN_AR.md`  
**طريقة التنفيذ:** بالترتيب؛ لا تبدأ مرحلة صفحة قبل إغلاق متطلبات بياناتها أو وضعها صراحة `PENDING_APPROVAL`.

## Phase 1 — Source Registry & Foundations

- [ ] T001 أنشئ سجل المصادر والحقول وحالة التحقق في `src/content/source-registry.json` لكل صفحات ومقالات SITE123 المستخدمة.
- [ ] T002 [P] أضف schemas لـbenefits/calls/governance/policies إلى `src/content/config.ts` وفق الخطة الرئيسية.
- [ ] T003 [P] وسّع funded-projects schema في `src/content/config.ts` ليفصل `awardYear` و`programmeYear` وبيانات PI والتحقق.
- [ ] T004 [P] وسّع partnerships schema في `src/content/config.ts` ليفصل contribution عن member offer.
- [ ] T005 [P] وسّع news schema في `src/content/config.ts` بقيم `research-article|news|open-call|announcement` وstatus.
- [ ] T006 حمّل أصول SITE123 المعتمدة إلى `public/images/source/site123/` بأسماء دلالية وسجل المصدر دون hotlink نهائي.
- [ ] T007 أنشئ مكون Tabs قابلًا للوصول في `src/components/ui/ContentTabs.astro` مع keyboard navigation وحالة URL قابلة للمشاركة.
- [ ] T008 أنشئ `src/components/cards/CallCard.astro` بعقد موحد وCTA واحد `Explore Full Call`.
- [ ] T009 أنشئ `src/components/sections/NewsletterSection.astro` بحالات الواجهة دون ربط endpoint قبل T010.
- [ ] T010 أضف newsletter endpoint المعتمد إلى `src/config/site.ts` ونفّذ submit/read-back في `src/components/sections/NewsletterSection.astro`.
- [ ] T011 حدّث `src/components/hero/PageHero.astro` ليكون النمط الوحيد لكل الصفحات الداخلية.

## Phase 2 — Header & Shared UX

- [ ] T012 حدّث ترتيب `siteConfig.nav` في `src/config/site.ts` إلى Home/About/Membership/Programmes & Grants/Funded Projects/News/Partnerships/Governance.
- [ ] T013 حدّث Governance children في `src/config/site.ts` إلى Board/Transparency/Legal فقط.
- [ ] T014 أصلح desktop/mobile parent navigation والروابط في `src/components/layout/Header.astro`.
- [ ] T015 أزل خلفية Card من theme toggle مع focus واضح في `src/components/layout/Header.astro` و`src/styles/global.css`.
- [ ] T016 راجع tokens والتباين للوضعين في `src/styles/tokens.css` ولا تضف ألوانًا inline.

## Phase 3 — Membership [US1]

- [ ] T017 [US1] أنشئ بيانات محتوى العضوية المركزية في `src/config/membership.ts` دون تكرار inline.
- [ ] T018 [US1] أعد ترتيب وبناء `/memberships` في `src/pages/memberships.astro` حسب الأقسام التسعة بالخطة.
- [ ] T019 [US1] استبدل Free Perks وPeer Review cards بـfull-width sections في `src/pages/memberships.astro`.
- [ ] T020 [US1] أصلح روابط خطوات العضوية وCTA بحيث لا تعيد الصفحة لنفسها في `src/pages/memberships.astro`.
- [ ] T021 [US1] أضف FAQ وقواعد الأسعار/التجديد المتحقق منها في `src/pages/memberships.astro`.
- [ ] T022 [US1] اختبر أن الزائر يفهم ما العضوية ولماذا ينضم وكيف ينضم من قراءة الصفحة بالترتيب.

## Phase 4 — Member Benefits [US2]

- [ ] T023 [P] [US2] أنشئ partner-benefit records في `src/content/benefits/` مع `verified=false` للقيم غير المعتمدة.
- [ ] T024 [US2] أعد بناء `src/pages/memberships/benefits.astro` باستخدام البيانات لا arrays داخل الصفحة.
- [ ] T025 [US2] نفّذ فلاتر All/Computing/Services/Publishing/Software/Training وحالة empty في `src/pages/memberships/benefits.astro`.
- [ ] T026 [US2] بسّط Card layout ليكون الاسم يسارًا والفئة يمينًا في `src/pages/memberships/benefits.astro`.
- [ ] T027 [US2] أظهر discount/eligibility/terms والتنبيه الإلزامي للعضوية دون خلط contribution value.
- [ ] T028 [US2] اختبر كل filter وكل partnership detail link وكل access link.

## Phase 5 — Publications & Conferences [US3]

- [ ] T029 [P] [US3] أنشئ call records للدعوات الأربع المستخرجة في `src/content/calls/` وصنفها Journal/Conference.
- [ ] T030 [US3] أعد بناء `src/pages/publications.astro` بالHero وAbout ونوعي الدعم.
- [ ] T031 [US3] أضف tabين Journal & Publication وConference في `src/pages/publications.astro`.
- [ ] T032 [US3] اعرض Calls بثلاثة في الصف عبر `src/components/cards/CallCard.astro`.
- [ ] T033 [US3] أضف Official Journal وEligibility وNewsletter وContact وCTA كاملة العرض.
- [ ] T034 [US3] تحقق من أن Apply لا يظهر في listing وأن كل Explore يفتح صفحة call.

## Phase 6 — Education & Women Support [US4]

- [ ] T035 [P] [US4] استورد دعوات الكورس والكتب الصوتية الأربع إلى `src/content/calls/` مع اللغة والنوع والحالة.
- [ ] T036 [US4] أعد بناء `src/pages/educational-support.astro` بأقسام About/Notice/Non-Financial/Financial.
- [ ] T037 [US4] أضف مجموعات Courses/Books/Competitions/Career وCall grid ثلاثي في `src/pages/educational-support.astro`.
- [ ] T038 [US4] أعد بناء `src/pages/women-in-science.astro` مع فصل Dedicated Grants عن Practical Services.
- [ ] T039 [US4] أضف KidCamp وA Word from UKABCS كSections كاملة، واحذف التكرار والأخطاء اللغوية.
- [ ] T040 [US4] اختبر روابط eligibility/KidCamp/contact دون إرسال أي نموذج فعلي.

## Phase 7 — Software Support & Call Details [US5]

- [ ] T041 [US5] غيّر عنوان calls العام وأعد Grid في `src/pages/scientific-software.astro`.
- [ ] T042 [US5] وحّد صفحات calls في route جديد `src/pages/calls/[slug].astro` من content collection.
- [ ] T043 [US5] أعد تحرير Call body إلى فقرات بشرية مع إبقاء budget والحقائق في content record.
- [ ] T044 [US5] اجعل attachments full-width عبر `src/components/ui/GrantAttachments.astro`.
- [ ] T045 [US5] نفّذ نسخة full-width لـDigital Campus وقارنها بصريًا قبل اعتماد layout النهائي.
- [ ] T046 [US5] أضف Newsletter وAcademic Community كSections كاملة في call detail.

## Phase 8 — Partnerships [US6]

- [ ] T047 [P] [US6] راجع واستكمل السجلات الخمسة في `src/content/partnerships/` من صفحات SITE123 الحية.
- [ ] T048 [P] [US6] أضف partner logos والصور المعتمدة إلى `public/images/partners/` وسجل مصدر كل أصل.
- [ ] T049 [US6] أعد بناء `src/pages/partnerships/index.astro` بعنوان عام غير مربوط بإجمالي مالي متغير.
- [ ] T050 [US6] حدّث `src/components/cards/PartnerCard.astro` ليعرض logo دائريًا ونوع المساهمة وملخصًا.
- [ ] T051 [US6] أعد بناء `src/pages/partnerships/[slug].astro` وفق قالب الشركة/الخدمات/المساهمة/الشكر/عرض العضو.
- [ ] T052 [US6] افصل contribution value عن discount value في schema وUI واختبر القيم الخمس.
- [ ] T053 [US6] تحقق من Application وDonation CTAs كوجهتين منفصلتين دون إرسال.

## Phase 9 — Funded Projects [US7]

- [ ] T054 [P] [US7] أنشئ 8 records لمقالات Capacity Building المستخرجة وصورها في `src/content/funded-projects/`.
- [ ] T055 [P] [US7] أنشئ 6 records لمقالات Graduation/related grants المستخرجة وصورها في `src/content/funded-projects/`.
- [ ] T056 [US7] راجع يدويًا `awardYear` و`programmeYear` لكل record ولا تنسخ عنوان قسم 2025 كحقيقة.
- [ ] T057 [US7] أعد بناء `src/pages/funded-projects/index.astro` باستخدام `PageHero` وyear filters من البيانات.
- [ ] T058 [US7] حدّث `src/components/cards/ProjectCard.astro` لعرض المؤسسة/البلد/النوع/السنة والصورة الصحيحة.
- [ ] T059 [US7] أعد بناء `src/pages/funded-projects/[slug].astro` بعقد التفاصيل الكامل واحذف Unsplash fallback عند وجود الأصل.
- [ ] T060 [US7] اختبر ظهور 14 مشروعًا بالعدد الصحيح وعدم فقد أي route أو صورة.

## Phase 10 — News Hub [US8]

- [ ] T061 [P] [US8] صحح contentType/status للسجلات الحالية في `src/content/news/`.
- [ ] T062 [US8] أعد بناء `src/pages/news/index.astro` بـPageHero وأربعة tabs.
- [ ] T063 [US8] أضف status filters داخل Open Calls فقط.
- [ ] T064 [US8] أزل Policies & Governance من News listing وانقل Helwan update إلى النوع الصحيح.
- [ ] T065 [US8] حدّث `src/components/cards/NewsCard.astro` لإظهار النوع والتاريخ والحالة والملخص.
- [ ] T066 [US8] حدّث `src/pages/news/[slug].astro` إلى صفحة تحريرية وCTA full-width.

## Phase 11 — Governance, Transparency & Legal [US9]

- [ ] T067 [P] [US9] أنشئ 7 governance-person records في `src/content/governance/` مع حالة تحقق للصورة والدور.
- [ ] T068 [P] [US9] أنشئ policy records للسياسات السبع في `src/content/policies/` واحذف generic placeholder.
- [ ] T069 [US9] أعد بناء `src/pages/governance.astro` باسم Board of Trustees & Leadership وبالتسلسل المحدد.
- [ ] T070 [US9] أنشئ Team section بالصور والأدوار دون تكرار الأسماء في `src/pages/governance.astro`.
- [ ] T071 [US9] أعد بناء `src/pages/transparency.astro` كفهرس السياسات والتقارير.
- [ ] T072 [US9] أنشئ route تفصيلي `src/pages/policies/[slug].astro` للسياسات المنشورة.
- [ ] T073 [US9] أعد بناء `src/pages/legal.astro` للوثائق الأربع مع effective/review dates.
- [ ] T074 [US9] نفّذ مراجعة ادعاءات UKRI/Charity Commission/GDPR وضع غير الموثق `PENDING_LEGAL_REVIEW`.

## Phase 12 — QA & Handoff

- [ ] T075 [P] افحص كل الصفحات على 390px و768px و1440px وسجل النتائج في `docs/qa/UKABCS_PAGE_ACCEPTANCE.md`.
- [ ] T076 [P] افحص keyboard/focus/tabs/filter states وcontrast في `docs/qa/UKABCS_PAGE_ACCEPTANCE.md`.
- [ ] T077 افحص جميع الروابط الداخلية والخارجية وتأكد أن listing CTAs لا ترسل نماذج مباشرة.
- [ ] T078 ابحث عن placeholders ونصوص SITE123 التجريبية وhotlinks والادعاءات غير الموثقة وأزلها أو علّمها Pending.
- [ ] T079 شغّل `npm.cmd run build` وسجل النتيجة في `docs/qa/UKABCS_PAGE_ACCEPTANCE.md`.
- [ ] T080 شغّل `git diff --check` وراجع أن التغييرات لا تكتب فوق تعديلات غير مرتبطة.
- [ ] T081 اكتب handoff نهائيًا يفصل local/committed/pushed/deployed/production accepted في `docs/handoffs/UKABCS_PAGE_REBUILD_HANDOFF_AR.md`.

## Dependency Order

`T001–T016` → الصفحات المستقلة `US1–US9` → `T075–T081`.

يمكن تنفيذ استيراد البيانات `[P]` بالتوازي، لكن لا يبدأ QA النهائي قبل اكتمال كل صفحة واعتماد عناصر VERIFY الخاصة بها.

## MVP المقترح

الدفعة الأولى: Foundations + Header + Membership + Member Benefits (`T001–T028`).  
بعد قبولها بصريًا ووظيفيًا، ننتقل إلى Support pages، ثم Partnerships/Funded Projects/News، وأخيرًا Governance/Legal.
