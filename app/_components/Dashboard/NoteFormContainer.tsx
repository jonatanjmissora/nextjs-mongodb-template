import { NoteType } from "@/app/_lib/types/note-type";
import NoteForm from "./NoteForm";
import { getNoteByIdAction } from "@/app/_data/notes/get-note-by-id";
import authUser from "@/app/_data/auth/auth-user";

export default async function NoteFormContainer( { noteId }: { noteId?: string }) {

  
  if (noteId) {
    const { user, note } = await getNoteByIdAction(noteId)

    return <NoteForm userId={user.id} note={note} />

  }
  else {

    const user = await authUser()

    return <NoteForm userId={user.id} />

  }
}
