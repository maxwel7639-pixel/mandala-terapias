"use client";

import { useState } from "react";
import { NEGOCIO } from "@/lib/site";
import { whatsappLink, MENSAGENS } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";
import s from "./Nav.module.css";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Terapias" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#localizacao", label: "Onde fica" },
  { href: "#faq", label: "Dúvidas" },
];

export default function Nav() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className={s.nav}>
      <div className="shell">
        <div className={s.inner}>
          <a href="#topo" className={s.marca}>
            <span className={s.marcaNome}>Mandala</span>
            <span className={s.marcaSub}>Terapias Holísticas</span>
          </a>

          <nav aria-label="Navegação principal">
            <ul className={s.links}>
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            className={`btn btn-gold ${s.acao}`}
            href={whatsappLink(MENSAGENS.geral)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={18} />
            Agendar
          </a>

          <button
            type="button"
            className={s.toggle}
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            onClick={() => setAberto((v) => !v)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {aberto ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {aberto && (
          <div className={s.painel} id="menu-mobile">
            <ul>
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setAberto(false)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className={`btn btn-gold ${s.painelCta}`}
              href={whatsappLink(MENSAGENS.geral)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} />
              Agendar pelo WhatsApp
            </a>
            <p className="sr-only">Telefone: {NEGOCIO.telefone}</p>
          </div>
        )}
      </div>
    </header>
  );
}
