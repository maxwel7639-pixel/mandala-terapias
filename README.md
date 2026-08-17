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
- **Paleta:** roxo profundo + ouro quente, escura de ponta a ponta
- **Tipografia:** Cormorant Garamond (títulos) + Jost (corpo)

### Superfícies

O site não tem seção clara. As seções se distinguem por **tom**, nunca por claro-contra-escuro:

| Token | Hex | Uso |
|---|---|---|
| `--night` | `#1B0B33` | Hero, Sobre, Como Funciona, FAQ, CTA final |
| `--night-2` | `#22103F` | Serviços, Depoimentos, Localização |
| `--surface` | `#2B1456` | Cartões |
| `--surface-hi` | `#351B66` | Hover e destaque |

Não há branco puro em nenhuma superfície — o ponto de luz é sempre o ouro. As 24 combinações de texto sobre esses fundos passam em WCAG AA (a mais apertada é ouro sobre `--surface-hi`, 4.77:1).

**Atenção:** `--gold` (#CA8A04) tem só 2.8:1 sobre fundo claro. Se um dia entrar superfície clara, o ouro não serve para texto nela.

## Pendências

### 1. Imagens dos cards estão em baixa resolução

As três artes das terapias têm cerca de **240px de largura**, e os cards as exibem com uns 350px — ou seja, sobem de escala e ficam levemente macias, principalmente em tela de alta densidade.

Se der para reexportar com 1000px ou mais de largura, é só substituir os arquivos em `public/assets/` mantendo os nomes (`terapia-reiki.png`, `terapia-tarot.png`, `terapia-radiestesia.png`). Nada mais precisa mudar.

O recorte de cada arte é ajustável pelo campo `foco` em `src/lib/site.ts` — na de Reiki, por exemplo, ele empurra o enquadramento para baixo para a palavra "REIKI" da arte não brigar com o título do card.

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
