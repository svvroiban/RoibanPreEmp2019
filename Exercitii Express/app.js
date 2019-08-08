const express = require("express");
const http = require("http");
const app = express();
const router = express.Router();

router.get("/user", (req, res) => {
  res.status(200).json({ name: "Ted", email: "ted@mail.com" });
});
app.use("/", router);

const server = http.createServer(app);
server.listen(5000);
