import Image from "next/image";
import { DEPOIMENTOS } from "@/lib/site";
import Reveal from "./Reveal";
import s from "./Depoimentos.module.css";

/**
 * Uma cópia da lista de prints. Renderizada duas vezes na pista para o
 * loop emendar sem salto — a segunda cópia é escondida do leitor de tela
 * para não repetir os mesmos depoimentos.
 */
function Prints({ oculto }: { oculto?: boolean }) {
  return (
    <>
      {DEPOIMENTOS.map((d) => (
        <figure
          className={s.item}
          key={`${d.nome}-${oculto ? "b" : "a"}`}
          aria-hidden={oculto ? "true" : undefined}
        >
          <Image
            src={d.imagem}
            alt={oculto ? "" : d.texto}
            width={d.largura}
            height={d.altura}
            sizes="430px"
          />
        </figure>
      ))}
    </>
  );
}

export default function Depoimentos() {
  return (
    <section className={`${s.depoimentos} section tone-mid`} id="depoimentos">
      <div className="shell">
        <div className={s.cabecalho}>
          <p className="eyebrow">
            <span className="num">04</span> Quem já passou por aqui
          </p>
          <h2>O que dizem sobre as sessões.</h2>
          <p>
            Prints das avaliações publicadas no perfil do Google da Mandala,
            exatamente como estão lá. Passe o mouse para pausar.
          </p>
        </div>
      </div>

      <Reveal className={s.palco}>
        <div className={s.pista}>
          <Prints />
          <Prints oculto />
        </div>
      </Reveal>

      <div className="shell">
        <p className={s.rodape}>Avaliações reais no Google</p>
      </div>
    </section>
  );
}
