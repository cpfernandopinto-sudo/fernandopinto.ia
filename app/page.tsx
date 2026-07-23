import { SiteMotion } from "./SiteMotion";

const services = [
  {
    number: "01",
    title: "Automação de processos e IA",
    text: "Fluxos que conectam sistemas, interpretam dados e executam rotinas com menos intervenção manual.",
    tags: ["n8n", "LLMs", "Python", "APIs"],
  },
  {
    number: "02",
    title: "Dados e inteligência operacional",
    text: "Bases confiáveis, dashboards claros e análises que mostram onde agir — antes que o problema escale.",
    tags: ["BigQuery", "Supabase", "Dashboards", "Analytics"],
  },
  {
    number: "03",
    title: "Integração de sistemas",
    text: "ERP, TMS, WMS e ferramentas internas operando como uma arquitetura única, rastreável e preparada para crescer.",
    tags: ["Omie", "Brudam", "Alcis", "Webhooks"],
  },
  {
    number: "04",
    title: "Presença digital",
    text: "Marca, páginas e experiências digitais que transformam conhecimento técnico em autoridade e oportunidade comercial.",
    tags: ["Estratégia", "UX", "Web", "Conteúdo"],
  },
];

const process = [
  ["Diagnóstico", "Processos, gargalos, dependências e custo invisível entram no mapa."],
  ["Prioridade", "O roadmap organiza iniciativas por impacto, viabilidade e retorno."],
  ["Construção", "A solução entra em operação por etapas, com validação em contexto real."],
  ["Escala", "Monitoramento, documentação e evolução contínua sustentam o resultado."],
];

const technologies = [
  ["Orquestração", "n8n", "Workflows, agentes e integrações"],
  ["Inteligência", "OpenAI · Claude · Gemini", "Modelos escolhidos por tarefa"],
  ["Dados", "BigQuery · Supabase", "Base central, consulta e análise"],
  ["Operação", "Alcis · Omie · Brudam", "WMS, ERP e TMS conectados"],
  ["Engenharia", "Python · APIs", "Serviços e regras sob medida"],
];

const techLogos = [
  ["OpenAI", "/logos/openai.svg"],
  ["Claude", "/logos/anthropic.svg"],
  ["Google Cloud", "/logos/googlecloud.svg"],
  ["BigQuery", "/logos/bigquery.svg"],
  ["Supabase", "/logos/supabase.svg"],
  ["MongoDB", "/logos/mongodb.svg"],
  ["Docker", "/logos/docker.svg"],
  ["Postgres", "/logos/postgresql.svg"],
  ["n8n", "/logos/n8n.svg"],
  ["Vercel", "/logos/vercel.svg"],
];

const faqs = [
  ["Por onde um projeto começa?", "Por uma conversa de diagnóstico. Antes de recomendar tecnologia, eu entendo o fluxo real, as pessoas envolvidas, os sistemas existentes e o impacto esperado."],
  ["É preciso substituir os sistemas atuais?", "Na maioria dos casos, não. O trabalho costuma conectar e ampliar o que a empresa já utiliza, reduzindo ruptura e aproveitando investimentos existentes."],
  ["Você trabalha apenas com grandes empresas?", "Não. O critério principal é existir uma operação real, com recorrência, volume ou complexidade suficientes para que automação e dados gerem retorno."],
  ["Como a segurança dos dados é tratada?", "A arquitetura considera acesso mínimo necessário, segregação de credenciais, rastreabilidade e a política de dados de cada fornecedor desde o desenho da solução."],
  ["O projeto termina na entrega?", "Não precisa terminar. Posso acompanhar a operação, medir o desempenho e evoluir os fluxos conforme o negócio muda."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <SiteMotion />
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Fernando Pinto, início">
          <span className="brand-mark">FP</span>
          <span>Fernando Pinto</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#solucoes">Soluções</a>
          <a href="#case">Case</a>
          <a href="#processo">Processo</a>
        </nav>
        <a className="header-cta" href="#contato">Conversar <Arrow /></a>
      </header>
      <nav className="mobile-nav" aria-label="Navegação mobile">
        <a href="#solucoes">Soluções</a>
        <a href="#projetos">Cases</a>
        <a href="#processo">Processo</a>
        <a href="#contato">Contato</a>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="status-dot" /> Arquitetura de IA para operações reais</p>
          <h1>Operações mais inteligentes.<br /><em>Menos trabalho manual.</em></h1>
          <p className="hero-lead">Eu conecto processos, sistemas, dados e inteligência artificial para construir operações mais rápidas, claras e preparadas para escalar.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contato">Agendar diagnóstico <Arrow /></a>
            <a className="button button-light" href="#solucoes">Explorar soluções</a>
          </div>
          <p className="microcopy">Conversa inicial de 30 minutos · Sem compromisso</p>
        </div>

        <div className="operation-visual" aria-label="Software operacional mostrando dados em movimento entre ERP, WMS, automação, BigQuery, IA e dashboard">
          <div className="visual-topline"><span>CONTROL PLANE / OPERAÇÃO</span><span className="live"><i /> FLUXO ATIVO</span></div>
          <div className="software-window">
            <div className="window-sidebar" aria-hidden="true"><i /><i /><i /><i /></div>
            <div className="live-pipeline">
              {["ERP", "WMS", "n8n", "BigQuery", "IA", "Dashboard"].map((item, index) => (
                <div className={`pipeline-step step-${index + 1}`} key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong><i aria-hidden="true" />
                </div>
              ))}
            </div>
            <div className="runtime-panel">
              <div><span>EXECUÇÕES</span><strong>1.284</strong><small>últimos 30 dias</small></div>
              <div><span>STATUS</span><strong className="runtime-ok">Operando</strong><small>sincronização contínua</small></div>
              <div className="signal-grid" aria-hidden="true">{Array.from({ length: 28 }).map((_, index) => <i key={index} />)}</div>
            </div>
          </div>
          <div className="visual-chart">
            <div className="chart-copy"><small>FLUXO AUTOMATIZADO</small><strong>30+</strong></div>
            <div className="bars" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
          </div>
          <div className="visual-footer"><span><i className="blue-dot" /> DADOS SINCRONIZADOS</span><span>BIGQUERY · N8N · APIs</span></div>
        </div>

        <div className="hero-metrics">
          <div><strong>12+</strong><span>anos em operações</span></div>
          <div><strong>30+</strong><span>fluxos e automações</span></div>
          <div><strong>8+</strong><span>marcas e projetos</span></div>
          <div className="metric-note">Estratégia e execução<br />na mesma mesa.</div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Empresas e projetos">
        <span>Projetos e experiências com</span>
        <div className="logo-row"><b>BIOTECH</b><b>ITS COMPANY</b><b>VIA TRUCK</b><b>UP8 COMPANY</b></div>
      </section>

      <section className="section section-about" id="sobre">
        <div className="section-index">01 / SOBRE</div>
        <div className="about-head">
          <h2>Negócio primeiro.<br /><em>Tecnologia na medida.</em></h2>
          <div>
            <p>Sou Fernando Pinto, arquiteto de soluções e engenheiro de IA. Trabalho onde a operação encontra a tecnologia: entendendo o processo, organizando os dados e construindo o sistema que faz o trabalho avançar.</p>
            <p>Minha experiência nasceu no chão da operação. Por isso, cada arquitetura parte da rotina real — não de uma ferramenta da moda.</p>
          </div>
        </div>
        <div className="principles-grid">
          <article><span>01</span><h3>Visão operacional</h3><p>Entendimento de ponta a ponta antes de qualquer linha de código.</p></article>
          <article><span>02</span><h3>Execução direta</h3><p>Da arquitetura ao deploy, sem camadas desnecessárias entre ideia e entrega.</p></article>
          <article><span>03</span><h3>Relação de longo prazo</h3><p>Soluções que evoluem junto com a operação, os dados e as prioridades.</p></article>
        </div>
      </section>

      <section className="section section-services" id="solucoes">
        <div className="section-index">02 / O QUE FAÇO</div>
        <div className="section-heading split-heading">
          <h2>Do gargalo à operação<br />que funciona melhor.</h2>
          <p>Projetos desenhados para reduzir etapas manuais, conectar informações e dar clareza a quem decide.</p>
        </div>
        <div className="services-list interactive-services">
          {services.map((service) => (
            <details className="service-row" key={service.number} open={service.number === "01"}>
              <summary>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <span className="service-action">Explorar <i>+</i></span>
              </summary>
              <div className="service-expanded">
                <p>{service.text}</p>
                <div className="mini-flow" aria-label={`Fluxo de ${service.title}`}><span>Entrada</span><b>→</b><span>Arquitetura</span><b>→</b><span>Operação</span></div>
                <div className="tag-list">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="section approach-section" id="abordagem">
        <div className="section-index">03 / COMO TRABALHO</div>
        <div className="approach-grid">
          <div className="approach-copy">
            <h2>Uma arquitetura.<br />Três compromissos.</h2>
            <p>O trabalho precisa fazer sentido para o negócio, funcionar na rotina e continuar sustentável depois da entrega.</p>
          </div>
          <div className="commitments">
            <article><span>01</span><div><h3>Clareza antes da complexidade</h3><p>O problema certo, explicado de forma simples, orienta uma solução melhor.</p></div></article>
            <article><span>02</span><div><h3>Entrega antes da promessa</h3><p>Ciclos curtos colocam valor em produção e reduzem risco.</p></div></article>
            <article><span>03</span><div><h3>Resultado antes da ferramenta</h3><p>A tecnologia é escolhida pelo contexto — nunca o contrário.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section before-after-section" id="impacto">
        <div className="section-index">04 / ANTES E DEPOIS</div>
        <div className="before-after-head"><h2>Não é trocar uma ferramenta.<br /><em>É redesenhar a operação.</em></h2><p>O ganho aparece quando dados, sistemas e decisões deixam de competir por atenção e passam a funcionar como um único fluxo.</p></div>
        <div className="comparison-shell">
          <div className="comparison-side before-side">
            <span className="comparison-label">ANTES / FRAGMENTADO</span>
            <div className="fragmented-items"><span>Planilhas</span><span>E-mails</span><span>Conferências</span><span>Processos manuais</span></div>
            <p>Informação espalhada. Pessoas conectando etapas que os sistemas deveriam conectar.</p>
          </div>
          <div className="comparison-center" aria-hidden="true"><i /><b>→</b></div>
          <div className="comparison-side after-side">
            <span className="comparison-label">DEPOIS / ORQUESTRADO</span>
            <div className="operating-core"><strong>OPERAÇÃO</strong><span>Dados conectados · IA · Automação · Dashboards</span><i /></div>
            <p>Uma arquitetura observável, com informação chegando ao ponto de decisão.</p>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projetos">
        <div className="section-index">05 / CASOS REAIS</div>
        <div className="section-heading split-heading">
          <h2>Experiência aplicada<br />a contextos reais.</h2>
          <p>Operações, logística, dados e presença digital reunidos em projetos que exigem entendimento amplo e execução precisa.</p>
        </div>
        <div className="case-gallery">
          <article className="case-card case-card-featured">
            <div className="case-card-copy"><div className="project-code">CASE 01 — LOGÍSTICA</div><h3>Biotech Logística</h3><p>TMS, WMS e ERP conectados a uma base central, com automação e inteligência aplicadas à rotina operacional.</p><div className="tag-list"><span>n8n</span><span>BigQuery</span><span>IA</span></div><a href="#case">Explorar o sistema <Arrow /></a></div>
            <div className="product-preview biotech-preview" aria-label="Prévia do painel operacional Biotech"><div className="preview-nav"><i /><span>Operations overview</span><b>Live</b></div><div className="preview-kpis"><span><small>Pedidos</small><strong>1.284</strong></span><span><small>Integrações</small><strong>06</strong></span><span><small>Alertas</small><strong>12</strong></span></div><div className="preview-chart">{[42,55,47,68,61,76,83,72,91].map((value,index)=><i key={index} style={{height:`${value}%`}} />)}</div></div>
          </article>
          <article className="case-card"><div className="product-preview politixos-preview" aria-label="Prévia de produto PolitixOS"><div className="preview-nav"><i /><span>PolitixOS</span><b>Insights</b></div><div className="map-grid"><i/><i/><i/><i/><span /></div><div className="preview-lines"><i/><i/><i/></div></div><div className="case-card-copy"><div className="project-code">PRODUTO DIGITAL</div><h3>PolitixOS</h3><p>Interface de inteligência com dados, filtros e leitura executiva em uma experiência orientada à decisão.</p><div className="tag-list"><span>Produto</span><span>Dados</span><span>UX</span></div></div></article>
          <article className="case-card"><div className="product-preview network-preview" aria-label="Prévia de arquitetura de integração"><div className="network-node node-a">ERP</div><div className="network-node node-b">API</div><div className="network-node node-c">Dados</div><div className="network-node node-d">IA</div><i className="network-line line-a"/><i className="network-line line-b"/><i className="network-line line-c"/></div><div className="case-card-copy"><div className="project-code">OPERAÇÃO E SISTEMAS</div><h3>ITS Company</h3><p>Arquitetura de processos e integração desenhada para reduzir atrito entre operação e tecnologia.</p><div className="tag-list"><span>APIs</span><span>Automação</span></div></div></article>
          <article className="case-card"><div className="product-preview transport-preview" aria-label="Prévia de painel de transporte"><div className="transport-route"><i/><i/><i/><i/></div><div className="transport-stats"><span><small>ROTAS</small><b>Ativas</b></span><span><small>DADOS</small><b>Sincronizados</b></span></div></div><div className="case-card-copy"><div className="project-code">TRANSPORTES</div><h3>Via Truck</h3><p>Leitura operacional aplicada ao contexto de transportes, conectando processo, acompanhamento e dados.</p><div className="tag-list"><span>Operação</span><span>Logística</span></div></div></article>
        </div>
      </section>

      <section className="section technology-section" id="tecnologias">
        <div className="section-index">06 / TECNOLOGIAS</div>
        <div className="technology-head"><h2>Stack moderno.<br /><em>Escolhas pragmáticas.</em></h2><p>Ferramentas diferentes cumprem papéis diferentes. A arquitetura conecta as melhores para cada operação.</p></div>
        <div className="logo-cloud" aria-label="Tecnologias utilizadas">
          {techLogos.map(([name, src]) => <div className="tech-logo" key={name}><img src={src} alt="" loading="lazy" /><span>{name}</span></div>)}
          <div className="tech-logo text-logo"><b>OMIE</b><span>Omie ERP</span></div>
        </div>
        <div className="technology-table">
          {technologies.map(([label, title, text]) => <div className="tech-row" key={label}><span>{label}</span><strong>{title}</strong><p>{text}</p><i aria-hidden="true">↗</i></div>)}
        </div>
      </section>

      <section className="section case-section" id="case">
        <div className="case-intro">
          <div><div className="section-index light">07 / ARQUITETURA EM PRODUÇÃO</div><p className="case-kicker">BIOTECH LOGÍSTICA</p><h2>Uma operação conectada.<br />Do dado à decisão.</h2></div>
          <p>Integração entre TMS, WMS e ERP com automação via n8n, centralização no BigQuery, análises com IA e distribuição automática de informação.</p>
        </div>
        <div className="case-architecture">
          <div className="case-source"><small>FONTES</small><span>TMS</span><span>WMS</span><span>ERP</span></div>
          <div className="case-arrow">→</div>
          <div className="case-node"><small>ORQUESTRAÇÃO</small><strong>n8n</strong><span>Automação + integrações</span></div>
          <div className="case-arrow">→</div>
          <div className="case-node"><small>BASE CENTRAL</small><strong>BigQuery</strong><span>Dados confiáveis</span></div>
          <div className="case-arrow">→</div>
          <div className="case-node accent-node"><small>CAMADA INTELIGENTE</small><strong>IA</strong><span>Análises + contexto</span></div>
        </div>
        <div className="case-outcomes">
          <article><span>01</span><h3>Sistemas conectados</h3><p>Menos fragmentação entre transporte, armazém e gestão.</p></article>
          <article><span>02</span><h3>Dados centralizados</h3><p>Uma base consistente para consulta, análise e escala.</p></article>
          <article><span>03</span><h3>Leitura executiva</h3><p>Dados brutos convertidos em informação acionável.</p></article>
          <article><span>04</span><h3>Entrega automática</h3><p>Dashboards, análises e relatórios no fluxo certo.</p></article>
        </div>
      </section>

      <section className="section results-section" id="resultados">
        <div className="section-index">08 / DIFERENCIAIS</div>
        <div className="results-grid">
          <h2>O que muda quando<br />a arquitetura está certa.</h2>
          <div className="results-list">
            <article><strong>01</strong><h3>Mais velocidade</h3><p>Menos etapas manuais e menos espera entre áreas, sistemas e decisões.</p></article>
            <article><strong>02</strong><h3>Menos custo invisível</h3><p>Retrabalho, erro operacional e demora deixam de consumir a rotina.</p></article>
            <article><strong>03</strong><h3>Mais clareza</h3><p>Indicadores e análises mostram o que exige atenção agora.</p></article>
            <article><strong>04</strong><h3>Mais capacidade de escala</h3><p>O crescimento deixa de depender da multiplicação de tarefas manuais.</p></article>
          </div>
        </div>
      </section>

      <section className="section process-section" id="processo">
        <div className="section-index">09 / PROCESSO</div>
        <div className="section-heading split-heading"><h2>Do diagnóstico à escala.<br />Sem saltar etapas.</h2><p>Um processo simples para lidar com operações complexas — com decisões claras em cada fase.</p></div>
        <ol className="timeline premium-timeline">
          {[...process.slice(0,1), ["Arquitetura", "Sistemas, dados, regras e responsabilidades entram em um desenho executável."], ["Integração", "As fontes começam a operar como um fluxo único e rastreável."], ["Automação", "Rotinas manuais dão lugar a execuções consistentes e monitoradas."], ["IA", "Modelos adicionam interpretação, contexto e apoio à decisão."], ["Operação", "A solução passa a ser medida, documentada e evoluída em produção."]].map(([title, text], index) => <li key={title}><div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div><h3>{title}</h3><p>{text}</p></li>)}
        </ol>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-index">10 / FAQ</div>
        <div className="faq-grid">
          <div><h2>Perguntas antes<br />da primeira conversa.</h2><p>As respostas curtas. O contexto específico, construímos juntos.</p></div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<i>+</i></summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="contact-top"><p><span className="status-dot" /> AGENDA ABERTA PARA NOVOS PROJETOS</p><span>CONTAGEM, MG · ATENDIMENTO REMOTO</span></div>
        <h2>Sua operação pode<br /><em>funcionar melhor.</em></h2>
        <p className="contact-lead">Em 30 minutos, identificamos onde processos, dados e IA podem gerar o próximo ganho real do seu negócio.</p>
        <div className="contact-actions">
          <a className="button button-dark button-large" href="mailto:eu@fernandopinto.ia.br?subject=Diagnóstico%20de%20Operação">Agendar diagnóstico <Arrow /></a>
          <a className="button button-light button-large" href="https://wa.me/5531996158654" target="_blank" rel="noreferrer">Falar no WhatsApp</a>
        </div>
        <div className="contact-footer">
          <div className="brand"><span className="brand-mark">FP</span><span>Fernando Pinto</span></div>
          <div><a href="https://www.linkedin.com/in/fernandopinto-ia/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/fernandopinto" target="_blank" rel="noreferrer">GitHub ↗</a></div>
          <span>© 2026 · Todos os direitos reservados</span>
        </div>
      </section>
    </main>
  );
}
