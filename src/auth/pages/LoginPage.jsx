import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Button, Grid2, Link, TextField, Typography, useForkRef } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks';

export const LoginPage = () => {

  const { status } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "prueba@gmail.com",
    password: '1234567'
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch(checkingAuthentication());
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
  }
  return (

    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        <Grid2 container spacing={4}>
          <Grid2 size={16} sx={{ mt: 2 }}>
            <TextField
              variant='filled'
              label="Correo"
              type="email"
              autoComplete="current-password"
              placeholder='correo@gmail.com'
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid2>
          <Grid2 size={16} sx={{ mt: 2 }}>
            <TextField
              variant='filled'
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              placeholder='contraseña'
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }} >
            <Button
              disabled={isAuthenticating}
              type="submit"
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
              <Typography variant='button' sx={{ ml: 1, color:'#031716', fontSize:'18px' }} > Login </Typography>
            </Button>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Button
              disabled={isAuthenticating}
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
              onClick={onGoogleSignIn}>
              <Google variant />
              <Typography variant='button' sx={{ ml: 1, color:'#031716', fontSize:'18px' }} > Google </Typography>
            </Button>
          </Grid2>

        </Grid2>

        <Grid2 container direction='row' justifyContent='end'>
          <Link component={RouterLink} color='inherit' underline="hover" to="/auth/register">
            Crear nueva cuenta
          </Link>
        </Grid2>

      </form>
    </AuthLayout>

  )
}
