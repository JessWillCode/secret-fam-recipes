import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [state, setState] = useState({
        username: '',
        password: '',
        error: ''
    });
    const { push } = useHistory();

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post(`https://back-end-recipe.herokuapp.com/api/auth/login`, state)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('role', res.data.role);
            localStorage.setItem('username', res.data.username);
            push('/recipes');
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        push('/register');
    }
    
    return(
        <div>
            <h1>Secret Family Recipe Cookbook</h1>
            <h2>Login to see your recipes!</h2>
            <FormContainer>
                <Label>Username:</Label>
                <Input
                type='text'
                name='username'
                id='username'
                value={state.username}
                onChange={handleChange}
                />
                <Label>Password:</Label>
                  <Input
                type='password'
                name='password'
                id='password'
                value={state.password}
                onChange={handleChange}
                />
                <LoginButton onClick={handleLogin}>Login</LoginButton>
                <p id='error'>{state.error}</p>
            </FormContainer>
            <Button onClick={handleRegister}>Register</Button>
        </div>);
}

export default Login;

const FormContainer = styled.form`
    padding: 1em;
    width: 400px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10%;

    label {
        margin-top: 0.5em;
    }

    input {
        padding: 0.5em;
    }
    
    div { 
        margin: 0.5em 0;
        display:flex;
        justify-content: center;
    }
`

const Button = styled.button`
    width: 50%;
    padding:1em;
    margin-top: 1em;

`
const LoginButton = styled.button`
    width: 10%;
    padding:.5em;
    margin-top: 1em;
    margin-left: 48%;
`