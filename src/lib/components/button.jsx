import React from "react";

const Button = ({ title, imgUrl, type = "normal" }) => {
        const buttonStyles = {
        display: "flex",
        gap: "8px",
        justifyContent: "start",
        alignItems: "center",
    }
    return (
        <div style={buttonStyles}>
            <img src={imgUrl} width={type === "normal" ? 30 : 20} height={type === "normal" ? 30 : 20} alt="title" />
            {title}
        </div>
    )
}

export default Button