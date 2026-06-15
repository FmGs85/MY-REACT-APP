import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
  { name: "Carla Mendes", course: "Medicina", photo: "CM", bg: "var(--orange)", quote: "Estudei pela Teach-ing durante toda a residência. A forma como os módulos são organizados fez toda a diferença na minha prova de título." },
  { name: "Renato Souza", course: "Engenharia de Software", photo: "RS", bg: "var(--yellow)", quote: "Os professores são referência na área. Saí com um portfólio de projetos reais e fui contratado antes de terminar o último módulo." },
  { name: "Júlia Antunes", course: "Direito", photo: "JA", bg: "var(--bg-3)", quote: "Conteúdo denso, mas explicado de um jeito que cabe na rotina. As aulas curtas e os resumos em PDF salvaram meus finais de semana." },
];

function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="pill pill-ghost">03 — Depoimentos</span>
            <h2 className="font-display section-title">Quem estuda aqui,<br />fala por aí.</h2>
          </div>
        </div>
        <div className={styles.testiGrid}>
          {TESTIMONIALS.map((t, i) => (
            <article key={i} className={`${styles.testi} card`}>
              <div className={styles.testiQuote}>“</div>
              <p>{t.quote}</p>
              <div className={styles.testiFoot}>
                <div className={styles.testiAvatar} style={{ background: t.bg }}>{t.photo}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>aluna de {t.course}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
