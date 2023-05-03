import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";
import styled from "styled-components";
import Logo from "../assets/logo.png";

export default function Contacts({ changeChat }) {
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.users.data);
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);
    const [error, setError] = useState(false)

    useEffect(() => {
        const info = async () => {
            try {
                const data = await JSON.parse(
                    localStorage.getItem('user')
                );
                setCurrentUserName(data.username);
                setCurrentUserImage(data.img);
                dispatch(getUsers());
            } catch {
                setError(true);
                console.log(error);
            }
            info()
        }
    }, [dispatch]);

    const changeCurrentChat = (index, pj) => {
        setCurrentSelected(index);
        changeChat(pj);
    };

    //aca tengo a todos los usuarios
    const Usuarios = ({ pj }) => {
        return (
            <div className="user" >
                <img src={pj?.img} className="avatar" />
                <strong><p className="text">{pj?.username}</p></strong>
            </div>
        )
    }

    return (
        <Container>
            <div className="imgLogo">
                <img src={Logo} alt="" className="logo" />
                <h4 className="title">ChatApp</h4>
            </div>
            <div className="users">
                {
                    allUsers?.slice(1).map((pj, index) => <Usuarios pj={pj} key={pj._id}
                        className={`user ${index === currentSelected ?
                            "selected" : ""}`}
                        onClick={() => changeCurrentChat(index, pj)} />)
                }
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
  grid-template-rows: 15% 85%;
  overflow: hidden;
  background-color: #080420;    
  .imgLogo{
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        .logo{
            height: 2rem;
        }
        .title{
            color: white;
            text-transform: uppercase;
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
    }
    .avatar{
        height: 3rem;
    }

    .text{
        color: white;
    }

    .selected {
      background-color: #9a86f3;
    }
`