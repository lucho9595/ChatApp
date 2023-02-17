import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "./EditUser.module.css";


export default function EditUser() {
    const user = useSelector((state) => state.user)
    console.log(user)

    return (
        <div className="container">
            <h1>Edit Profile</h1>
            <hr />
            <div className="row">
                <div className="col-md-3">
                    <div className="text-center">
                        <img src={user?.user?.img} className={styled.avatar} alt="avatar" />
                        <h4>{user?.user?.username}</h4>
                        <h5>{user?.user?.email}</h5>
                        <h6>Upload a different photo...</h6>
                        <input type="file" className="form-control" />
                    </div>
                </div>
                <div className="col-md-9 personal-info">
                    <h3>Personal info</h3>
                    <form className="form-horizontal" role="form">
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Username:</label>
                            <div className="col-lg-8">
                                <input className="form-control" type="text" value="Jane" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Email:</label>
                            <div className="col-lg-8">
                                <input className="form-control" type="text" value="janesemail@gmail.com" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label">Password:</label>
                            <div className="col-md-8">
                                <input className="form-control" type="password" value="11111122333" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label">Confirm password:</label>
                            <div className="col-md-8">
                                <input className="form-control" type="password" value="11111122333" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label"></label>
                            <div className="col-md-8">
                                <input type="button" className="btn btn-primary" value="Save Changes" />
                                <span></span>
                                <Link to={"/"}>
                                    <input type="reset" className="btn btn-default" value="Cancel" />
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
