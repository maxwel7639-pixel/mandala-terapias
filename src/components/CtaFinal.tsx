import { NEGOCIO } from "@/lib/site";
import { whatsappLink, MENSAGENS } from "@/lib/whatsapp";
import { WhatsAppIcon, InstagramIcon } from "./Icons";
import Reveal from "./Reveal";
import s from "./CtaFinal.module.css";

export default function CtaFinal() {
  return (
    <section className={`${s.cta} section on-night`} id="agendar">
      <div className="starfield" aria-hidden="true" />
      <div className="shell">
        <Reveal className={s.conteudo}>
          <svg
            className={s.simbolo}
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            aria-hidden="true"
          >
            <circle cx="32" cy="32" r="26" />
            <circle cx="32" cy="32" r="17" />
            <circle cx="32" cy="32" r="8" />
            <path d="M32 6v52M6 32h52M13.6 13.6l36.8 36.8M50.4 13.6L13.6 50.4" />
          </svg>

          <h2 className={s.titulo}>
            O primeiro passo é <em>só uma mensagem.</em>
          </h2>

          <p className={s.texto}>
            Você não precisa chegar com a pergunta pronta nem saber qual terapia
            quer. Me conta como você está, e a gente encontra junto o caminho
            que faz sentido para esse momento.
          </p>

          <div className={s.acoes}>
            <a
              className="btn btn-gold"
              href={whatsappLink(MENSAGENS.geral)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} />
              Falar com a {NEGOCIO.terapeuta}
            </a>
            <a
              className="btn btn-outline"
              href={NEGOCIO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon size={18} />
              Ver o Instagram
            </a>
          </div>

          <p className={s.rodapeNota}>
            {NEGOCIO.telefone} · Resposta no horário de atendimento
          </p>
        </Reveal>
      </div>
    </section>
  );
}
