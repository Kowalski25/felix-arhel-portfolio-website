import { Link } from "@tanstack/react-router";
import styles from "./NavBar.module.css";

export type NavBarItem = {
  label: string;
  href: string;
  items?: NavBarItem[];
};

export interface INavBarProps {
  items: NavBarItem[];
}

export function NavBar({ items }: INavBarProps) {
  return (
    <div className={styles.navBar}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li>
            <Link to={item.href} preload="intent" resetScroll>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
