// Posisi baru: app/page.tsx
import DevCorner from "@/components/DevCorner";
import NewsCard from "@/components/NewsCard";

async function getNews() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/news`, { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function Home() {
  const newsList = await getNews();

  return (
    <main className="min-h-screen bg-[#0B0F19] text-gray-100 selection:bg-green-500 selection:text-white pb-20">
      <nav className="sticky top-0 z-50 bg-[#0B0F19]/70 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black tracking-tight">
            <span className="text-white">Indo</span>
            <span className="text-green-500">sawit</span>
            <span className="text-gray-400">.Net</span>
          </h1>
          <p className="text-[10px] text-gray-400 tracking-widest uppercase mt-1">Aggregator Kabar Terkini</p>
        </div>
        <div className="hidden md:block px-4 py-2 bg-white/5 border border-white/10 rounded-full">
           <span className="text-xs text-gray-400">Status Server: <span className="text-green-400 font-bold">Optimal</span></span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {newsList.map((news: any, idx: number) => (
              <NewsCard key={idx} news={news} />
            ))}
          </div>
        </div>
        <aside><DevCorner /></aside>
      </div>
    </main>
  );
    }
