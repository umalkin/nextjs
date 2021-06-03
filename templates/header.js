import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <h1 className={styles.logo}>LOGO</h1>
      </Link>
      <nav className={styles.links}>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/products">
          <a className={styles.link}>Products</a>
        </Link>
        <Link href="/contact">
          <a className={styles.link}>Contact</a>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
