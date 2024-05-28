import {useState,useEffect} from "react";

export default function Option({ children, handleSelect, option, correctAnswer }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(()=>true);
        handleSelect(option);
        setClicked(()=>false)
    };

    const optionStyle = clicked
        ? (correctAnswer ? " bg-green-700" : " bg-red-700")
        : " bg-purple-700";
        
    return (
        <li
            onClick={handleClick}
            className={`my-1 mx-8 py-6 text-center border-2 w-10/12 border-black
            ${optionStyle}`}>
            {children}
        </li>
    );
}
