import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";


//the top level div is called the root element and acts as entry point for everything else
const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
