import React from "react";
import styled from "styled-components";

export default function ChatContainer({ currentChat }) {
  return (
    <>
      { currentChat && (
        <Container>
          <div className="header">
            <div className="user-detail">
              <div className="img">
                <img src={currentChat.img} alt="logo usuario" />
              </div>
              <div className="name">
                <h3>{currentChat.name}</h3>
              </div>
            </div>
          </div>
        </Container>
        )
      }
    </>
  );
}

const Container = styled.div`
  background-color: red;
`;
