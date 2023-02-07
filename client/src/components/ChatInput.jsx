import React, { useState } from "react";
import styled from "styled-components";
import { BiSend } from "react-icons/bi";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import Picker from "emoji-picker-react";

export default function ChatInput() {
    const [msg, setMsg] = useState();
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    return (
        <Container>
            <div className="container">
                <div className="emoji">
                    <BsFillEmojiSmileFill />
                </div>
            </div>
            <form className="input-form">
                <input type="text" placeholder="Type your text here." value={msg} />
                <button className="submit">
                    <BiSend />
                </button>
            </form>
        </Container>
    )
};

const Container = styled.div`
display:grid;
grid-template-columns: 5% 95%;
background-color: #080420;
padding: 0.2rem;
padding-bottom: 0.3rem;
`;