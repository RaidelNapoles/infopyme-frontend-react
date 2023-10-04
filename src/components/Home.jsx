import "../styles/Home.css";
import { SectionCard } from "./SectionCard";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <main className="card-container">
      <ul>
        <li>
          <NavLink to={"/enterprises"} className="nav-link">
            <SectionCard
              imgUrl={"./src/assets/factory_blue.png"}
              title={"MIPYMES y CNA"}
            />
          </NavLink>
        </li>

        <li>
          <SectionCard
            imgUrl={"./src/assets/trabajador_por_cuenta_propia.svg"}
            title={"TCP"}
          />
        </li>

        <li>
          <SectionCard
            imgUrl={"./src/assets/import-export.svg"}
            title={"Import-Export"}
          />
        </li>

        <li>
          <SectionCard
            imgUrl={"./src/assets/web_icon.svg"}
            title={"Enlaces de interés"}
          />
        </li>

        <li>
          <SectionCard
            imgUrl={"./src/assets/forbidden-2.svg"}
            title={"Actividades Prohibidas"}
          />
        </li>

        <li>
          <SectionCard imgUrl={"./src/assets/info.svg"} title={"Acerca de"} />
        </li>
      </ul>
    </main>
  );
};
