/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { registerRouter } from '../utils/APIroutes';
import { useNavigate } from 'react-router-dom';

function Register() {
const navigate = useNavigate();
//manejo de estado local
const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
});

//reutilizar el diseño de Toastify.
const toastifyOptions = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
}

// eslint-disable-next-line no-unused-vars
const handleValidation = () =>{
    const {name, email, password, confirmPassword} = input;
    if(password !== confirmPassword){
        toast.error("Passwords do not match", toastifyOptions )
        return false;
    }
    else if(name.length<3){
        toast.error("Username is short", toastifyOptions )
        return false;
    }
    else if(password.length<8){
        toast.error("Passwords is short", toastifyOptions )
        return false;
    }
    else if(email === ""){
        toast.error("email is required", toastifyOptions)
        return false;
    }
    return true;
};

//damos un sweetAlert a la creacion del User
const handleSubmit = async (event) =>{
    event.preventDefault();
    if(handleValidation()){
        const {name, email, password} = input;
        const {data} = await axios.post(registerRouter,{
                name,
                email,
                password,
    });
        if(data.status === false){
            toast.error(data.msg, toastifyOptions)
        }
        if(data.status === true){
            localStorage.setItem('chat-app-user', JSON.stringify(data.user));
            navigate('/')
        }
    };
};

//completamos los parametros del estado inicial.
const handleChange = (event) =>{
    event.preventDefault();
    setInput({
        ...input,
        [event.target.name]: event.target.value
    })
};

//formulario propiamente dicho:
    return ( 
        <>
          <FormContainer>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className='brand'>
                  <img src={Logo} alt='Logo'/>
                  <h1>chatapp</h1>
                </div>
                <input 
                type="text"
                placeholder='Insert your name'
                name='name'
                onChange={(e) => handleChange(e)}
                />
                <input 
                type="email"
                placeholder='Insert your email'
                name='email'
                onChange={(e) => handleChange(e)}
                />
                <input 
                type="password"
                placeholder='Insert your password'
                name='password'
                onChange={(e) => handleChange(e)}
                />
                <input 
                type="password"
                placeholder='Confirm Password'
                name='confirmPassword'
                onChange={(e) => handleChange(e)}
                />
                <button type='submit'>Create User</button>
                <span>
                Already have an account ? <Link to="/login">Login</Link>
                </span>
            </form> 
          </FormContainer>  
          <ToastContainer />
        </>
    );
}

//Le da formato al formulario
const FormContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #131324;
.brand{
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img{
        height: 5rem;
    }
    h1{
        color: white;
        text-transform: uppercase;
    }
}
form{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: #00000076;
    padding: 3rem 5rem;
    border-radius: 9px;
}
input{
    background-color:transparent;
    padding: 1rem;
    color:white;
    border: 0.1rem #144156 solid;
    border-radius: 9px;
    width: 100%;
    font-size: 15px;
    &:focus{
        outline: none;
        border: 0.1rem #144390 solid;
    }
}
button{
    background-color: #144390;
    color:white;
    border: none;
    width: 100%;
    font-size: 15px;
    border-radius: 9px;
    padding:1rem 0.2rem;
    cursor: pointer;
    transition: 0.5s;
&:hover{
    background-color: #144156;
}
}
span{
    color:white;
    text-transform: uppercase;
}
a{
    text-decoration: none;
    font-weight: bold;
    color: #12456787;
}
`;

export default Register;