import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import "./NavigationItem.css";

interface Props {
  to: string;
  end?: boolean;
  children: ReactNode;
}

export function NavigationItem({ to, end, children }: Props) {
  return (
    <li className="NavigationItem">
      <NavLink to={to} end={end}>
        {children}
      </NavLink>
    </li>
  );
}
