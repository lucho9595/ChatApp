import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";
import styled from "styled-components";

export default function Contacts() {
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.users.data);
    const logged = JSON.parse(localStorage.getItem('user'))


    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])

    return (
        <Container>
            <div className="containerContact">
                <div className="users">
                    {
                        allUsers?.map((pj) => {
                            return (
                                <div className="user">
                                    <img src={pj.img} className="avatar" />
                                    <p className="text">{pj.username}</p>
                                </div>)
                        })
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
.users{
    display: flex;
    flex-direction: column;
    .user{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: center;
        margin-top: 20px;
            .avatar{
        height: 5vh;
        width: 5vw;
        border-radius: 50px;
                    }
                                .text{
                margin: 8px;
            }

    }
    .loggeado{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
            .avatar{
                height: 5vh;
                width: 5vw;
                border-radius: 50px;
                    }
            .text{
                margin: 15px;
            }
    }
    
}
`
