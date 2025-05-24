import router from "./routes/songs.routes";
import express from "express"
import path from "path";

const app = express()

app.use(express.json())
app.use("/music", express.static(path.join(__dirname, "../public/music")))
app.use("/api", router)

app.listen(3000, () => {
  console.log("Server is running...")
})