import Image from "next/image";
import { NEGOCIO } from "@/lib/site";
import { whatsappLink, MENSAGENS } from "@/lib/whatsapp";
import {
  WhatsAppIcon,
  StarIcon,
  MapPinIcon,
  ScreenIcon,
} from "./Icons";
import s from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`${s.hero} on-night`} id="topo">
      <div className="starfield" aria-hidden="true" />
      <div className="shell">
        <div className={s.grid}>
          <div>
            <p className={s.selo}>
              {NEGOCIO.cidade}/{NEGOCIO.estado} · Presencial e online
            </p>

            <h1 className={s.titulo}>
              Terapias que devolvem
              <em>o teu centro.</em>
            </h1>

            <p className={s.tagline}>&ldquo;{NEGOCIO.tagline}&rdquo;</p>

            <p className={s.texto}>
              Reiki, Tarot e Radiestesia conduzidos por {NEGOCIO.terapeuta} —{" "}
              {NEGOCIO.nomeEspiritual} — em um espaço reservado no bairro
              Bonfim. Um tempo seu, sem pressa, para se escutar de novo.
            </p>

            <div className={s.acoes}>
              <a
                className="btn btn-gold"
                href={whatsappLink(MENSAGENS.geral)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={18} />
                Agendar pelo WhatsApp
              </a>
              <a className="btn btn-outline" href="#servicos">
                Conhecer as terapias
              </a>
            </div>

            <ul className={s.credenciais}>
              <li className={s.credencial}>
                <span className={s.estrelas} aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon key={i} size={13} />
                  ))}
                </span>
                {NEGOCIO.googleNota} no Google
                <span className="sr-only">
                  , com {NEGOCIO.googleAvaliacoes} avaliações
                </span>
              </li>
              <li className={s.credencial}>
                <MapPinIcon size={16} />
                Bairro Bonfim, {NEGOCIO.cidade}
              </li>
              <li className={s.credencial}>
                <ScreenIcon size={16} />
                Atendimento online
              </li>
            </ul>
          </div>

          <figure className={s.retrato}>
            <div className={s.moldura}>
              <Image
                src="/assets/luana-tarot.png"
                alt={`${NEGOCIO.terapeuta}, terapeuta holística em ${NEGOCIO.cidade}, segurando a carta A Estrela do tarot em meio à natureza`}
                width={596}
                height={596}
                priority
                sizes="(max-width: 900px) 90vw, 420px"
              />
            </div>
            <figcaption className={s.legenda}>
              {NEGOCIO.terapeuta}
              <span>{NEGOCIO.nomeEspiritual}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
