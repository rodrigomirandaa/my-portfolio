import logo from "../assets/Rm.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items center justify-center gap-5 text-2xl">
        <a href="https://github.com/rodrigomirandaa" target="_blank" rel="noopener noreferrer"> <FaGithub /> </a>
        <a href="https://www.linkedin.com/in/rodrigomirandaa/" target="_blank" rel="noopener noreferrer"> <FaLinkedin /> </a>
        <a href="https://www.instagram.com/_rodrigomirandaa/" target="_blank" rel="noopener noreferrer" > <FaInstagram /> </a>
      </div>
    </nav>
  );
};

export default Navbar;
