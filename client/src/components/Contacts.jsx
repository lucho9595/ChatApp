import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";
import styled from "styled-components";
import Logo from "../assets/logo.png";

export default function Contacts({ changeChat }) {
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.users.data);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);
    const [error, setError] = useState(false)

    useEffect(() => {
        const info = async () => {
            try {
                const data = await JSON.parse(
                    localStorage.getItem('user')
                );
                setCurrentUser(data);
            } catch {
                setError(true);
                console.log(error);
            }
        }
        info()
        dispatch(getUsers());
    }, [dispatch]);

    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index);
        changeChat(contact);
    };

    //aca tengo a todos los usuarios
    const Usuarios = ({ pj }) => {
        return (
            <div className="user" >
                <div className="all">
                    <img src={pj?.img} className="avatar" />
                    <strong><p className="text">{pj?.username}</p></strong>
                </div>
            </div>
        )
    }

    return (
        <Container>
            <div className="imgLogo">
                <div className="title">
                    <img src={Logo} alt="" className="logo" />
                    <h4 className="subtitle">ChatApp</h4>
                </div>
            </div>
            <div className="users">
                {
                    allUsers?.slice(1).map((pj, index) => {
                        return (
                            <div className={`user ${index === currentSelected ?
                                "selected" : ""}`}
                                onClick={() => changeCurrentChat(index, pj)}
                            >
                                <Usuarios pj={pj} key={pj._id} />
                            </div>)
                    })
                }
            </div>
            <div className="current-user">
                    <img src={currentUser?.img} alt="avatar" />
                    <h2>{currentUser?.username}</h2>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
  grid-template-rows: 10% 82% 8%;
  overflow: hidden;
  .imgLogo{
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        .title{
            display: flex;
            flex-direction: row;
            align-content: center;
            justify-content: flex-start;
            flex-wrap: wrap;
            align-items: center;
            .logo{
                height: 2rem;
            }
            .subtitle{
                color: white;
                text-transform: uppercase;
                text-align: center;
                margin: auto;
                margin-left: 10px;
            }
        }
    }
    .users{
        display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }   
    }
        .user{
           background-color: #ffffff34;
            min-height: 5rem;
            cursor: pointer;
            width: 90%;
            border-radius: 0.2rem;
            padding: 0.4rem;
            display: flex;
            gap: 1rem;
            align-items: center;
            transition: 0.5s ease-in-out;
        }

        .selected {
        background-color: #9a86f3;
        }

    .all{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            flex-wrap: wrap;
            align-content: center;
        .avatar{
            height: 3rem;
            width: 3rem;
            border-radius: 50px;
        }
        .text{
            color: white;
            margin: auto;
            margin-left: 10px;
        }
    }
      .current-user {
        background-color: #a3670275;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        img {
            height: 41px;
            border-radius: 50%;
            max-inline-size: 100%;
        }
        h2 {
            color: white;
            margin: 0 15px;
            font-size: 25px;
        }
        @media screen and (min-width: 720px) and (max-width: 1080px) {
        gap: 0.5rem;
            .username {
            h2 {
                font-size: 1rem;
            }
            }
    }
  }
`