import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";

export default function Contacts() {
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.users.data);
    const logged = JSON.parse(localStorage.getItem('user'))


    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])

    return (
        <div className="container">
            <div className="user-logged">
                <img src={logged?.img} alt="" />
                <p>{logged?.username}</p>
            </div>
        </div>
    )
}