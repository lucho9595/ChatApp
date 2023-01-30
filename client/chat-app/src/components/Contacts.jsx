/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
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
    setCurrentSelected(index[1]);
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
                  className={`contact ${index === currentSelected ? "selected" : ""
                    }`}
                  key={index}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  {
                    contact.img === currentUser.img && contact.name === currentUser.name ?
                      <div class="auto" id="auto">
                      </div> :
                      <div className="users">
                        <div className="avatar">
                          <img className="avatar" src={contact.img} />
                        </div>
                        <div className="name">
                          <h4>{contact.name}</h4>
                        </div>
                      </div>
                  }
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
      )
      }
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
    justify-content: center;
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
  //todos los contactos
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: auto;
    gap: 0.8rem;
    min-height: 5rem;
    width: 90%;
    padding: 0.4rem;
    gap: 1rem;
    flex-wrap: wrap;
    align-content: flex-start;
    ::-webkit-scrollbar {
      width: 5px;
      &-thumb {
        background-color: #ffffff39;
        width: 5px;
        border-radius: 10px;
      }
    }
    .contact {
      width: 100%;
      transition: 0.5s ease-in-out;
      .users {
        cursor: pointer;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: row;
        background-color: #ffffff39;
        padding: 10px;
        .avatar {
          width: 50px;
          height: 3rem;
          border-radius: 50px;
        }
        .name {
          color: white;
          margin-left: 6px;
        }
        .auto {
          display: none;
          opacity: 0;
        }
      }
    }
    .selected {
        background-color: #9186f3;
      }
  }
  //usuario logeado
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
