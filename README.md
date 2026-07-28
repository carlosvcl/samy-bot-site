# Samy Bot — Seu Assistente Multifuncional para Discord 🤖✨

<p align="center">
  <img src="samy-banner2.png" alt="Banner do Bot Samy" width="750"/>
</p>

<p align="center">
  <strong>Samy é um bot de Discord premium, construído inteiramente com Slash Commands e painéis interativos — economia, moderação, hardware, monitoramento de rede, ferramentas de desenvolvedor e integração com IA Gemini, tudo num só lugar.</strong>
</p>

<p align="center">
  <a href="INVITE_LINK_AQUI">
    <img src="https://img.shields.io/badge/Adicione--me%20ao%20seu%20Servidor-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Adicionar Samy Bot ao Discord">
  </a>
  <a href="SUPPORT_SERVER_AQUI">
    <img src="https://img.shields.io/badge/Servidor%20de%20Suporte-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Servidor de Suporte do Samy Bot">
  </a>
</p>

> ⚠️ **Nota de manutenção:** os dois botões acima usam links de espaço reservado (`INVITE_LINK_AQUI` / `SUPPORT_SERVER_AQUI`). Substitua pelos links reais antes de publicar — veja a seção [Pendências antes de publicar](#-pendências-antes-de-publicar) no final deste arquivo.

---

## 🌟 Sobre o Samy Bot

Samy é um projeto pessoal de **Carlos Gomes**, construído para ser um assistente completo de servidor — não só um bot de comandos soltos, mas um conjunto de **painéis interativos** que guiam o usuário passo a passo, sem precisar decorar sintaxe.

Todos os comandos usam **Slash Commands** (`/comando`) nativos do Discord, com autocomplete, confirmação em ações sensíveis, e suporte a **Português (BR) e Inglês (US)**.

### ✨ Funcionalidades

* ⚙️ **Configuração Completa do Servidor** (`/configurar`)
  Painel único com módulos de moderação, sistema de XP, boas-vindas/despedida (com autorole real), tickets, alertas automáticos, sistema de AFK e preferências gerais — tudo em um só lugar, com alterações salvas automaticamente.

* 💰 **Economia Global com Exchange de Criptomoedas** (`/mercado`, `/vender`, `/banco`, `/carteira`, `/trabalhar`, `/loja`, `/leilao`, `/empresa`, e mais)
  Terminal de trading completo com gráficos de 24h, portfólio com PNL em tempo real, ordens de compra/venda por porcentagem do saldo/posição, e um motor de preços simulado consistente entre todos os comandos.

* 🛡️ **Moderação Robusta** (`/ban`, `/kick`, `/mute`, `/warn`, `/limpar`, `/trancar`, `/lockdown`, `/historico`, e mais)
  Do dia a dia ao modo pânico: o `/lockdown` tranca todos os canais de texto do servidor de uma vez (preservando o estado exato de canais que já tinham permissões customizadas) para conter raids.

* 🖥️ **Laboratório de Hardware** (`/bench`, `/serverstatus`)
  Compare qualquer CPU ou GPU do catálogo (dezenas de peças Intel/AMD/NVIDIA), com **análise por Inteligência Artificial** explicando qual é melhor para jogos, produtividade e faixa de preço. O `/serverstatus` monitora em tempo real o status de Discord, GitHub, Steam, Riot Games e outros serviços — incluindo consulta a **qualquer servidor customizado** por IP/domínio.

* 🧰 **Ferramentas do Dia a Dia** (`/qrcode`, `/shorturl`, `/afk`, `/lembrete`, `/enquete`, `/calculadora`, `/cambio`, `/clima`, e mais)
  O `/afk` conta com aviso por DM (sem floodar o servidor), cooldown anti-spam de menções e painel próprio para gerenciar seu status.

* 🔧 **Painel de Desenvolvedor** (`/devctl`, `/dashboard`)
  Ferramentas internas restritas aos administradores do bot: monitoramento de sistema, logs de erro centralizados, estatísticas de uso de comandos, suporte remoto a servidores, blacklist, modo de manutenção e muito mais.

* 🧠 **Inteligência Artificial com Google Gemini**
  Usada para gerar análises comparativas de hardware sob demanda, com cache inteligente para não desperdiçar cota de API.

* 🌍 **Suporte Multilíngue (i18n)**
  Português (BR) e Inglês (US) configuráveis por servidor, com todos os textos dos painéis principais traduzidos.

> 📦 O Samy está em desenvolvimento contínuo — novos comandos e categorias são adicionados regularmente. Esta lista reflete o estado do projeto no momento desta atualização e não é definitiva.

---

## 🚀 Comece a Usar o Samy!

1. **Clique para convidar o Samy** usando o botão no topo deste README (ou o link direto, quando publicado).
2. Selecione o servidor ao qual deseja adicioná-lo.
3. Autorize as permissões necessárias — o Samy avisa no próprio painel (`/devctl`, se você for admin do bot) caso falte alguma permissão importante em um canal específico.
4. Digite `/help` em qualquer canal para ver todas as categorias e comandos disponíveis.

---

## 📜 Documentos Legais

* **[Termos de Serviço (ToS)](LINK_TOS_AQUI)** — regras e diretrizes para o uso do bot Samy.
* **[Política de Privacidade](LINK_PRIVACIDADE_AQUI)** — como coletamos, usamos e protegemos as informações dos servidores.

> ⚠️ Confira se esses dois links ainda apontam para documentos válidos e atualizados antes de publicar.

Ao adicionar e usar o Samy Bot, você concorda com estes termos e políticas.

---

## 🤝 Contribuições

Ideias para novas funcionalidades, bugs encontrados ou vontade de colaborar? Toda contribuição é bem-vinda:

1. **Reportando bugs ou sugerindo funcionalidades**
   Verifique se já existe uma [Issue](LINK_ISSUES_AQUI) parecida antes de abrir uma nova.
2. **Contribuindo com código**
   * Faça um fork deste repositório.
   * Crie uma branch descritiva (`feature/nome-da-feature` ou `fix/nome-do-bug`).
   * Commits claros, um por mudança lógica.
   * Abra um Pull Request explicando o que mudou e por quê.

---

## 🛠️ Tecnologias Utilizadas

* **[Node.js](https://nodejs.org/)** — ambiente de execução JavaScript.
* **[Discord.js](https://discord.js.org/)** — biblioteca principal de interação com a API do Discord.
* **[MongoDB](https://www.mongodb.com/) / [Mongoose](https://mongoosejs.com/)** — persistência de dados (economia, configuração de servidores, logs, estatísticas).
* **[Google Gemini API](https://ai.google.dev/)** — funcionalidades de Inteligência Artificial.

---

## 📞 Contato e Suporte

* **💬 Servidor de Suporte:** [Junte-se aqui](SUPPORT_SERVER_AQUI)
* **📧 E-mail:** `EMAIL_AQUI`
* **👤 Desenvolvedor:** `@USERNAME_ATUAL_AQUI`

> ⚠️ O Discord aposentou o sistema antigo de tags numéricas (`Nome#0000`) — use seu `@usuário` atual aqui.

---

