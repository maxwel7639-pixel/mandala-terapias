import { COMO_FUNCIONA } from "@/lib/site";
import Reveal from "./Reveal";
import s from "./ComoFunciona.module.css";

export default function ComoFunciona() {
  return (
    <section className={`${s.como} section on-night`} id="como-funciona">
      <div className="starfield" aria-hidden="true" />
      <div className="shell">
        <div className={s.cabecalho}>
          <p className="eyebrow">
            <span className="num">03</span> Como funciona
          </p>
          <h2>Do primeiro oi até a sessão.</h2>
          <p>
            Nada de formulário longo nem agenda complicada. São quatro passos, e
            o primeiro leva menos de um minuto.
          </p>
        </div>

        <ol className={s.passos}>
          {COMO_FUNCIONA.map((passo, i) => (
            <Reveal as="li" key={passo.numero} delay={i * 80} className={s.passo}>
              <span className={s.numero} aria-hidden="true">
                {passo.numero}
              </span>
              <h3 className={s.titulo}>{passo.titulo}</h3>
              <p className={s.texto}>{passo.texto}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
