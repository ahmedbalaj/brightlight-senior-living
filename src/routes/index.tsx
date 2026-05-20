import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Heart,
  Home,
  Users,
  Shield,
  Sparkles,
  HandHeart,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  Flower2,
  Sun,
} from "lucide-react";
import logo from "@/assets/brightlight-logo.png";
import heroImg from "@/assets/hero-senior-care.jpg";
import aboutImg from "@/assets/about-family.jpg";
import lifestyleImg from "@/assets/lifestyle-community.jpg";
import assistedImg from "@/assets/service-assisted.jpg";
import memoryImg from "@/assets/service-memory.jpg";
import independentImg from "@/assets/service-independent.jpg";

export const Route = createFileRoute("/")({
  component: BrightlightHome,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Services", href: "#services" },
  { label: "Lifestyle", href: "#lifestyle" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Brightlight Senior Living" className="h-12 w-12 object-contain" />
          <div className="hidden sm:block leading-tight">
            <div className="font-serif text-lg text-primary font-semibold tracking-wide">Brightlight</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-sage">Senior Living</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-foreground/75 hover:text-primary transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition-all hover:shadow-soft"
          >
            Schedule a Tour <ArrowRight className="h-4 w-4" />
          </a>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-primary"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-foreground/80 border-b border-border/40 last:border-0"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium"
            >
              Schedule a Tour
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 -right-40 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--sage) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sage/30 bg-sage/10 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-sage">
            <Sparkles className="h-3.5 w-3.5" /> Compassionate Senior Care
          </div>
          <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl text-primary leading-[1.05] text-balance">
            Where Care <em className="text-sage not-italic">Feels</em> Like Home
          </h1>
          <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Compassionate senior living communities focused on dignity, comfort, and
            connection — because every story deserves to be cherished.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:bg-primary/90 transition-all shadow-soft hover:-translate-y-0.5"
            >
              Schedule a Tour <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-7 py-3.5 text-sm font-medium text-primary hover:bg-accent transition-all"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Heart className="h-4 w-4 text-gold" /> Family-owned</div>
            <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-sage" /> Trained caregivers</div>
            <div className="flex items-center gap-2"><Home className="h-4 w-4 text-primary" /> Multiple states</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/30 to-sage/20 blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-warm border border-card">
            <img
              src={heroImg}
              alt="A caregiver holding the hand of a smiling senior resident in a sunlit room"
              width={1600}
              height={1200}
              className="w-full h-[560px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 rounded-2xl bg-card px-5 py-4 shadow-soft border border-border">
            <div className="h-11 w-11 rounded-full bg-sage/15 flex items-center justify-center">
              <HandHeart className="h-5 w-5 text-sage" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Trusted by</div>
              <div className="text-sm font-semibold text-primary">Hundreds of families</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-sage font-medium">
      <span className="h-px w-8 bg-sage/50" />
      {children}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative rounded-[2rem] overflow-hidden shadow-soft">
            <img
              src={aboutImg}
              alt="A daughter walking arm in arm with her elderly father through a flower garden"
              width={1400}
              height={1000}
              loading="lazy"
              className="w-full h-[520px] object-cover"
            />
          </div>
          <div className="absolute -top-6 -right-6 rounded-2xl bg-gold/95 text-gold-foreground px-6 py-5 shadow-warm max-w-[220px] hidden md:block">
            <Flower2 className="h-5 w-5 mb-2" />
            <p className="font-serif italic text-base leading-snug">
              "Treated like family — never like patients."
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionLabel>Our Story</SectionLabel>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl text-primary leading-tight text-balance">
            Built on the belief that every senior deserves dignity, comfort, and joy.
          </h2>
          <div className="mt-7 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Brightlight Senior Living was founded by a family who understood firsthand
              what it means to search for the right place for a loved one. We saw what was
              missing — warmth, attentiveness, and a true sense of home — and we set out
              to build it.
            </p>
            <p>
              Today, our communities span multiple states, but our roots remain the same:
              personal care, real relationships, and the simple promise that every resident
              is treated as part of our family.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="border-l-2 border-sage pl-5">
              <div className="font-serif text-3xl text-primary">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Years of caring service</div>
            </div>
            <div className="border-l-2 border-gold pl-5">
              <div className="font-serif text-3xl text-primary">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Family-first philosophy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section id="mission" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-warm" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at top, color-mix(in oklab, var(--gold) 18%, transparent), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-card shadow-soft">
          <Sun className="h-6 w-6 text-gold" />
        </div>
        <SectionLabel><span className="ml-3">Our Mission</span></SectionLabel>
        <blockquote className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl text-primary leading-[1.2] text-balance">
          "To <em className="text-gold not-italic">illuminate</em> the lives of every resident through
          compassionate, personalized care in a warm and welcoming community."
        </blockquote>
        <p className="mt-10 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We believe later years should be lived with dignity, independence, and purpose.
          Every meal, every conversation, every quiet morning — they all matter.
        </p>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: HandHeart,
    title: "Assisted Living",
    desc: "Thoughtful support with daily activities while preserving the independence and quality of life every resident deserves.",
    img: assistedImg,
    accent: "sage" as const,
  },
  {
    icon: Heart,
    title: "Memory Care",
    desc: "A safe, structured, and gently engaging environment for residents living with Alzheimer's and dementia.",
    img: memoryImg,
    accent: "gold" as const,
  },
  {
    icon: Home,
    title: "Independent Living",
    desc: "A maintenance-free lifestyle filled with community, enriching activities, and the comforts of home.",
    img: independentImg,
    accent: "primary" as const,
  },
];

function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <SectionLabel>What We Offer</SectionLabel>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl text-primary leading-tight text-balance">
            Care that meets every resident where they are.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            From a helping hand to specialized memory support, our communities offer the
            right level of care — always delivered with warmth.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            const accentClass =
              s.accent === "sage"
                ? "bg-sage/15 text-sage"
                : s.accent === "gold"
                ? "bg-gold/20 text-gold-foreground"
                : "bg-primary/10 text-primary";
            return (
              <article
                key={s.title}
                className="group rounded-3xl bg-card border border-border overflow-hidden hover:shadow-warm transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-7">
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${accentClass}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl text-primary">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const REASONS = [
  { icon: HandHeart, title: "Personalized care", text: "A tailored plan for every resident's unique needs and story." },
  { icon: Users, title: "Compassionate staff", text: "Trained caregivers who lead with kindness, every single day." },
  { icon: Shield, title: "Safe communities", text: "Secure, welcoming homes designed with comfort in mind." },
  { icon: Sparkles, title: "Dignity & independence", text: "Empowering residents to live with purpose and choice." },
  { icon: Heart, title: "Connection & belonging", text: "Real friendships, shared meals, and a deep sense of family." },
  { icon: Flower2, title: "Enriching daily life", text: "Engaging activities, beautiful spaces, and joyful moments." },
];

function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <SectionLabel>Why Families Choose Us</SectionLabel>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl text-primary leading-tight text-balance">
            The peace of mind your family is searching for.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="rounded-2xl bg-card p-7 border border-border hover:border-sage/40 transition-colors"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/12 text-sage">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-xl text-primary">{r.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed text-[15px]">{r.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Lifestyle() {
  return (
    <section id="lifestyle" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-14 items-center">
        <div className="lg:col-span-3 relative">
          <div className="rounded-[2rem] overflow-hidden shadow-soft">
            <img
              src={lifestyleImg}
              alt="Seniors enjoying tea time and laughter together at a community table"
              width={1400}
              height={1000}
              loading="lazy"
              className="w-full h-[560px] object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-2">
          <SectionLabel>Daily Life</SectionLabel>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl text-primary leading-tight text-balance">
            Joy lives in the everyday.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            Mornings begin with sunlight and warm conversations. Afternoons fill with
            gardening, music, games, and gentle movement. Evenings end with a shared
            meal and the familiar comfort of friends.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Chef-prepared, home-style meals",
              "Daily activities and social gatherings",
              "Beautiful gardens and welcoming common spaces",
              "Family always welcome — anytime",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground/85">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary text-primary-foreground px-8 py-16 lg:px-16 lg:py-20 text-center">
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 20% 20%, var(--gold) 0%, transparent 45%), radial-gradient(circle at 85% 80%, var(--sage) 0%, transparent 45%)",
            }}
          />
          <div className="relative">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance">
              Find the right home for your loved one.
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Reach out today or schedule a visit — we'd love to welcome you and answer
              every question your family has.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-7 py-3.5 text-sm font-medium hover:opacity-90 transition-all shadow-warm"
              >
                Schedule a Tour <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-medium hover:bg-primary-foreground/10 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/60">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14">
        <div>
          <SectionLabel>Get in Touch</SectionLabel>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl text-primary leading-tight text-balance">
            We're here whenever you're ready.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            Have questions? Want to schedule a tour? Our team is happy to walk you
            through everything — at your pace, with no pressure. With communities across
            multiple states, there's a Brightlight near you.
          </p>

          <div className="mt-10 space-y-5">
            <a href="tel:8775427444" className="flex items-start gap-4 group">
              <div className="h-12 w-12 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:bg-sage/10 group-hover:border-sage/40 transition-colors">
                <Phone className="h-5 w-5 text-sage" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Call us</div>
                <div className="text-lg text-primary font-medium">877-542-7444</div>
              </div>
            </a>
            <a href="mailto:contact@brightlightseniorliving.com" className="flex items-start gap-4 group">
              <div className="h-12 w-12 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:bg-gold/15 group-hover:border-gold/50 transition-colors">
                <Mail className="h-5 w-5 text-gold" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="text-lg text-primary font-medium break-all">contact@brightlightseniorliving.com</div>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-card border border-border flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Headquarters</div>
                <div className="text-lg text-primary font-medium">306 W Redwood St Ste 201</div>
                <div className="text-muted-foreground">Baltimore, MD 21201</div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "mailto:contact@brightlightseniorliving.com";
          }}
          className="rounded-3xl bg-card p-8 lg:p-10 border border-border shadow-soft"
        >
          <h3 className="font-serif text-2xl text-primary">Schedule a tour</h3>
          <p className="text-sm text-muted-foreground mt-1">We'll respond within one business day.</p>

          <div className="mt-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="First name" name="firstName" />
              <Field label="Last name" name="lastName" />
            </div>
            <Field label="Email" name="email" type="email" />
            <Field label="Phone" name="phone" type="tel" />
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">How can we help?</label>
              <textarea
                rows={4}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition-all"
                placeholder="Tell us a little about your loved one..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:bg-primary/90 transition-all shadow-soft"
            >
              Send Message <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition-all"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Brightlight Senior Living" className="h-14 w-14 object-contain" />
            <div>
              <div className="font-serif text-xl text-primary font-semibold">Brightlight Senior Living</div>
              <div className="text-xs uppercase tracking-[0.18em] text-sage">Compassionate Care · Meaningful Living</div>
            </div>
          </div>
          <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
            Welcoming senior living communities across the country — where every resident
            is treated like family.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg text-primary">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-primary">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>306 W Redwood St Ste 201</li>
            <li>Baltimore, MD 21201</li>
            <li><a href="tel:8775427444" className="hover:text-primary transition-colors">877-542-7444</a></li>
            <li><a href="mailto:contact@brightlightseniorliving.com" className="hover:text-primary transition-colors break-all">contact@brightlightseniorliving.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Brightlight Senior Living. All rights reserved.</div>
          <div>
            Developed by{" "}
            <a
              href="https://hfdesignsllc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              HF Designs LLC
            </a>
          </div>
          <div className="font-serif italic">Where care feels like home.</div>
        </div>
      </div>
    </footer>
  );
}

function BrightlightHome() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Mission />
        <Services />
        <WhyUs />
        <Lifestyle />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
