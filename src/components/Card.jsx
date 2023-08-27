import React from "react";

import '../App.css'

const src = process.env.PUBLIC_URL;

export default function Card(props) {

    let badgeText;
    if (props.openSpots === 0) {
        badgeText = 'Sold Out';
    } else if (props.location === 'Online'){
        badgeText = 'online'
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`${src}/images/${props.coverImg}`}className="card--image" alt="card-pic" ></img>
            <div className="card--stats">
                <img src={`${src}/images/star-ico.png`} className="card--stats__star" alt="star-ico" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) . </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>

        </div>
    );
}