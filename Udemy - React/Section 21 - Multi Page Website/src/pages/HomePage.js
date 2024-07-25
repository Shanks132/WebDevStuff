import { Link, useNavigate } from "react-router-dom"
export default function HomePage(){
  const navigate = useNavigate();
  function navigateHandler(){
    navigate("products");
  }
  return (
  <>
    <h1>Home Page</h1> 
    <Link to="products">View Products</Link>

    <p>
      <button onClick={navigateHandler}>Navigate</button>
    </p>
  </>
  )
}