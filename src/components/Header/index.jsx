import Logo from "../Logo";
import styles from "./Header.module.css";

function Header({ active = "home" }) {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navInner}`}>
        <a href="#" aria-label="Teach-ing início">
          <Logo size={28} />
        </a>
        <div className={styles.navLinks}>
          <a href="#" className={active === "home" ? styles.active : ""}>Início</a>
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
