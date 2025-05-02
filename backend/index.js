import express from "express";
import dotenv from "dotenv";
import { authMiddleware } from "./auth.middleware.js";
const app = express();
const port = 3000;
import mongoose from "mongoose";
app.use(express.json());
dotenv.config();
import cors from "cors";
import Contact from "./models/contactModel.js";
import Lesson from "./models/LessonModel.js";

import { generateTokens } from "./token.js";
mongoose
  .connect("mongodb://localhost:27017/node-mongodb-crud")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
app.use(cors());

app.post("/contact", async (req, res) => {
  console.log("asdzuasgd");
  if (
    !req.body ||
    !req.body.name ||
    !req.body.email ||
    !req.body.text ||
    !isValidEmail(req.body.email)
  ) {
    return res.status(400).send("data is invalid");
  }

  const contact = new Contact(req.body);
  let myUser = await contact.save();
  res.send(myUser);
});

app.post("/lesson", authMiddleware, async (req, res) => {
  if (!req.body || !req.body.title || !req.body.text) {
    return res.status(400).send("data is invalid");
  }
  const lesson = new Lesson(req.body);
  let myLesson = await lesson.save();
  res.send(myLesson);
});

app.get("/lesson", async (req, res) => {
  const lessons = await Lesson.find();
  res.send(lessons);
});

app.get("/contact", authMiddleware, async (req, res) => {
  const contacts = await Contact.find();
  if (!contacts) {
    return res.status(400).send("token is invalid");
  }
  res.send(contacts);
});

app.post("/login", async (req, res) => {
  console.log("login");
  if (!req.body || !req.body.email || !req.body.password) {
    return res.status(400).send("data is invalid");
  }
  if (
    req.body.email != "ghazaryanhayarpi-2@aspu.am" ||
    req.body.password != "12340"
  ) {
    return res.status(400).send("email or password is invalid");
  }
  let token = await generateTokens(req.body.email);
  res.send(token);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
