#  Preto Jato – Estética Automotiva

![Preview do site](./assets/lava-jato.jpg)

O Preto Jato é um site institucional moderno desenvolvido para uma empresa de estética automotiva de alto padrão. O projeto foca em conversão, permitindo que o cliente visualize serviços, resultados (antes e depois) e realize o agendamento de horários diretamente via WhatsApp.

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?logo=vite)](https://vitejs.dev/)

---

##  Funcionalidades

- **Design moderno e responsivo** – Funciona perfeitamente em dispositivos móveis, tablets e desktops.
- **Menu mobile** com animação suave (Framer Motion).
- **Seções completas**: Início, Serviços, Galeria Antes & Depois, Sobre, Contato e Agendamento.
- **Links funcionais**:
  - Endereço abre no Google Maps.
  - Telefone abre conversa no WhatsApp.
  - Instagram direciona para o perfil oficial.
  - Botão "Chamar no WhatsApp" com mensagem pré-formatada.
- **Sistema de agendamento**:
  - Seleção de data (calendário com dias futuros, exceto domingos).
  - Seleção de horários (intervalos de 30 minutos).
  - Ao confirmar, abre WhatsApp com os dados escolhidos.
  - Campos são resetados automaticamente após o envio.
- **Galeria "Antes & Depois"** com imagens locais e placeholders.
- **Efeitos visuais**:
  - Título "PRETO JATO" com destaque neon em vermelho.
  - Cards com sombras e animações ao passar o mouse.
  - Gradientes e sobreposições personalizadas.
- **Acessibilidade básica**: `aria-label`, foco visível, textos alternativos em imagens.
- **SEO e compartilhamento**: Meta tags Open Graph configuradas no `index.html`.

---

##  Tecnologias Utilizadas

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) – Componentes reutilizáveis
- [Framer Motion](https://www.framer.com/motion/) – Animações
- [Lucide React](https://lucide.dev/) – Ícones
- [date-fns](https://date-fns.org/) – Manipulação de datas
- [React Day Picker](https://react-day-picker.js.org/) – Calendário
- [ESLint](https://eslint.org/) – Padronização de código
- [Vitest](https://vitest.dev/) – Testes (configurado, sem implementações)

---

##  Estrutura de Pastas


---

##  Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm, yarn ou bun

### Passos

1. **Clone o repositório**
   ```bash
   git clone https://github.com/emersoncarlos-dev/preto-jato-shine-2026-main.git
   cd preto-jato-shine-2026-main

## Instale as dependências

npm install
# ou
yarn install
# ou
bun install

# Execute em modo de desenvolvimento

npm run dev

## Build para produção

npm run build

## Pré-visualizar o build

npm run preview

## Executar testes (se configurados)

npm run test        # uma vez
npm run test:watch  # modo contínuo

## Teste em Dispositivos Móveis

Conecte o computador e o celular na mesma rede Wi-Fi.

Execute npm run dev -- --host e acesse o IP exibido no terminal (ex: http://192.168.0.10:5173).

Use ferramentas como ngrok se precisar de um link público temporário.

