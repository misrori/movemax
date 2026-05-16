import { useEffect, useState } from "react";
import { Menu, X, Truck } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-18 py-4 flex items-center justify-between">
        <button
          onClick={() => go("#hero")}
          className="flex items-center gap-2 text-foreground font-bold text-xl tracking-tight"
        >
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-primary-foreground">
            <Truck className="w-5 h-5" />
          </span>
          MoveMax
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => go(l.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => go("#contact")}
          className="hidden md:inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition shadow-[var(--shadow-glow)]"
        >
          Get a quote
        </button>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <ul className="px-6 py-4 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => go(l.href)}
                  className="w-full text-left px-3 py-3 rounded-lg text-foreground hover:bg-secondary transition"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => go("#contact")}
                className="w-full mt-2 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold"
              >
                Get a quote
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
