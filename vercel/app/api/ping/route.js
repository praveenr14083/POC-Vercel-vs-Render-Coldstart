export async function GET() {
  const start = Date.now();

  return new Response(
    JSON.stringify({
      source: "Next.js Serverless (Vercel)",
      timestamp: new Date().toISOString(),
      coldStartTest: true,
      responseTimeMs: Date.now() - start,
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
