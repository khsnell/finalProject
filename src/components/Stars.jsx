import React from "react";
import Star from "./Star";

export default function Stars(props) {
    let stars = [];
    
    for (let i = 1; i < 6; i++) {
        if (props.rating < i) {
            stars.push(<Star key={"s" + i} starOn={false} />);
        } else {
            stars.push(<Star key={"s" + i} starOn={true} />);
        }
    }

    return stars;
}