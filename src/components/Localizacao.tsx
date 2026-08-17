import { NEGOCIO } from "@/lib/site";
import { whatsappLink, MENSAGENS } from "@/lib/whatsapp";
import { MapPinIcon, ScreenIcon, WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";
import s from "./Localizacao.module.css";

export default function Localizacao() {
  return (
    <section className={`${s.local} section`} id="localizacao">
      <div className="shell">
        <div className={s.cabecalho}>
          <p className="eyebrow">
            <span className="num">05</span> Onde acontece
          </p>
          <h2>Presencial em Santa Maria — ou de onde você estiver.</h2>
        </div>

        <div className={s.cartoes}>
          <Reveal className={s.cartao}>
            <div className={s.cartaoTopo}>
              <MapPinIcon size={22} />
              <h3>No espaço</h3>
            </div>

            <address className={s.endereco} style={{ fontStyle: "normal" }}>
              Rua Dr. Bozano, 729 — sala 302
              <br />
              Bairro Bonfim, {NEGOCIO.cidade}/{NEGOCIO.estado}
            </address>
            <p className={s.cep}>CEP {NEGOCIO.cep}</p>

            <p className={s.texto}>
              Uma sala reservada e silenciosa, preparada para você chegar e não
              precisar se explicar. O horário é combinado antes pelo WhatsApp —
              o atendimento é individual e com hora marcada.
            </p>

            <a
              className={`btn btn-outline ${s.acao}`}
              href={NEGOCIO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPinIcon size={17} />
              Abrir no Google Maps
            </a>
          </Reveal>

          <Reveal delay={90} className={s.cartao}>
            <div className={s.cartaoTopo}>
              <ScreenIcon size={22} />
              <h3>Online</h3>
            </div>

            <ul className={s.listaOnline}>
              <li>Tarot por chamada de vídeo</li>
              <li>Reiki à distância, em horário combinado</li>
              <li>Radiestesia à distância</li>
              <li>Atendimento para qualquer cidade</li>
            </ul>

            <p className={s.texto}>
              Se você não é de Santa Maria — ou simplesmente prefere estar em
              casa — o atendimento acontece do mesmo jeito, com o mesmo cuidado.
            </p>

            <a
              className={`btn btn-gold ${s.acao}`}
              href={whatsappLink(MENSAGENS.online)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={17} />
              Saber sobre o online
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
