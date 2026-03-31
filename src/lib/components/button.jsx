import {useState} from "react";

const Button = ({ title, imgUrl, type = "normal" }) => {
    const [hover, setHover] = useState(false);

    const buttonStyles = {
        display: "flex",
        gap: "8px",
        justifyContent: "start",
        alignItems: "center",
        cursor: "pointer",
        backgroundColor: hover ? '#e0e0e0' : "white"
    }
    return (
        <div style={buttonStyles}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            >
            
            <img src={imgUrl} width={type === "normal" ? 30 : 20} height={type === "normal" ? 30 : 20} alt="title" />
            {title}
        </div>
    )
}

export default Button