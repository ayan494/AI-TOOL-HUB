import { Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Braces,
  CheckCircle2,
  Clock3,
  Code2,
  Github,
  GraduationCap,
  Image as ImageIcon,
  Linkedin,
  Menu,
  Mic2,
  Moon,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Sun,
  TrendingUp,
  Users,
  Video,
  WandSparkles,
  X,
  Youtube,
  Zap,
} from "lucide-react";

import robotImage from "@/assets/ai-robot.png";
import modelsImage from "@/assets/post-ai-models.jpg";
import studentsImage from "@/assets/post-students.jpg";
import vercelImage from "@/assets/post-vercel.jpg";
import viteImage from "@/assets/post-vite.jpg";
import { Button } from "@/components/ui/button";

const navItems = ["Home", "AI Tools", "AI for Students", "Web Development", "Tutorials", "Blog", "About", "Contact"];

const categories = [
  { title: "AI Writing", description: "Content, copy, ideas & more", icon: WandSparkles, tone: "blue" },
  { title: "AI Image", description: "Create stunning visuals", icon: ImageIcon, tone: "teal" },
  { title: "AI Video", description: "Turn ideas into videos", icon: Video, tone: "violet" },
  { title: "AI Voice", description: "Text to speech & audio", icon: Mic2, tone: "pink" },
  { title: "AI Coding", description: "Write & debug code faster", icon: Braces, tone: "blue" },
  { title: "AI for Students", description: "Study smarter with AI", icon: GraduationCap, tone: "cyan" },
  { title: "AI for Business", description: "Grow your business", icon: TrendingUp, tone: "violet" },
  { title: "Web Development", description: "Guides, tools & tutorials", icon: Code2, tone: "blue" },
];

const posts = [
  { title: "10 Best Free AI Tools for Students in 2026", category: "AI Tools", date: "Apr 28, 2026", time: "8 min read", image: studentsImage },
  { title: "How to Fix Common Vite Errors", category: "Web Development", date: "Apr 26, 2026", time: "6 min read", image: viteImage },
  { title: "How to Deploy a Next.js App on Vercel", category: "Tutorials", date: "Apr 24, 2026", time: "8 min read", image: vercelImage },
  { title: "ChatGPT vs Claude vs Gemini: Which One is Best?", category: "Comparisons", date: "Apr 22, 2026", time: "9 min read", image: modelsImage },
];

const footerColumns = [
  { title: "AI Tools", links: ["AI Writing", "AI Image", "AI Video", "AI Coding"] },
  { title: "Resources", links: ["Tutorials", "Blog", "AI for Students", "Web Development"] },
  { title: "Company", links: ["About", "Contact", "Advertise", "Newsletter"] },
  { title: "Legal", links: ["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Disclaimer"] },
];

function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="AI Tools Hub home">
      <span className="grid size-9 place-items-center rounded-[10px] bg-primary text-primary-foreground shadow-brand">
        <Bot className="size-5" strokeWidth={2.4} />
      </span>
      <span className={`text-[15px] font-extrabold ${inverted ? "text-hero-foreground" : "text-foreground"}`}>AI Tools Hub</span>
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("ai-tools-theme");
    const shouldUseDark = saved === "dark";
    setDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("ai-tools-theme", next ? "dark" : "light");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-xl">
      <div className="site-container grid h-[72px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
        <Brand />
        <nav className="hidden items-center justify-center gap-5 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={item === "Home" ? "#top" : item === "Blog" ? "#latest" : item === "AI Tools" ? "#categories" : "#footer"} className="nav-link">
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-1.5">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search />
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={dark ? "Use light theme" : "Use dark theme"}>
            {dark ? <Sun /> : <Moon />}
          </Button>
          <Button variant="outline" size="sm" className="hidden xl:inline-flex">Sign In</Button>
          <Button size="sm" className="hidden xl:inline-flex">Get Started</Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <a key={item} href={item === "Home" ? "#top" : item === "Blog" ? "#latest" : item === "AI Tools" ? "#categories" : "#footer"} onClick={() => setOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
                {item}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Button variant="outline">Sign In</Button><Button>Get Started</Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  function submitSearch(event: FormEvent) {
    event.preventDefault();
    setMessage(query.trim() ? `Showing ideas for “${query.trim()}”` : "Try searching for a tool or topic");
  }

  return (
    <section id="top" className="hero-grid relative overflow-hidden bg-hero text-hero-foreground">
      <div className="site-container relative grid min-h-[510px] items-center gap-10 py-16 md:grid-cols-[1.08fr_.92fr] md:py-20">
        <div className="relative z-10 max-w-2xl animate-fade-in">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-hero-line bg-hero-soft px-3.5 py-1.5 text-xs font-semibold text-hero-muted">
            <Sparkles className="size-3.5 text-cyan" /> Discover <span className="text-cyan">•</span> Learn <span className="text-cyan">•</span> Build
          </div>
          <h1 className="max-w-[680px] text-[clamp(2.55rem,5.5vw,4.65rem)] font-extrabold leading-[1.02] tracking-normal">
            The Best AI Tools<br />for a <span className="text-cyan">Smarter Tomorrow</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-hero-muted md:text-lg">
            We test and review the latest AI tools, share tutorials, and help you build skills for the future — all in one place.
          </p>
          <form onSubmit={submitSearch} className="mt-8 flex max-w-xl items-center rounded-full border border-hero-line bg-hero-soft p-1.5 shadow-hero-search">
            <Search className="ml-3 size-4 shrink-0 text-hero-muted" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-hero-foreground outline-hidden placeholder:text-hero-muted" placeholder="Search AI tools, tutorials, or articles..." aria-label="Search AI tools and articles" />
            <Button type="submit" size="icon" className="size-10 shrink-0 rounded-full" aria-label="Submit search"><ArrowRight /></Button>
          </form>
          <p aria-live="polite" className="mt-2 h-5 pl-4 text-xs text-hero-muted">{message}</p>
        </div>
        <div className="relative mx-auto h-[330px] w-full max-w-[510px] md:h-[430px]">
          <div className="absolute inset-[14%] rounded-full bg-cyan-glow blur-3xl" />
          <div className="float-icon left-[7%] top-[15%]"><Sparkles /></div>
          <div className="float-icon right-[8%] top-[9%]"><WandSparkles /></div>
          <div className="float-icon right-[1%] top-[46%]"><Code2 /></div>
          <div className="float-icon bottom-[10%] left-[3%]"><Github /></div>
          <img src={robotImage} alt="Friendly AI robot working on a laptop" width={1024} height={1024} fetchPriority="high" className="relative z-10 mx-auto h-full w-full object-contain drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { value: "100+", label: "AI Tools Reviewed", icon: Bot },
    { value: "500+", label: "Helpful Tutorials", icon: BookOpen },
    { value: "50K+", label: "Monthly Readers", icon: Users },
    { value: "4.9/5", label: "User Satisfaction", icon: ShieldCheck },
  ];
  return (
    <section className="border-b border-border bg-background">
      <div className="site-container grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
        {items.map(({ value, label, icon: Icon }) => (
          <div key={label} className="flex items-center justify-center gap-3 px-3 py-7 md:py-8">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary"><Icon className="size-5" /></span>
            <div><p className="text-xl font-extrabold leading-none text-foreground">{value}</p><p className="mt-1 text-xs text-muted-foreground">{label}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <div className="mb-7 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
      <div className="min-w-0"><h2 className="text-2xl font-extrabold text-foreground md:text-3xl">{title}</h2><p className="mt-1.5 text-sm text-muted-foreground">{description}</p></div>
      <a href={link} className="hidden items-center gap-1 text-sm font-bold text-primary sm:flex">View all <ArrowRight className="size-4" /></a>
    </div>
  );
}

function Categories() {
  return (
    <section id="categories" className="bg-background py-16 md:py-20">
      <div className="site-container">
        <SectionHeading title="Popular Categories" description="Explore tools and resources based on your needs and interests." link="#categories" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ title, description, icon: Icon, tone }) => (
            <a href="#latest" key={title} className={`category-card category-${tone}`}>
              <span className="category-icon"><Icon className="size-5" /></span>
              <span className="min-w-0"><strong className="block text-sm text-foreground">{title}</strong><span className="mt-1 block truncate text-xs text-muted-foreground">{description}</span></span>
              <ArrowRight className="ml-auto size-4 text-muted-foreground opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestPosts() {
  return (
    <section id="latest" className="bg-section py-16 md:py-20">
      <div className="site-container">
        <SectionHeading title="Latest Blog Posts" description="Fresh insights, tips and tutorials — straight from our team." link="#latest" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article key={post.title} className="group overflow-hidden rounded-lg border border-border bg-card shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <div className="aspect-[16/9] overflow-hidden bg-muted"><img src={post.image} alt="" width={1200} height={688} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" /></div>
              <div className="p-4">
                <span className="inline-flex rounded-full bg-primary-soft px-2 py-1 text-[10px] font-bold text-primary">{post.category}</span>
                <h3 className="mt-3 min-h-12 text-[15px] font-bold leading-5 text-foreground">{post.title}</h3>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-[10px] text-muted-foreground"><span>{post.date}</span><span className="flex items-center gap-1"><Clock3 className="size-3" />{post.time}</span></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { title: "Clean & Modern Design", text: "Professional and responsive UI", icon: CheckCircle2 },
    { title: "SEO Friendly", text: "Built to be discovered", icon: Search },
    { title: "Fast Loading", text: "Optimized for speed", icon: Zap },
    { title: "Fully Responsive", text: "Looks great on every device", icon: Play },
  ];
  return (
    <section className="border-y border-border bg-background">
      <div className="site-container grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, text, icon: Icon }) => (
          <div key={title} className="flex items-center gap-3 border-b border-border px-3 py-6 last:border-b-0 sm:nth-[3]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
            <Icon className="size-6 shrink-0 text-primary" /><div><p className="text-sm font-bold text-foreground">{title}</p><p className="mt-1 text-xs text-muted-foreground">{text}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="footer" className="bg-footer text-footer-foreground">
      <div className="site-container grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div className="max-w-sm">
          <Brand inverted />
          <p className="mt-4 text-sm leading-6 text-footer-muted">Helping curious minds discover the right AI tools, practical tutorials and technology insights to build what’s next.</p>
          <div className="mt-5 flex gap-2">
            {[Github, X, Linkedin, Youtube].map((Icon, index) => <a key={index} href="#footer" aria-label={["GitHub", "X", "LinkedIn", "YouTube"][index]} className="grid size-9 place-items-center rounded-md border border-footer-line text-footer-muted transition hover:border-primary hover:text-cyan"><Icon className="size-4" /></a>)}
          </div>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}><h3 className="text-sm font-bold">{column.title}</h3><ul className="mt-4 space-y-3">{column.links.map((link) => <li key={link}><a href="#top" className="text-sm text-footer-muted transition hover:text-cyan">{link}</a></li>)}</ul></div>
        ))}
      </div>
      <div className="border-t border-footer-line"><div className="site-container flex flex-col gap-2 py-5 text-xs text-footer-muted sm:flex-row sm:items-center sm:justify-between"><p>© 2026 AI Tools Hub. All rights reserved.</p><p>Discover better tools. Build a smarter tomorrow.</p></div></div>
    </footer>
  );
}

export function HomePage() {
  return <div className="min-h-screen overflow-x-hidden bg-background font-sans"><Header /><main><Hero /><Stats /><Categories /><LatestPosts /><Features /></main><Footer /></div>;
}