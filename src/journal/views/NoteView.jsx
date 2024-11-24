import { Button, Grid2, TextField, Typography } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    
    <Grid2 container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb:1 }}>
        <Grid2>
            <Typography fontSize={ 39 }>06 de Noviembre, 2024</Typography>
        </Grid2>
        <Grid2>
            <Button color="secondary.main" sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30 , mr: 1}}/>
                Guardar
            </Button>
        </Grid2>
        <Grid2 size={ 12 }>
            <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un Título"
                label="Título"
                sx={{ border: 'none', mb: 1 }} 
            />

            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió en el día de hoy?"
                minRows={ 5 } 
            />
        </Grid2>

        {/*Imagen Gallery*/}
        <ImageGallery />

    </Grid2>

  )
}
