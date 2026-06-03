import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CircleDot,
  Layers3,
  ShieldCheck,
  ScanLine,
  LockKeyhole,
  Radar,
  Sparkles,
  FileSearch,
  Network,
  Gauge,
  Mail,
  TriangleAlert,
  Send,
} from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "eff3b9f6-7199-4d93-8e13-1cc084fd84ae";

const smoothEase = [0.22, 1, 0.36, 1];

const revealViewport = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -120px 0px",
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.82,
      delay,
      ease: smoothEase,
    },
  }),
};

const softScale = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.985,
    filter: "blur(8px)",
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.86,
      delay,
      ease: smoothEase,
    },
  }),
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.04,
    },
  },
};

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SpacedWord({ word, className }) {
  return (
    <div className={`flex w-[154px] justify-between ${className}`} aria-label={word}>
      {word.split("").map((letter, index) => (
        <span key={`${word}-${letter}-${index}`} aria-hidden="true">
          {letter}
        </span>
      ))}
    </div>
  );
}

function Wordmark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-11 w-11 items-center justify-center">
        <svg viewBox="0 0 64 64" className="h-11 w-11 overflow-visible" aria-hidden="true">
          <defs>
            <linearGradient id="mwLogoGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.82)" />
              <stop offset="55%" stopColor="rgba(186,230,253,0.68)" />
              <stop offset="100%" stopColor="rgba(147,197,253,0.52)" />
            </linearGradient>
          </defs>
          <rect
            x="11.5"
            y="17.5"
            width="25"
            height="29"
            fill="none"
            stroke="url(#mwLogoGradient)"
            strokeWidth="3.8"
            opacity="0.88"
          />
          <circle
            cx="40"
            cy="31"
            r="11.2"
            fill="none"
            stroke="url(#mwLogoGradient)"
            strokeWidth="3.8"
            opacity="0.86"
          />
          <path
            d="M40 20.5V49.5"
            stroke="url(#mwLogoGradient)"
            strokeWidth="3.8"
            strokeLinecap="round"
            opacity="0.86"
          />
        </svg>
      </div>
      <div className="leading-none">
        <SpacedWord word="MEANWHILE" className="text-[15px] font-semibold text-white/88" />
        <SpacedWord word="TECHNOLOGIES" className="mt-1 text-[8px] font-medium text-cyan-100/42" />
      </div>
    </div>
  );
}

function ArchitecturalLinework({ density = "hero" }) {
  const light = density === "hero" ? "opacity-[0.38]" : "opacity-[0.24]";
  const hatches = density === "hero" ? "opacity-[0.18]" : "opacity-[0.12]";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className={`absolute inset-0 h-full w-full ${light}`} viewBox="0 0 1600 950" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <pattern id="mwHatch" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="12" stroke="rgba(205,230,238,0.26)" strokeWidth="1" />
          </pattern>
          <pattern id="mwDots" width="34" height="34" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.6" fill="rgba(205,230,238,0.23)" />
          </pattern>
        </defs>

        <g stroke="rgba(205,230,238,0.22)" strokeWidth="1" fill="none">
          <path d="M0 132 H512" />
          <path d="M1142 118 H1600" />
          <path d="M0 700 H610" />
          <path d="M1038 706 H1600" />
          <path d="M116 0 V950" />
          <path d="M472 0 V870" />
          <path d="M1070 0 V950" />
          <path d="M1366 0 V950" />
          <path strokeDasharray="10 12" d="M70 290 H525" />
          <path strokeDasharray="10 12" d="M1030 292 H1520" />
          <path strokeDasharray="10 12" d="M1280 0 V640" />
          <path strokeDasharray="8 11" d="M298 136 V678" />
          <path d="M410 0 A520 520 0 0 1 1120 672" opacity="0.72" />
          <path d="M1020 210 A318 318 0 0 0 1522 574" opacity="0.62" />
          <path d="M78 510 A250 250 0 0 0 382 190" opacity="0.52" />
        </g>

        <g stroke="rgba(205,230,238,0.20)" strokeWidth="1" fill="none">
          <rect x="1160" y="184" width="246" height="206" />
          <rect x="1192" y="214" width="184" height="146" strokeDasharray="8 10" />
          <path d="M1376 360 A154 154 0 0 0 1192 214" />
          <path d="M1034 524 H1322 V760 H1034 Z" />
          <path d="M1062 552 H1294 V722 H1062 Z" strokeDasharray="8 9" />
          <path d="M1322 760 A226 226 0 0 0 1070 540" opacity="0.7" />
          <rect x="152" y="684" width="352" height="174" />
          <path d="M152 756 H504" />
          <path d="M302 684 V858" />
          <path d="M230 858 A112 112 0 0 1 342 756" />
          <rect x="352" y="730" width="88" height="88" />
          <path d="M352 730 L440 818 M440 730 L352 818" />
        </g>

        <g className={hatches}>
          <rect x="0" y="146" width="210" height="180" fill="url(#mwHatch)" />
          <rect x="1070" y="606" width="240" height="190" fill="url(#mwHatch)" />
          <rect x="1456" y="0" width="144" height="132" fill="url(#mwHatch)" />
          <rect x="575" y="402" width="180" height="130" fill="url(#mwDots)" />
          <rect x="1220" y="458" width="260" height="220" fill="url(#mwDots)" />
        </g>

        <g stroke="rgba(205,230,238,0.28)" strokeWidth="1" fill="none" opacity="0.72">
          <path d="M56 64 H92 M74 46 V82" />
          <path d="M1510 84 H1548 M1529 65 V104" />
          <path d="M520 806 H558 M539 787 V826" />
          <path d="M986 840 H1020 M1003 823 V857" />
          <rect x="908" y="678" width="15" height="15" />
          <rect x="1392" y="594" width="16" height="16" />
          <circle cx="678" cy="612" r="4" fill="rgba(205,230,238,0.32)" stroke="none" />
          <circle cx="1322" cy="474" r="4" fill="rgba(205,230,238,0.32)" stroke="none" />
          <circle cx="345" cy="334" r="4" fill="rgba(205,230,238,0.32)" stroke="none" />
        </g>
      </svg>
    </div>
  );
}

function AmbientField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(97,232,255,0.12), transparent 28%), radial-gradient(circle at 82% 12%, rgba(174,117,255,0.10), transparent 26%), radial-gradient(circle at 60% 86%, rgba(255,255,255,0.08), transparent 34%)",
        }}
      />
      <ArchitecturalLinework density="hero" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.10) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="absolute left-1/2 top-20 h-[720px] w-[720px] -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: smoothEase }}
          className="h-full w-full rounded-full border border-white/10 shadow-[0_0_120px_rgba(100,220,255,0.08)]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.045), transparent 62%)",
          }}
        />
      </div>
    </div>
  );
}

function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#03070a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(103,232,249,0.08),transparent_28%),radial-gradient(circle_at_85%_12%,rgba(139,92,246,0.07),transparent_28%),linear-gradient(180deg,rgba(3,7,10,0)_0%,rgba(3,7,10,0.64)_42%,#03070a_100%)]" />
      <ArchitecturalLinework density="body" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,10,0.10),#03070a_94%)]" />
    </div>
  );
}

const evidenceTypes = [
  { label: "Drawings", x: 135, y: 92, cls: "left-[7%] top-[17%]" },
  { label: "Schedules", x: 328, y: 62, cls: "left-[26%] top-[10%]" },
  { label: "Specifications", x: 666, y: 78, cls: "right-[24%] top-[13%]" },
  { label: "Fire strategy", x: 850, y: 96, cls: "right-[8%] top-[17%]" },
  { label: "Strategy reports", x: 151, y: 212, cls: "left-[8%] top-[46%]" },
  { label: "Package briefs", x: 849, y: 214, cls: "right-[8%] top-[46%]" },
  { label: "Building regulations", x: 198, y: 328, cls: "left-[10%] bottom-[18%]" },
  { label: "Employer's requirements", x: 410, y: 358, cls: "left-[30%] bottom-[11%]" },
  { label: "Marketing material", x: 604, y: 360, cls: "right-[30%] bottom-[10%]" },
  { label: "Planning obligations", x: 790, y: 330, cls: "right-[11%] bottom-[17%]" },
  { label: "Contracts", x: 332, y: 212, cls: "left-[27%] top-[46%]" },
  { label: "CGIs", x: 668, y: 212, cls: "right-[28%] top-[46%]" },
];

const auditExamples = {
  coordination: [
    "Drawings against schedules",
    "Specifications against drawings",
    "Design package against sub contract",
    "Package briefs against package deliverables",
    "Strategy reports against design deliverables",
  ],
  compliance: [
    "Fire strategy against plans",
    "Gateway submission deliverables against checklist",
    "Design deliverables against CDM",
    "VE proposals against compliance",
  ],
  risk: [
    "Marketing material against technical information",
    "Employer's Requirements against design deliverables",
    "Regulatory requirements against technical information",
    "Planning and insurance requirements against design deliverables",
  ],
};

function Constellation() {
  return (
    <motion.div
      variants={softScale}
      initial="hidden"
      animate="visible"
      custom={0.4}
      className="relative mx-auto mt-14 h-[470px] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 shadow-2xl shadow-cyan-950/20 backdrop-blur"
    >
      <ArchitecturalLinework density="body" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(125,211,252,0.11),transparent_52%)]" />
      <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 1000 470" preserveAspectRatio="none">
        <defs>
          <radialGradient id="lineGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(165,243,252,.42)" />
            <stop offset="100%" stopColor="rgba(255,255,255,.18)" />
          </radialGradient>
        </defs>
        {evidenceTypes.map((item) => (
          <line key={item.label} x1="500" y1="235" x2={item.x} y2={item.y} stroke="url(#lineGlow)" strokeWidth="1" />
        ))}
        <path d="M128 105 C270 190, 340 52, 500 235 S742 330, 870 105" fill="none" stroke="rgba(255,255,255,.10)" strokeWidth="1" />
        <path d="M180 352 C328 270, 385 352, 500 235 S690 118, 806 346" fill="none" stroke="rgba(125,211,252,.13)" strokeWidth="1" />
      </svg>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 56, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
      />

      <div className="absolute left-1/2 top-1/2 z-10 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-cyan-100/30 bg-black/55 text-center shadow-[0_0_70px_rgba(103,232,249,.16)] backdrop-blur-xl">
        <Radar className="mb-2 h-6 w-6 text-cyan-100" />
        <span className="text-xs uppercase tracking-[0.28em] text-cyan-100/80">Audit core</span>
        <span className="mt-1 text-sm text-white/85">Meaning across formats</span>
      </div>

      {evidenceTypes.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.72, delay: 0.55 + index * 0.035, ease: smoothEase }}
          className={`absolute ${item.cls} rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm text-white/80 shadow-xl backdrop-blur-md`}
        >
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-200 align-middle shadow-[0_0_12px_rgba(165,243,252,.8)]" />
          {item.label}
        </motion.div>
      ))}
    </motion.div>
  );
}

const auditLayers = [
  {
    icon: FileSearch,
    title: "Evidence discovery",
    text: "The system first determines which information is relevant, current and safe to audit before any judgement is made.",
  },
  {
    icon: Network,
    title: "Semantic reconstruction",
    text: "Drawings, schedules, clauses and diagrams are reconstructed as connected project meaning, not isolated files.",
  },
  {
    icon: Gauge,
    title: "Impact prioritisation",
    text: "Findings are triaged by severity and likely commercial, programme or reputational effect.",
  },
];

function CategoryCard({ title, text, items, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      variants={softScale}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/25 p-6"
    >
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-cyan-100/50 via-white/15 to-transparent" />
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h4 className="text-lg font-medium tracking-[-0.02em] text-white">{title}</h4>
          <p className="mt-2 max-w-sm text-sm leading-6 text-white/46">{text}</p>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.035]">
          <Icon className="h-4 w-4 text-cyan-100/70" />
        </div>
      </div>
      <div className="grid gap-2">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={revealViewport}
            transition={{ duration: 0.55, delay: delay + 0.1 + index * 0.035, ease: smoothEase }}
            className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.025] px-4 py-3 text-sm leading-6 text-white/72"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200/90" />
            <span>{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function AuditSurfaceSection() {
  return (
    <motion.div
      variants={softScale}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      className="mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-black/35"
    >
      <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative p-7 md:p-10">
          <ArchitecturalLinework density="body" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(125,211,252,0.10),transparent_38%)]" />
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.035]">
              <ScanLine className="h-5 w-5 text-cyan-100/80" />
            </div>
            <h2 className="mt-10 max-w-md text-3xl font-medium tracking-[-0.05em] text-white md:text-5xl">
              What Meanwhile will inspect.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-white/56">
              The first frontier is not another dashboard. It is the ability to interrogate project information as a connected body of evidence.
            </p>
          </div>
        </div>
        <div className="grid gap-4 border-t border-white/10 p-5 md:p-8 lg:border-l lg:border-t-0">
          <CategoryCard
            title="Coordination"
            text="Information alignment across drawings, schedules, briefs and packages."
            items={auditExamples.coordination}
            icon={Layers3}
            delay={0.05}
          />
          <CategoryCard
            title="Compliance"
            text="Evidence that requirements can be demonstrated from issued information."
            items={auditExamples.compliance}
            icon={ShieldCheck}
            delay={0.1}
          />
          <CategoryCard
            title="Commercial and governance risk"
            text="Discrepancies that can lead to cost, delay, claims or reputational exposure."
            items={auditExamples.risk}
            icon={TriangleAlert}
            delay={0.15}
          />
        </div>
      </div>
    </motion.div>
  );
}

function ProcessTrace() {
  return (
    <Reveal className="mt-16">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/25 p-6 md:p-8">
        <ArchitecturalLinework density="body" />
        <div className="absolute left-8 right-8 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-cyan-100/30 to-transparent lg:block" />
        <div className="relative grid gap-4 lg:grid-cols-3">
          {auditLayers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.title}
                variants={softScale}
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                custom={index * 0.08}
                className="relative rounded-[1.35rem] border border-white/[0.08] bg-black/45 p-6 backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-100/20 bg-cyan-100/[0.06]">
                    <Icon className="h-4 w-4 text-cyan-100" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.28em] text-white/35">0{index + 1}</span>
                </div>
                <h3 className="mt-7 text-2xl font-medium tracking-[-0.04em] text-white">{layer.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/52">{layer.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

function EarlyAccessForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "Meanwhile early access request",
          from_name: "Meanwhile Technologies website",
          email,
          message: "Please keep me informed about Meanwhile Technologies.",
          source: "meanwhile-technologies.com",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setMessage("Thank you. We will keep you informed as Meanwhile develops.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again shortly.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again shortly.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row">
      <div className="flex-1">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          placeholder="email@company.com"
          className="h-14 w-full rounded-full border border-white/10 bg-black/35 px-6 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-cyan-100/40"
        />
        <p className="mt-3 text-center text-[11px] leading-5 text-white/32 sm:text-left">
          We will only use your email to share Meanwhile updates and early access information.
        </p>
        {message && (
          <p className={`mt-3 text-center text-sm sm:text-left ${status === "success" ? "text-cyan-100" : "text-red-200"}`}>
            {message}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-medium text-black transition hover:bg-cyan-50 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Sending" : "Stay informed"}
        {status === "sending" ? <Send className="h-4 w-4 animate-pulse" /> : <ArrowRight className="h-4 w-4" />}
      </button>
    </form>
  );
}

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03070a] text-white selection:bg-cyan-200 selection:text-black">
      <SiteBackground />
      <section className="relative min-h-screen px-6 py-7 md:px-10 lg:px-14">
        <AmbientField />
        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between">
          <Wordmark />
          <div className="hidden items-center gap-8 text-sm text-white/52 md:flex">
            <a href="#problem" className="transition hover:text-white">Problem</a>
            <a href="#system" className="transition hover:text-white">System</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="rounded-full border border-white/14 px-5 py-3 text-white/78 transition hover:border-white/30 hover:text-white">Stay informed</a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-110px)] max-w-7xl items-center pt-10 lg:grid-cols-[1fr_0.48fr]">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.86, ease: smoothEase }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-100/20 bg-white/[0.045] px-4 py-2 text-sm text-cyan-100/80 shadow-2xl shadow-cyan-950/20 backdrop-blur"
            >
              <Sparkles className="h-4 w-4" />
              Developing the next generation of construction design audits
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 38, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.02, delay: 0.1, ease: smoothEase }}
              className="mt-9 max-w-5xl text-[clamp(4rem,9.6vw,9.6rem)] font-medium leading-[0.86] tracking-[-0.085em] text-white"
            >
              The intelligence layer for final construction deliverables.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.22, ease: smoothEase }}
              className="mt-8 max-w-3xl text-lg leading-8 text-white/68 md:text-xl"
            >
              Meanwhile is developing a cutting edge AI audit system that reads across drawings, schedules, specifications, strategies, briefs, marketing material, employer's requirements, contracts and CDM information. It identifies inconsistencies before they make their way into a contract, gateway submission or onto site.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.86, delay: 0.34, ease: smoothEase }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a href="#contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition hover:bg-cyan-50">
                Request early access <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#system" className="inline-flex items-center justify-center rounded-full border border-white/14 px-7 py-4 text-sm font-medium text-white/62 transition hover:border-white/28 hover:text-white">
                See what is emerging
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.0, delay: 0.4, ease: smoothEase }}
            className="relative mt-16 hidden lg:block"
          >
            <div className="border-l border-white/10 pl-8">
              <div className="text-xs uppercase tracking-[0.35em] text-white/30">Signal index</div>
              <div className="mt-7 space-y-5 text-sm uppercase tracking-[0.22em] text-white/70">
                <p>Evidence field</p>
                <p>Cross document audit</p>
                <p>Risk surface</p>
              </div>
            </div>
            <div className="mt-28 max-w-[260px] rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-sm uppercase leading-7 tracking-[0.24em] text-white/36 backdrop-blur">
              Steady signal. Quiet release. Evidence first.
            </div>
          </motion.div>
        </div>
      </section>

      <section id="problem" className="relative px-6 py-24 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid gap-10 border-t border-white/10 pt-16 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-100/50">The problem</p>
              <h2 className="mt-5 max-w-xl text-4xl font-medium tracking-[-0.06em] text-white md:text-6xl">
                Project information fails quietly before it fails expensively.
              </h2>
            </div>
            <div className="grid gap-6 text-lg leading-9 text-white/60">
              <p>
                Construction teams do not suffer from a lack of information. They suffer from information that no longer agrees with itself.
              </p>
              <p>
                Drawings, schedules, specifications, strategies, employer's requirements, planning obligations and marketing information each move at their own pace. By the time inconsistencies surface, they are already embedded in procurement, contracts or construction.
              </p>
            </div>
          </Reveal>
          <Constellation />
        </div>
      </section>

      <section id="system" className="relative px-6 py-24 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-100/50">The system</p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.06em] text-white md:text-6xl">
              Built around evidence, reconstruction and consequence.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/55">
              Meanwhile is not being designed as a visual wrapper around a general model. It is being developed as a governed audit system that understands how construction information is issued, interpreted and relied upon.
            </p>
          </Reveal>
          <ProcessTrace />
          <AuditSurfaceSection />
        </div>
      </section>

      <section className="relative px-6 py-24 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 p-8 md:p-12">
              <ArchitecturalLinework density="body" />
              <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-cyan-100/50">AI advantage</p>
                  <h2 className="mt-5 max-w-xl text-4xl font-medium tracking-[-0.06em] text-white md:text-6xl">
                    AI reliability, not AI theatre.
                  </h2>
                </div>
                <div>
                  <p className="text-lg leading-9 text-white/62">
                    Meanwhile's competitive edge is the AI itself. We use multimodal AI, retrieval augmented reasoning and long term project memory, developed with AI research partners, to make audits more traceable, context aware and reliable than general purpose tools.
                  </p>
                  <p className="mt-6 text-lg leading-9 text-white/50">
                    We have not shipped because reliability matters. In construction, information failure can become cost, delay, contractual exposure or risk to life. Good systems that make a difference take time.
                  </p>
                  <div className="mt-10 grid gap-3 md:grid-cols-3">
                    {["Multimodal understanding", "Retrieval and traceability", "Long term project memory"].map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-sm leading-6 text-white/70">
                        <CircleDot className="mb-5 h-4 w-4 text-cyan-100/70" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="relative px-6 py-24 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-16">
          <Reveal>
            <h2 className="max-w-5xl text-4xl font-medium tracking-[-0.06em] text-white md:text-7xl">
              A small team building from the intersection of construction, software and AI.
            </h2>
            <p className="mt-10 max-w-4xl text-lg leading-9 text-white/62">
              We combine 45 years of experience in large scale construction, software engineering and AI research. We understand the pressure of issued project information because we have lived inside the systems, workflows and decisions that produce it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-24 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 p-8 md:p-12">
              <ArchitecturalLinework density="body" />
              <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.035]">
                    <LockKeyhole className="h-5 w-5 text-cyan-100/80" />
                  </div>
                  <h2 className="mt-10 max-w-xl text-4xl font-medium tracking-[-0.06em] text-white md:text-6xl">
                    Quiet by design. Serious by necessity.
                  </h2>
                </div>
                <div className="space-y-6 text-lg leading-9 text-white/58">
                  <p>
                    We are keeping the system intentionally quiet while the underlying audit behaviour is developed, tested and governed.
                  </p>
                  <p>
                    The aim is not to launch another construction technology interface. The aim is to create a dependable intelligence layer for the information that clients, consultants, contractors, insurers and regulators already rely on.
                  </p>
                  <p>
                    More will be shared when the work is ready to carry the weight of the claims.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="relative px-6 py-24 md:px-10 lg:px-14">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 p-8 text-center shadow-2xl shadow-cyan-950/20 md:p-14">
              <ArchitecturalLinework density="body" />
              <div className="relative">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyan-100/20 bg-cyan-100/[0.06]">
                  <Mail className="h-6 w-6 text-cyan-100" />
                </div>
                <h2 className="mt-10 text-4xl font-medium tracking-[-0.06em] text-white md:text-6xl">
                  More will be revealed soon.
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/52">
                  Meanwhile is opening quiet conversations with developers, contractors, design leaders, insurers, investors and construction technology partners who understand the cost of information failure.
                </p>
                <EarlyAccessForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default App;
