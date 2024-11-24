import { Grid2, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = '' }) => {
  return (

    <Grid2
      container
      rowSpacing={1}
      //direction="column"
      alignItems="center"
      justifyContent="center"
      color="#E9BCB9"
      sx={{
        '& .MuiInputBase-input': {
          color: '#E9BCB9',
        },
      '& .MuiInputLabel-root': {
        color: '#E9BCB9', // Color del label inicial
      },
      '& .Mui-focused': {
        color: '#E9BCB9',
      },
        minHeight: '100vh',
        backgroundColor: 'primary.main', 
        padding: 4
      }}
    >
      <Grid2
        className='box-shadow'
        xs={8}
        sx={{
          width: { md: 550 },
          backgroundColor: '#1B1931',
          color: '#E9BCB9',
          padding: 6,
          borderRadius: 5
        }}>

        <Typography
          variant="h4"
          sx={{ mb: 3, textAlign: "center" }}>
          {title}
        </Typography>

        {children}

      </Grid2>
    </Grid2>

  )
}
