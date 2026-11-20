export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-amber-200/70 px-3 py-1 text-[11px] font-medium text-[#7a3e12]">
            Premium & Fresh Roastery
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-stone-900 md:text-5xl">
            Experience Coffee Crafted With Real Passion
          </h1>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-stone-500">
            Ethically sourced beans from small-batch farms around the globe and
            freshly roasted to deliver an unforgettable taste in every cup.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-[#7a3e12] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#5e2f0d]">
              Explore Beans
            </button>
            <button className="rounded-full border border-stone-300 px-6 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-100">
              Our Process
            </button>
          </div>

          <div className="mt-10 flex gap-10 border-t border-stone-200 pt-6">
            <div>
              <p className="text-2xl font-bold text-stone-900">100%</p>
              <p className="text-xs text-stone-500">Organic Beans</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-stone-900">48h</p>
              <p className="text-xs text-stone-500">Roast-to-door cycle</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-stone-900">15k+</p>
              <p className="text-xs text-stone-500">Coffee lovers</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800"
            alt="Koffea coffee shop"
            className="h-80 w-full rounded-3xl object-cover shadow-xl md:h-[420px]"
          />

          <div className="absolute -top-4 right-4 rounded-xl bg-white px-4 py-2 shadow-lg">
            <p className="text-xs font-semibold text-stone-900">ARABICA</p>
            <p className="text-[10px] text-stone-500">Hand-picked beans</p>
          </div>

          <div className="absolute -bottom-4 left-4 rounded-xl bg-white px-4 py-3 shadow-lg">
            <p className="text-[10px] text-stone-400">Single Origin</p>
            <p className="text-xs font-semibold text-stone-900">
              Ethiopia Yirgacheffe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}