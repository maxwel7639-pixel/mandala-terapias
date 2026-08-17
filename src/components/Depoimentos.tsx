import { DEPOIMENTOS } from "@/lib/site";
import { StarIcon } from "./Icons";
import Reveal from "./Reveal";
import s from "./Depoimentos.module.css";

export default function Depoimentos() {
  return (
    <section className={`${s.depoimentos} section`} id="depoimentos">
      <div className="shell">
        <div className={s.cabecalho}>
          <p className="eyebrow">
            <span className="num">04</span> Quem já passou por aqui
          </p>
          <h2>O que dizem sobre as sessões.</h2>
          <p>
            Avaliações publicadas por clientes no perfil do Google da Mandala,
            reproduzidas aqui com o conteúdo preservado.
          </p>
        </div>

        <ul className={s.colunas}>
          {DEPOIMENTOS.map((d, i) => (
            <Reveal as="li" key={d.nome} delay={(i % 3) * 80} className={s.item}>
              <div className={s.estrelas} aria-hidden="true">
                {Array.from({ length: d.nota }, (_, k) => (
                  <StarIcon key={k} size={14} />
                ))}
              </div>
              <span className="sr-only">
                Avaliação de {d.nota} estrelas em 5.
              </span>

              <blockquote className={s.texto}>{d.texto}</blockquote>

              <p className={s.autor}>{d.nome}</p>
              <p className={s.meta}>
                {d.contexto} · {d.quando}
              </p>
              <p className={s.origem}>via Google</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
