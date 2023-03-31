import React, { useEffect } from "react";
// import styles from "./Chat.module.css";
import Contacts from "../../components/Contacts";
import { useNavigate } from "react-router-dom";

export default function Chat() {
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("user")) {
            navigate("/");
        }
    }, [navigate])

    return (
        <div className="row">
            <div className="container">
                    <Contacts />
            </div>
        </div>
    )
}