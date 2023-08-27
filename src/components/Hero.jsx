import React from "react";

import '../App.css'

const src = process.env.PUBLIC_URL;

export default function Hero() {
    return(
        <section className="hero">
            <img className="hero--img" src={`${src}/images/Group 77.png`} alt="hero-img" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, ratione repellat? Vero delectus necessitatibus reiciendis neque inventore, voluptatem quam sapiente!
            </p>
        </section>
    );
}