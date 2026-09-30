import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ClipboardCheck, Gauge, Handshake, Lightbulb, ShieldCheck, Target, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/bryanspaxe-hero.jpg";
import aboutTeamImage from "@/assets/about-team.jpg";
import { Eyebrow, SectionHeading } from "@/components/site-content";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Bryanspaxe | Industrial Procurement & Engineering Partner" },
      { name: "description", content: "Meet Bryanspaxe Integrated Services Limited — our story, mission, vision, values and the team behind dependable industrial procurement and engineering across West Africa." },
      { property: "og:title", content: "About Bryanspaxe Integrated Services" },
      { property: "og:description", content: "Established in 2020. Lagos-based. The team behind precision supply and proven engineering across West Africa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values: Array<{ icon: LucideIcon; title: string; copy: string }> = [
  { icon: ShieldCheck, title: "Quality", copy: "Every item we supply and every system we install is held to specification — inspected, certified and fit for service." },
  { icon: Handshake, title: "Integrity", copy: "Transparent quotations, honest timelines and accountable delivery on every commitment we make." },
  { icon: Lightbulb, title: "Innovation", copy: "We keep our clients ahead with modern instrumentation, process intelligence and smarter ways of working." },
  { icon: Users, title: "Customer Focus", copy: "We measure success by uptime on your plant and confidence in your supply chain — not by the invoice." },
];

const facts: Array<[string, string]> = [
  ["Established", "2020"],
  ["Headquarters", "Lagos, Nigeria"],
  ["Operations base", "Amuwo-Odofin, Lagos"],
  ["Reach", "Nigeria, Ghana & West Africa"],
];

function AboutPage() {
  return <>
    <PageHero />
    <StorySection />
    <MissionVision />
    <ValuesSection />
    <TeamSection />
    <CtaBand />
  </>;
}

function PageHero() {
  return <section className="relative overflow-hidden bg-surface-dark text-primary-foreground"><img src={heroImage} alt="" width="1920" height="1088" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover opacity-20" /><div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/90 to-surface-dark/40" /><div className="technical-grid absolute inset-0 opacity-30" /><div className="relative mx-auto max-w-7xl px-5 py-24 md:py-32 lg:px-8"><div className="animate-rise inline-flex items-center gap-3 border border-primary-foreground/15 bg-surface-dark/60 px-4 py-2 text-[10px] font-extrabold uppercase text-primary-foreground/65 backdrop-blur"><span className="relative flex size-2"><span className="animate-signal absolute inset-0 rounded-full bg-brand-green" /><span className="relative size-2 rounded-full bg-brand-green" /></span>About Bryanspaxe</div><h1 className="animate-rise-delay mt-8 max-w-4xl text-5xl font-extrabold leading-[1.05] md:text-7xl">The partner behind <span className="text-primary-foreground/45">reliable operations.</span></h1><p className="animate-rise-delay mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/65">Bryanspaxe Integrated Services Limited is an industrial procurement and engineering company serving operators across Nigeria, Ghana and West Africa.</p><div className="animate-rise-delay mt-10 flex flex-col gap-3 sm:flex-row"><Button asChild variant="hero" size="lg"><Link to="/contact">Start an enquiry <ArrowRight /></Link></Button><Button asChild variant="heroOutline" size="lg"><Link to="/projects">See our work</Link></Button></div></div></section>;
}

function StorySection() {
  return <section className="py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20"><div className="animate-rise"><Eyebrow>Our story</Eyebrow><h2 className="text-3xl font-extrabold leading-tight md:text-5xl">From Lagos, into the plants that keep the region running.</h2><div className="mt-8 space-y-6 text-base leading-8 text-muted-foreground"><p>Bryanspaxe was established in 2020 with a straightforward conviction: industrial operators in West Africa deserve the same precision, reliability and technical rigour available anywhere in the world.</p><p>From our headquarters in Lagos — with our operations base in Amuwo-Odofin — we combine direct access to global OEMs with hands-on engineering capability. That means we do not simply quote and deliver: we review the specification, stand behind the quality, and remain on site to commission and support what we supply.</p><p>Today, our teams serve power generation, oil and gas, manufacturing, water treatment and other process industries — from sourcing instrumentation and electrical equipment to executing plant revamps and control-room maintenance.</p></div></div><div className="animate-rise-delay"><div className="relative overflow-hidden"><img src={aboutTeamImage} alt="Bryanspaxe engineers and procurement specialists reviewing specifications together" width="1400" height="1000" loading="lazy" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-surface-dark/70 via-transparent to-transparent" /></div><div className="mt-0 border border-t-0 border-border bg-card p-7"><p className="text-xs font-extrabold uppercase text-primary">At a glance</p><dl className="mt-5 grid gap-4">{facts.map(([label, value]) => <div key={label} className="flex items-baseline justify-between gap-4 border-b border-border pb-4 last:border-b-0 last:pb-0"><dt className="text-sm text-muted-foreground">{label}</dt><dd className="text-right text-sm font-bold text-foreground">{value}</dd></div>)}</dl></div></div></div></div></section>;
}

function MissionVision() {
  return <section className="bg-surface-soft py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-5 lg:grid-cols-2"><article className="group relative overflow-hidden bg-brand-navy p-9 text-primary-foreground transition-transform duration-500 hover:-translate-y-1 md:p-12"><div className="technical-grid absolute inset-0 opacity-15" /><div className="relative"><Gauge className="size-9 text-brand-green" /><h3 className="mt-8 text-3xl font-extrabold">Our mission</h3><p className="mt-5 max-w-xl text-base leading-8 text-primary-foreground/75">To provide dependable industrial procurement, engineering consultation and installation services that keep our clients&rsquo; operations running safely, efficiently and without interruption.</p></div></article><article className="group relative overflow-hidden bg-primary p-9 text-primary-foreground transition-transform duration-500 hover:-translate-y-1 md:p-12"><div className="technical-grid absolute inset-0 opacity-15" /><div className="relative"><Target className="size-9 text-brand-green" /><h3 className="mt-8 text-3xl font-extrabold">Our vision</h3><p className="mt-5 max-w-xl text-base leading-8 text-primary-foreground/75">To be the most trusted industrial supply and engineering partner in West Africa — the first name operators think of when reliability matters.</p></div></article></div></div></section>;
}

function ValuesSection() {
  return <section className="py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Core values" title="Four principles that shape every engagement." copy="They govern how we source, how we engineer and how we stand behind our work." /><div className="mt-14 grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-4">{values.map(({ icon: Icon, title, copy }) => <article key={title} className="group min-h-72 border-b border-r border-border bg-background p-8 transition-colors hover:bg-surface-soft"><Icon className="size-8 text-primary transition-transform duration-300 group-hover:scale-110" /><h3 className="mt-10 text-xl font-bold">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{copy}</p></article>)}</div></div></section>;
}

function TeamSection() {
  return <section className="relative overflow-hidden bg-surface-dark py-24 text-primary-foreground"><div className="technical-grid absolute inset-0 opacity-20" /><div className="relative mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20"><div className="animate-rise"><Eyebrow inverse>Our people</Eyebrow><h2 className="text-3xl font-extrabold leading-tight md:text-5xl">Engineers first. Suppliers second.</h2><p className="mt-6 max-w-xl text-base leading-8 text-primary-foreground/65">Behind every Bryanspaxe delivery is a multidisciplinary team — instrumentation and electrical engineers, procurement specialists, project coordinators and field technicians who have worked on the plants they now support.</p><p className="mt-4 max-w-xl text-base leading-8 text-primary-foreground/65">That operating experience is what turns a catalogue part number into the right solution for your process: the correct specification, the right certification, and support that continues after delivery.</p><div className="mt-9 flex flex-wrap gap-3">{["Instrumentation", "Electrical", "Mechanical", "Process engineering", "Field service"].map(t => <span key={t} className="border border-primary-foreground/20 px-4 py-2 text-xs font-bold uppercase text-primary-foreground/60">{t}</span>)}</div><Button asChild variant="hero" size="lg" className="mt-9"><Link to="/contact">Talk to our team <ArrowUpRight /></Link></Button></div><div className="animate-rise-delay grid gap-5 sm:grid-cols-2"><article className="border border-primary-foreground/10 bg-surface-dark/60 p-8 backdrop-blur"><ClipboardCheck className="size-7 text-brand-green" /><h3 className="mt-7 text-lg font-bold">Specification-led procurement</h3><p className="mt-3 text-sm leading-7 text-primary-foreground/60">We review every datasheet before we quote — not after delivery.</p></article><article className="border border-primary-foreground/10 bg-surface-dark/60 p-8 backdrop-blur"><Wrench className="size-7 text-brand-green" /><h3 className="mt-7 text-lg font-bold">Hands-on field capability</h3><p className="mt-3 text-sm leading-7 text-primary-foreground/60">Installation, calibration and maintenance handled by our own engineers.</p></article><article className="border border-primary-foreground/10 bg-surface-dark/60 p-8 backdrop-blur"><Gauge className="size-7 text-brand-green" /><h3 className="mt-7 text-lg font-bold">Direct OEM relationships</h3><p className="mt-3 text-sm leading-7 text-primary-foreground/60">Manufacturer access that shortens lead times and protects authenticity.</p></article><article className="border border-primary-foreground/10 bg-surface-dark/60 p-8 backdrop-blur"><Users className="size-7 text-brand-green" /><h3 className="mt-7 text-lg font-bold">Long-term support</h3><p className="mt-3 text-sm leading-7 text-primary-foreground/60">We remain accountable for performance after the equipment is commissioned.</p></article></div></div></div></section>;
}

function CtaBand() {
  return <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground"><div className="technical-grid absolute inset-0 opacity-20" /><div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8"><div><p className="text-sm font-bold text-brand-green">Working with Bryanspaxe</p><h2 className="mt-3 max-w-3xl text-3xl font-extrabold md:text-5xl">Let&rsquo;s put this team on your next requirement.</h2></div><Button asChild variant="hero" size="lg"><Link to="/contact">Request a quote <ArrowRight /></Link></Button></div></section>;
}
