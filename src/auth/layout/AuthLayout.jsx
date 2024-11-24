import { Grid2, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = '' }) => {
  return (

    <Grid2
      container
      rowSpacing={1}
      //direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        '& .MuiInputBase-input': {
          color: 'primary.main',
        },
        '& .MuiInputLabel-root': {
          color: 'primary.main',
        },
        '& .Mui-focused': {
          color: 'primary.main',
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
          backgroundColor: 'secondary.main',
          color: 'primary.main',
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
