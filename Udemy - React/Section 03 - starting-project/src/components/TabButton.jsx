import "./TabButton.css"
export default function TabButton({children, onSelect, isSelected}){
    function handleClick() {
        console.log("hello world")
    }
    return(
    <li className="text-red-500 bg-blue-900 buttonSet">
        <button className={isSelected ? 'active':undefined} onClick={onSelect} >{children}</button>
    </li>
    );
    /* children just contains what is between the
     opening and closing tags of the element*/
}