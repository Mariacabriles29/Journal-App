
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
// import { NothingSelectedView } from "../views/NothingSelectedView"
import { AddOutlined } from "@mui/icons-material"

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
    <IconButton
    size="large"
    sx={{
      color:'white',
      backgroundColor:'error.main',
      ':hover':{backgroundColor:'error.main',opacity:0.9},
      position:'fixed',
      right:50,
      bottom:50
   
    }}
    
    >
      <AddOutlined sx={{fontSize:30}}/>

    </IconButton>
    </JournalLayout>
    </>
      )
}
