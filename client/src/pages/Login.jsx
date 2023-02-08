import React from "react";
import styled from "styled-components";

export default function Login() {
  return (
    <Container>
      <div className="justify-content-center" id="container">
        <div className="col-md-6 col-lg-4" id="container2">
          <div className="login-wrap p-0" id="container3">
            <h3 className="mb-4 text-center">Sign In</h3>
            <form className="signin-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="form-control btn btn-primary submit px-3"
                >
                  Sign In
                </button>
              </div>
            </form>
            <p className="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
            <div className="social d-flex text-center">
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background: orangered;
  height: 100vh;
  width: 100vw;
  #container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  #container2 {
    background: linear-gradient( rgba(242,161,99,1) 0%, rgba(255,194,157,0) 70% );    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 80%;
    align-content: center;
    justify-content: center;
    border-radius: 53px;
  }
  #container3 {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }
  .form-group {
    margin-bottom: 5px;
  }
  button {
    border: none;
    border-radius: 27px;
    background-color: #f4476b;
    margin-top: 41px;
    :hover {
      background: #eb3b60;
    }
    :active {
      background: #eb3b60;
      transform: translateY(1px);
    }
  }
`;
