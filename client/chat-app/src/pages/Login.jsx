/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { loginRouter } from '../utils/APIroutes';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Login() {
const navigate = useNavigate();
//manejo de estado local
const [input, setInput] = useState({
    name: "",
    password: "",
});
console.log(input)

//reutilized el diseño de Toastify.
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
    const {name, password} = input;
    if(password === ""){
      toast.error("Name and password ir required", toastifyOptions )
      return false;
    }
    else if(name.length === ""){
      toast.error("Name and password ir required", toastifyOptions )
      return false;
    }
    return true;
};

const handleSubmit = async (event) =>{
    event.preventDefault();
    if(handleValidation()){
        const {password, name} = input;
        const {data} = await axios.post(loginRouter,{
                name,
                password,
    });
    console.log(data)
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

useEffect(() =>{
    if(localStorage.getItem('chat-app-user')){
        navigate('/')
    }
}, [])

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
                min = "3"
                />
                <input 
                type="password"
                placeholder='Insert your password'
                name='password'
                onChange={(e) => handleChange(e)}
                />
                <button type='submit'>Login In</button>
                <span>
                Don't have an account ? <Link to="/register">Register</Link>
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
  width: 100%;
  border-color: #3498db;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  box-sizing: border-box;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: transparent;
  border-radius: 0.6em;
  color: white;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  -webkit-align-self: center;
      -ms-flex-item-align: center;
          align-self: center;
  font-size: 1rem;
  line-height: 1;
  margin: 20px;
  padding: 1rem 2.8em;
  text-align: center;
  text-transform: uppercase;
  &:hover{
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
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

export default Login;