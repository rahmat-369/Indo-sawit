// app/api/ai/route.ts
import { NextResponse } from 'next/server';
import { AI_ENDPOINT } from '@/lib/constants';

export async function POST(req: Request) {
  try {
    const { title } = await req.json();
    const prompt = `Berikan ringkasan singkat, padat, dan formal dalam 2-3 kalimat mengenai berita dengan judul berikut: "${title}".`;
    
    const res = await fetch(`${AI_ENDPOINT}?text=${encodeURIComponent(prompt)}`);
    const data = await res.json();

    return NextResponse.json({ summary: data.result });
  } catch (error) {
    return NextResponse.json({ summary: "Maaf, AI sedang sibuk. Silakan coba lagi." }, { status: 500 });
  }
}
