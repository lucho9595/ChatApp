import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { upDateUser, deleteUser } from "../utils/APIroutes";
import axios from "axios";

function EditUser() {
  const Swal = require('sweetalert2')
  const [settingUser, setSettingUser] = useState(undefined);
  const [date, setDate] = useState({
    img: "",
    imgId: "",
    name: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  //el change input:
  function handleChange(e) {
    setDate({
      ...date,
      [e.target.name]: e.target.value
    });
  }
  console.log(date);

  //button log out:
  const handleClick = async () => {
    localStorage.clear();
    navigate("/login");
  };

  //button cancel:
  const handleReturn = () => {
    navigate("/");
  };


  //borrar usuario:
  const handleDelete = async (id) => {
    const borrar = await axios.delete(deleteUser + id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        if (borrar) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )  
          localStorage.clear();
          navigate("/login")
        }else{
        console.log("No se borro");
      }
    }})  
    };

    //modificar el usuario:
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { name, email, password, img, imgId } = date;
      const { data } = await axios.put(upDateUser, {
        img,
        imgId,
        name,
        email,
        password
      });
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        navigate("/");
      }
    };

    //subir la imagen que se modifica a la nube:
    const uploadImage = (files) => {
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("upload_preset", "gwdcxzmg");
      axios
        .post("https://api.cloudinary.com/v1_1/datkl6kft/image/upload", formData)
        .then((res) => {
          console.log(res);
          setDate({
            ...date,
            img: res.data.secure_url,
            imgId: res.data.public_id
          });
        });
    };

    //guardar en un estado local la informacion del usuario logueado:
    useEffect(() => {
      if (!localStorage.getItem("chat-app-user")) {
        navigate("/login");
      } else {
        setSettingUser(JSON.parse(localStorage.getItem("chat-app-user")));
      }
    }, [navigate]);

    return (
      <>
        <Title>
          <div className="title">
            <h1>Profile Settings</h1>
          </div>
        </Title>
        <Container>
          {[settingUser]?.map((pj) => {
            return (
              <div className="container">
                <div class="card1">
                  <div className="user-profile">
                    <div className="user-avatar">
                      <img src={pj?.img} alt="user" />
                    </div>
                    <h5 className="user-name">
                      {pj?.name}
                    </h5>
                    <h6 className="user-email">{pj?.email}</h6>
                  </div>
                  <div className="exit">
                    <h5>Sign out</h5>
                    <Button onClick={handleClick}>
                      <BiLogOut />
                    </Button>
                  </div>
                  <div className="delete">
                    <h6>Delete User</h6>
                    <Button onClick={(e) => handleDelete(pj?._id)}>
                      <BiLogOut />
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
          <form class="card2" onSubmit={(event) => handleSubmit(event)}>
            <h6 className="title2">Personal Details</h6>
            <div className="image">
              <label for="img">Changed Image</label>
              <input
                type="file"
                className="form-control"
                name="img"
                id="image"
                placeholder="Select Picture"
                onChange={(e) => uploadImage(e.target.files)}
              />
            </div>
            <div className="name">
              <label for="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Enter Name"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="email">
              <label for="email">Email</label>
              <input
                type="Email"
                className="form-control"
                name="email"
                id="Email"
                placeholder="Enter Email"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="password">
              <label for="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="Enter password"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="buttons">
              <button className="cancel" onClick={handleReturn}>
                Cancel
              </button>
              <button type="submit" id="submit" name="submit" className="update">
                Update
              </button>
            </div>
          </form>
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
    input {
      padding: 5px 6px;
      margin: 10px 0;
      box-shadow: 0 0 15px 4px #121212;
      border: 0;
      border-radius: 8px;
      background: transparent;
      color: white;
    }
  }

  .name {
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    input {
      padding: 5px 6px;
      margin: 10px 0;
      box-shadow: 0 0 15px 4px #121212;
      border: 0;
      border-radius: 8px;
      background: transparent;
      color: white;
    }
  }

  .email {
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    input {
      padding: 5px 6px;
      margin: 10px 0;
      box-shadow: 0 0 15px 4px #121212;
      border: 0;
      border-radius: 8px;
      background: transparent;
      color: white;
    }
  }

  .password {
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    input {
      padding: 5px 6px;
      margin: 10px 0;
      box-shadow: 0 0 15px 4px #121212;
      border: 0;
      border-radius: 8px;
      background: transparent;
      color: white;
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
      color: green;
      transition: 0.5s ease-in-out;
      box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
        rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
        rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
        rgba(44, 187, 99, 0.15) 0 16px 32px;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
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
  box-shadow: rgba(229, 7, 8, 0.2) 0 -25px 18px -14px inset,
    rgba(229, 7, 8, 0.15) 0 1px 2px, rgba(229, 7, 8, 0.15) 0 2px 4px,
    rgba(229, 7, 8, 0.15) 0 4px 8px, rgba(229, 7, 8, 0.15) 0 8px 16px,
    rgba(229, 7, 8, 0.15) 0 16px 32px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover {
    background-color: #d62828;
    box-shadow: rgba(229, 7, 8, 0.35) 0 -25px 18px -14px inset,
      rgba(229, 7, 8, 0.25) 0 1px 2px, rgba(229, 7, 8, 0.25) 0 2px 4px,
      rgba(229, 7, 8, 0.25) 0 4px 8px, rgba(229, 7, 8, 0.25) 0 8px 16px,
      rgba(229, 7, 8, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
  svg {
    font-size: 25px;
    color: white;
  }
`;

export default EditUser;
