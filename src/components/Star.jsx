import React from "react";

export default function Star(props) {
    if (props.starOn) {
        return (
            <img className="reviewStars" src="./star_on.png" />
        );
    } else {
        return(
            <img className="reviewStars" src="./star_off.png" />
        )
    }
}