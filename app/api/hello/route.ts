export const runtime = "edge";

export async function GET() {
  return new Response(JSON.stringify({ message: '你好，世界！' }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
} 