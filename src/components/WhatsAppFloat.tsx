import { whatsappLink, MENSAGENS } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";
import s from "./WhatsAppFloat.module.css";

export default function WhatsAppFloat() {
  return (
    <a
      className={s.flutuante}
      href={whatsappLink(MENSAGENS.geral)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Luana no WhatsApp"
    >
      <WhatsAppIcon size={22} />
      <span className={s.rotulo}>Agendar</span>
    </a>
  );
}
