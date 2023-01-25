import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { allUsers } from "../utils/APIroutes";
import Contacts from "../components/Contacts";

function Chat() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    if (localStorage.getItem("chat-app-user") === null) {
      navigate("/login");
    } else {
      setCurrentUser(JSON.parse(localStorage.getItem("chat-app-user")));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const exist = async () => {
      if (currentUser) {
        if (currentUser.img) {
          const data = await axios.get(`${allUsers}/${currentUser.id}`);
          console.log(data);
          setContacts(data.data);
        }
      }
    };
    exist()
  }, [currentUser]);

  return (
    <Container>
      <div className="container">
        <Contacts contacts={contacts} currentUser={currentUser} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #131324;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
  }
`;

export default Chat;
