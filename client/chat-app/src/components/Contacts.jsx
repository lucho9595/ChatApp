import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";

function Contacts({ contacts, currentUser }) {
  return (
    <Container>
      <>
        <div className="title">
          <img src={Logo} alt="logo chat" />
          <h1>chatapp</h1>
        </div>
      </>
    </Container>
  );
}

const Container = styled.div`
  .title {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  h1 {
    color: white;
    text-transform: uppercase;
    font-size: 15px;
  }
  img {
    width: 35px;
  }
`;

export default Contacts;
