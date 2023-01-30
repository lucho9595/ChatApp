import React from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

function Welcome({ currentUser }) {
    return (
        <Container>
            <>
                <img src={Robot} alt="" />
                <h1>Welcome {currentUser?.name}!</h1>
                <h3>Please select a chat to Start Messaging.</h3>
            </>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        align-items: center;
        color:white;
    }
    h3{
        color:white;
    }
`;

export default Welcome;