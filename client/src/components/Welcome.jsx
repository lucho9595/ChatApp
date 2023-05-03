import React from "react";
import Await from "../assets/robot.gif"

export default function Welcome() {
    return (
        <div>
            <img src={Await} alt="robot" className="robot" />
        </div>
    );
};