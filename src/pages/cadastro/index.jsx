import React, { useState } from "react";
import CarrinhoProvider from "../../components/context/Carrinho";
import Navbar from "../../components/Navbar";
import { FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import LoadingButton from '@mui/lab/LoadingButton';
import Logo from '../../assets/img/hamburger-icon.svg'
import { Link } from "react-router-dom";
import '../login/index.css'

export default function Cadastro() {

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

    const [values2, setValues2] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange2 = (prop) => (event) => {
        setValues2({ ...values2, [prop]: event.target.value });
    };

    const handleClickShowPassword2 = () => {
        setValues2({
            ...values2,
            showPassword: !values2.showPassword,
        });
    };

    const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };


    const [loading, setLoading] = useState(false);

    function handleClick() {
        if (values.password && values2.password !== '' && values.password === values2.password) {
            setLoading(true);
        }
    }

    return (
        <CarrinhoProvider>
            <Navbar></Navbar>
            <Grid sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: 'calc(100vh - 65px)' }}>
                <img src={Logo} alt="Logo FoodHouse" className='imgLogo' />
                <TextField required className="input"
                    id="input-with-icon-textfield"
                    label="Digite um nome de Usuario"
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
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        required
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
                <FormControl className="input" variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Confirme a Senha</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values2.showPassword ? 'text' : 'password'}
                        value={values2.password}
                        onChange={handleChange2('password')}
                        required
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword2}
                                    onMouseDown={handleMouseDownPassword2}
                                >
                                    {values2.showPassword ? <VisibilityOff /> : <Visibility />}
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
                    Cadastrar
                </LoadingButton>
                <Link to='/login'>
                    <p>Já tem uma conta? Entre</p>
                </Link>
            </Grid>
        </CarrinhoProvider>
    )
}