import React from "react";
import styled from "styled-components";

export default function ChatContainer({ currentChat }) {
  return (
    <>
      {currentChat && (
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
          <div className="message">
          </div>
          <div className="chat-input">
            <input type="text" />
            <button>Send</button>
          </div>
        </Container>
      )
      }
    </>
  );
}

const Container = styled.div`
  padding-top: 10px;
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem;
    .user-detail{
      display: flex;
      align-items: center;
      gap: 1rem;
      .img{
        img{
          height: 3rem;
        }
      }
      .name{
        h3{
          color: white; 
        }
      }
    }
  }
`;
