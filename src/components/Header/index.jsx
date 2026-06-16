import { Link } from "react-router-dom";
import Logo from "../Logo";
import styles from "./Header.module.css";

function Header({ active = "home" }) {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navInner}`}>
        <Link to="/" aria-label="Teach-ing início">
          <Logo size={28} />
        </Link>
        <div className={styles.navLinks}>
          <Link to="/" className={active === "home" ? styles.active : ""}>Início</Link>
          <a href="#">Cursos</a>
          <a href="#">Professores</a>
          <a href="#">Para empresas</a>
          <a href="#">Blog</a>
        </div>
        <div className={styles.navActions}>
          <a href="#" className="btn btn-ghost">Entrar</a>
          <a href="#" className="btn btn-primary">Matricule-se</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
