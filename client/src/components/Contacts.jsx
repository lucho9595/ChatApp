import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";

export default function Contacts({ userLogged }) {
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.users.data);
    const logged = JSON.parse(localStorage.getItem('user'))


    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])

    return (
        <div className="container">
            Contacts
        </div>
    )
}