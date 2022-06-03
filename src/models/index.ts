import { Prisma } from "@prisma/client";

import { prisma } from "../lib/prisma"

export async function upsertUser(data: Prisma.UserUncheckedCreateInput) {
  const user = await prisma.user.upsert({
    where: {
      id: data.id
    },
    update: {
      name: data.name
    },
    create: {
      id: data.id,
      name: data.name
    }
  })

  return user;
}

export async function createNote(data: any) {
  const user = await prisma.note.create({
    data: {
      userId: data.id,
      note: data.note
    }
  })

  return user;
}

export async function getAllUsers() {
  const allUsers = await prisma.user.findMany();
  return allUsers;
}

export async function getNotesForUser(id: number) {
  const allNotes = await prisma.note.findMany({
    where: { userId: id }
  });
  return allNotes;
}