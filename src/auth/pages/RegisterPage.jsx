
import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startCreatingWhithEmailPassword } from '../../store/auth/thunks';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo dede tener @'],
  password: [(value) => value.length>=7, 'La contraseña debe tener mas de 7 caracteres'],
  displayName: [(value) => value.length>=1, 'Nombre obligatorio'],
}

export const RegisterPage = () => {
  
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    onResetForm, formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    onResetForm();
    
    if(!isFormValid) return;
    dispatch(startCreatingWhithEmailPassword(formState));
    
  }

  return (
    
    <AuthLayout title='Registro - Crear Cuenta'>
      <form onSubmit={onSubmit}>
              <Grid2 container spacing={2}>
              <Grid2 size={ 12 } sx={{mt:2}}>
                  <TextField
                    variant='filled'
                    label="Nombre Completo"
                    type="text"
                    autoComplete="off"
                    placeholder='Digita tu nombre'
                    fullWidth
                    name="displayName"
                    value={displayName}
                    onChange={onInputChange}
                    error={!!displayNameValid && formSubmitted}
                    helperText={displayNameValid}
                  />
                </Grid2>
                <Grid2 size={ 12 } >
                  <TextField
                    variant='filled'
                    label="Correo"
                    type="email"
                    autoComplete="off"
                    placeholder='correo@gmail.com'
                    fullWidth
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    error={!!emailValid && formSubmitted}
                    helperText={emailValid}
                  />
                </Grid2>
                <Grid2 size={ 12 } sx={{mt:2}}>
                  <TextField
                    variant='filled'
                    label="Contraseña"
                    type="password"
                    autoComplete="off"
                    placeholder='contraseña'
                    fullWidth
                    name="password"
                    value={password}
                    onChange={onInputChange}
                    error={!!passwordValid && formSubmitted}
                    helperText={passwordValid}
                  />
                </Grid2>

                   <Grid2  size={{ xs:12 }} >
                    <Button 
                      type='submit'
                      variant="contained" 
                      color='general'
                      fullWidth
                      sx={{
                        borderRadius: '10px',
                        transition: 'transform 0.3s ease, background-color 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                        '&:active': {
                          transform: 'scale(0.95)',
                        },
                      }}
                      >
                      <Typography variant='button' sx={{ ml: 1, color:'#031716', fontSize:'18px' }} > Crear Cuenta </Typography>
                    </Button>
                  </Grid2>
                  
              </Grid2>

              <Grid2 container direction='row' justifyContent='end'>
                <Typography sx={{ mr:1 }}>¿Ya tienes cuenta?</Typography>
                <Link component={ RouterLink } color='inherit' underline="hover" to="/auth/login">
                Ingresar
                </Link>    
              </Grid2>

            </form>
    </AuthLayout>
   
  )
}
