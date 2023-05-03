import React, { useEffect, useRef, useState } from "react";
// import styles from "./Chat.module.css";
import Contacts from "../../components/Contacts";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Welcome from "../../components/Welcome";
import ChatContainer from "../../components/ChatContainer";


export default function Chat() {
    const navigate = useNavigate()

    //aca decimos que si no tiene nada el localstorage, salga del chat
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
height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
  `
