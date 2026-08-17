# Mandala Terapias Holísticas

Site institucional da **Mandala Terapias Holísticas** — Reiki, Tarot e Radiestesia com a terapeuta Luana (Jinpa Drolma), em Santa Maria/RS.

Next.js 16 · React 19 · TypeScript · CSS Modules · sem dependências de UI.

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run lint
```

## Onde mexer

| Precisa mudar | Arquivo |
|---|---|
| Telefone, endereço, nota do Google, Instagram | `src/lib/site.ts` → `NEGOCIO` |
| Textos dos serviços | `src/lib/site.ts` → `SERVICOS` |
| Depoimentos | `src/lib/site.ts` → `DEPOIMENTOS` |
| Perguntas do FAQ | `src/lib/site.ts` → `FAQ` |
| Mensagens pré-prontas do WhatsApp | `src/lib/whatsapp.ts` |
| Cores, fontes, espaçamento | `src/app/globals.css` (bloco `:root`) |

Praticamente todo o conteúdo está em `src/lib/site.ts`. Dá para editar o site inteiro sem tocar em componente.

## Design system

Gerado com a skill `ui-ux-pro-max`.

- **Padrão de página:** Hero-Centric + Social Proof
- **Estilo:** Editorial Grid / Magazine — grid assimétrico, capitular, citação de destaque, filetes dourados
- **Paleta:** roxo espiritual + ouro quente
- **Tipografia:** Cormorant Garamond (títulos) + Jost (corpo)

### Regra de contraste do ouro

`--gold` (#CA8A04) tem contraste 2.8:1 sobre fundo claro — **abaixo do mínimo de 4.5:1**. Por isso o ouro só aparece em:

- filetes, bordas e detalhes decorativos;
- texto sobre `--night` (6.2:1 ✓);
- botão preenchido com texto escuro por cima (5.1:1 ✓).

Nunca usar ouro em texto corrido sobre papel claro.

## Pendências

### 1. Faltam 2 fotos

Os cards de Reiki e Radiestesia estão com uma gravura dourada de espera, não com foto real — o padrão de entrega MX pede foto de fundo real em card de serviço.

Quando as fotos chegarem:

1. Salvar em `public/assets/` (ex.: `reiki.jpg`, `radiestesia.jpg`)
2. Em `src/lib/site.ts`, trocar `imagem: null` pelo caminho

O card de Tarot já usa foto real.

### 2. Texto do "Sobre" precisa do aval da Luana

O texto foi escrito a partir do que os clientes dizem nas avaliações do Google (acolhimento, cuidado, ambiente tranquilo) — não de uma biografia que ela tenha passado. Vale ela ler e ajustar antes de publicar. Formação, tempo de atuação e linhagem não foram citados justamente por não estarem confirmados.

### 3. Imagem de Open Graph

Hoje usa a foto do Tarot (596×596). O ideal para compartilhamento é 1200×630 — se quiser trocar, é só apontar `openGraph.images` em `src/app/layout.tsx`.

### 4. Ajustar a URL depois do deploy

`NEGOCIO.site` em `src/lib/site.ts` está com `https://mandala-terapias.vercel.app`. Se o domínio final for outro, trocar lá — é o que alimenta canonical, Open Graph e Schema.org.

## Conformidade do nicho

Terapias holísticas não podem prometer cura. O site não usa "cura", "trata" ou "resolve", e traz aviso em dois pontos (fim da seção de Terapias e rodapé) de que são práticas complementares que não substituem acompanhamento médico ou psicológico.

## Acessibilidade

- Contraste mínimo de 4.5:1 em todo texto
- Foco visível em tudo que é navegável por teclado
- FAQ em `<details>/<summary>` nativo — funciona sem JavaScript
- `prefers-reduced-motion` respeitado
- Alvos de toque de no mínimo 44px
- Alt descritivo nas fotos; ícones decorativos com `aria-hidden`
