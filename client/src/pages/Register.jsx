import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UploadImg from "../assets/uploadImg.png";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";

function Register() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    img: "",
  })
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  }
  );
  const [showPwd, setShowPwd] = useState(false);

  const changePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  async function uploadImage(e) {
    let image = e.target.files[0];
    console.log(image)
    const formData = new FormData()
    formData.append('file', image);
    formData.append('upload_preset', "iipcwipj");
    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/datkl6kft/image/upload', {
        method: 'POST',
        body: formData
      })
      if (!res.ok) return null;
      const data = await res.json();
      setInput({
        ...input,
        img: data.secure_url,
        imgId: data.public_id,
      })
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  };
  console.log(input)

  return (
    <Container>
      <div className="form-container">
        <div className="image-holder"></div>
        <form method="post">
          <h2 className="text-center">
            <strong>Create</strong> an account.
          </h2>
          <div className="form-group">
            <input
              onChange={(e) => uploadImage(e)}
              className="form-control"
              type="file"
              name="img"
              accept=".jpg, .png, .jpeg"
            />
            {
              loading ?
                (<div className="loading-img-demo">
                  <img src={UploadImg} className="loading-demo" />
                </div>)
                :
                (<div className="contain-img-demo">
                  <img src={input.img} className="img-demo" />
                </div>)}
          </div>
          <div className="form-group">
            <input
              onChange={(e) => handleInputChange(e)}
              className="form-control"
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              onChange={(e) => handleInputChange(e)}
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              onChange={(e) => changePasswordInput(e)}
              className="form-control"
              type={showPwd ? "text" : "password"}
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="change" onClick={() => setShowPwd(!showPwd)}>
            {showPwd ? (
              <EyeIcon
                type="button"
                className="change"
              />
            ) : (
              <EyeSlashIcon
                type="button"
                className="change"
              />
            )}
          </div>
          <div className="form-group">
            <input
              onChange={(e) => handleInputChange(e)}
              className="form-control"
              type="password"
              name="password-repeat"
              placeholder="Confirm Password"
            />
          </div>
          <div className="form-group-button">
            <Link to={"/login"} id="link">
              <button
                className="btn btn-primary btn-block"
                id="signup"
                type="submit"
              >
                Sign Up
              </button>
            </Link>
          </div>
          <a href="/login" className="already">
            You already have an account?{" "}
            <span className="login">Login here.</span>
          </a>
        </form>
      </div>
    </Container>
  );
}

export default Register;

const Container = styled.div`
background: #ff4500b8;
    width: 100vw;
      .form-container {
    display: table;
    max-width: 955px;
    width: 74%;
    margin: auto;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    .image-holder {
      background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png");
      display: table-cell;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  form {
display: table-cell;
    width: 409px;
    background-color: #ffffff;
    padding: 22px 54px;
    color: #505e6c;
    height: 100vh;
  }
  @media (max-width: 991px) {
    form {
      padding: 40px;
    }
  }

  .form-control {
    background: transparent;
    border: none;
    border-bottom: 1px solid #dfe7f1;
    box-shadow: none;
    outline: none;
    color: black;
    text-indent: 6px;
    height: 40px;
    margin-bottom: 15px;
  }

.contain-img-demo{
display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }

.loading-img-demo{
display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
}

.loading-demo{
width: 100px;
    border-radius: 81px;
    height: 90px;  

}

  .img-demo{
width: 100px;
    border-radius: 81px;
    height: 90px;  
  }

  .form-group-button {
    display: grid;
    align-items: center;
  }

  .change{
    width: 25px; 
    margin: auto;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  #link{
    text-decoration: none;
    display: grid;
    align-items: center;
  }
  #signup {
    background: #f4476b;
    border: none;
    border-radius: 30px;
    padding: 11px;
    box-shadow: none;
    margin-top: 35px;
    text-shadow: none;
    outline: none !important;
  }
  #signup:hover {
    background: #eb3b60;
  }
  #signup:active {
    background: #eb3b60;
    transform: translateY(1px);
  }

  .already {
    margin-top: 5px;
    display: block;
    text-align: center;
    font-size: 15px;
    color: #6f7a85;
    opacity: 0.9;
    text-decoration: none;
    .login:hover {
      color: #f4476b;
    }
  }
`;
