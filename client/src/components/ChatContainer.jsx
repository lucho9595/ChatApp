import React from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

export default function ChatContainer({ currentChat }) {

    const handleMessage = (msg) => {

    }

    return (
        <>
            {currentChat && (
                <Container>
                    <div className="chat-header">
                        <div className="user-details">
                            <div className="avatar">
                                <img src={currentChat.img} className="img" />
                            </div>
                            <div className="title">
                                <h3 className="username">{currentChat.username}</h3>
                            </div>
                        </div>
                    </div>
                    <ChatMessage />
                    <ChatInput handleMessage={handleMessage} />
                </Container>
            )}
        </>
    );
};

const Container = styled.div`
    padding-top: 1rem;
    .chat-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        .user-details{
            display: flex;
            align-items: center;
            gap: 1rem;
            .avatar{
                .img{
                height: 35px;
                width: 35px;
                border-radius: 50%;
            }
            }
            .username{
                font-size: 15px;
                color: white;
            }
        }
    }
    
`