import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Home,
  Building2,
  Sofa,
  ClipboardList,
  CalendarCheck,
  Truck,
  Star,
  Phone,
  Mail,
  Check,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MoveMax Moving — Stress-free to your new home" },
      {
        name: "description",
        content:
          "MoveMax Moving offers apartment, office and furniture moving services. Get a fast, free quote and let us handle the heavy lifting.",
      },
      { property: "og:title", content: "MoveMax Moving — Stress-free to your new home" },
      {
        property: "og:description",
        content: "Apartment, office and furniture moving — done right, stress-free.",
      },
    ],
  }),
  component: Index,
});

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{ background: "var(--gradient-primary)" }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 w-full">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/60 border border-border text-xs font-medium text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Trusted by 2,000+ happy movers
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Moving made <span className="text-primary">easy</span> and fun.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl whitespace-pre-line">
            Stress-free to your new home from me{"\n"}. Professional movers, transparent
            pricing, and care for every box.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("#contact")}
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-base font-semibold shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-transform"
            >
              Get a quote!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="inline-flex items-center rounded-full border border-border bg-secondary/40 px-7 py-4 text-base font-semibold text-foreground hover:bg-secondary transition"
            >
              Our services
            </button>
          </div>

          <dl className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "10+", v: "Years" },
              { k: "2k+", v: "Moves" },
              { k: "4.9★", v: "Rating" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-3xl font-bold text-foreground">{s.k}</dt>
                <dd className="text-sm text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ---------- Section heading ---------- */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-14">
      <span className="text-primary text-sm font-semibold tracking-widest uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
    </div>
  );
}

/* ---------- Services ---------- */
function Services() {
  const services = [
    {
      icon: Home,
      title: "Apartment moving",
      desc: "From studio flats to family homes, we pack, transport and unpack every item with care. Insured, on-time and stress-free.",
    },
    {
      icon: Building2,
      title: "Office moving",
      desc: "Relocate your team without losing a workday. We handle desks, IT equipment and sensitive files with full coordination.",
    },
    {
      icon: Sofa,
      title: "Furniture delivery",
      desc: "Bought something big? We pick up and deliver furniture safely, including disassembly and reassembly on arrival.",
    },
  ];
  return (
    <section id="services" className="py-24 sm:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Services"
          title="What we can carry for you"
          subtitle="Three core services, one promise: your stuff arrives safely, on schedule."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-3xl bg-card border border-border p-8 shadow-[var(--shadow-card)] hover:-translate-y-2 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/15 text-primary grid place-items-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */
function HowItWorks() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Request a quote",
      desc: "Tell us what you're moving and when. We respond within an hour with a transparent price.",
    },
    {
      icon: CalendarCheck,
      title: "We schedule a time",
      desc: "Pick a slot that works for you. We confirm the crew, the truck and every detail.",
    },
    {
      icon: Truck,
      title: "We move you!",
      desc: "Our team arrives, packs, drives and unpacks. You just unlock the new door.",
    },
  ];
  return (
    <section id="how" className="py-24 sm:py-32 px-6 lg:px-10 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps to your new home"
          subtitle="No paperwork mountain, no surprise fees. Just a simple, predictable process."
        />
        <div className="grid md:grid-cols-3 gap-6 relative">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-3xl bg-card border border-border p-8 shadow-[var(--shadow-card)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="text-5xl font-bold text-primary/80">{i + 1}</span>
                <s.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */
function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "€50",
      from: "from",
      features: ["2 movers, 2 hours", "Standard truck", "Loading & unloading", "Basic insurance"],
    },
    {
      name: "Comfort",
      price: "€120",
      from: "from",
      highlighted: true,
      features: [
        "3 movers, 4 hours",
        "Large truck",
        "Packing materials included",
        "Furniture assembly",
        "Full insurance",
      ],
    },
    {
      name: "Premium",
      price: "Custom",
      from: "tailored",
      features: [
        "Dedicated coordinator",
        "Full pack & unpack service",
        "Specialty item handling",
        "Storage options",
        "Priority scheduling",
      ],
    },
  ];
  return (
    <section id="pricing" className="py-24 sm:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Pricing"
          title="Honest, upfront packages"
          subtitle="Pick a starting point — we'll tailor the final price to your move."
        />
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 flex flex-col ${
                p.highlighted
                  ? "bg-card border-primary shadow-[var(--shadow-glow)] md:scale-105"
                  : "bg-card border-border shadow-[var(--shadow-card)]"
              }`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wide uppercase">
                  Most popular
                </span>
              )}
              <h3 className="text-2xl font-semibold">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-sm text-muted-foreground">{p.from}</span>
                <span className="text-5xl font-bold text-foreground">{p.price}</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollTo("#contact")}
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                  p.highlighted
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                Choose {p.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Reviews ---------- */
function Reviews() {
  const reviews = [
    {
      name: "Sara K.",
      stars: 5,
      text: "The team was punctual, careful and friendly. Made a chaotic apartment move feel completely effortless.",
    },
    {
      name: "Marco D.",
      stars: 5,
      text: "Moved our office over a weekend with zero downtime. Everything was set up by Monday morning. Highly recommend.",
    },
    {
      name: "Elena B.",
      stars: 5,
      text: "Fair price, no hidden fees, and they even helped me reassemble a tricky wardrobe. Saved my back and my sanity!",
    },
  ];
  return (
    <section id="reviews" className="py-24 sm:py-32 px-6 lg:px-10 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Reviews"
          title="What our customers say"
          subtitle="Real words from people who let us carry their lives across town."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-3xl bg-card border border-border p-8 shadow-[var(--shadow-card)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex gap-1 text-primary mb-4">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <blockquote className="text-card-foreground leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary/20 text-primary grid place-items-center font-semibold">
                  {r.name.charAt(0)}
                </span>
                <span className="font-medium">{r.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us about your move"
          subtitle="Send a quick message and we'll get back with a free quote — usually within the hour."
        />
        <div className="grid lg:grid-cols-5 gap-8">
          <form
            onSubmit={submit}
            className="lg:col-span-3 rounded-3xl bg-card border border-border p-8 shadow-[var(--shadow-card)] space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
                  placeholder="Jane Doe"
                />
              </Field>
              <Field label="Phone">
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
                  placeholder="+1 555 123 4567"
                />
              </Field>
            </div>
            <Field label="Email">
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
                placeholder="jane@example.com"
              />
            </Field>
            <Field label="Message">
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition resize-none"
                placeholder="When are you moving? From where to where?"
              />
            </Field>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 font-semibold shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-transform"
            >
              {sent ? "Sent ✓" : "Send"}
              {!sent && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          <aside className="lg:col-span-2 rounded-3xl bg-card border border-border p-8 shadow-[var(--shadow-card)] flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Reach us directly</h3>
              <p className="mt-2 text-muted-foreground">
                Prefer a call or an email? We're available 7 days a week.
              </p>
            </div>
            <a
              href="tel:+15551234567"
              className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/40 hover:bg-secondary border border-border transition"
            >
              <span className="w-12 h-12 rounded-xl bg-primary/15 text-primary grid place-items-center">
                <Phone className="w-5 h-5" />
              </span>
              <div>
                <div className="text-xs text-muted-foreground">Phone</div>
                <div className="font-semibold">+1 (555) 123-4567</div>
              </div>
            </a>
            <a
              href="mailto:hello@movemax.co"
              className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/40 hover:bg-secondary border border-border transition"
            >
              <span className="w-12 h-12 rounded-xl bg-primary/15 text-primary grid place-items-center">
                <Mail className="w-5 h-5" />
              </span>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-semibold">hello@movemax.co</div>
              </div>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-bold text-lg">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-primary-foreground">
            <Truck className="w-5 h-5" />
          </span>
          MoveMax Moving
        </div>
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} MoveMax Moving. Stress-free to your new home.
        </p>
        <div className="flex items-center gap-3">
          {[Facebook, Instagram, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="Social link"
              className="w-10 h-10 rounded-full bg-secondary/50 border border-border grid place-items-center text-muted-foreground hover:text-primary hover:border-primary transition"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
