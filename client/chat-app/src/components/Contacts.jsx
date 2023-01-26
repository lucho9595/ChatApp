/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";

function Contacts({ contacts, currentUser, changeChat }) {
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

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  return (
    <>
      {currentImage && currentName && (
        <Container>
          <div className="title">
            <img src={Logo} alt="logo chat" className="logo" />
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
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img className="avatar" src={contact.img} alt="imagen" />
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
              <img className="avatarUser" src={currentImage} alt="avatar" />
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
  overflow: hidden;
  background-color: #080420;
  .title {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    h1 {
      color: white;
      text-transform: uppercase;
      font-size: 15px;
    }
    .logo {
      width: 35px;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    ::-webkit-scrollbar {
      width: 5px;
      &-thumb {
        background-color: #ffffff39;
        width: 5px;
        border-radius: 10px;
      }
    }
    .contact {
      background-color: #ffffff39;
      min-height: 5rem;
      width: 90%;
      cursor: pointer;
      padding: 0.4rem;
      gap: 1rem;
      display: flex;
      align-items: center;
      transition: 0.5s ease-in-out;
    }
    .avatar {
      width: 50px;
      height: 3rem;
      border-radius: 50px;
    }
    .name {
      color: white;
    }
    .selected {
      background-color: #9186f3;
    }
  }
  .current-user {
    display: flex;
    flex-wrap: wrap;
    background-color: #0d0d30;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .avatarUser {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      max-inline-size: 100%;
    }
    .name {
      color: white;
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .name {
        font-size: 1rem;
      }
    }
  }
`;

export default Contacts;
