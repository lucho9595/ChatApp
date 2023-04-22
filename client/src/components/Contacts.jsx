import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";
import styled from "styled-components";
import Logo from "../assets/logo.png";

export default function Contacts() {
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.users.data);

    //aca tengo a todos los usuarios
    const Usuarios = ({ pj }) => {
        return (
            <div className="user" >
                <img src={pj?.img} className="avatar" />
                <strong><p className="text">{pj?.username}</p></strong>
            </div>
        )
    }

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])

    return (
        <Container>
            <div className="row" id="containerContact">
                <div className="imgLogo">
                    <img src={Logo} alt="" className="logo" />
                    <h4>ChatApp</h4>
                </div>
                <div className="users">
                    {
                        allUsers?.slice(1).map(pj => <Usuarios pj={pj} key={pj._id} />)
                    }
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`

grid-template-columns: 10% 75% 15%;

.imgLogo{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .logo{
        height: 10vh;
    }
}

.users{
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    .user{
        background-color: #ff303039;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        align-items: center;
        cursor: pointer;
        min-height: 15px;
        width: 90%;
        border-radius: 15px;
        padding: 14px;
        gap: 1rem;
        transition: 0.5s ease-in-out;
        .avatar{
        height: 8vh;
        width: 21%;
        border-radius: 50%;
                    }
                                .text{
                margin: 6px;
                
            }
        :hover{
    background-color: #ffd47f;
    border-radius: 15px;
            }
    }
}
`