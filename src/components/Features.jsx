import { Wand2, Music, Type, Zap } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'Highlight detection',
    desc: 'Finds peak emotion and hype moments using scene and audio intensity.',
  },
  {
    icon: Type,
    title: 'Auto captions + emojis',
    desc: 'Transcribes speech, styles captions with viral fonts, and adds fitting emojis.',
  },
  {
    icon: Music,
    title: 'Trending music & phonk',
    desc: 'Auto-selects background tracks with beats that match the moment.',
  },
  {
    icon: Zap,
    title: 'One-click export',
    desc: 'Outputs HD 9:16 MP4, watermark-free, ready for YouTube Shorts.',
  },
];

export default function Features() {
  return (
    <section id="features" className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="max-w-2xl">
        <h3 className="text-2xl font-semibold">Everything you need for viral Shorts</h3>
        <p className="mt-1 text-white/70 text-sm">From link to upload-ready — titles, description, thumbnail, music, captions, and more.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/50 p-5 hover:bg-black/60 transition">
      <Icon className="h-6 w-6 text-white/70" />
      <h4 className="mt-3 font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
    </div>
  );
}
