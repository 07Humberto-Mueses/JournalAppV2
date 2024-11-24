import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";


export const JournalPage = () => {
  return (

    <JournalLayout>
    {/*<Typography>
      Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos
    </Typography>*/}

      <NothingSelectedView />

      {/*<NoteView />*/}

        <IconButton
          size="large"
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': {backgroundColor:'error.main', opacity: 0.9},
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >

          <AddOutlined sx={{ fontSize: 30 }} />

         </IconButton>

    </JournalLayout>
  )
}
