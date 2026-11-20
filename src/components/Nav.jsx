export default function Nav() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7a3e12] text-xs font-bold text-white">
          ☕
        </span>
        <span className="font-bold text-stone-900">Koffea</span>
      </div>

      <nav className="hidden items-center gap-6 text-xs text-stone-500 md:flex">
        <a href="#home" className="font-medium text-stone-900">
          Home
        </a>
        <a href="#features">
          Features
        </a>
        <a href="#">
          Our Story
        </a>
        <a href="#">
          Menu
        </a>
        <a href="#">
          Contact
        </a>
      </nav>

      <button className="rounded-full bg-[#7a3e12] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#5e2f0d]">
        Order Now
      </button>

    </header>
  );
}