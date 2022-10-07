import React from "react";
import "./Info.css";
function Info() {
    return(
        <div className="profile">
            <img src="./profile.png" alt="Profile" />
            <p className="info-name">Shiva Pranav S</p>
            <p className="info-role">Software Developer</p>
            <div className="btn">
                <button className="email-btn">Email</button>
                <button className="linkedin-btn">LinkedIn</button>
            </div>
        </div>
    )
}

export default Info