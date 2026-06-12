import Logo from "../Logo";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <Logo size={26} />
            <p style={{ margin: "16px 0 0", color: "var(--ink-3)", fontSize: 14, maxWidth: 280 }}>
              A plataforma de educação universitária online com mais professores titulares do Brasil.
            </p>
          </div>
          <div className={styles.footerCol}>
            <h4>Plataforma</h4>
            <ul>
              <li><a href="#">Cursos</a></li>
              <li><a href="#">Professores</a></li>
              <li><a href="#">Universidades</a></li>
              <li><a href="#">Para empresas</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Suporte</h4>
            <ul>
              <li><a href="#">Central de ajuda</a></li>
              <li><a href="#">Fale conosco</a></li>
              <li><a href="#">Termos de uso</a></li>
              <li><a href="#">Privacidade</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Redes</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">TikTok</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2026 Teach-ing Educação Ltda. CNPJ 00.000.000/0001-00</span>
          <span>Feito com ☕ em São Paulo</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
