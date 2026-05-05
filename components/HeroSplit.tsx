import Logo from "./Logo";

export default function HeroSplit() {
  return (
    <div className="w-full min-h-screen font-light bg-cream text-ink">
      <header className="relative bg-deep text-white overflow-hidden isolate">
        <nav className="max-w-[1240px] mx-auto px-[72px] py-8 flex items-center justify-between relative z-10 max-[820px]:px-6 max-[820px]:py-5 max-[820px]:flex-wrap max-[820px]:gap-4">
          <div className="flex items-center gap-3.5 font-semibold text-sm">
            <Logo size={32} color="#fff" />
            <div>
              sebastianoscarlopez
              <small className="block text-[11px] font-normal tracking-[0.14em] uppercase text-gold">
                Frontend · Maps · WebGPU
              </small>
            </div>
          </div>
          <div className="flex gap-8 text-[13px] max-[820px]:order-3 max-[820px]:w-full max-[820px]:justify-start">
            <a href="#stack" className="text-white/80 no-underline hover:text-gold hover:opacity-100">Stack</a>
            <a href="#work" className="text-white/80 no-underline hover:text-gold hover:opacity-100">Work</a>
            <a href="#contact" className="text-white/80 no-underline hover:text-gold hover:opacity-100">Contact</a>
          </div>
          <a
            href="#contact"
            className="px-[18px] py-2.5 bg-gold text-ink rounded-full text-[13px] font-semibold no-underline transition-colors hover:bg-orange max-[820px]:text-xs max-[820px]:py-2 max-[820px]:px-3.5"
          >
            Available Q3 2026 →
          </a>
        </nav>

        <div className="grid grid-cols-[1.05fr_1fr] items-stretch min-h-[720px] max-[820px]:grid-cols-1 max-[820px]:min-h-0">
          <div className="pt-20 pr-14 pb-[100px] pl-[72px] flex flex-col justify-center gap-8 max-[820px]:py-12 max-[820px]:px-6 max-[820px]:gap-6">
            <div className="text-xs font-medium tracking-[0.22em] uppercase text-gold flex items-center gap-3">
              <span className="w-7 h-px bg-gold" />
              Frontend engineer · Buenos Aires
            </div>
            <h1 className="font-extrabold text-[96px] leading-[0.92] tracking-[-0.045em] m-0 text-white max-w-[700px] max-[820px]:text-[52px] max-[820px]:leading-[0.95]">
              Building the{" "}
              <em className="italic font-extralight text-gold">quietly fast</em>{" "}
              <span
                className="font-black italic"
                style={{
                  background: "linear-gradient(120deg, #F46E00, #FFBD03)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                web,
              </span>{" "}
              for 20 years.
            </h1>
            <p className="text-[19px] font-light leading-[1.55] text-white/78 max-w-[540px] m-0 max-[820px]:text-base">
              I&apos;m <b className="text-gold font-semibold">Sebastián</b> — frontend engineer working in{" "}
              <em className="text-orange italic font-normal">React, MapLibre and the occasional WebGPU shader</em>.
              Two decades of real-estate and fintech work, with a soft spot for simple things made beautifully.
            </p>
            <div className="flex gap-8 flex-wrap text-[13px] text-white/70 pt-6 border-t border-white/15 max-[820px]:gap-3.5 max-[820px]:text-xs">
              <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-purple/18 border border-orange text-orange rounded-full text-xs font-semibold">
                <span className="w-2 h-2 bg-orange rounded-full" style={{ animation: "pulse-ring 2.2s ease-in-out infinite" }} />
                Available · Q3 2026
              </span>
              <span>
                <b className="text-white font-medium">Location</b> · Buenos Aires · Remote
              </span>
              <span>
                <b className="text-white font-medium">Email</b> · hi@sebastianoscarlopez.dev
              </span>
            </div>
          </div>
          <div className="relative bg-panel overflow-hidden flex items-center justify-center max-[820px]:min-h-[360px] max-[820px]:p-8">
            <div
              className="absolute bg-cover bg-center"
              style={{
                top: "-10%",
                right: "-10%",
                bottom: "-10%",
                left: "-10%",
                backgroundImage: "url('/web-bg-baked.svg')",
              }}
            />
            <div className="[&_svg]:w-[240px] [&_svg]:h-[240px] max-[820px]:[&_svg]:w-[140px] max-[820px]:[&_svg]:h-[140px] relative z-10 p-10 bg-white/86 backdrop-blur-[6px] rounded-full shadow-[0_24px_60px_rgba(42,28,69,0.25)] max-[820px]:p-6">
              <Logo size={240} color="#60418D" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
