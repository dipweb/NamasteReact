import logo from "../logo.jpg";

const Header = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Logout</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
