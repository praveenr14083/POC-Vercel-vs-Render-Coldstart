import express from "express";
import axios from "axios";

const app = express();

app.get("/ping", async (req, res) => {
  const start = Date.now();

  try {
    // Fetch todos using Axios
    const { data: todos } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=3"
    );

    res.json({
      source: "Node.js + Express (Render)",
      timestamp: new Date().toISOString(),
      todos,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Failed to fetch todos",
      details: error.message,
    });
  }
});

const port = 5000;
app.listen(port, () => console.log("✅ Server running on port", port));
