import app from "./app.js";
import { port } from "./config.js";

app.listen(port, '127.0.0.1', () => {
  console.log(`Server running on port ${port}`);
});
