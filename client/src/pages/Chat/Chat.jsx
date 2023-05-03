import React, { useEffect, useRef, useState } from "react";
// import styles from "./Chat.module.css";
import Contacts from "../../components/Contacts";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Welcome from "../../components/Welcome";
import ChatContainer from "../../components/ChatContainer";


export default function Chat() {
    const navigate = useNavigate()
    const [currentChat, setCurrentChat] = useState(undefined)
    //aca decimos que si no tiene nada el localstorage, salga del chat
    useEffect(() => {
        if (!localStorage.getItem("user")) {
            navigate("/");
        }

    }, [navigate]);

    const handleChange = (chat) => {
        setCurrentChat(chat)
    }

    return (
        <Container>
            <div className="row">
                <div className="container">
                    <Contacts changeChat={handleChange} />
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
  background-color: #e64010;
  .container {
    height: 90vh;
    width: 90vw;
    background-color: #00000076;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
  `
