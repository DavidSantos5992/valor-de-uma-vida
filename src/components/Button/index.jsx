'use client'
import { ScrollLink } from "react-scroll";

function Button({ className, title, onPress }) {

    const handleClick = () => {
        onPress();
    }

    return (
        <button className={className} onClick={handleClick}>
            <p>{title}</p>
        </button>
    )
}

export default Button;
