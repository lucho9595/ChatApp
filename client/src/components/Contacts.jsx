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
            <div className="container">
                <div className="users">
                    {
                        allUsers?.map((pj) => {
                            return (
                                <div>
                                    <img src={pj.img} className="avatar" />
                                    <p>{pj.username}</p>
                                </div>)
                        })
                    }
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
.users{
    .avatar{
        width: 5vw;
        height: 5vh;
        border-radius: 50px;
    }
}
`
