import React, { useEffect, useState } from "react";
// import styles from "./Chat.module.css";
import Contacts from "../../components/Contacts";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Chat() {
    const navigate = useNavigate()
    const [userLogged, setUserLogged] = useState([]);

    //aca decimos que si no tiene nada el localstorage, salga del chat, si no guardo el usuario logeado en un estado local
    useEffect(() => {
        if (!localStorage.getItem("user")) {
            navigate("/");
        } else {
            setUserLogged(JSON.parse(localStorage.getItem('user')))
        }
    }, [navigate])

    return (
        <Container>
            <div className="row">
                <div className="container">
                    <Contacts />
                    <div className="userLogged">
                        <img src={userLogged.img} className="avatar" />
                        <h5>{userLogged.username}</h5>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
height: 100vh;
width: 100vw;
background-color:aliceblue;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
.container{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    .userLogged{
        margin: auto;
        .avatar{
            height: 5vh;
            width: 5vw;
            border-radius: 50px;
        }
    }
}
`
