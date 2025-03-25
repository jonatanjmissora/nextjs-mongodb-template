import { ObjectId } from "mongodb"

export type NewNoteType = {
    title: string;
    content: string;
    author: string;
    pinned: boolean;
}

export type NoteType = NewNoteType & { _id: ObjectId }

export type NoteFixType = {
    _id: string;
    title: string;
    content: string;
    author: string;
    pinned: boolean;
}



