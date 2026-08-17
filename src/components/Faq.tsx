import { FAQ } from "@/lib/site";
import { PlusIcon } from "./Icons";
import Reveal from "./Reveal";
import s from "./Faq.module.css";

/**
 * Accordion em <details>/<summary> nativo: acessível por teclado e
 * funcional mesmo sem JavaScript, sem precisar de estado no cliente.
 */
export default function Faq() {
  return (
    <section className={`${s.faq} section`} id="faq">
      <div className="shell">
        <div className={s.cabecalho}>
          <p className="eyebrow">
            <span className="num">06</span> Dúvidas frequentes
          </p>
          <h2>O que costumam me perguntar antes da primeira sessão.</h2>
        </div>

        <div className={s.lista}>
          {FAQ.map((item, i) => (
            <Reveal key={item.pergunta} delay={i * 50}>
              <details className={s.item}>
                <summary className={s.pergunta}>
                  {item.pergunta}
                  <span className={s.sinal} aria-hidden="true">
                    <PlusIcon size={17} />
                  </span>
                </summary>
                <p className={s.resposta}>{item.resposta}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
