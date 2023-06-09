
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
// import { NothingSelectedView } from "../views/NothingSelectedView"

export const JournalPage = () => {
  
  return (
    <>
    <JournalLayout> 
    {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nesciunt. Assumenda tenetur itaque aliquam doloremque vero vitae impedit, ratione quisquam inventore, aperiam voluptates minus illum laboriosam eaque? Mollitia, eos sapiente!</Typography>
     */}
    {/* NothinSelected */}
   {/* cuando no hay una nota selecionada exporto los colores del view */}
    {/* <NothingSelectedView/> */}

    {/* NoteView */}
    <NoteView/>
    </JournalLayout>
    </>
      )
}
