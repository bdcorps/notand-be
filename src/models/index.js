"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotesForUser = exports.getAllUsers = exports.createNote = exports.upsertUser = void 0;
const prisma_1 = require("../lib/prisma");
function upsertUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma_1.prisma.user.upsert({
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
        });
        return user;
    });
}
exports.upsertUser = upsertUser;
function createNote(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma_1.prisma.note.create({
            data: {
                userId: data.id,
                note: data.note
            }
        });
        return user;
    });
}
exports.createNote = createNote;
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const allUsers = yield prisma_1.prisma.user.findMany();
        return allUsers;
    });
}
exports.getAllUsers = getAllUsers;
function getNotesForUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const allNotes = yield prisma_1.prisma.note.findMany({
            where: { userId: id }
        });
        return allNotes;
    });
}
exports.getNotesForUser = getNotesForUser;
