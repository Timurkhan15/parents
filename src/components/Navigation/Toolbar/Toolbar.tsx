import { Link } from "react-router-dom";
import { NavigationItems } from "../NavigationItems/NavigationItems";
import "./Toolbar.css";

export function Toolbar() {
  return (
    <header className="Toolbar">
      <Link to="/" className="Toolbar-logo">
        Parents 8D
      </Link>
      <NavigationItems />
    </header>
  );
}
