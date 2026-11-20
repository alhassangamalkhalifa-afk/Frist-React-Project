export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16 text-center">
      <span className="text-[10px] font-bold tracking-widest text-[#7a3e12]">
        WHY CHOOSE US
      </span>

      <h2 className="mt-2 text-2xl font-extrabold text-stone-900 md:text-3xl">
        The Standard of Pure Coffee
      </h2>

      <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-stone-500">
        We obsess over every detail, from sourcing to roasting, so every cup is perfect.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl border border-stone-100 bg-white p-5 text-left shadow-sm">
          <span className="text-2xl">🌱</span>
          <h3 className="mt-3 text-sm font-bold text-stone-900">Direct Trade</h3>
          <p className="mt-1 text-xs leading-relaxed text-stone-500">
            100% direct trade with small farms for fair, fresh beans.
          </p>
        </div>

        <div className="rounded-2xl border border-stone-100 bg-white p-5 text-left shadow-sm">
          <span className="text-2xl">🔥</span>
          <h3 className="mt-3 text-sm font-bold text-stone-900">Micro Roasting</h3>
          <p className="mt-1 text-xs leading-relaxed text-stone-500">
            Roasted in small batches to preserve aroma and flavor.
          </p>
        </div>

        <div className="rounded-2xl border border-stone-100 bg-white p-5 text-left shadow-sm">
          <span className="text-2xl">🚚</span>
          <h3 className="mt-3 text-sm font-bold text-stone-900">Express Delivery</h3>
          <p className="mt-1 text-xs leading-relaxed text-stone-500">
            From roaster to your door in under 48 hours, fresh.
          </p>
        </div>

        <div className="rounded-2xl border border-stone-100 bg-white p-5 text-left shadow-sm">
          <span className="text-2xl">♻️</span>
          <h3 className="mt-3 text-sm font-bold text-stone-900">Eco Packaging</h3>
          <p className="mt-1 text-xs leading-relaxed text-stone-500">
            Compostable bags that keep coffee fresh and planet clean.
          </p>
        </div>

      </div>
    </section>
  );
}