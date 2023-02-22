/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Img1 from "../assets/img/01.jpg";
import Img2 from "../assets/img/02.jpg";
import Img3 from "../assets/img/03.jpg";
import Logo from "../assets/logo.png";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [userLocalStorage, setUserLocalStorage] = useState(null);
  const user = useSelector((state) => state.user)
  const id = useSelector((state) => state.user?.user?._id)
  console.log(user)

  const handleClick = async () => {
    localStorage.clear()
    navigate("/")
  }

  useEffect(() => {
    if (user?.username !== {}) {
      setUserLocalStorage(JSON.parse(localStorage.getItem("user")))
    }
  }, [user])

  console.log(userLocalStorage)
  return (
    <div className="" id="page-top">
      {userLocalStorage !== null ?
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
          <div className="container px-5">
            <img src={Logo} alt="Logo" className={styles.img} />
            <a className="navbar-brand" href="#page-top">
              ChatApp
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <p className="nav-link" >
                    Hi {userLocalStorage?.user?.username}
                  </p>
                </li>
                <li className="nav-item">
                  <Link to={`/${id}`}>
                    <img src={userLocalStorage?.user?.img} alt="avatar-user" className={styles.avatar} />
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/chat">
                    Go Chat
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" onClick={handleClick}>
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        :
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
          <div className="container px-5">
            <img src={Logo} alt="Logo" className={styles.img} />
            <a className="navbar-brand" href="#page-top">
              ChatApp
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    Sign Up
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Log In
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      }
      {/* <!-- Header--> */}
      <header className="masthead text-center text-white row">
        <div className="masthead-content">
          <div className="container px-5">
            <h1 className="masthead-heading mb-0">Chatting has never been </h1>
            <h2 className="masthead-subheading mb-0">
              so comfortable
            </h2>
            <a
              className="btn btn-primary btn-xl rounded-pill mt-5"
              href="#scroll"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="bg-circle-1 bg-circle"></div>
        <div className="bg-circle-2 bg-circle"></div>
        <div className="bg-circle-3 bg-circle"></div>
        <div className="bg-circle-4 bg-circle"></div>
      </header>
      {/* <!-- Content section 1--> */}
      <section id="scroll">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img
                  className="img-fluid rounded-circle"
                  src={Img1}
                  alt="..."
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">For those about to rock...</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae!
                  Ratione voluptatum molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Content section 2--> */}
      <section>
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="p-5">
                <img
                  className="img-fluid rounded-circle"
                  src={Img2}
                  alt="..."
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <h2 className="display-4">We salute you!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae!
                  Ratione voluptatum molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Content section 3--> */}
      <section>
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img
                  className="img-fluid rounded-circle"
                  src={Img3}
                  alt="..."
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">Let there be rock!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae!
                  Ratione voluptatum molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer className="py-5 bg-black">
        <div className="container px-5">
          <p className="m-0 text-center text-white small">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
    </div >
  );
}

export default Home;