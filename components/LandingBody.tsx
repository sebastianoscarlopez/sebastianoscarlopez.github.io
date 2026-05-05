const skills = [
  { k: "React",       n: "20+ yrs frontend",    c: "#60418D" },
  { k: "Maps",        n: "MapLibre · MapStore", c: "#F46E00" },
  { k: "Real Estate", n: "Domain expertise",    c: "#F46E00" },
  { k: "Fintech",     n: "Domain expertise",    c: "#FFBD03" },
  { k: "WebGPU",      n: "For the love of it",  c: "#60418D" },
];

export default function LandingBody() {
  return (
    <div>
      <section className="max-w-[1240px] mx-auto pt-[100px] px-[72px] max-[820px]:pt-14 max-[820px]:px-6" id="stack">
        <div className="text-xs font-medium tracking-[0.22em] uppercase text-purple mb-12 flex items-center gap-3.5 max-[820px]:mb-6">
          01 — Stack
          <span className="flex-1 h-px bg-ink/12" />
        </div>
        <div className="grid grid-cols-5 max-[820px]:grid-cols-2">
          {skills.map((s) => (
            <div
              key={s.k}
              className="group relative pt-[25px] pr-6 pb-8 pl-0 border-t border-ink/18 transition-[padding-left] duration-[400ms] ease-[cubic-bezier(0.2,0.7,0.3,1)] hover:pl-[14px]"
            >
              <div
                className="absolute top-0 left-0 h-px w-0 transition-[width] duration-[400ms] ease-[cubic-bezier(0.2,0.7,0.3,1)] group-hover:w-full"
                style={{ background: s.c }}
              />
              <div
                className="font-bold italic text-[30px] tracking-[-0.025em] mb-1.5 max-[820px]:text-[22px]"
                style={{ color: s.c }}
              >
                {s.k}
              </div>
              <div className="text-[13px] text-ink/65">{s.n}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact-wrap">
        <div className="max-w-[1240px] mx-auto mt-[120px] pt-20 px-[72px] border-t border-ink/12 grid grid-cols-[1fr_auto] items-end gap-12 max-[820px]:px-6 max-[820px]:mt-14 max-[820px]:pt-12 max-[820px]:grid-cols-1 max-[820px]:gap-6" id="contact">
          <h2 className="font-extralight italic text-[64px] leading-[1.05] tracking-[-0.03em] m-0 text-ink max-[820px]:text-[36px]">
            Have a project that <strong className="font-extrabold not-italic text-purple">needs care?</strong>
            <br />Let&apos;s talk.
          </h2>
          <a
            href="mailto:hi@sebastianoscarlopez.dev"
            className="inline-flex items-center gap-3 px-7 py-[18px] bg-purple text-white rounded-full text-sm font-medium no-underline transition-all hover:bg-gold hover:text-ink hover:-translate-y-0.5 whitespace-nowrap max-[820px]:text-[13px] max-[820px]:py-3.5 max-[820px]:px-[22px]"
          >
            hi@sebastianoscarlopez.dev →
          </a>
        </div>
      </section>

      <footer className="max-w-[1240px] mx-auto mt-20 px-[72px] py-10 border-t border-ink/12 flex justify-between items-center text-xs text-ink/50 max-[820px]:flex-col max-[820px]:gap-3 max-[820px]:py-8 max-[820px]:px-6 max-[820px]:text-center">
        <div>© 2026 — Sebastián Oscar López</div>
        <div className="flex gap-6">
          <a href="#" className="text-ink/70 no-underline hover:text-purple">github</a>
          <a href="https://linkedin.com/in/sebastian-oscar-lopez" className="text-ink/70 no-underline hover:text-purple">linkedin</a>
          <a href="mailto:hi@sebastianoscarlopez.dev" className="text-ink/70 no-underline hover:text-purple">email</a>
        </div>
      </footer>
    </div>
  );
}
