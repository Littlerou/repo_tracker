import React from "react";

const Card = (props) => {
    return(
        <div>
            <p>name: {props.name} - github: {props.github}</p>
        </div>
    )
}
export default Card