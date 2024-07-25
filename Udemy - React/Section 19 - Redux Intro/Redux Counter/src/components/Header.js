import classes from './Header.module.css';
import { authActions } from "../store/index"
import { useDispatch, useSelector } from 'react-redux';
const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state=>state.auth.isAuthenticated);
  return (
    <header className={classes.header}>
      <h1>{!auth?"Redux Auth":"Welcome"}</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={()=>dispatch(authActions.logout())}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
