import React, { useState } from "react";
import Await from "../assets/robot.gif"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Welcome() {
    const [username, setUsername] = useState(undefined);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    if (!localStorage.getItem("user")) {
        navigate("/");
        alert("No hay nadie logueado")
    } else {
        const info = async () => {
            try {
                const data = await JSON.parse(
                    localStorage.getItem('user')
                );
                setUsername(data.username)
            } catch {
                setError(true);
                console.log(error);
            }
        }
        info();
    }



    return (
        <Container>
            <img src={Await} alt="robot" className="robot" />
            <h1 className="title">Welcome, <span className="title2">{username}</span> !</h1>
            <h3 className="subtitle">Please select a chat to Start Messaging</h3>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    .robot{
        height: 250px;
        width: 250px;
    }
    .title{
        font-size: 35px;
        color: white;
        .title2{
            color: #eba71e;
        }
    }
    .subtitle{
        font-size: 25px;
        color: white;
    }
    
    `