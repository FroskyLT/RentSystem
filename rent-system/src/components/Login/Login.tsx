import * as React from 'react';
import styles from './login.module.scss';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';

const theme = createTheme();

interface ILoginProps {
    loggedIn: boolean;
    login: (email: string, password: string) => void;
}

export const Login = (props: ILoginProps) => {

    if (props.loggedIn)
        return <Navigate to="/" replace />;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // console.log({ email: data.get('email'), password: data.get('password') });
        props.login(data.get('email') as string, data.get('password') as string);
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container className={styles.login}>
                <Grid item xs={7}>
                    <img
                        alt="logo"
                        src="https://www.freevector.com/uploads/vector/preview/30073/Fun-Mountain-Bike.jpg"
                        className={styles.image}
                    />
                </Grid>
                <Grid item xs={5}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Prisijungti
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="El. Paštas"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Slaptažodis"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Prisiminti mane"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Prisijungti
                                </Button>
                            </Box>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Login;