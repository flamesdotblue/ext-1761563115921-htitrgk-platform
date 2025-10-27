import { useState } from 'react';
import Hero from './components/Hero';
import PipelineForm from './components/PipelineForm';
import PreviewPanel from './components/PreviewPanel';
import Features from './components/Features';

export default function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <PipelineForm onGenerate={setResult} />
        <PreviewPanel result={result} />
        <Features />
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} ViralShorts.AI — Make every second go viral.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
