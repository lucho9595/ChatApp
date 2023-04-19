import React, { useEffect, useState } from "react";
// import styles from "./Chat.module.css";
import Contacts from "../../components/Contacts";
import { useNavigate } from "react-router-dom";

export default function Chat() {
    const navigate = useNavigate()
    const [userLogged, setUserLogged] = useState([]);

    //aca decimos que si no tiene nada el localstorage, salga del chat, si no guardo el usuario logeado en un estado local
    useEffect(async () => {
        if (!localStorage.getItem("user")) {
            navigate("/");
        } else {
            setUserLogged(await JSON.parse(localStorage.getItem('user')))
        }
    }, [navigate])

    return (
        <div className="row">
            <div className="container">
                <Contacts userLogged={userLogged} />
            </div>
        </div>
    )
}