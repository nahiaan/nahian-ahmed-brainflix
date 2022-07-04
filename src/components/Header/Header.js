import logo from "../../assets/Logo/BrainFlix-logo.svg";
import profilePic from "../../assets/Images/Mohan-muruge.jpg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="brainflix logo" />
      <div className="header__wrapper">
        <input
          className="header__search"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
        <img className="header__img" src={profilePic} alt="profile of user" />
      </div>
      <button className="header__btn">UPLOAD</button>
      <img className="header__img2" src={profilePic} alt="profile of user" />
    </header>
  );
};

export default Header;
