import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";

function Contacts({ contacts, currentUser }) {
  //define el estado del nombree del usuario
  const [currentName, setCurrentName] = useState(undefined);
  //define el estado de la imagen del usuario
  const [currentImage, setCurrentImage] = useState(undefined);
  //cuando seleccionamos un chat nos desvuelve lo que tenga
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    if (currentUser) {
      setCurrentImage(currentUser.img);
      setCurrentName(currentUser.name);
    }
  }, [currentUser]);
  console.log(contacts)

  const changeCurrentChat = (index, contact) => {};

  return (
    <>
      {currentImage && currentName && (
        <Container>
          <div className="title">
            <img src={Logo} alt="logo chat" />
            <h1>chatapp</h1>
          </div>
          <div className="contacts">
            {contacts?.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  key={index}
                >
                  <div className="avatar">
                    <img src={contact.img} alt="imagen" />
                  </div>
                  <div className="name">
                    <h4>{contact.name}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="avatar">
              <img src={currentImage} alt="avatar" />
            </div>
            <div className="name">
              <h3>{currentName}</h3>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
display: grid;
grid-template-rows: 10% 75% 15%;
background-color: #080420;
  .title {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
  }
  h1 {
    color: white;
    text-transform: uppercase;
    font-size: 15px;
  }
  img {
    width: 35px;
  }
  .contacts{

  }
`;

export default Contacts;
