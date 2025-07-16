import { itemsNavbar } from "@/data";
import Link from "next/link";
import { ToogleTheme } from "./toggle-theme";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        {itemsNavbar.map((item) => (
          <div key={item.id} className={styles.menuItem}>
            <Link href={item.link}>{item.icon}</Link>
          </div>
        ))}
        <ToogleTheme />
      </div>
    </nav>
  );
};
export default Navbar;