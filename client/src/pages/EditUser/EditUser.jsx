import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteUser, editProfile, userSignOut } from "../../redux/actions";
import styles from "./EditUser.module.css";

export default function EditUser() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const [id, setId] = useState(user?._id)
    const [password, setPassword] = useState(user?.password)
    const [confirmPassword, setConfirmPassword] = useState("")
    const [username, setUsername] = useState(user?.username)
    const [email, setEmail] = useState(user?.email)
    const [img, setImg] = useState(user?.img)
    const [imgId, setImgId] = useState(user?.imgId)
    const Swal = require('sweetalert2')

    async function uploadImage(e) {
        let image = e.target.files[0];
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
            setImg(data.secure_url)
            setImgId(data.public_id)
        } catch (error) {
            console.log(error)
        }
    };

    const changeUser = { id, password, username, email, img, imgId }
    console.log(changeUser)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editProfile(id, changeUser));
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        navigate("/")
    }

    const handleDelete = (e) => {
        e.preventDefault()
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your user has been deleted.',
                    'success'
                )
                dispatch(deleteUser(user.id));
                dispatch(userSignOut(user))
                navigate("/")
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }

    return (
        <>
            <Container>
                <div className="row" id="container">
                    <div id="container2">
                        <h1 className="title text-center">Edit Profile</h1>
                        <div className="row" id="container3">
                            <div className="col-md-4">
                                <div className="text-center mx-auto">
                                    <img src={user?.img} className="" alt="avatar" id="avatar" />
                                    <h4>{user?.username}</h4>
                                    <h6>{user?.email}</h6>
                                    <input
                                        type="submit"
                                        className={styles.btnDelete}
                                        value="Delete User"
                                        onClick={(e) => handleDelete(e)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h3>Personal info</h3>
                                <form className="form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <h6>Upload a different photo...</h6>
                                        <input
                                            onChange={(e) => uploadImage(e)}
                                            className="form-control"
                                            type="file"
                                            name="img"
                                            accept=".jpg, .png, .jpeg" />
                                        <label className="col-lg-3 control-label">Username:</label>
                                        <div className="col-lg-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Username"
                                                name="username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Email:</label>
                                        <div className="col-lg-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Email"
                                                name="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-3 control-label">Password:</label>
                                        <div className="col-md-10">
                                            <input
                                                className="form-control"
                                                type="password"
                                                placeholder="Password"
                                                name="password"
                                                onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-3 control-label">Confirm password:</label>
                                        <div className="col-md-10">
                                            <input
                                                className="form-control"
                                                type="password"
                                                placeholder="Confirm Password"
                                                name="confirmPassword"
                                                onChange={(e) => setConfirmPassword(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-3 control-label"></label>
                                        <div className="col-md-10">
                                            <input type="submit" className={styles.btnSave} value="Save Changes" />
                                            <Link to={"/"}>
                                                <input type="reset" className={styles.btnCancel} value="Cancel" />
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`
background-color: #ee6e18;
width: 100vw;
height: 100vh;
  #container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }

#container2{
        display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    flex-wrap: wrap;
}

#container3{
    background-color: white;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    width: 69%;
    margin: 25px;
    border-radius: 11px;
    padding: 52px;
        #avatar{
            width: 150px;
    height: 150px;
    border-radius: 150px;
    }
}

`;