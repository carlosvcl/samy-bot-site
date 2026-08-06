# Samy — Plataforma Premium Multifuncional para Discord 🤖✨

<p align="center">
  <img src="samy-banner2.png" alt="Banner oficial da Samy" width="900">
</p>

<p align="center">
  <strong>
    Administração, economia, segurança, moderação, hardware, logística, atendimento,
    eventos, analytics, automações e integrações em uma experiência guiada por painéis interativos.
  </strong>
</p>

<p align="center">
  <a href="https://discord.com/oauth2/authorize?client_id=461634842296320000">
    <img src="https://img.shields.io/badge/Adicionar%20ao%20Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Adicionar a Samy ao Discord">
  </a>
  <a href="https://discord.gg/haQPSP4EPR">
    <img src="https://img.shields.io/badge/Servidor%20de%20Suporte-11131F?style=for-the-badge&logo=discord&logoColor=white" alt="Entrar no servidor de suporte">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Slash%20Commands-100-5865F2?style=flat-square&logo=discord&logoColor=white" alt="100 Slash Commands">
  <img src="https://img.shields.io/badge/TypeScript-Base%20ativa-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Discord.js-v14-5865F2?style=flat-square&logo=discord&logoColor=white" alt="Discord.js v14">
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB Atlas">
  <img src="https://img.shields.io/badge/Google-Gemini%20AI-8E75B2?style=flat-square&logo=google&logoColor=white" alt="Google Gemini">
</p>

---

## Sobre a Samy

A **Samy** é uma plataforma multifuncional para Discord desenvolvida por **Carlos Gomes**. O projeto reúne recursos para usuários, comunidades, equipes, suporte, servidores públicos e operações internas em uma única experiência.

Em vez de depender de sintaxes extensas e dezenas de subcomandos difíceis de memorizar, a Samy prioriza:

- Slash Commands como pontos de entrada;
- painéis privados e persistentes;
- botões, seletores e modais;
- confirmações para ações sensíveis;
- navegação contextual e paginação;
- permissões e hierarquia revalidadas em cada interação;
- workers observáveis e feature flags;
- transações, locks, idempotência e auditoria;
- internacionalização em Português (Brasil) e Inglês (Estados Unidos);
- integração futura e controlada com o Samy Web.

A arquitetura foi desenhada para crescer mesmo com o limite global de comandos do Discord: novas funções podem ser adicionadas como páginas, módulos e fluxos internos dos painéis, sem inflar o catálogo.

---

## Estado atual da plataforma

| Indicador | Estado |
|---|---:|
| Slash Commands globais | **100** |
| Comandos públicos | **92** |
| Comandos DEV privados | **8** |
| Categorias públicas | **13** |
| Categorias totais | **14** |
| Workers observáveis | **15** |
| Feature flags | **29** |
| Código ativo em `src/` | **TypeScript** |
| Idiomas | **pt-BR / en-US** |

> A migração estrutural do runtime para TypeScript foi concluída. O endurecimento estrito da tipagem continua gradualmente nos módulos legados convertidos, sem comprometer a estabilidade do bot.

---

## Categorias e comandos

### DEV

`/addmoney` · `/apps` · `/dashboard` · `/devctl` · `/featureflags` · `/integridade` · `/release` · `/workerctl`

### Atendimento e Tickets

`/tickets`

### Eventos e Agenda

`/agenda` · `/evento`

### Analytics e Inteligência de Comunidade

`/analytics`

### Automações e Workflows

`/automacao`

### Privacidade e Dados

`/privacidade`

### Integrações

`/integracoes`

### Segurança e Confiança

`/antiraid` · `/automod` · `/incidente` · `/permissoes` · `/quarentena` · `/risco` · `/seguranca` · `/verificacao`

### Economia

`/banco` · `/benchmarks` · `/diario` · `/empresa` · `/energia` · `/hackear` · `/inventario` · `/leilao` · `/loja` · `/lootbox` · `/manutencao` · `/mercado` · `/minerar` · `/mochila` · `/perfil` · `/ranking` · `/rig` · `/saldo` · `/servidor` · `/trabalhar`

### Hardware

`/bench` · `/biosguard` · `/buildlab` · `/debloat` · `/jogosgratis` · `/monitor` · `/pcdoctor` · `/powercheck` · `/promocoes` · `/serverstatus`

### Moderação

`/ban` · `/ban_massa` · `/caso` · `/configurar` · `/historico` · `/kick` · `/limpar` · `/lockdown` · `/mute` · `/nuke` · `/postar` · `/trancar` · `/warn`

### Logística

`/cotacao` · `/declarar` · `/dimensoes` · `/importacao` · `/rastreio` · `/taxa`

### Sistemas

`/conversor` · `/cron` · `/docs` · `/formatar` · `/readme` · `/regex` · `/run`

### Utilidades

`/afk` · `/avatar` · `/botinfo` · `/calculadora` · `/cambio` · `/clima` · `/color` · `/enquete` · `/help` · `/lembrete` · `/notas` · `/ping` · `/qrcode` · `/serverinfo` · `/shorturl` · `/sorteio` · `/temporizador` · `/timestamp` · `/traduzir` · `/userinfo` · `/whois`

---

## Experiência premium

### Central administrativa

O `/configurar` reúne a administração do servidor em um painel guiado. Entre os módulos disponíveis estão:

- logs de moderação;
- cargo de mute;
- autorole;
- antispam;
- XP e exceções;
- boas-vindas e despedidas;
- tickets e suporte;
- alertas de promoções e jogos;
- sistema AFK;
- idioma do servidor;
- diagnóstico de referências inválidas;
- exportação sanitizada;
- restauração protegida de configurações.

Alterações administrativas passam por validação de canal, cargo, hierarquia, permissões e integridade antes da persistência.

### Economia global

A Economia oferece uma experiência de progressão, patrimônio e infraestrutura tecnológica com:

- banco, PIX, crédito, cofre, seguros e investimentos;
- exchange simulada de criptoativos;
- compra, venda e carteira integradas ao `/mercado`;
- cotações com validade e confirmação;
- ledger financeiro e protocolos de operação;
- rigs de mineração, energia e manutenção;
- empresas, cargos e mining pools;
- inventário, consumíveis, leilões e vendas P2P;
- carreira, ranking e temporadas;
- infraestrutura SamyCloud com racks, contratos e SLA.

Operações sensíveis utilizam validação de estado, locks, transações MongoDB, rollback e proteção contra duplicidade.

### Segurança e Confiança

A categoria de Segurança inclui:

- postura de segurança do servidor;
- AntiRaid com simulação;
- AutoMod complementar;
- verificação e onboarding;
- quarentena reversível;
- auditoria de permissões;
- avaliação explicável de risco;
- gestão de incidentes com linha do tempo.

A IA pode auxiliar com explicações, mas decisões de segurança permanecem determinísticas, auditáveis e reversíveis.

### Moderação

A Moderação foi estruturada em comandos, painéis e serviços com:

- prévia antes de punições;
- motivo, evidências e identificação de casos;
- histórico disciplinar privado;
- revogação e encerramento de casos;
- bloqueio contra clique duplo;
- confirmação de operações críticas;
- lockdown persistente e restauração precisa;
- limpeza inteligente;
- relatórios de ações em lote;
- proteção contra menções indevidas.

### Atendimento e Tickets

O `/tickets` concentra a experiência completa de suporte:

- departamentos, formulários e prioridades;
- filas, responsáveis e transferências;
- participantes adicionais e notas internas;
- SLA de primeira resposta e resolução;
- escalonamentos;
- transcrições;
- feedback;
- base de ajuda;
- métricas e retenção.

### Eventos e Agenda

Os painéis de `/evento` e `/agenda` oferecem:

- criação e administração de eventos;
- inscrições e lista de espera;
- check-in e presença;
- recorrência;
- fusos horários;
- lembretes;
- capacidade máxima;
- estatísticas de comparecimento.

### Analytics

O `/analytics` transforma atividade agregada em indicadores para administradores:

- engajamento;
- crescimento;
- retenção;
- horários de atividade;
- saúde dos canais;
- onboarding;
- moderação;
- tickets e eventos;
- detecção de anomalias;
- relatórios e exportações.

O conteúdo das mensagens não é armazenado para compor essas métricas.

### Automações

O `/automacao` permite criar workflows guiados com:

- gatilhos e ações de catálogo fechado;
- condições simples;
- etapas ordenadas;
- modelos reutilizáveis;
- simulação antes da ativação;
- execução manual confirmada;
- histórico, locks e correlação;
- prevenção de loops;
- pausa automática após falhas repetidas.

A arquitetura não permite `eval`, shell, terminal remoto, código arbitrário ou acesso livre ao MongoDB.

### Privacidade

O `/privacidade` reúne:

- inventário de dados por módulo;
- exportação autenticada;
- solicitação de exclusão ou anonimização;
- protocolos e acompanhamento;
- consentimentos opcionais;
- políticas de retenção;
- processamento idempotente.

### Integrações

O `/integracoes` oferece conectores controlados para:

- GitHub;
- feeds RSS e Atom;
- páginas de status;
- monitoramento de saúde;
- histórico de entregas;
- testes de conexão;
- deduplicação e retry com backoff.

A camada de rede utiliza HTTPS, timeout, limite de corpo, validação de redirecionamentos e proteção contra SSRF.

### Hardware

O laboratório de Hardware reúne:

- comparação de CPUs e GPUs;
- fontes públicas e transparentes;
- análise elétrica e de conectores;
- compatibilidade de componentes;
- triagem técnica guiada;
- orientação sobre BIOS;
- manutenção e debloat do Windows;
- monitoramento de preços;
- promoções e jogos gratuitos;
- observabilidade de jogos, cloud e endpoints.

A lógica determinística mantém autoridade sobre diagnósticos. A Gemini atua apenas como camada auxiliar.

---

## Área DEV privada

Os oito comandos DEV são protegidos por contexto de instalação e por listas explícitas de autorização, como `OWNER_IDS` e `BOT_ADMIN_IDS`.

O `/dashboard` oferece visão consolidada de:

- processo Node.js;
- memória, CPU e event loop;
- MongoDB;
- conexão com o Discord;
- latência;
- workers;
- feature flags;
- erros e incidentes;
- comandos mais utilizados;
- tickets, eventos, automações e integrações;
- releases e auditorias de integridade.

O `/devctl` centraliza operações protegidas de manutenção, suporte, auditoria e observabilidade.

O `/integridade` verifica a coerência técnica da plataforma, enquanto o `/release` registra versões, prontidão, deploy e rollback.

Ferramentas de execução arbitrária, como `eval` e terminal remoto irrestrito, não fazem parte da arquitetura.

---

## Internacionalização

A Samy possui i18n por servidor com suporte a:

- Português (Brasil);
- Inglês (Estados Unidos).

A localização abrange comandos, painéis, botões, seletores, modais, erros, confirmações e estados vazios.

---

## Arquitetura

A base segue uma separação em camadas:

```text
Comando
└── registra o Slash Command, valida o acesso inicial e abre o painel

Painel
└── controla embeds, botões, seletores, modais, sessões e navegação

Serviço
└── concentra regras de negócio, concorrência, auditoria e persistência

Modelo
└── representa estados e documentos no MongoDB

Tipos e contratos
└── conectam as camadas e preparam integrações futuras
```

Estrutura resumida:

```text
src/
├── core/
├── data/
├── events/
├── integrations/
├── locales/
├── models/
├── panels/
├── services/
├── slashCommands/
├── types/
└── utils/
```

A compilação TypeScript gera a versão executável em `dist/`, e os scripts de build copiam os recursos necessários para produção.

---

## Segurança e confiabilidade

Entre as proteções utilizadas estão:

- respostas privadas para informações sensíveis;
- validação de permissões e hierarquia;
- revalidação de acesso em cada interação;
- confirmações para ações destrutivas;
- locks e idempotência;
- transações MongoDB e rollback;
- proteção contra cliques duplicados;
- validação de canais, cargos e menções;
- trilha de auditoria;
- retenção controlada;
- feature flags e kill switches;
- workers observáveis;
- tratamento de falhas de banco e APIs;
- proteção contra SSRF, ReDoS e execução arbitrária;
- limpeza segura de artefatos JavaScript legados.

---

## Validação e desenvolvimento

Principais scripts:

```bash
npm run migration:check
npm run migration:clean
npm run typecheck
npm run test:mega
npm run build
npm run deploy
npm run verify:dev-deploy
npm run dev
```

Fluxo recomendado no Windows PowerShell:

```powershell
cmd /c "npm run typecheck && npm run test:mega && npm run deploy && npm run verify:dev-deploy"
```

Somente depois de todos os testes passarem:

```powershell
npm run dev
```

---

## Como adicionar a Samy

1. **[Adicione a Samy ao Discord](https://discord.com/oauth2/authorize?client_id=461634842296320000)**.
2. Escolha o servidor e revise as permissões solicitadas.
3. Execute `/help` para conhecer os módulos disponíveis.
4. Use `/configurar` para preparar os recursos administrativos.
5. Mantenha o cargo da Samy acima dos cargos que ela precisa gerenciar.

---

## Roadmap

A próxima grande etapa planejada é:

### Fase 8 — Samy Nexus: Ecossistema Premium e Experiências Inteligentes

- Samy Music Platform;
- centrais persistentes sem novos Slash Commands;
- evolução do `/dashboard` e dos painéis internos;
- expansão de Tickets, Eventos, Analytics e Automações;
- performance, observabilidade e recuperação de sessões;
- acessibilidade e experiência;
- remoção gradual de `@ts-nocheck`;
- testes de carga, concorrência e recuperação.

O desenvolvimento do **Samy Web** ocorre em projeto separado. O bot prepara contratos e pontos de integração, sem misturar o código dos dois projetos.

---

## Documentos legais

- **[Termos de Serviço](https://github.com/carlosvcl/samy-bot-docs/blob/main/TERMOS_DE_SERVICO.md)**
- **[Política de Privacidade](https://github.com/carlosvcl/samy-bot-docs/blob/main/POLITICA_DE_PRIVACIDADE.md)**

Ao adicionar e utilizar a Samy, o usuário declara estar de acordo com os documentos aplicáveis ao serviço.

---

## Contribuições

Sugestões, relatórios de problemas e contribuições são bem-vindos.

- **[Consultar issues](https://github.com/carlosvcl/samy-bot/issues)**
- **[Abrir uma nova issue](https://github.com/carlosvcl/samy-bot/issues/new/choose)**

Inclua, sempre que possível:

- comando ou módulo afetado;
- comportamento esperado;
- comportamento observado;
- passos para reproduzir;
- capturas ou logs sem dados sensíveis;
- ambiente em que ocorreu.

Nunca envie tokens, arquivos `.env`, chaves de API, credenciais do MongoDB ou dados privados de usuários e servidores.

---

## Tecnologias

| Tecnologia | Utilização |
|---|---|
| **Node.js** | Ambiente de execução |
| **TypeScript** | Código ativo, contratos e compilação |
| **Discord.js v14** | Integração com a API do Discord |
| **MongoDB Atlas** | Persistência de configurações e estados |
| **Mongoose** | Modelagem e operações no MongoDB |
| **Google Gemini API** | Camada auxiliar de inteligência artificial |
| **tsx** | Desenvolvimento e execução TypeScript |
| **Git/GitHub** | Versionamento e colaboração |

---

## Contato e suporte

- **Servidor de suporte:** [discord.gg/haQPSP4EPR](https://discord.gg/haQPSP4EPR)
- **E-mail:** `samybot25@gmail.com`
- **Desenvolvedor:** `CarlosGomes#2263`
- **Projeto:** SamyBot

---

<p align="center">
  <strong>Samy — tecnologia, segurança e experiências premium dentro do Discord.</strong>
</p>

