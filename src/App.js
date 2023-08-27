import React from "react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import {data }from "./data.js"
import './App.css'

export default function App() {

    const cards = data.map(item => (
        <Card 
            key={item.id}
            {...item}
        />   
    ))

    // console.log(data)

    return(
        <div>
            <Navbar />     
            <Hero />
            <section className="card--list ">
                {cards}             
            </section>
        </div>
    );
}