// TODO (nanti): validasi body lalu insert ke tabel Supabase.
// Sementara balas 501 supaya form tidak berpura-pura berhasil.
export async function POST() {
  return Response.json({ error: "Not implemented" }, { status: 501 });
}
