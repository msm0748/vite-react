import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <ul className="flex gap-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="register">register</Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
