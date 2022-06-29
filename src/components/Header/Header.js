import logo from "../../assets/Logo/BrainFlix-logo.svg";
import profilePic from "../../assets/Images/Mohan-muruge.jpg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="brainflix logo" />
      <input className="header__search" type="text" name="search" id="search" />
      <button className="header__btn">Upload</button>
      <img className="header__img" src={profilePic} alt="profile of user" />
    </header>
  );
};

export default Header;
