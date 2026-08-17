import Image from "next/image";
import { SERVICOS } from "@/lib/site";
import { whatsappLink, mensagemDoServico } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";
import s from "./Servicos.module.css";

export default function Servicos() {
  return (
    <section className="section tone-mid" id="servicos">
      <div className="shell">
        <div className={s.intro}>
          <p className="eyebrow">
            <span className="num">02</span> As terapias
          </p>
          <h2>Três caminhos, o mesmo cuidado.</h2>
          <p>
            Cada prática atende uma necessidade diferente. Se você não souber
            qual escolher, me chame no WhatsApp e a gente decide junto a partir
            do que você está vivendo.
          </p>
        </div>

        <ul className={s.lista}>
          {SERVICOS.map((servico, i) => (
            <Reveal
              as="li"
              key={servico.slug}
              delay={i * 90}
              className={s.card}
            >
              <div className={s.capa}>
                <Image
                  src={servico.imagem}
                  alt={servico.imagemAlt}
                  width={480}
                  height={600}
                  sizes="(max-width: 760px) 90vw, 380px"
                  style={{ objectPosition: servico.foco }}
                />
                <span className={s.numero} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className={s.conteudo}>
                <h3 className={s.nome}>{servico.nome}</h3>
                <p className={s.chamada}>{servico.chamada}</p>
                <p className={s.descricao}>{servico.descricao}</p>

                <ul className={s.detalhes}>
                  {servico.detalhes.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>

                <a
                  className={`btn btn-gold ${s.cta}`}
                  href={whatsappLink(mensagemDoServico(servico.slug))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={17} />
                  Agendar {servico.nome}
                </a>
              </div>
            </Reveal>
          ))}
        </ul>

        <p className={s.aviso}>
          As terapias holísticas são práticas complementares de bem-estar e não
          substituem acompanhamento médico ou psicológico. Se você faz algum
          tratamento de saúde, siga com ele — os dois caminhos convivem bem.
        </p>
      </div>
    </section>
  );
}
