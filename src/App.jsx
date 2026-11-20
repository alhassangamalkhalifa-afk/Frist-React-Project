import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-[#fffaf5] font-sans">
      <Nav />
      <Hero />
      <Features />
    </div>
  );
}