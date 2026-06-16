import { Link } from "react-router-dom";
import styles from "./Courses.module.css";

const COURSES = [
  { id: "medicina", tag: "Saúde", tagColor: "pill-orange", title: "Medicina: Fundamentos Clínicos", prof: "Dra. Helena Vasconcelos", rating: 4.9, students: "12.4k", weeks: 24, price: "R$ 1.290", cover: "var(--orange)" },
  { id: "calc", tag: "Exatas", tagColor: "pill-yellow", title: "Cálculo I: Limites & Derivadas", prof: "Prof. Augusto Lima", rating: 4.8, students: "8.1k", weeks: 16, price: "R$ 690", cover: "var(--yellow)" },
  { id: "react", tag: "Tecnologia", tagColor: "pill-orange", title: "React do Zero ao Avançado", prof: "Profa. Mariana Tavares", rating: 4.9, students: "21.7k", weeks: 12, price: "R$ 890", cover: "var(--bg-3)" },
  { id: "dir-const", tag: "Direito", tagColor: "pill-ghost", title: "Direito Constitucional Aplicado", prof: "Prof. Ricardo Albuquerque", rating: 4.7, students: "5.3k", weeks: 20, price: "R$ 780", cover: "var(--bg-3)" },
  { id: "psico", tag: "Humanas", tagColor: "pill-yellow", title: "Psicologia Social Contemporânea", prof: "Dra. Beatriz Nogueira", rating: 4.8, students: "6.9k", weeks: 14, price: "R$ 590", cover: "var(--yellow)" },
  { id: "eng-soft", tag: "Engenharias", tagColor: "pill-orange", title: "Engenharia de Software & Arquitetura", prof: "Prof. Felipe Ramires", rating: 4.9, students: "9.6k", weeks: 18, price: "R$ 1.090", cover: "var(--orange)" },
];

function CourseCard({ c }) {
  return (
    <Link to={`/curso/${c.id}`}>
      <article className={`${styles.courseCard} card`}>
        <div className={styles.courseCover} style={{ background: c.cover }}>
          <span className={"pill " + c.tagColor}>{c.tag}</span>
          <div className={styles.courseCoverDeco}>
            <div className={styles.decoLine}></div>
            <div className={styles.decoLine}></div>
            <div className={styles.decoLine}></div>
          </div>
        </div>
        <div className={styles.courseBody}>
          <h3 className={styles.courseTitle}>{c.title}</h3>
          <div className={styles.courseProf}>{c.prof}</div>
          <div className={styles.courseMeta}>
            <span>★ {c.rating}</span>
            <span className={styles.dot}>•</span>
            <span>{c.students} alunos</span>
            <span className={styles.dot}>•</span>
            <span>{c.weeks} sem</span>
          </div>
          <div className={styles.courseFoot}>
            <strong className={styles.coursePrice}>{c.price}</strong>
            <span className={styles.courseCta}>Ver curso →</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function Courses() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="pill pill-ghost">02 — Em destaque</span>
            <h2 className="font-display section-title">Cursos que estão<br />bombando este semestre.</h2>
          </div>
          <a href="#" className="section-link">Catálogo completo →</a>
        </div>
        <div className={styles.courseGrid}>
          {COURSES.map((c) => <CourseCard key={c.id} c={c} />)}
        </div>
      </div>
    </section>
  );
}

export default Courses;
