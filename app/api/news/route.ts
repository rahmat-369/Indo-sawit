// app/api/news/route.ts
import { NextResponse } from 'next/server';
import { NEWS_APIS } from '@/lib/constants';

export async function GET() {
  try {
    const fetchPromises = NEWS_APIS.map(async (api) => {
      try {
        const res = await fetch(api.url, { next: { revalidate: 300 } }); // Cache 5 menit
        const data = await res.json();
        
        return (data.result || []).map((item: any) => ({
          title: item.title || 'Tanpa Judul',
          link: item.link || '#',
          // Handle perbedaan key gambar dari 5 API Nexa
          image: item.image || item.image_thumbnail || item.imageUrl || 'https://via.placeholder.com/500x300?text=No+Image',
          source: api.name,
          color: api.color,
          // Handle perbedaan key waktu
          time: item.date || item.timestamp || item.time || 'Baru saja',
        }));
      } catch (err) {
        return []; // Skip kalau ada 1 API yang down
      }
    });

    const allResults = await Promise.all(fetchPromises);
    // Gabungin array dan acak urutannya biar natural
    const mergedNews = allResults.flat().sort(() => Math.random() - 0.5);

    return NextResponse.json(mergedNews);
  } catch (error) {
    return NextResponse.json({ error: 'Gagal mengambil berita' }, { status: 500 });
  }
          }
