import "../styles/NavBar.css";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import infopymeLogo from "../assets/infopyme_logo_blanco.svg";

export const NavBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/searchEnterprise");
  };

  return (
    <nav className="navbar">
      <div className="container header-logo">
        <a className="navbar-brand" href="/">
          <img src={infopymeLogo} alt="Bootstrap" style={{ width: "7%" }} />
          <strong>InfoPyME</strong>
        </a>
      </div>
    </nav>
  );
};
