import { useMemo, useState } from 'react';
import { Play, Wand2, Music, Upload, Zap } from 'lucide-react';

const personalities = [
  { label: 'None', value: 'none' },
  { label: 'Stewie Griffin', value: 'stewie' },
  { label: 'iShowSpeed', value: 'ishowspeed' },
  { label: 'Ronaldo', value: 'ronaldo' },
  { label: 'Custom Voice Clone', value: 'custom' },
];

const musicStyles = [
  { label: 'Trending', value: 'trending' },
  { label: 'Phonk', value: 'phonk' },
  { label: 'Trap', value: 'trap' },
  { label: 'Lofi', value: 'lofi' },
];

export default function PipelineForm({ onGenerate }) {
  const [url, setUrl] = useState('');
  const [personality, setPersonality] = useState('none');
  const [style, setStyle] = useState('trending');
  const [subtitles, setSubtitles] = useState(true);
  const [emojis, setEmojis] = useState(true);
  const [transitions, setTransitions] = useState(true);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const disabled = useMemo(() => !url || loading, [url, loading]);

  const simulatePipeline = async () => {
    setLoading(true);
    setProgress(5);
    // Simulate staged progress
    const steps = [15, 35, 55, 75, 90, 100];
    for (const p of steps) {
      await new Promise((r) => setTimeout(r, 350));
      setProgress(p);
    }

    // Mock AI outputs
    const mockTitle = 'He couldn\'t believe this clutch moment 🤯 #shorts';
    const mockDescription = 'AI-generated highlight from your link — auto captions, emojis, and music added. Perfect 9:16 export for YouTube Shorts.';
    const mockScore = Math.round(72 + Math.random() * 25);

    const result = {
      sourceUrl: url,
      title: mockTitle,
      description: mockDescription,
      score: mockScore > 100 ? 100 : mockScore,
      personality,
      style,
      subtitles,
      emojis,
      transitions,
      // These would be generated media URLs in a full implementation
      videoUrl: '',
      thumbnailFrameText: 'Viral Moment',
    };

    onGenerate?.(result);
    setLoading(false);
    setProgress(0);
  };

  return (
    <section id="pipeline" className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Turn any link into a viral Short</h2>
          <p className="mt-1 text-white/70 text-sm">We detect highlights, crop to 9:16, add auto-subtitles, emojis, music, and captions — fully automated.</p>
        </div>
        <Wand2 className="h-6 w-6 text-white/60" />
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <label className="block text-sm font-medium text-white/80">Video link</label>
          <div className="flex gap-3">
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste YouTube, TikTok, Twitch, or Twitter link"
              className="w-full rounded-lg bg-black/60 border border-white/15 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
              type="url"
            />
            <button
              onClick={simulatePipeline}
              disabled={disabled}
              className="inline-flex items-center whitespace-nowrap gap-2 rounded-lg bg-white text-black px-4 py-3 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play className="h-4 w-4" />
              Generate
            </button>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">Personality add-on</label>
              <select
                value={personality}
                onChange={(e) => setPersonality(e.target.value)}
                className="w-full rounded-lg bg-black/60 border border-white/15 px-3 py-2"
              >
                {personalities.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Music style</label>
              <div className="flex items-center gap-2">
                <Music className="h-4 w-4 text-white/60" />
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full rounded-lg bg-black/60 border border-white/15 px-3 py-2"
                >
                  {musicStyles.map((m) => (
                    <option key={m.value} value={m.value}>{m.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Style toggles</label>
              <div className="flex items-center gap-3">
                <Toggle checked={subtitles} onChange={setSubtitles} label="Subtitles" />
                <Toggle checked={emojis} onChange={setEmojis} label="Emojis" />
                <Toggle checked={transitions} onChange={setTransitions} label="Transitions" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="rounded-xl border border-white/10 bg-black/60 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70">Pipeline status</span>
              {loading ? <Zap className="h-4 w-4 text-yellow-300" /> : <Upload className="h-4 w-4 text-white/60" />}
            </div>
            <div className="mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-white transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-white/60">
              {loading ? `Processing… ${progress}%` : 'Paste a link and hit Generate to begin.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Toggle({ checked, onChange, label }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm border ${
        checked ? 'bg-white text-black border-white' : 'bg-black/50 text-white/80 border-white/20'
      }`}
    >
      <span
        className={`inline-block h-2 w-2 rounded-full ${checked ? 'bg-green-500' : 'bg-white/40'}`}
      />
      {label}
    </button>
  );
}
