import { NEGOCIO } from "@/lib/site";
import { StarIcon } from "./Icons";
import Reveal from "./Reveal";
import s from "./GoogleBadge.module.css";

export default function GoogleBadge() {
  return (
    <section className={s.faixa} aria-labelledby="titulo-google">
      <div className="shell">
        <Reveal className={s.badge}>
          <div className={s.nota}>
            <span className={s.valor}>{NEGOCIO.googleNota}</span>
            <span className={s.estrelas} aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => (
                <StarIcon key={i} size={16} />
              ))}
            </span>
          </div>

          <div className={s.divisor} aria-hidden="true" />

          <div className={s.info}>
            <h3 id="titulo-google">Nota {NEGOCIO.googleNota} no Google</h3>
            <p>
              {NEGOCIO.googleAvaliacoes} avaliações de clientes reais, todas
              cinco estrelas, publicadas no perfil da Mandala.
            </p>
            <a
              className={s.link}
              href={NEGOCIO.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no Google
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M8 7h9v9" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
