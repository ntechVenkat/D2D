import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/login/Default">Login</Link>
      <br />
      <Link to="/contact">ContactUs</Link>
    </div>
  );
};
export default Header;
