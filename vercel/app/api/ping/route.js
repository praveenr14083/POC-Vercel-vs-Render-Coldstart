import axios from "axios";

export async function GET() {
  const start = Date.now();

  // Fetch todos using Axios
  const { data: todos } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=3"
  );

  return new Response(
    JSON.stringify({
      source: "Next.js Serverless (Vercel)",
      timestamp: new Date().toISOString(),
      todos, // axios result
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
