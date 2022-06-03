import express from "express";
import cors from "cors";
import helmet from "helmet";
import { Prisma } from "@prisma/client";
import { createNote, getAllUsers, getNotesForUser, upsertUser } from "./models";

const app = express();

app.use(helmet());
app.use(cors());
cors({ credentials: true, origin: true })

app.use(express.json());

app.get("/notes/:id", async (req, res) => {
  const { id } = req.params;

  console.log(req.params)

  if (!id) {
    return res.json({ data: { message: "no user id provided" }, error: true })
  }

  const notes = await getNotesForUser(id)

  res.json({ data: notes, error: false })
})

app.post("/note", async (req, res) => {
  console.log(req.body)
  const { id, name, note } = req.body;

  const newUser: Prisma.UserUncheckedCreateInput = { name, id }

  await upsertUser(newUser);

  const savedNote = await createNote({ note, id });

  res.json({ savedNote })

})

app.get("/users", async (req, res) => {
  const allUsers = await getAllUsers();
  res.json({ allUsers })
})

export default app;
