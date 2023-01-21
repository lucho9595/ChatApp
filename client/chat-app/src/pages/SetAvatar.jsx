import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function SetAvatar() {
  const navigate = useNavigate();
  const aleatorio = Math.random()

  const api = `https://api.multiavatar.com/${aleatorio}`

  return (
    <div>
      <Container>
        <span>{api}</span>
      </Container>
      <ToastContainer />
    </div>
  )
}

const Container = styled.div``;
