import styles from "./Stats.module.css";

const STATS = [
  ["52.480", "estudantes ativos"],
  ["1.260", "cursos universitários"],
  ["38", "universidades parceiras"],
  ["96%", "índice de aprovação"],
];

function Stats() {
  return (
    <section className={styles.stats}>
      <div className={`container ${styles.statsInner}`}>
        {STATS.map(([n, l]) => (
          <div key={l} className={styles.stat}>
            <div className={`font-display ${styles.statN}`}>{n}</div>
            <div className={styles.statL}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
