import { NEGOCIO } from "@/lib/site";
import { StarIcon } from "./Icons";
import s from "./GoogleMarquee.module.css";

/** Um bloco da pista. Repetido para a emenda do loop ficar invisível. */
function Grupo({ oculto }: { oculto?: boolean }) {
  return (
    <div className={s.grupo} aria-hidden={oculto ? "true" : undefined}>
      {Array.from({ length: 4 }, (_, i) => (
        <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
          <span className={s.item}>
            <span className={s.nota}>{NEGOCIO.googleNota}</span>
            <span className={s.estrelas}>
              {Array.from({ length: 5 }, (_, k) => (
                <StarIcon key={k} size={13} />
              ))}
            </span>
            no Google
          </span>
          <span className={s.separador} />
          <span className={s.item}>
            {NEGOCIO.googleAvaliacoes} avaliações de clientes
          </span>
          <span className={s.separador} />
          <span className={s.item}>
            <span className={s.link}>Ver no Google</span>
          </span>
          <span className={s.separador} />
        </span>
      ))}
    </div>
  );
}

export default function GoogleMarquee() {
  return (
    <aside className={s.faixa} aria-label="Avaliação no Google">
      {/* A faixa inteira é um link só: o texto repetido é decorativo. */}
      <a
        href={NEGOCIO.googleUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver as ${NEGOCIO.googleAvaliacoes} avaliações no Google — nota ${NEGOCIO.googleNota} de 5`}
        style={{ display: "block", textDecoration: "none" }}
      >
        <div className={s.pista}>
          <Grupo />
          <Grupo oculto />
        </div>
      </a>
    </aside>
  );
}
