import { NoteType } from "@/app/_lib/types/note-type";
import NoteForm from "./NoteForm";
import { getNoteByIdAction } from "@/app/_data/notes/get-note-by-id";

export default async function NoteFormContainer({ userId, noteId }: { userId: string, noteId?: string }) {

  if (noteId) {

    const note = await getNoteByIdAction(noteId) as NoteType
    return <NoteForm userId={userId} note={note} />

  }
  else {

    return <NoteForm userId={userId} />

  }
}
