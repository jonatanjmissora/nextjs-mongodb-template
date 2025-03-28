import { ObjectId } from "mongodb"

export type NoteType = {
    _id?: ObjectId | string;
    title: string;
    content: string;
    author: string;
    pinned: boolean;
}
