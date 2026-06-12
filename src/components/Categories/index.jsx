import styles from "./Categories.module.css";

const CATEGORIES = [
  { icon: "🩺", label: "Saúde", count: "184 cursos", color: "var(--orange)" },
  { icon: "∑", label: "Exatas", count: "212 cursos", color: "var(--yellow)" },
  { icon: "§", label: "Direito", count: "96 cursos", color: "var(--bg-3)" },
  { icon: "{ }", label: "Tecnologia", count: "268 cursos", color: "var(--orange)" },
  { icon: "ψ", label: "Humanas", count: "143 cursos", color: "var(--yellow)" },
  { icon: "⚙", label: "Engenharias", count: "157 cursos", color: "var(--bg-3)" },
];

function Categories() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="pill pill-ghost">01 — Áreas</span>
            <h2 className="font-display section-title">Escolha sua área<br />de estudo.</h2>
          </div>
          <a href="#" className="section-link">Ver todas as áreas →</a>
        </div>
        <div className={styles.catGrid}>
          {CATEGORIES.map((c) => (
            <a href="#" key={c.label} className={`${styles.catCard} card`}>
              <div className={styles.catIcon} style={{ background: c.color }}>{c.icon}</div>
              <div className={styles.catBody}>
                <strong>{c.label}</strong>
                <span>{c.count}</span>
              </div>
              <div className={styles.catArrow}>↗</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
