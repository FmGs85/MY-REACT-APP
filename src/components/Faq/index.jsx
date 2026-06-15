import { useState } from "react";
import styles from "./Faq.module.css";

const FAQ = [
  { q: "Os certificados são reconhecidos por universidades?", a: "Sim. Trabalhamos em parceria com 38 universidades brasileiras e nossos certificados são aceitos como atividade complementar e horas extracurriculares na maior parte das instituições." },
  { q: "Por quanto tempo tenho acesso ao curso?", a: "O acesso é vitalício. Você pode revisar as aulas, baixar materiais e acompanhar atualizações de conteúdo enquanto sua conta estiver ativa." },
  { q: "Posso pagar em parcelas?", a: "Sim. Todos os cursos podem ser parcelados em até 12x sem juros no cartão, ou via boleto e PIX com desconto à vista de 10%." },
  { q: "Existe suporte direto com o professor?", a: "Cada curso conta com um fórum de dúvidas moderado pelo professor e por monitores. Cursos premium incluem sessões de mentoria ao vivo mensais." },
  { q: "E se eu não gostar do curso?", a: "Você tem 14 dias de garantia incondicional. Basta solicitar o estorno na sua área do aluno e devolvemos 100% do valor pago." },
];

function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section">
      <div className={`container ${styles.faqInner}`}>
        <div>
          <span className="pill pill-ghost">04 — Perguntas</span>
          <h2 className="font-display section-title">Tudo o que você<br />quer saber.</h2>
          <p className={styles.faqHelp}>
            Não encontrou sua dúvida? Nosso time responde em até 2 horas durante a semana.
          </p>
          <a href="#" className="btn btn-yellow">Falar com o suporte</a>
        </div>
        <div className={styles.faqRight}>
          {FAQ.map((f, i) => (
            <div key={i} className={`${styles.faqItem} card ${open === i ? styles.faqOpen : ""}`}>
              <button className={styles.faqQ} onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className={styles.faqToggle}>{open === i ? "–" : "+"}</span>
              </button>
              {open === i && <div className={styles.faqA}>{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
