import { NEGOCIO, SERVICOS } from "@/lib/site";
import { whatsappLink, mensagemDoServico, MENSAGENS } from "@/lib/whatsapp";
import { WhatsAppIcon, InstagramIcon, MapPinIcon } from "./Icons";
import s from "./Footer.module.css";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className={s.rodape}>
      <div className="shell">
        <div className={s.grid}>
          <div>
            <p className={s.marca}>Mandala</p>
            <p className={s.marcaSub}>Terapias Holísticas</p>
            <p className={s.descricao}>
              Reiki, Tarot e Radiestesia com {NEGOCIO.terapeuta} —{" "}
              {NEGOCIO.nomeEspiritual}. Atendimento presencial em{" "}
              {NEGOCIO.cidade}/{NEGOCIO.estado} e online.
            </p>
          </div>

          <div>
            <p className={s.tituloCol}>Terapias</p>
            <ul className={s.lista}>
              {SERVICOS.map((servico) => (
                <li key={servico.slug}>
                  <a
                    href={whatsappLink(mensagemDoServico(servico.slug))}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {servico.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={s.tituloCol}>Contato</p>
            <ul className={s.lista}>
              <li>
                <a
                  href={whatsappLink(MENSAGENS.geral)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={16} />
                  {NEGOCIO.telefone}
                </a>
              </li>
              <li>
                <a
                  href={NEGOCIO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon size={16} />@{NEGOCIO.instagram}
                </a>
              </li>
              <li>
                <a
                  href={NEGOCIO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPinIcon size={16} />
                  {NEGOCIO.endereco}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={s.base}>
          <p>
            © {ano} {NEGOCIO.nome}. Todos os direitos reservados.
          </p>
          <p>
            Site por{" "}
            <a
              href="https://instagram.com/mxdigital.ia"
              target="_blank"
              rel="noopener noreferrer"
            >
              MX Digital
            </a>
          </p>
        </div>

        <p className={s.aviso}>
          As terapias holísticas oferecidas neste site são práticas
          complementares de bem-estar e não constituem diagnóstico, tratamento
          ou cura de qualquer condição de saúde. Elas não substituem
          acompanhamento médico, psicológico ou o uso de medicamentos
          prescritos.
        </p>
      </div>
    </footer>
  );
}
