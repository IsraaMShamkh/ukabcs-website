"use client";

import { homeContent } from "@/config/content/home";
import Carousel from "@/components/ui/carousel";
import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FocusCards } from "@/components/ui/focus-cards";
import { ImagesSlider } from "@/components/ui/images-slider";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "@/components/ui/animated-modal";
import { WobbleCard } from "@/components/ui/wobble-card";

const heroImages = [
  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=85&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=85&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=85&w=1800&auto=format&fit=crop",
];
const focusCards = [
  { title: "Research funding", src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=85&w=900&auto=format&fit=crop" },
  { title: "Education & capacity", src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=85&w=900&auto=format&fit=crop" },
  { title: "International partnerships", src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=85&w=900&auto=format&fit=crop" },
];

export default function UKABCSAceternitySections() {
  const carouselSlides = homeContent.programmes.slice(0, 3).map((programme, index) => ({ title: programme.title, button: "Explore programme", src: heroImages[index] }));
  return <div className="bg-[#fafaf9] text-slate-950">
    <ImagesSlider images={heroImages} className="min-h-[43rem]" overlayClassName="bg-[#0d1829]/70" direction="up">
      <div className="relative z-50 mx-auto flex min-h-[43rem] max-w-7xl items-end px-6 pb-24 md:px-12"><div className="max-w-4xl text-white"><p className="mb-5 text-xs font-bold uppercase tracking-[.22em] text-cyan-100">{homeContent.hero.eyebrow}</p><h1 className="text-5xl font-bold tracking-tight md:text-7xl">{homeContent.hero.title}</h1><p className="mt-6 max-w-2xl text-lg text-white/85">{homeContent.hero.description}</p><div className="mt-9 flex flex-wrap gap-3"><a className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-950" href={homeContent.hero.primaryCta.href}>{homeContent.hero.primaryCta.label}</a><a className="rounded-xl border border-white/50 px-6 py-3 font-semibold text-white" href={homeContent.hero.secondaryCta.href}>{homeContent.hero.secondaryCta.label}</a></div></div></div>
    </ImagesSlider>

    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-[.9fr_1.1fr] md:px-12"><div><p className="text-sm font-bold uppercase tracking-[.18em] text-blue-700">{homeContent.membership.eyebrow}</p><h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{homeContent.membership.title}</h2><p className="mt-5 text-lg font-semibold text-blue-700">{homeContent.membership.lead}</p></div><div><p className="text-lg leading-8 text-slate-600">{homeContent.membership.description}</p><a className="mt-7 inline-block rounded-xl bg-[#172e59] px-5 py-3 font-semibold text-white" href={homeContent.membership.cta.href}>{homeContent.membership.cta.label}</a></div></section>

    <section className="bg-white px-6 py-24 md:px-12"><div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-2">{homeContent.missionVision.map((item) => <article key={item.title} className="bg-white p-9 md:p-14"><p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">{item.title}</p><p className="mt-5 text-2xl font-semibold leading-9 text-slate-900">{item.text}</p></article>)}</div></section>

    <section className="mx-auto max-w-7xl px-6 py-24 md:px-12"><p className="text-sm font-bold uppercase tracking-[.18em] text-blue-700">What we do</p><h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Support for science that has practical impact.</h2><div className="mt-10"><FocusCards cards={focusCards} /></div><ul className="mt-10 grid gap-4 md:grid-cols-2">{homeContent.whatWeDo.map((item) => <li key={item} className="border-t border-slate-200 py-4 text-slate-700">{item}</li>)}</ul></section>

    <section className="bg-white px-6 py-24 md:px-12"><div className="mx-auto max-w-7xl"><p className="text-sm font-bold uppercase tracking-[.18em] text-blue-700">Our programmes</p><h2 className="mt-3 text-4xl font-bold tracking-tight">Funding, learning, software, publication, and partnerships.</h2><div className="mt-8 overflow-hidden"><Carousel slides={carouselSlides} /></div><div className="mt-20 grid gap-4 md:grid-cols-3">{homeContent.programmes.map((programme) => <a className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-700" href={programme.href} key={programme.title}><h3 className="font-bold text-slate-950">{programme.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{programme.text}</p><span className="mt-5 inline-block text-sm font-semibold text-blue-700">Explore →</span></a>)}</div></div></section>

    <section className="mx-auto max-w-7xl px-6 py-24 md:px-12"><WobbleCard containerClassName="bg-[#172e59]" className="min-h-[22rem]"><p className="relative z-10 text-sm font-bold uppercase tracking-[.18em] text-cyan-100">{homeContent.support.eyebrow}</p><h2 className="relative z-10 mt-4 max-w-2xl text-4xl font-bold tracking-tight text-white">{homeContent.support.title}</h2><p className="relative z-10 mt-5 max-w-xl text-lg text-white/80">{homeContent.support.text}</p><Modal><ModalTrigger className="relative z-10 mt-8 rounded-xl bg-white px-6 py-3 font-semibold text-slate-950">{homeContent.support.cta.label}</ModalTrigger><ModalBody><ModalContent><h3 className="text-2xl font-bold text-slate-950">General support request</h3><p className="mt-3 text-slate-600">UKABCS reviews requests individually. Submit the form and we will identify the appropriate available pathway.</p><ModalFooter className="mt-6"><a className="rounded-lg bg-[#172e59] px-4 py-2 text-sm font-semibold text-white" href={homeContent.support.cta.href}>Continue to request form</a></ModalFooter></ModalContent></ModalBody></Modal></WobbleCard></section>

    <section className="border-y border-slate-200 bg-white px-6 py-16 md:px-12"><div className="mx-auto max-w-7xl"><p className="text-center text-xs font-bold uppercase tracking-[.2em] text-slate-500">Our partners</p><div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">{homeContent.partners.map((partner) => <div key={partner.name} className="text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-sm font-bold text-[#172e59]">{partner.name.slice(0, 2).toUpperCase()}</div><img className="mx-auto -mt-16 hidden h-16 w-16 rounded-full object-contain" src={partner.logo} alt="" /><p className="mt-3 text-xs font-semibold text-slate-700">{partner.name}</p></div>)}</div><p className="mt-7 text-center text-xs text-slate-500">Official partner logos will replace these compact placeholders when supplied by UKABCS.</p></div></section>

    <section className="mx-auto max-w-7xl px-6 py-24 md:px-12"><p className="text-center text-sm font-bold uppercase tracking-[.18em] text-blue-700">Our achievements</p><div className="mt-10 grid gap-8 text-center sm:grid-cols-2 md:grid-cols-4">{homeContent.achievements.map((achievement) => <div key={achievement.label}><p className="text-5xl font-bold text-[#172e59]">{achievement.value}</p><p className="mt-2 text-sm text-slate-600">{achievement.label}</p></div>)}</div></section>

    <section className="bg-slate-950 px-6 py-20 text-white md:px-12"><div className="mx-auto max-w-7xl"><p className="text-sm font-bold uppercase tracking-[.18em] text-cyan-200">Join our efforts</p><h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight">Collaborate to transform research ideas into impactful outcomes.</h2><DraggableCardContainer className="mt-10 flex flex-wrap justify-center gap-5">{["Researcher", "University", "Industry partner"].map((item) => <DraggableCardBody className="min-h-64 bg-white" key={item}><p className="text-xs font-bold uppercase tracking-[.16em] text-blue-700">UKABCS community</p><h3 className="mt-4 text-2xl font-bold text-slate-950">{item}</h3><p className="mt-3 text-slate-600">Explore a practical route into programmes, partnerships, and scientific collaboration.</p></DraggableCardBody>)}</DraggableCardContainer></div></section>

    <div className="fixed bottom-5 left-1/2 z-[60] -translate-x-1/2"><FloatingDock items={[{ title: "Home", icon: <span>⌂</span>, href: "/" }, { title: "About", icon: <span>◌</span>, href: "/about-us" }, { title: "Programmes", icon: <span>✦</span>, href: "/programmes-grants" }, { title: "News", icon: <span>◫</span>, href: "/news" }]} /></div>
  </div>;
}