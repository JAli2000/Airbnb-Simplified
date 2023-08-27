import React from "react";

import '../App.css'

const src = process.env.PUBLIC_URL;

export default function Navbar() {
    return(
        <nav>
            <img src={`${src}/images/Airbnb_Logo__5.png`} className="nav--img" alt="Airbnb"></img>
        </nav>
    );
}