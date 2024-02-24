import { Outlet } from "react-router-dom";
import { Toolbar } from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";

export function Layout() {
  return (
    <>
      <Toolbar />
      <main className="Layout-Content">
        <Outlet />
      </main>
    </>
  );
}
