import React, { useEffect, useRef, useState } from "react";
// import styles from "./Chat.module.css";
import Contacts from "../../components/Contacts";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Welcome from "../../components/Welcome";
import ChatContainer from "../../components/ChatContainer";


export default function Chat() {
    const navigate = useNavigate()

    //aca decimos que si no tiene nada el localstorage, salga del chat, si no guardo el usuario logeado en un estado local
    useEffect(() => {
        if (!localStorage.getItem("user")) {
            navigate("/");
        }

    }, [navigate])

    return (
        <Container>
            <div className="row">
                <div className="container">
                    <Contacts />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
gap: 1rem;
.container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    height: 94vh;
    width: 94vw;
}
`
