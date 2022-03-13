import React, { useState } from "react";
import CarrinhoProvider from "../../components/context/Carrinho";
import Navbar from "../../components/Navbar";
import { FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import LoadingButton from '@mui/lab/LoadingButton';
import Logo from '../../assets/img/hamburger-icon.svg'
import './index.css'

export default function Login() {

    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [loading, setLoading] = useState(false);

    function handleClick() {
        setLoading(true);
    }

    return (
        <CarrinhoProvider>
            <Navbar></Navbar>
            <Grid sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: 'calc(100vh - 65px)' }}>
                <img src={Logo} alt="Logo FoodHouse" className='imgLogo' />
                <TextField className="input"
                    id="input-with-icon-textfield"
                    label="Usuario"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
                <FormControl className="input" variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <LoadingButton
                    className="input"
                    sx={{ marginTop: '10px' }}
                    onClick={handleClick}
                    loading={loading}
                    loadingIndicator="Carregando..."
                    variant="outlined"
                >
                    Entrar
                </LoadingButton>
            </Grid>
        </CarrinhoProvider>
    )
}