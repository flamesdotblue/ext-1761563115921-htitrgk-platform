import { useMemo } from 'react';
import { Gauge, Image as ImageIcon } from 'lucide-react';

export default function PreviewPanel({ result }) {
  const scoreColor = useMemo(() => {
    const s = result?.score ?? 0;
    if (s >= 85) return 'text-emerald-400';
    if (s >= 70) return 'text-yellow-300';
    return 'text-red-400';
  }, [result]);

  return (
    <section className="grid lg:grid-cols-2 gap-8 items-start">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <h3 className="text-lg font-semibold">Preview</h3>
        <p className="text-sm text-white/70">9:16 short with captions, emojis, and music.</p>
        <div className="mt-4 aspect-[9/16] w-full rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-600/40 via-pink-600/40 to-orange-500/40 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <ImageIcon className="mx-auto h-10 w-10 text-white/80" />
              <p className="mt-2 text-white/80 text-sm">Video preview placeholder</p>
            </div>
          </div>
          {/* Captions overlay sample */}
          <div className="absolute bottom-3 left-3 right-3 space-y-1">
            <CaptionChip text={result ? (result.subtitles ? 'Auto captions enabled' : 'Captions off') : 'Awaiting input'} />
            {result?.emojis && <CaptionChip text="That was insane 🤯🔥" />}
          </div>
          {/* Watermark-free note */}
          <div className="absolute top-3 right-3 text-[10px] bg-black/60 border border-white/15 px-2 py-1 rounded-full text-white/70">
            No watermark
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-lg font-semibold">AI Title & Description</h3>
          <div className="mt-3 space-y-2">
            <div className="rounded-lg bg-black/60 border border-white/10 p-3">
              <p className="font-medium">{result?.title || 'Your viral YouTube Shorts title will appear here'}</p>
            </div>
            <div className="rounded-lg bg-black/60 border border-white/10 p-3">
              <p className="text-white/80 text-sm leading-relaxed">{result?.description || 'SEO-optimized description with hashtags and keywords will be generated automatically.'}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Gauge className="h-6 w-6 text-white/70" />
            <div>
              <p className="text-sm text-white/70">Viral potential</p>
              <p className={`text-2xl font-bold ${scoreColor}`}>{result?.score ?? '--'}<span className="text-white/60 text-base">/100</span></p>
            </div>
          </div>
          <div className="text-right text-sm text-white/60">
            <p>Based on visual energy and watch-time heuristics</p>
            <p className="text-white/50">Personality: {labelFromValue(result?.personality)}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-lg font-semibold">Thumbnail</h3>
          <p className="text-sm text-white/70">Auto-picked frame with bold text overlay</p>
          <div className="mt-3 aspect-[16/9] w-full rounded-lg overflow-hidden border border-white/10 bg-gradient-to-r from-fuchsia-600/40 to-cyan-500/40 relative">
            <div className="absolute inset-0 flex items-end p-4">
              <div className="bg-black/60 px-3 py-2 rounded-md border border-white/10">
                <p className="font-extrabold text-lg tracking-tight">{result?.thumbnailFrameText || 'Best Frame Selected'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaptionChip({ text }) {
  return (
    <div className="inline-flex max-w-full items-center gap-2 rounded-md bg-black/70 px-2.5 py-1.5 border border-white/10">
      <span className="text-[11px] font-semibold tracking-wide">{text}</span>
    </div>
  );
}

function labelFromValue(v) {
  if (!v) return 'None';
  const map = {
    none: 'None',
    stewie: 'Stewie Griffin',
    ishowspeed: 'iShowSpeed',
    ronaldo: 'Ronaldo',
    custom: 'Custom Voice',
  };
  return map[v] ?? 'None';
}
