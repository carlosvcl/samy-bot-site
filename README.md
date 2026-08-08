# Samy — Plataforma Premium Multifuncional para Discord 🤖✨

<p align="center">
  <img src="samy-banner.jpg" alt="Banner oficial da Samy" width="900">
</p>

<p align="center">
  <strong>
    Administração premium, GuildOS, inteligência artificial, música, segurança, moderação,
    economia, hardware, tickets, eventos, analytics, automações e integrações em uma única plataforma para Discord.
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
  <img src="https://img.shields.io/badge/Workers-29-0EA5E9?style=flat-square" alt="29 Workers">
  <img src="https://img.shields.io/badge/Feature%20Flags-56-8B5CF6?style=flat-square" alt="56 Feature Flags">
  <img src="https://img.shields.io/badge/TypeScript-Runtime%20ativo-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Discord.js-v14-5865F2?style=flat-square&logo=discord&logoColor=white" alt="Discord.js v14">
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB Atlas">
  <img src="https://img.shields.io/badge/Google-Gemini%20AI-8E75B2?style=flat-square&logo=google&logoColor=white" alt="Google Gemini">
  <img src="https://img.shields.io/badge/GuildOS-Fase%2010-16A34A?style=flat-square" alt="Samy GuildOS">
</p>

---

## Sobre a Samy

A **Samy** é uma plataforma multifuncional para Discord desenvolvida por **Carlos Gomes**. O projeto foi construído para atender desde pequenos servidores até comunidades, equipes, operações de suporte e estruturas administrativas maiores sem transformar a experiência em uma coleção confusa de comandos.

A filosofia da plataforma é simples: **Slash Commands são pontos de entrada; a experiência real acontece em centrais e painéis guiados**.

A Samy prioriza:

- Slash Commands com navegação por botões, selects e modais;
- painéis privados e centrais persistentes;
- confirmações para ações sensíveis;
- locks, idempotência e revalidação de estado;
- transações e rollback em operações críticas;
- workers observáveis e controláveis;
- feature flags e kill switches;
- auditoria e protocolos de operação;
- internacionalização em **Português (Brasil)** e **Inglês (Estados Unidos)**;
- inteligência artificial subordinada a regras determinísticas;
- expansão de recursos sem inflar o catálogo global de comandos;
- preparação controlada para integração futura com o **Samy Web**, desenvolvido separadamente.

> A Samy não busca ser apenas “um bot com muitos comandos”. O objetivo é funcionar como uma **plataforma operacional, inteligente e administrável dentro do Discord**.

---

## Estado atual da plataforma

| Indicador | Estado |
|---|---:|
| Slash Commands | **100** |
| Comandos públicos | **92** |
| Comandos privados/DEV | **8** |
| Workers observáveis | **29** |
| Feature flags | **56** |
| Código ativo em `src/` | **TypeScript** |
| JavaScript ativo em `src/` | **0** |
| Arquivos em endurecimento gradual com `@ts-nocheck` | **241** |
| Idiomas | **pt-BR / en-US** |
| Mega Fase atual validada | **Fase 10 — Samy GuildOS** |

A migração estrutural do runtime para TypeScript foi concluída. O endurecimento estrito da tipagem continua gradualmente em módulos legados convertidos, sem impedir a evolução do produto.

---

# Principais pilares

## 🏛️ Samy GuildOS — Administração premium da guild

A **Mega Fase 10** introduziu o **Samy GuildOS**, uma camada de administração completa para servidores Discord.

Dentro do `/configurar`, o administrador pode acessar uma central dedicada com recursos como:

- diagnóstico de saúde da guild;
- Setup Wizard guiado;
- blueprints seguros para criação de estruturas;
- prévia de alterações antes da aplicação;
- criação automatizada de categorias, canais e cargos;
- análise determinística de permissões;
- backups versionados;
- restore seguro por escopo;
- Change Sets auditáveis;
- snapshot automático antes de mudanças;
- rollback;
- backup automático configurável;
- RBAC administrativo;
- cargos gestores e aprovadores;
- dupla aprovação para mudanças críticas;
- reconciliação de operações interrompidas.

### Fluxo de mudança do GuildOS

```text
Preparar
  ↓
Validar
  ↓
Visualizar impacto
  ↓
Aprovar
  ↓
Criar snapshot pré-mudança
  ↓
Aplicar
  ↓
Verificar
  ↓
Auditar
  ↓
Rollback, se necessário
```

O GuildOS foi desenvolvido para evitar alterações silenciosas e reduzir o risco de mudanças administrativas irreversíveis.

### Blueprints atuais

O GuildOS possui blueprints seguros para diferentes cenários:

- 🎮 Comunidade Gamer
- 🏢 Empresa
- 🎫 Suporte
- 🎓 Estudos
- 🎨 Criadores
- 💻 Tecnologia

Os blueprints trabalham com operações fechadas e não concedem `Administrator` automaticamente.

---

## 🧠 Samy Intelligence — IA contextual e segura

A **Mega Fase 9** criou a camada **Samy Intelligence**.

A IA deixou de ser uma função isolada e passou a utilizar uma arquitetura central com:

- provider centralizado;
- timeout, retry e exponential backoff;
- circuit breaker;
- cache;
- limites de concorrência;
- backpressure;
- controle de orçamento;
- telemetria;
- correlation IDs;
- guardrails;
- isolamento por guild.

### Knowledge Engine

Cada servidor pode possuir uma base de conhecimento própria com:

- FAQ;
- regras;
- procedimentos;
- documentação;
- informações da equipe;
- tutoriais;
- fontes e referências.

O conteúdo é isolado por guild e pode ser versionado, deduplicado e consultado pelo assistente.

### Samy AI Assistant

O assistente é integrado à experiência da plataforma, incluindo o `/docs`, e utiliza ferramentas internas fechadas para consultar dados reais.

Ferramentas controladas incluem:

```text
tickets.summary
events.next
analytics.latest
automations.health
configuration.summary
guild.intelligence
workers.health
```

A IA **não recebe acesso livre ao MongoDB, shell, terminal, `eval` ou execução arbitrária de código**.

### Memória e privacidade

A memória contextual utiliza:

- consentimento;
- TTL;
- exportação;
- exclusão;
- isolamento por guild;
- controle de uso de contexto.

Ações críticas de moderação, segurança, economia ou administração não dependem exclusivamente de decisões da IA.

---

## 🎵 Samy Music Platform

A **Mega Fase 8 — Samy Nexus** consolidou a Music Platform e as centrais persistentes.

A plataforma de música possui:

- painel persistente;
- fila de reprodução;
- busca e reprodução por link;
- recuperação de sessões;
- controle de inatividade;
- workers específicos;
- proteção de estado em falhas;
- retries e recuperação de stream;
- FFmpeg e Opus;
- `yt-dlp` por meio de `youtube-dl-exec` como provedor principal de áudio;
- `play-dl` utilizado onde aplicável para busca e fallback.

A arquitetura encerra processos de streaming quando uma faixa é interrompida, pulada ou finalizada para evitar processos órfãos.

---

## 🛡️ Segurança e Confiança

A camada de Segurança inclui:

- postura de segurança da guild;
- AntiRaid;
- AutoMod complementar;
- verificação e onboarding;
- quarentena reversível;
- auditoria de permissões;
- risco explicável;
- gestão de incidentes;
- workers dedicados;
- feature flags próprias.

A IA pode explicar ou resumir evidências, mas punições permanecem **determinísticas, auditáveis e reversíveis**.

---

## 🔨 Moderação

A Moderação utiliza comandos, painéis e serviços especializados com:

- prévia antes de punições;
- motivo e evidências;
- identificação de casos;
- histórico disciplinar;
- revogação e encerramento;
- locks contra duplo clique;
- confirmação de operações críticas;
- lockdown persistente;
- restauração precisa;
- limpeza inteligente;
- ações em lote;
- proteção contra menções indevidas.

O `/configurar` evoluiu de uma central de configuração administrativa para também hospedar o **Samy GuildOS** e outras áreas premium.

---

## 🎫 Atendimento e Tickets

O `/tickets` concentra o atendimento em uma única central:

- departamentos;
- formulários;
- prioridades;
- filas;
- responsáveis;
- transferências;
- participantes;
- notas internas;
- SLA;
- escalonamento;
- transcrições;
- feedback;
- base de ajuda;
- métricas e retenção;
- integração com Samy Intelligence.

---

## 📅 Eventos e Agenda

O `/evento` concentra a administração de eventos com:

- criação;
- inscrições;
- lista de espera;
- check-in;
- presença;
- recorrência;
- fusos horários;
- lembretes;
- capacidade;
- estatísticas.

O `/agenda`, localizado entre as Utilidades, atua como ponto de acesso à experiência de agenda/eventos.

---

## 📊 Analytics e Guild Intelligence

O `/analytics` transforma atividade agregada em indicadores como:

- engajamento;
- crescimento;
- retenção;
- horários de pico;
- saúde de canais;
- onboarding;
- moderação;
- tickets;
- eventos;
- anomalias;
- relatórios e exportações.

A **Guild Intelligence** adiciona:

- Health Score;
- sinais;
- findings;
- recomendações;
- snapshots auditáveis.

O conteúdo das mensagens não é utilizado como armazenamento permanente para formar essas métricas.

---

## ⚡ Automações

O `/automacao` oferece workflows guiados com:

- gatilhos e ações de catálogo fechado;
- condições;
- etapas;
- templates;
- simulação;
- execução manual confirmada;
- histórico;
- locks;
- correlation IDs;
- proteção contra loops;
- pausa automática após falhas repetidas;
- diagnóstico pela Samy Intelligence.

A arquitetura não permite `eval`, shell, terminal remoto, código arbitrário ou acesso irrestrito ao MongoDB.

---

## 💰 Economia

A Economia oferece progressão, patrimônio e infraestrutura tecnológica com:

- banco;
- crédito;
- cofre;
- seguros;
- investimentos;
- exchange simulada de criptoativos;
- compra, venda e carteira dentro do `/mercado`;
- cotações com validade;
- ledger financeiro;
- rigs de mineração;
- energia;
- manutenção;
- empresas;
- cargos;
- mining pools;
- inventário;
- consumíveis;
- leilões;
- progressão;
- ranking;
- temporadas;
- infraestrutura SamyCloud;
- racks, contratos e SLA.

Operações financeiras sensíveis preservam:

- transações MongoDB;
- rollback;
- ledger;
- idempotência;
- revalidação do estado;
- proteção contra clique duplo;
- preços/cotações travados no momento adequado.

---

## 🖥️ Hardware

O laboratório de Hardware reúne:

- comparação de CPUs e GPUs;
- fontes públicas e transparentes;
- análise elétrica;
- conectores;
- compatibilidade;
- diagnóstico guiado;
- BIOS Guard;
- PowerCheck;
- manutenção e debloat;
- monitoramento de preços;
- promoções;
- jogos gratuitos;
- server status;
- revisão auxiliar por Gemini.

A lógica determinística continua sendo a autoridade sobre diagnósticos.

O worker de promoções possui retry para falhas HTTP transitórias, proteção contra duplicação por guild e telemetria de entregas.

---

## 🚚 Logística

A categoria de Logística reúne:

- cotações;
- declarações;
- dimensões;
- importação;
- rastreio;
- taxas.

As estimativas procuram ser transparentes e deixam claro quando valores dependem de fontes/configurações externas.

---

## 🧰 Sistemas

A categoria Sistemas oferece ferramentas técnicas sem execução arbitrária:

- conversão de bases;
- cron;
- documentação;
- formatação;
- README;
- regex isolada;
- execução controlada do `/run`.

O `/regex` utiliza isolamento, timeout e limites para reduzir riscos de ReDoS.

---

## 🧩 Integrações

O `/integracoes` oferece conectores controlados para:

- GitHub;
- RSS/Atom;
- páginas de status;
- monitoramento de saúde;
- histórico de entregas;
- testes de conexão;
- deduplicação;
- retry com backoff.

A camada de rede utiliza HTTPS, timeout, limite de corpo, validação de redirecionamentos e proteção contra SSRF.

---

## 🔐 Privacidade e Dados

O `/privacidade` reúne:

- inventário de dados;
- exportação autenticada;
- exclusão/anonimização;
- protocolos;
- acompanhamento;
- consentimentos opcionais;
- memória de IA;
- políticas de retenção;
- processamento idempotente.

---

# Categorias e comandos

Os **100 Slash Commands** permanecem agrupados pelas categorias do projeto. Os comandos privados estão identificados separadamente.

## Administração interna — DEV

`/addmoney`

## Apps — DEV

`/apps`

## Operações DEV

`/dashboard` · `/devctl` · `/featureflags` · `/integridade` · `/release` · `/workerctl`

## Analytics

`/analytics`

## Automações

`/automacao`

## Economia

`/banco` · `/benchmarks` · `/diario` · `/empresa` · `/energia` · `/hackear` · `/inventario` · `/leilao` · `/loja` · `/lootbox` · `/manutencao` · `/mercado` · `/minerar` · `/mochila` · `/perfil` · `/ranking` · `/rig` · `/saldo` · `/servidor` · `/trabalhar`

## Eventos

`/evento`

## Hardware

`/bench` · `/biosguard` · `/buildlab` · `/debloat` · `/jogosgratis` · `/monitor` · `/pcdoctor` · `/powercheck` · `/promocoes` · `/serverstatus`

## Integrações

`/integracoes`

## Logística

`/cotacao` · `/declarar` · `/dimensoes` · `/importacao` · `/rastreio` · `/taxa`

## Moderação e Configuração

`/ban` · `/ban_massa` · `/caso` · `/configurar` · `/historico` · `/kick` · `/limpar` · `/lockdown` · `/mute` · `/nuke` · `/postar` · `/trancar` · `/warn`

## Privacidade

`/privacidade`

## Segurança e Confiança

`/antiraid` · `/automod` · `/incidente` · `/permissoes` · `/quarentena` · `/risco` · `/seguranca` · `/verificacao`

## Sistemas

`/conversor` · `/cron` · `/docs` · `/formatar` · `/readme` · `/regex` · `/run`

## Tickets e Atendimento

`/tickets`

## Utilidades

`/afk` · `/agenda` · `/avatar` · `/botinfo` · `/calculadora` · `/cambio` · `/clima` · `/color` · `/enquete` · `/help` · `/lembrete` · `/notas` · `/ping` · `/qrcode` · `/serverinfo` · `/shorturl` · `/sorteio` · `/temporizador` · `/timestamp` · `/traduzir` · `/userinfo` · `/whois`

> O comando **/agenda** permanece tecnicamente na categoria de Utilidades, mas sua experiência é roteada para a central de Eventos e Agenda.

---

# Área DEV privada

Os **8 comandos privados/DEV** são:

```text
/addmoney
/apps
/dashboard
/devctl
/featureflags
/integridade
/release
/workerctl
```

O acesso é protegido por contexto de instalação e listas explícitas de autorização, como `OWNER_IDS` e `BOT_ADMIN_IDS`.

## `/dashboard`

O Dashboard oferece visão consolidada de:

- Node.js;
- memória;
- CPU;
- event loop;
- MongoDB;
- conexão com o Discord;
- latência;
- workers;
- feature flags;
- erros;
- incidentes;
- comandos;
- tickets;
- eventos;
- automações;
- integrações;
- AI Operations;
- Samy GuildOS;
- releases;
- auditorias.

## `/workerctl`

O Worker Control Runtime administra **29 workers**.

O painel possui paginação para respeitar o limite máximo de **25 opções por String Select do Discord**, mantendo todos os workers acessíveis.

Entre os ciclos adicionados nas fases recentes estão:

```text
ai-knowledge-sync
ai-guild-intelligence
ai-retention
ai-evaluation

guildos-health
guildos-backup
guildos-reconciliation
```

## `/featureflags`

O Feature Control Plane administra **56 feature flags** com:

- ativação/desativação;
- rollout;
- allowlist;
- denylist;
- kill switch;
- histórico;
- auditoria.

---

# Arquitetura

A base segue uma separação em camadas:

```text
Comando
└── registra o Slash Command, valida o acesso inicial e abre a experiência

Painel
└── controla embeds, botões, selects, modais, sessões e navegação

Serviço
└── concentra regras de negócio, concorrência, auditoria e persistência

Modelo
└── representa estados e documentos no MongoDB

Tipos e contratos
└── conectam as camadas e preparam integrações
```

Estrutura resumida atual:

```text
src/
├── ai/
│   ├── core/
│   ├── providers/
│   ├── context/
│   ├── router/
│   ├── knowledge/
│   ├── memory/
│   ├── safety/
│   ├── tools/
│   ├── guild/
│   ├── integrations/
│   ├── evaluations/
│   └── observability/
│
├── guildos/
│   ├── core/
│   ├── configuration/
│   ├── wizard/
│   ├── blueprints/
│   ├── structure/
│   ├── permissions/
│   ├── backup/
│   ├── changes/
│   ├── health/
│   ├── governance/
│   └── workers/
│
├── contracts/
├── core/
├── data/
├── database/
├── events/
├── handlers/
├── integrations/
├── locales/
├── models/
├── panels/
├── services/
├── slashCommands/
├── types/
└── utils/
```

A compilação TypeScript gera a versão executável em `dist/`, e os scripts de build copiam os assets necessários para produção.

---

# Segurança e confiabilidade

Entre as proteções utilizadas na plataforma estão:

- respostas privadas para informações sensíveis;
- validação de permissões e hierarquia;
- revalidação em cada interação;
- confirmação para operações críticas;
- snapshot antes de alterações GuildOS;
- Change Sets;
- dupla aprovação;
- locks;
- idempotência;
- transações MongoDB;
- rollback;
- proteção contra clique duplo;
- validação de canais, cargos e menções;
- trilha de auditoria;
- retenção controlada;
- feature flags;
- kill switches;
- workers observáveis;
- circuit breaker;
- backpressure;
- controle de concorrência;
- tratamento de falhas de banco e APIs;
- proteção contra SSRF;
- proteção contra ReDoS;
- guardrails de IA;
- bloqueio de `eval`, shell e terminal remoto;
- isolamento entre guilds.

---

# Internacionalização

A Samy possui i18n por servidor com suporte a:

- **Português (Brasil)**;
- **Inglês (Estados Unidos)**.

A localização abrange comandos, painéis, botões, selects, modais, erros, confirmações e estados vazios nos módulos já internacionalizados.

---

# Validação e desenvolvimento

## Principais scripts

```bash
npm run cleanup:junk
npm run typecheck

npm run test:phase9
npm run check:phase9

npm run test:phase10
npm run check:phase10

npm run test:mega
npm run build
npm run deploy
npm run verify:dev-deploy
npm run dev
```

## Validação principal da Fase 10

```bash
npm run check:phase10
```

O fluxo agrega:

```text
cleanup:junk
↓
typecheck
↓
testes 10.0–10.9
↓
regressão da Fase 9
↓
test:mega
↓
build
```

A validação da Mega Fase 10 foi concluída com:

- 100 Slash Commands;
- 29 workers;
- 56 feature flags;
- ausência de JavaScript ativo em `src/`;
- zero categorias pendentes;
- zero opções obrigatórias no catálogo validado;
- zero falhas de carga;
- zero sombras JS/TS.

Somente depois da validação automatizada:

```bash
npm run dev
```

---

# Limpeza do projeto

A plataforma possui uma rotina dedicada para artefatos transitórios:

```bash
npm run cleanup:junk
```

A rotina foi criada para evitar que logs e resíduos de diagnóstico permaneçam na base oficial.

Entre os resíduos já removidos estão:

```text
music-playback.log
music-provider-diagnostic.log
ytdlp-diagnostic.log
custom/pathh/.env
```

Arquivos como `.env`, `node_modules`, `dist`, `.git`, logs e backups não devem fazer parte de pacotes de entrega.

---

# Evolução da plataforma

## ✅ Mega Fase 8 — Samy Nexus

Entregou a fundação do ecossistema premium:

- Music Platform;
- centrais persistentes;
- workers;
- recuperação de sessões;
- observabilidade;
- resiliência;
- performance;
- acessibilidade;
- testes estruturais e operacionais.

## ✅ Mega Fase 9 — Samy Intelligence

Entregou a camada inteligente da plataforma:

- AI Foundation;
- Knowledge Engine;
- Samy AI Assistant;
- Guild Intelligence;
- IA integrada aos módulos;
- memória consentida;
- guardrails;
- AI Operations;
- resiliência e workers;
- auditoria completa.

## ✅ Mega Fase 10 — Samy GuildOS

Entregou a administração premium da guild:

- GuildOS Foundation;
- Configuration Control Plane;
- Setup Wizard;
- blueprints;
- Structure Control;
- Permission Intelligence;
- Backup & Restore;
- Change Management;
- Guild Health;
- Enterprise Governance.

---

# Próxima expansão planejada

## 🚧 Mega Fase 10.10–10.20 — GuildOS Ultra / Enterprise

Antes de avançar para a Fase 11, está planejada uma expansão do GuildOS focada em servidores maiores e em uma experiência ainda mais premium.

Entre os objetivos planejados:

- **Safe Defaults Audit** — recursos opcionais e automáticos devem nascer desligados em novas guilds e exigir opt-in explícito;
- Blueprint Studio 2.0;
- Large Server Architect;
- arquiteturas Starter, Community, Large e Enterprise;
- Role Architecture Engine;
- Channel Architecture Engine;
- Onboarding Builder;
- Staff Operations Center;
- Security Architecture Planner;
- Backup & Disaster Recovery 2.0;
- Change Sets 2.0 com aplicação por etapas;
- auditoria global de defaults e migração segura das configurações existentes.

> A política planejada de **Safe by Default** não deve desligar silenciosamente configurações que já tenham sido explicitamente escolhidas em guilds existentes.

## 🔭 Mega Fase 11 — Samy HyperCore

Planejamento conceitual futuro:

- runtime multi-node;
- sharding observável;
- federação segura entre guilds autorizadas;
- operações cross-guild;
- quotas e governança de recursos;
- failover;
- recuperação autônoma;
- Global Operations Center;
- deploy canary/rolling/blue-green;
- testes de caos e escala.

A Fase 11 só deve ser iniciada depois da evolução e homologação completas do GuildOS.

---

# Como adicionar a Samy

1. **[Adicione a Samy ao Discord](https://discord.com/oauth2/authorize?client_id=461634842296320000)**.
2. Escolha o servidor e revise as permissões solicitadas.
3. Execute `/help` para conhecer os módulos.
4. Use `/configurar` para preparar a administração da guild.
5. Mantenha o cargo da Samy acima dos cargos que ela precisa administrar.
6. Revise cuidadosamente previews, permissões e Change Sets antes de aplicar alterações estruturais.

---

# Tecnologias

| Tecnologia | Utilização |
|---|---|
| **Node.js** | Ambiente de execução |
| **TypeScript** | Runtime ativo, contratos, serviços e compilação |
| **Discord.js v14** | Integração com o Discord |
| **MongoDB Atlas** | Persistência de configurações e estados |
| **Mongoose** | Modelagem e operações no MongoDB |
| **Google Gemini API** | Camada auxiliar de inteligência artificial |
| **yt-dlp / youtube-dl-exec** | Resolução principal de áudio da Music Platform |
| **FFmpeg** | Processamento de áudio |
| **Opus** | Codec de voz |
| **tsx** | Desenvolvimento e execução TypeScript |
| **Git / GitHub** | Versionamento e colaboração |

---

# Documentos legais

- **[Termos de Serviço](https://github.com/carlosvcl/samy-bot-docs/blob/main/TERMOS_DE_SERVICO.md)**
- **[Política de Privacidade](https://github.com/carlosvcl/samy-bot-docs/blob/main/POLITICA_DE_PRIVACIDADE.md)**

Ao adicionar e utilizar a Samy, o usuário declara estar de acordo com os documentos aplicáveis ao serviço.

---

# Contribuições

Sugestões, relatórios de problemas e contribuições são bem-vindos.

- **[Consultar issues](https://github.com/carlosvcl/samy-bot/issues)**
- **[Abrir uma nova issue](https://github.com/carlosvcl/samy-bot/issues/new/choose)**

Ao abrir um relatório, inclua quando possível:

- comando ou módulo afetado;
- comportamento esperado;
- comportamento observado;
- passos para reproduzir;
- capturas ou logs sem dados sensíveis;
- ambiente em que ocorreu.

> Nunca envie tokens, `.env`, chaves de API, credenciais do MongoDB, chaves SSH privadas ou dados privados de usuários e servidores.

---

# Contato e suporte

- **Servidor de suporte:** [discord.gg/haQPSP4EPR](https://discord.gg/haQPSP4EPR)
- **E-mail:** `samybot25@gmail.com`
- **Desenvolvedor:** `CarlosGomes#2263`
- **Projeto:** SamyBot

---

<p align="center">
  <strong>Samy — inteligência, administração, segurança e experiências premium dentro do Discord.</strong>
</p>
