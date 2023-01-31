import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";

function Logout() {
    const navigate = useNavigate();
    const handleClick = async () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
            <Button>
                <BiPowerOff/>
            </Button>
    );
};

const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 0.5rem;
border-radius: 5px;
margin-right: 5px;
background-color: #9186f3;
cursor: pointer;
border: none;
svg{
    font-size: 25px;
    color: #ebe7ff;
}
`;

export default Logout;