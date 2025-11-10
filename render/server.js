import express from "express";

const app = express();

app.get("/ping", (req, res) => {
  const start = Date.now();

  res.json({
    source: "Node.js + Express (Render)",
    timestamp: new Date().toISOString(),
    coldStartTest: true,
    responseTimeMs: Date.now() - start,
  });
});

const port = 5000;
app.listen(port, () => console.log("✅ Server running on port", port));
