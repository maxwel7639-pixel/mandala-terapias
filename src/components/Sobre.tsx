import Image from "next/image";
import { NEGOCIO } from "@/lib/site";
import Reveal from "./Reveal";
import s from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section className={`${s.sobre} section`} id="sobre">
      <div className="shell">
        <p className="eyebrow">
          <span className="num">01</span> Quem conduz
        </p>

        <div className="grid-editorial">
          <Reveal>
            <figure className={s.foto}>
              <Image
                src="/assets/luana-natureza.png"
                alt={`${NEGOCIO.terapeuta} ao ar livre, sorrindo, com um relógio de madeira no pulso`}
                width={947}
                height={625}
                sizes="(max-width: 900px) 90vw, 480px"
              />
            </figure>
            <p className={s.creditoFoto}>
              {NEGOCIO.terapeuta} · {NEGOCIO.cidade}/{NEGOCIO.estado}
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h2>
              Um espaço para
              <br />
              voltar para si.
            </h2>

            <div className={s.corpo}>
              <p className="dropcap">
                Quem chega aqui quase nunca chega sabendo explicar direito o que
                está sentindo. Chega cansada, com a cabeça cheia, com a sensação
                de estar vivendo no automático. O trabalho começa exatamente
                aí: em criar um tempo silencioso o bastante para você conseguir
                se escutar.
              </p>

              <p>
                Sou a {NEGOCIO.terapeuta}, e no caminho espiritual atendo por{" "}
                {NEGOCIO.nomeEspiritual}. Conduzo sessões de Reiki, Tarot e
                Radiestesia em Santa Maria há anos, sempre da mesma forma: sem
                pressa, sem julgamento e sem prometer atalho nenhum. O que
                ofereço é presença e método — o movimento continua sendo seu.
              </p>

              <blockquote className="pullquote">
                Eu sou cético, mas o atendimento da Luana realmente faz efeito e
                faz me sentir melhor comigo e com o ambiente em volta de mim.
              </blockquote>

              <p>
                Essa frase é de uma avaliação real no Google, e ela resume bem o
                convite: você não precisa acreditar em nada para começar. Basta
                aparecer com um pouco de abertura. O resto a gente constrói na
                sessão, no seu ritmo.
              </p>
            </div>

            <div className={s.assinatura}>
              <p className={s.nomeAssinatura}>{NEGOCIO.nomeEspiritual}</p>
              <p className={s.papelAssinatura}>
                {NEGOCIO.terapeuta} · Terapeuta holística
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
