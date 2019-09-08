import React from "react";
import buttonStyles from "./Button.module.scss"

const Button = props => {
    return(
        <a className = {buttonStyles["btn"]} href="#">{props.children}</a>
    )
}

export default Button;