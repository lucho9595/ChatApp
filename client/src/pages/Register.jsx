import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Register() {
  return (
    <Container>
      <Link to={"/"} id="back">
        <button className="btn btn-primary">Go Back</button>
      </Link>
      <div className="form-container">
        <div className="image-holder"></div>
        <form method="post">
          <h2 className="text-center">
            <strong>Create</strong> an account.
          </h2>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password-repeat"
              placeholder="Password (repeat)"
            />
          </div>
          <div className="form-group-button">
            <button
              className="btn btn-primary btn-block"
              id="signup"
              type="submit"
            >
              Sign Up
            </button>
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
  background: orangered;
  padding: 80px 0;
  height: 100vh;
  width: 100vw;
  .form-container {
    display: table;
    max-width: 900px;
    width: 90%;
    margin: 0 auto;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    .image-holder {
      background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png");
      display: table-cell;
      width: auto;
      background-repeat: no-repeat;
    }
  }
  form {
    display: table-cell;
    width: 400px;
    background-color: #ffffff;
    padding: 40px 60px;
    color: #505e6c;
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

  .form-group-button {
    display: grid;
    align-items: center;
  }

  #back {
    display: flex;
    justify-content: center;
    margin-top: -60px;
    flex-wrap: wrap;
    text-decoration: none;
    padding-bottom: 5px;
    .btn-primary {
      background: #f4476b;
      border: none;
      border-radius: 30px;
      text-decoration: none;
    }
    .btn-primary:hover {
      background: #eb3b60;
    }
    .btn-primary:active {
      background: #eb3b60;
      transform: translateY(1px);
    }
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
