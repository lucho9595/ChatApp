import React from "react";
import styled from "styled-components";

export default function ChatContainer({ currentChat }) {

    return (
        <>
            {currentChat && (
                <Container>
                    <div className="chat-header">
                        <div className="user-details">
                            <div className="avatar">
                                <img src={currentChat.img} alt="" />
                            </div>
                            <div className="username">
                                <h3>{currentChat.username}</h3>
                            </div>
                        </div>
                    </div>
                </Container>
            )}
        </>
    );
};

const Container = styled.div`
    
    
`