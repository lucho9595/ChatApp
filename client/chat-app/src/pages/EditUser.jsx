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

  useEffect(() => {
    if (!localStorage.getItem("chat-app-user")) {
      navigate("/login");
    } else {
      setSettingUser(JSON.parse(localStorage.getItem("chat-app-user")));
    }
  }, [navigate]);

  return (
    <>
      <Container>
        <div className="container">
          <div class="card h-100">
            <div className="user-profile">
              <div className="user-avatar">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  alt="Maxwell Admin"
                />
              </div>
              <h5 className="user-name">{settingUser?.name}</h5>
              <h6 className="user-email">{settingUser?.email}</h6>
            </div>
          </div>
          <Button onClick={handleClick}>
            <BiLogOut />
          </Button>
        </div>
        <div class="card h-100">
          <h6 className="title">Personal Details</h6>
          <div className="form-group">
            <label for="fullName">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter full name"
            />
          </div>
          <div className="form-group">
            <label for="fullName">Email</label>
            <input
              type="Email"
              className="form-control"
              id="Email"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group">
            <label for="fullName">Password</label>
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
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              type="button"
              id="submit"
              name="submit"
              className="btn btn-primary"
            >
              Update
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: #1a233a;
  color: #bcd0f7;
  height: 100vh;
  width: 100vw;
  .user-profile {
    margin: 0 0 1rem 0;
    padding-bottom: 1rem;
    text-align: center;
    .user-avatar {
      margin: 0 0 1rem 0;
      img {
        width: 90px;
        height: 90px;
        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;
      }
    }
    .user-name {
      margin: 0 0 0.5rem 0;
    }
    .user-email {
      margin: 0;
      font-size: 0.8rem;
      font-weight: 400;
    }
  }
  .card {
    background: #272e48;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border: 0;
    margin-bottom: 200px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
  }

  .form-control {
    border: 1px solid #596280;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    font-size: 0.825rem;
    background: #1a233a;
    color: #bcd0f7;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 5px;
  margin-right: 5px;
  background-color: #9186f3;
  cursor: pointer;
  border: none;
  svg {
    font-size: 25px;
    color: #ebe7ff;
  }
`;

export default EditUser;
