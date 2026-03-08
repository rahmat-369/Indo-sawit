// components/DevCorner.tsx
import { DEV_INFO } from '@/lib/constants';

export default function DevCorner() {
  return (
    <div className="sticky top-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
      <div className="flex items-center gap-4 mb-6">
        <img src={DEV_INFO.avatar} alt={DEV_INFO.name} className="w-16 h-16 rounded-full border-2 border-green-500 object-cover" />
        <div>
          <h2 className="text-lg font-bold text-white">{DEV_INFO.name}</h2>
          <p className="text-xs text-green-400 font-mono">@{DEV_INFO.nickname}</p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-3">Sirkuit Koneksi</h3>
        <div className="flex flex-wrap gap-2">
          <a href={DEV_INFO.links.gh} target="_blank" className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-xs transition">GitHub</a>
          <a href={DEV_INFO.links.ig} target="_blank" className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-xs transition">Instagram</a>
          <a href={DEV_INFO.links.wa} target="_blank" className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-xs transition">WhatsApp</a>
          <a href={DEV_INFO.links.tt} target="_blank" className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-xs transition">TikTok</a>
          <a href={DEV_INFO.links.tele} target="_blank" className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-xs transition">Telegram</a>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-3">Proyek Lainnya</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          {DEV_INFO.projects.map((proj, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> {proj}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-white/10 text-center">
        {/* Credit Nexa dibikin kecil */}
        <p className="text-[10px] text-gray-600">
          Data powered by NexRay API Endpoint
        </p>
      </div>
    </div>
  );
      }
