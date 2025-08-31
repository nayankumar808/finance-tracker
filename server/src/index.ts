import express, { Express } from "express";
import mongoose from "mongoose";

const app: Express = express();

const port = process.env.PORT || 3001;
app.use(express.json());

const mongoURI: string =
  "mongodb+srv://nayans808:efKmiUkgfXrktZWU@finance-tracker.fgfzbq0.mongodb.net/?retryWrites=true&w=majority&appName=Finance-tracker";
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to mongodb!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log("Server running on the Port", port);
});
