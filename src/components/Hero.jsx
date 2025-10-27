import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
            Auto-enhanced with 3D social icons
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight">
            ViralShorts.AI
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80">
            Paste any video link. Our AI finds the most hype moments, crops to 9:16, adds emojis, captions, music, and exports a ready-to-upload Short.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#pipeline" className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition">
              <Rocket className="h-4 w-4" />
              Create your Short
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-medium hover:bg-white/10 transition">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
