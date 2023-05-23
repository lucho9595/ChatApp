import React, { useState } from 'react';
import Picker from "emoji-picker-react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import styled from 'styled-components';

export default function ChatInput({ handleSendMsg }) {
  const [showEmoji, setShowEmoji] = useState(false);
  const [msg, setMsg] = useState('');

  const handleEmojiShow = () => {
    setShowEmoji(!showEmoji)
  }

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg('')
    }
  }

  return (
    <Container>
      <div className='contain'>
        <div className='emoji'>
          <BsEmojiSmileFill color="white" onClick={(e) => handleEmojiShow(e)} />
          {showEmoji && <Picker onEmojiClick={(emoji) => setMsg((prevMsg) => prevMsg + emoji.emoji)} />}
        </div>
      </div>
      <form className='input-contain' onSubmit={(e) => sendChat(e)}>
        <input type='text' placeholder='Type your message here.' value={msg} onChange={(e) => setMsg(e.target.value)} />
        <button className='submit'>
          <IoMdSend />
        </button>
      </form>
    </Container>
  )
};

const Container = styled.div`
display: grid;
align-items: center;
grid-template-columns: 5% 95%;
padding-left: 28px;
.contain{
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 25px;
        color: #151413fc;
        cursor: pointer;
      }
      .epr-main{
        position: absolute;
        top: -450px;    
        background-color  : #e8a541 ;
        box-shadow: 0 5px 15px #e9c896;
        border-color: #e99724;
        .epr-category-nav{
          button{
            filter:contrast(0);
          }
          }
        .epr-search{
          background-color: transparent;
          border-color: #e9c896;
          outline: none;
        }
        .epr-emoji-category-label{
          background-color: e8a541;
          color: black;
        }
        .epr-preview-emoji-label{
          color: #060606;
        }
      }
      }
    }
 
   .input-contain{
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #ffffff34;
    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: #ffffff;
      border: none;
      padding-left: 1rem; 
      font-size: 15px;

      &::selection {
        background-color: #9a86f3;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ff6600;
      border: none;
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;
        svg {
          font-size: 1rem;
        }
      }
      svg {
        font-size:20px;
        color: white;
      }
    } 
  }
 `