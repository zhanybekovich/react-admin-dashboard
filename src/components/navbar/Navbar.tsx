import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="ReactAdmin" />
        <span>ReactAdmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7046685/pexels-photo-7046685.jpeg"
            alt=""
          />
        </div>
        <img src="/settings.svg" alt="" />
      </div>
    </div>
  );
}

export default Navbar;
