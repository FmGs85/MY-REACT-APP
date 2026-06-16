import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Curso.module.css";

const HIGHLIGHTS = [
  ["✓", "Certificado reconhecido"],
  ["⏱", "180 horas de conteúdo"],
  ["∞", "Acesso vitalício"],
  ["★", "4,9 de avaliação"],
  ["♛", "Mentoria ao vivo"],
];

const INCLUDES = [
  "24 módulos com videoaulas",
  "Materiais em PDF para download",
  "Fórum de dúvidas com o professor",
  "Certificado de conclusão",
];

const MODULES = [
  { n: "01", title: "Introdução à prática clínica", meta: "6 aulas · 3h 20min", items: [
    ["O método clínico", "18min"],
    ["Anamnese e exame físico", "42min"],
    ["Raciocínio diagnóstico", "35min"],
  ]},
  { n: "02", title: "Semiologia dos sistemas", meta: "8 aulas · 4h 10min", items: [
    ["Sistema cardiovascular", "48min"],
    ["Sistema respiratório", "39min"],
    ["Sistema neurológico", "55min"],
  ]},
  { n: "03", title: "Fundamentos de farmacologia", meta: "7 aulas · 3h 50min", items: [
    ["Princípios gerais", "30min"],
    ["Interações medicamentosas", "44min"],
    ["Prescrição segura", "38min"],
  ]},
];

function Curso() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <Header active="cursos" />

      {/* Hero do curso */}
      <section className={styles.csHero}>
        <div className={`container ${styles.csHeroInner}`}>
          <div>
            <div className={styles.csBreadcrumb}>
              <Link to="/">Início</Link>
              <span>/</span>
              <a href="#">Saúde</a>
              <span>/</span>
              <span className={styles.csBcActive}>Medicina</span>
            </div>
            <span className="pill pill-orange">Saúde</span>
            <h1 className={`font-display ${styles.csTitle}`}>Medicina: Fundamentos Clínicos</h1>
            <p className={styles.csSubtitle}>
              Domine o raciocínio clínico desde a anamnese até a conduta terapêutica, com casos reais
              e a didática de uma das maiores referências da área no Brasil.
            </p>
            <div className={styles.csHeroStats}>
              <div className={styles.csStat}><strong>★ 4,9</strong> (2.140 avaliações)</div>
              <div className={styles.csStatDivider}></div>
              <div className={styles.csStat}><strong>12.4k</strong> alunos</div>
              <div className={styles.csStatDivider}></div>
              <div className={styles.csStat}><strong>24</strong> semanas</div>
            </div>
            <div className={styles.csProfMini}>
              <div className={styles.csAvatar}>HV</div>
              <div>
                <span className={styles.csProfLabel}>Professora</span>
                <strong>Dra. Helena Vasconcelos</strong>
                <span className={styles.csProfRole}>Titular de Clínica Médica · USP</span>
              </div>
            </div>
          </div>

          {/* Card de compra */}
          <div className={styles.csHeroRight}>
            <div className={`${styles.csCta} card`}>
              <div className={styles.csCtaCover}>
                <div className={styles.csCtaPlay}>▶</div>
                <span className={styles.csCtaPreview}>Assista à aula gratuita</span>
              </div>
              <div className={styles.csCtaBody}>
                <div className={styles.csPriceRow}>
                  <strong className={`font-display ${styles.csPrice}`}>R$ 1.290</strong>
                  <span className={styles.csPriceOld}>R$ 1.990</span>
                  <span className={`pill pill-yellow ${styles.csDiscount}`}>-35%</span>
                </div>
                <div className={styles.csInstallments}>ou 12x de R$ 107,50 sem juros</div>
                <button className={`btn btn-primary ${styles.csBuy}`}>Matricular agora</button>
                <button className={`btn ${styles.csTrial}`}>Experimentar 7 dias grátis</button>
                <ul className={styles.csIncludes}>
                  {INCLUDES.map((item) => (
                    <li key={item}><span>✓</span> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className={styles.csHighlights}>
        <div className={`container ${styles.csHighlightsInner}`}>
          {HIGHLIGHTS.map(([ico, label]) => (
            <div key={label} className={styles.csHighlight}>
              <span className={styles.csHighlightIco}>{ico}</span> {label}
            </div>
          ))}
        </div>
      </section>

      {/* Currículo */}
      <section className={styles.csCurriculum}>
        <div className="container">
          <div className={styles.csCurrHead}>
            <div>
              <h2 className={`font-display ${styles.csCurrH}`}>Conteúdo do curso</h2>
              <span className={styles.csCurrSub}>24 módulos · 180 horas de conteúdo</span>
            </div>
          </div>
          <div className={styles.csModules}>
            {MODULES.map((m, i) => (
              <div key={m.n} className={`${styles.csModule} card ${open === i ? styles.isOpen : ""}`}>
                <button className={styles.csModuleHead} onClick={() => setOpen(open === i ? -1 : i)}>
                  <span className={styles.csModuleN}>{m.n}</span>
                  <span className={styles.csModuleInfo}>
                    <strong>{m.title}</strong>
                    <span className={styles.csModuleMeta}>{m.meta}</span>
                  </span>
                  <span className={styles.csModuleToggle}>{open === i ? "–" : "+"}</span>
                </button>
                {open === i && (
                  <ul className={styles.csModuleItems}>
                    {m.items.map(([title, time]) => (
                      <li key={title}>
                        <span className={styles.csItemIco}>▶</span>
                        <span className={styles.csItemTitle}>{title}</span>
                        <span className={styles.csItemTime}>{time}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Curso;
