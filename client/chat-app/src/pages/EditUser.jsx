import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

function EditUser() {
  const [settingUser, setSettingUser] = useState(undefined);

  const navigate = useNavigate();

  const handleClick = async () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleReturn = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!localStorage.getItem("chat-app-user")) {
      navigate("/login");
    } else {
      setSettingUser(JSON.parse(localStorage.getItem("chat-app-user")));
    }
  }, [navigate]);

  function capitalizarPrimeraLetra({ settingUser }) {
    return settingUser?.name.charAt(0).toUpperCase() + setSettingUser?.name.slice(1);
  }

  return (
    <>
      <Title>
        <div className="title">
          <h1>Profile Settings</h1>
        </div>
      </Title>
      <Container>
        <div className="container">
          <div class="card1">
            <div className="user-profile">
              <div className="user-avatar">
                <img src={settingUser?.img} alt="user" />
              </div>
              <h5 className="user-name">{capitalizarPrimeraLetra}</h5>
              <h6 className="user-email">{settingUser?.email}</h6>
            </div>
            <div className="exit">
              <h5>Sign off</h5>
              <Button onClick={handleClick}>
                <BiLogOut />
              </Button>
            </div>
          </div>
        </div>
        <div class="card2">
          <h6 className="title2">Personal Details</h6>
          <div className="image">
            <label for="img">Changed Image</label>
            <input
              type="file"
              className="form-control"
              id="image"
              placeholder="Select Picture"
            />
          </div>
          <div className="name">
            <label for="fullName">Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter Name"
            />
          </div>
          <div className="email">
            <label for="email">Email</label>
            <input
              type="Email"
              className="form-control"
              id="Email"
              placeholder="Enter Email"
            />
          </div>
          <div className="password">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <div className="buttons">
            <button
              type="button"
              id="submit"
              name="submit"
              className="cancel"
              onClick={handleReturn}
            >
              Cancel
            </button>
            <button type="button" id="submit" name="submit" className="update">
              Update
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}

const Title = styled.div`
  .title {
    background-color: #1a233a;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    color: violet;
    text-transform: uppercase;
    padding-top: 17px;
  }
`;

const Container = styled.div`
  background-color: #1a233a;
  color: #bcd0f7;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  .user-profile {
    margin: 0 0 1rem 0;
    padding-bottom: 1rem;
    text-align: center;
    .user-avatar {
      margin: 0 0 1rem 0;
      img {
        width: 90px;
        height: 90px;
        border-radius: 100px;
      }
    }
    .user-name {
      margin: 0 0 0.5rem 0;
      font-size: 19px;
    }
    .user-email {
      margin: 0;
      font-size: 14px;
      font-weight: 400;
    }
  }

  .exit {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    h5 {
      font-size: 15px;
      padding-right: 10px;
    }
  }

  .card1 {
    background: #272e48;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    padding: 100px;
  }

  .card2 {
    background: #272e48;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 61px;
    margin-left: 70px;
    .title2 {
      font-size: 25px;
      color: violet;
    }
  }

  .image {
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    input{
        padding: 5px 6px;
    }
  }

  .name {
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    input{
        padding: 5px 6px;
    }
  }

  .email {
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    input{
        padding: 5px 6px;
    }
  }

  .password {
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    input{
        padding: 5px 6px;
    }
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding-top: 20px;
    .cancel {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      border-radius: 5px;
      margin-right: 5px;
      background-color: #d62828;
      cursor: pointer;
      border: none;
      font-size: 16px;
      color: white;
      transition: 0.5s ease-in-out;
      box-shadow: rgba(229, 7, 8, 0.2) 0 -25px 18px -14px inset,
        rgba(229, 7, 8, 0.15) 0 1px 2px, rgba(229, 7, 8, 0.15) 0 2px 4px,
        rgba(229, 7, 8, 0.15) 0 4px 8px, rgba(229, 7, 8, 0.15) 0 8px 16px,
        rgba(229, 7, 8, 0.15) 0 16px 32px;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto,
        sans-serif;
      :hover {
        background-color: #d62828;
        box-shadow: rgba(229, 7, 8, 0.35) 0 -25px 18px -14px inset,
          rgba(229, 7, 8, 0.25) 0 1px 2px, rgba(229, 7, 8, 0.25) 0 2px 4px,
          rgba(229, 7, 8, 0.25) 0 4px 8px, rgba(229, 7, 8, 0.25) 0 8px 16px,
          rgba(229, 7, 8, 0.25) 0 16px 32px;
        transform: scale(1.05) rotate(-1deg);
      }
    }
    .update {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      border-radius: 5px;
      margin-right: 5px;
      background-color: #c2fbd7;
      cursor: pointer;
      border: none;
      font-size: 16px;
      color: white;
      transition: 0.5s ease-in-out;
      box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
        rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
        rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
        rgba(44, 187, 99, 0.15) 0 16px 32px;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto,
        sans-serif;
      :hover {
        background-color: #c2fbd7;
        box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
          rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
          rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
          rgba(44, 187, 99, 0.25) 0 16px 32px;
        transform: scale(1.05) rotate(-1deg);
      }
    }
  }

  @media screen and (min-width: 639) and (max-width: 1080px) {
    background: #272e48;
    height: 100vh;
    width: 100vw;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 5px;
  margin-right: 5px;
  background-color: #d62828;
  cursor: pointer;
  border: none;
  transition: 0.5s ease-in-out;
  box-shadow: rgba(229, 7, 8,  0.2) 0 -25px 18px -14px inset,
        rgba(229, 7, 8, 0.15) 0 1px 2px, rgba(229, 7, 8, 0.15) 0 2px 4px,
        rgba(229, 7, 8, 0.15) 0 4px 8px, rgba(229, 7, 8, 0.15) 0 8px 16px,
        rgba(229, 7, 8, 0.15) 0 16px 32px;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto;
  :hover {
    background-color: #d62828;
    box-shadow: rgba(229, 7, 8, 0.35) 0 -25px 18px -14px inset, rgba(229, 7, 8, 0.25) 0 1px 2px, rgba(229, 7, 8, 0.25) 0 2px 4px, rgba(229, 7, 8, 0.25) 0 4px 8px, rgba(229, 7, 8, 0.25) 0 8px 16px, rgba(229, 7, 8, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
  svg {
    font-size: 25px;
    color: white;
  }

`;

export default EditUser;
