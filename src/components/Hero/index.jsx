import { useState } from "react";
import styles from "./Hero.module.css";

function Hero() {
  const [q, setQ] = useState("");
  const populares = ["Medicina", "Cálculo I", "Constitucional", "React", "Anatomia"];

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroLeft}>
          <span className="pill pill-yellow">
            <span style={{ fontSize: 14 }}>★</span> + de 50.000 universitários
          </span>
          <h1 className={`font-display ${styles.heroTitle}`}>
            Aprenda com quem<br />
            <span className={styles.hlOrange}>forma profissionais</span><br />
            de verdade.
          </h1>
          <p className={styles.heroSub}>
            Cursos universitários online ministrados por professores titulares de USP, UFRJ, Unicamp e UFMG.
            Conteúdo aprofundado, certificação aceita por 38 universidades parceiras.
          </p>
          <div className={`${styles.heroSearch} card`}>
            <span className={styles.searchIco} aria-hidden>⌕</span>
            <input
              type="text"
              placeholder="Busque por curso, professor ou área de estudo…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <button className={`btn btn-primary ${styles.searchBtn}`}>Buscar</button>
          </div>
          <div className={styles.heroTags}>
            <span className={styles.heroTagsLabel}>Populares:</span>
            {populares.map((t) => (
              <button key={t} className={styles.heroTag} onClick={() => setQ(t)}>{t}</button>
            ))}
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroArt}>
            <div className={`${styles.artCard} ${styles.artCard1}`}>
              <div className={styles.artCardHead}>
                <span className="pill pill-orange">AO VIVO</span>
                <span className={styles.artTime}>19:30</span>
              </div>
              <div className={`${styles.artThumb} ${styles.artThumb1}`}>
                <div className={styles.artPlay}>▶</div>
              </div>
              <div className={styles.artInfo}>
                <strong>Anatomia do Sistema Nervoso</strong>
                <span>Prof. Helena Vasconcelos</span>
              </div>
            </div>

            <div className={`${styles.artCard} ${styles.artCard2}`}>
              <div className={styles.artProgress}>
                <div className={styles.artProgressBar}><div style={{ width: "68%" }}></div></div>
                <span>68% concluído</span>
              </div>
              <strong>Cálculo I — Módulo 4</strong>
              <span className={styles.artMuted}>Próxima aula: Regra da Cadeia</span>
            </div>

            <div className={`${styles.artCard} ${styles.artCard3}`}>
              <div className={`font-display ${styles.artStatNum}`}>9,4</div>
              <span className={styles.artMuted}>Sua média na turma</span>
              <div className={styles.artStars}>★★★★★</div>
            </div>

            <div className={`${styles.artBlob} ${styles.artBlob1}`}></div>
            <div className={`${styles.artBlob} ${styles.artBlob2}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
