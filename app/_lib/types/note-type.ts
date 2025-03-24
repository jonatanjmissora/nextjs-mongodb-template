import { ObjectId } from "mongodb"

export type NoteType = {
    _id: ObjectId;
    title: string;
    content: string;
    author: string;
    pinned: boolean;
}