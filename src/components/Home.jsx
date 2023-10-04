import "../styles/Home.css";
import { SectionCard } from "./SectionCard";
import { NavLink } from "react-router-dom";
import factoryIcon from "../assets/factory_blue.png";
import workerIcon from "../assets/trabajador_por_cuenta_propia.svg";
import importIcon from "../assets/import-export.svg";
import webIcon from "../assets/web_icon.svg";
import forbiddenIcon from "../assets/forbidden-2.svg";
import aboutIcon from "../assets/info.svg";

export const Home = () => {
  return (
    <main className="card-container">
      <ul>
        <li>
          <NavLink to={"/enterprises"} className="nav-link">
            <SectionCard imgUrl={factoryIcon} title={"MIPYMES y CNA"} />
          </NavLink>
        </li>

        <li>
          <SectionCard imgUrl={workerIcon} title={"TCP"} />
        </li>

        <li>
          <SectionCard imgUrl={importIcon} title={"Import-Export"} />
        </li>

        <li>
          <SectionCard imgUrl={webIcon} title={"Enlaces de interés"} />
        </li>

        <li>
          <SectionCard
            imgUrl={forbiddenIcon}
            title={"Actividades Prohibidas"}
          />
        </li>

        <li>
          <SectionCard imgUrl={aboutIcon} title={"Acerca de"} />
        </li>
      </ul>
    </main>
  );
};
