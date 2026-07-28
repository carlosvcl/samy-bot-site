# Samy Bot — Seu Assistente Multifuncional para Discord 🤖✨

<p align="center">
  <img src="samy-banner2.png" alt="Banner do Bot Samy" width="750"/>
</p>

<p align="center">
  <strong>Samy é um bot de Discord premium, construído inteiramente com Slash Commands e painéis interativos — economia, moderação, hardware, monitoramento de rede, ferramentas de desenvolvedor e integração com IA Gemini, tudo num só lugar.</strong>
</p>

<p align="center">
  <a href="https://discord.com/api/oauth2/authorize?client_id=461634842296320000&permissions=8&scope=bot%20applications.commands">
    <img src="https://img.shields.io/badge/Adicione--me%20ao%20seu%20Servidor-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Adicionar Samy Bot ao Discord">
  </a>
  <a href="https://discord.gg/haQPSP4EPR">
    <img src="https://img.shields.io/badge/Servidor%20de%20Suporte-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Servidor de Suporte do Samy Bot">
  </a>
</p>

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

1. **[Clique aqui para convidar o Samy](https://discord.com/api/oauth2/authorize?client_id=461634842296320000&permissions=8&scope=bot%20applications.commands)**.
2. Selecione o servidor ao qual deseja adicioná-lo.
3. Autorize as permissões necessárias — o Samy avisa no próprio painel (`/devctl`, se você for admin do bot) caso falte alguma permissão importante em um canal específico.
4. Digite `/help` em qualquer canal para ver todas as categorias e comandos disponíveis.

---

## 📜 Documentos Legais

* **[Termos de Serviço (ToS)](https://github.com/carlosvcl/samy-bot-docs/blob/main/TERMOS_DE_SERVICO.md)** — regras e diretrizes para o uso do bot Samy.
* **[Política de Privacidade](https://github.com/carlosvcl/samy-bot-docs/blob/main/POLITICA_DE_PRIVACIDADE.md)** — como coletamos, usamos e protegemos as informações dos servidores.

Ao adicionar e usar o Samy Bot, você concorda com estes termos e políticas.

---

## 🤝 Contribuições

Ideias para novas funcionalidades, bugs encontrados ou vontade de colaborar? Toda contribuição é bem-vinda:

1. **Reportando bugs ou sugerindo funcionalidades**
   Verifique se já existe uma [Issue](https://github.com/carlosvcl/samy-bot/issues) parecida antes de [abrir uma nova](https://github.com/carlosvcl/samy-bot/issues/new/choose).
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

* **💬 Servidor de Suporte:** [Junte-se aqui](https://discord.gg/haQPSP4EPR)
* **📧 E-mail:** `samybot25@gmail.com`
* **👤 Desenvolvedor:** CarlosGomes 

---

## ✅ Pendências antes de publicar

- [ ] Arquivo `samy-banner2.png` — confirme se ainda existe no repositório e representa a versão atual do bot.
- [ ] Seu `@usuário` atual do Discord na seção de Contato — o formato antigo `CarlosGomes#2263` não é mais usado pelo Discord; adicione seu handle atual se quiser facilitar contato direto.
