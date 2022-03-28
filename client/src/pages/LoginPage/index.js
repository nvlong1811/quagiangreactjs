import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import { useHistory } from 'react-router-dom'


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.facebook.com/pvml.long/">
                Qua Giang App
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function LoginPage() {
	const history = useHistory()
    const [data, setData] = React.useState(
        {email: '', password: ''}
    )

    async function LoginUser(event) {
		event.preventDefault()
		const response = await fetch('https://qua-giang-app.herokuapp.com/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		const res = await response.json()

		if (res.user) {
			localStorage.setItem('token', res.user)
			window.location.href = '/'   
		} else {
			alert(res.error)
		}
	}
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                    <Avatar
                        sx={{
                            m: 1,
                            bgcolor: 'secondary.main'
                        }}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Đăng nhập Quá Giang App!
                    </Typography>
                    <form onSubmit={LoginUser}>
                    <Grid container="container" spacing={2}>
                        <Grid item="item" xs={12}>
                            <TextField
                                required="required"
                                fullWidth="fullWidth"
                                label="Email"
                                type="email"
                                autoComplete="email"
                                value={data.email}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        email: e.target.value
                                    })
                                }}/>
                        </Grid>
                        <Grid item="item" xs={12}>
                            <TextField
                                required="required"
                                fullWidth="fullWidth"
                                label="Password"
                                type="password"
                                autoComplete="new-password"
                                value={data.password}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        password: e.target.value
                                    })
                                }}/>
                        </Grid>
                        <Grid item="item" xs={12}>
                            <FormControlLabel
                                control={<Checkbox value = "allowExtraEmails" color = "primary" />}
                                label="Ghi nhớ đăng nhập"/>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth="fullWidth"
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2
                        }}>
                        Đăng nhập ngay
                    </Button>
                    </form>
                    <Grid container="container" justifyContent="flex-end">
                        <Grid item="item">
                            <Link href="./register" variant="body2">
                                Chưa có tài khoản? Đăng kí ngay
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                <Copyright sx={{
                        mt: 5
                    }}/>
            </Container>
        </ThemeProvider>
    );
}