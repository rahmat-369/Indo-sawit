// components/NewsCard.tsx
"use client";
import { useState } from "react";

export default function NewsCard({ news }: { news: any }) {
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAiSummary = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (summary) return; // Kalau udah diringkas, gausah hit API lagi
    setLoading(true);
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: news.title })
      });
      const data = await res.json();
      setSummary(data.summary);
    } catch (err) {
      setSummary("Gagal memuat ringkasan.");
    }
    setLoading(false);
  };

  return (
    <a href={news.link} target="_blank" className="group block bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 shadow-lg relative">
      <div className="relative h-48 overflow-hidden">
        <img src={news.image} alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className={`absolute top-3 left-3 px-3 py-1 text-[10px] font-bold text-white rounded-full ${news.color}`}>
          {news.source}
        </span>
      </div>
      
      <div className="p-5">
        <p className="text-[10px] text-gray-400 mb-2">{news.time}</p>
        <h2 className="text-sm font-semibold text-gray-100 leading-snug group-hover:text-green-400 transition-colors">
          {news.title}
        </h2>
        
        {/* Area AI Summary */}
        <div className="mt-4">
          {!summary ? (
            <button 
              onClick={handleAiSummary}
              className="text-xs px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/40 transition flex items-center gap-1 w-fit"
            >
              {loading ? "Menganalisa..." : "✨ Ringkas via AI"}
            </button>
          ) : (
            <div className="mt-2 p-3 bg-white/10 border border-white/20 rounded-xl text-xs text-gray-300 italic leading-relaxed">
              <span className="font-bold text-green-400 not-italic">AI: </span>
              {summary}
            </div>
          )}
        </div>
      </div>
    </a>
  );
  }
