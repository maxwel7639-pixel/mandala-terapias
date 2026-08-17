import { NEGOCIO } from "./site";

/**
 * Monta o link do WhatsApp com mensagem pré-preenchida.
 * Cada CTA passa seu próprio contexto para a Luana já saber de onde veio o contato.
 */
export function whatsappLink(mensagem: string): string {
  return `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export const MENSAGENS = {
  geral:
    "Oi, Luana! Vim pelo site e gostaria de saber mais sobre as terapias. Pode me ajudar?",
  reiki:
    "Oi, Luana! Vim pelo site e tenho interesse em uma sessão de Reiki. Como funciona para agendar?",
  tarot:
    "Oi, Luana! Vim pelo site e tenho interesse em uma leitura de Tarot. Como funciona para agendar?",
  radiestesia:
    "Oi, Luana! Vim pelo site e tenho interesse em Radiestesia. Como funciona para agendar?",
  online:
    "Oi, Luana! Vim pelo site e gostaria de saber como funciona o atendimento online.",
} as const;

export function mensagemDoServico(slug: string): string {
  if (slug in MENSAGENS) {
    return MENSAGENS[slug as keyof typeof MENSAGENS];
  }
  return MENSAGENS.geral;
}
