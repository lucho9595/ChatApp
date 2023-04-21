import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";
import styled from "styled-components";
import Logo from "../assets/logo.png";

export default function Contacts() {
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.users.data);
    const logged = JSON.parse(localStorage.getItem('user'))


    //aca tengo a todos los usuarios
    const Usuarios = ({ pj }) => {
        return (
            <div className="user" >
                <img src={pj?.img} className="avatar" />
                <p className="text">{pj?.username}</p>
            </div>
        )
    }

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])

    return (
        <Container>
            <div className="containerContact">
                <div className="imgLogo">
                    <img src={Logo} alt="" className="logo" />
                    <h4>ChatApp</h4>
                </div>
                <div className="users">
                    {
                        allUsers?.slice(1).map(pj => <Usuarios pj={pj} key={pj._id} />)
                    }
                    <div className="loggeado">
                        <img src={logged?.img} className="avatar" />
                        <h5 className="text">{logged?.username}</h5>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`

.imgLogo{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .logo{
        height: 10vh;
        width: 5vw;
    }
}
.users{
    display: flex;
    flex-direction: column;
    cursor: pointer;
    .user{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: center;
        margin-top: 15px;
        .avatar{
        height: 8vh;
        width: 5vw;
        border-radius: 50%;
                    }
                                .text{
                margin: 6px;
            }
:hover{
    background-color: #ffd47f;
    border-radius: 9px;
}
    }
    .loggeado{
        color:white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
    background-color: #8d3b00;
                    border-radius: 8px;

            .avatar{
                height: 8vh;
                width: 5vw;
                border-radius: 50%;
                max-inline-size: 100%;
                    }
            .text{
                margin: 15px;
            }
    }
    
}
`