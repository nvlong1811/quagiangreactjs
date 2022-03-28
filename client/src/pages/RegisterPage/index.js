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

export default function RegisterPage() {
	const history = useHistory()
    const topLocation = [ {
      label: 'Đà Nẵng',
      id: 'DN'
  }, {
      label: 'Hà Nội',
      id: 'HN'
  }, {
      label: 'Hồ Chí Minh',
      id: 'HCM'
  }]
    const [data, setData] = React.useState(
        {name: '', email: '', location: topLocation[0], password: ''}
    )

    async function registerUser(event) {
		event.preventDefault()
		const response = await fetch('https://qua-giang-app.herokuapp.com/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		const res = await response.json()

		if (res.status === 'ok') {
            alert('Đăng kí thành công')
			history.push('/login')
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
                        Tham gia Quá Giang App ngay nào!
                    </Typography>
                    <form onSubmit={registerUser}>
                    <Grid container="container" spacing={2}>
                        <Grid item="item" xs={12}>
                            <TextField
                                autoComplete="given-name"
                                required="required"
                                fullWidth="fullWidth"
                                label="Tên"
                                autoFocus="autoFocus"
                                value={data.name}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        name: e.target.value
                                    })
                                }}/>
                        </Grid>
                        <Grid item="item" xs={12}>
                            <Autocomplete
                                value={data.location}
                                onChange={(event, newValue) => {
                                  setData({
                                    ...data,
                                    location: newValue
                                })
                                }}
                                isOptionEqualToValue={(option, value) => option.id === value.id}
                                options={topLocation}
                                renderInput={(params) => <TextField {...params} label="Vị trí"/>
                                }
                            />
                        </Grid>
                        <Grid item="item" xs={12}>
                            <TextField
                                required="required"
                                fullWidth="fullWidth"
                                label="Email"
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
                                label="Tôi đồng ý với điều khoản và điều kiện của Quá Giang App"/>
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
                        Đăng kí ngay
                    </Button>
                    </form>
                    <Grid container="container" justifyContent="flex-end">
                        <Grid item="item">
                            <Link href="./login" variant="body2">
                                Đã có tài khoản? Đăng nhập ngay
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