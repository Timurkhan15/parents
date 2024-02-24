import { NavigationItem } from "./NavigationItem/NavigationItem";
import "./NavigationItems.css";

export function NavigationItems() {
  return (
    <ul className="NavigationItems">
      <NavigationItem to="/" end>
        Главная
      </NavigationItem>
      <NavigationItem to="/login" end>
        Редактирование
      </NavigationItem>
    </ul>
  );
}
