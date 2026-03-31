'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

const metrics = [
  {
    value: '800+',
    label: 'documentation localization PRs automated',
    detail: 'Operational experience turned into reusable infrastructure',
  },
  {
    value: '14',
    label: 'large-scale beginner education series supported',
    detail: 'Across multilingual technical learning content',
  },
  {
    value: '50+',
    label: 'languages treated as living documentation',
    detail: 'Keeping translated content aligned with evolving source',
  },
  {
    value: '2010',
    label: 'first shipped software project',
    detail: 'A Flash game that started the journey',
  },
];

const signals = [
  { label: 'Microsoft AI MVP', detail: 'Current public profile' },
  { label: 'OSS Maintainer', detail: 'Azure/co-op-translator' },
  { label: 'Builder', detail: 'Localizeflow' },
];

const projects = [
  {
    name: 'Localizeflow',
    type: 'Product',
    summary: 'GitHub-native automation for multilingual docs.',
    description:
      'A zero-setup automation layer that watches repositories and opens pull requests to keep documentation up to date across languages.',
    bullets: [
      'No YAML, no API keys, no workflow maintenance',
      'Visual setup with AI-assisted path recommendations',
      'Autopilot PRs that stay inside GitHub',
      'Built from real operating lessons learned in Co-op Translator',
    ],
    url: 'https://localizeflow.com/',
    cta: 'Explore Localizeflow',
  },
  {
    name: 'Co-op Translator',
    type: 'Open source',
    summary: 'The engine behind multilingual Markdown, image, and notebook translation.',
    description:
      'Maintained in Azure OSS to help fast-moving repositories keep translated artifacts synchronized as the source evolves.',
    bullets: [
      'Used across Microsoft learning repositories',
      'Supports Markdown, images, and Jupyter notebooks',
      'Designed for large repositories with continuous change',
      'Manages translation state as inspectable software artifacts',
    ],
    url: 'https://github.com/Azure/co-op-translator',
    cta: 'View the repository',
  },
];

const writing = [
  {
    title: 'Rethinking Documentation Translation: Treating Translations as Versioned Software Assets',
    category: 'Localization and Docs Ops',
    outlet: 'Microsoft Developer Community Blog',
    date: 'Feb 4, 2026',
    blurb:
      "A maintainer's argument for modeling translations as synchronized software assets instead of static outputs.",
    url: 'https://techcommunity.microsoft.com/blog/azuredevcommunityblog/rethinking-documentation-translation-treating-translations-as-versioned-software/4491755',
  },
  {
    title: 'Co-op Translator: Current Status and v0.10.0 Release',
    category: 'Localization and OSS',
    outlet: 'Microsoft Tech Community',
    date: 'Aug 25, 2025',
    blurb:
      'A status snapshot of adoption, language coverage, community feedback, and the v0.10.0 release.',
    url: 'https://techcommunity.microsoft.com/blog/educatordeveloperblog/co-op-translator-current-status-and-v0-10-0-release/4446253/',
  },
  {
    title: 'Automate Markdown and Image Translations Using Co-op Translator: Phi-3 Cookbook Case Study',
    category: 'Localization and Docs Ops',
    outlet: 'Microsoft Tech Community',
    date: 'Oct 15, 2024',
    blurb:
      'A concrete walkthrough of using Co-op Translator to scale multilingual technical content.',
    url: 'https://techcommunity.microsoft.com/t5/educator-developer-blog/automate-markdown-and-image-translations-using-co-op-translator/ba-p/4263474',
  },
  {
    title: "Evaluate Fine-tuned Phi-3 / 3.5 Models in Azure AI Studio Focusing on Microsoft's Responsible AI",
    category: 'Responsible AI',
    outlet: 'Microsoft Tech Community',
    date: 'Sep 2, 2024',
    blurb:
      'A practical guide to evaluating fine-tuned small language models with Responsible AI considerations.',
    url: 'https://techcommunity.microsoft.com/blog/educatordeveloperblog/evaluate-fine-tuned-phi-3--3-5-models-in-azure-ai-studio-focusing-on-microsofts-/4227850',
  },
  {
    title: 'Fine-Tune and Integrate Custom Phi-3 Models with Prompt Flow: Step-by-Step Guide',
    category: 'Azure AI',
    outlet: 'Microsoft Tech Community',
    date: 'Jul 3, 2024',
    blurb:
      'A code-first tutorial for fine-tuning Phi-3 models and connecting them to Prompt flow.',
    url: 'https://techcommunity.microsoft.com/t5/educator-developer-blog/fine-tune-and-integrate-custom-phi-3-models-with-prompt-flow/ba-p/4178612',
  },
  {
    title: 'Build a chatbot service to ensure safe conversations: Using Azure Content Safety and Azure OpenAI',
    category: 'Azure AI',
    outlet: 'Microsoft Tech Community',
    date: 'May 18, 2024',
    blurb:
      'A tutorial focused on building safer conversational systems with moderation and Azure services.',
    url: 'https://techcommunity.microsoft.com/blog/educatordeveloperblog/build-a-chatbot-service-to-ensure-safe-conversations-using-azure-content-safety-/4143628',
  },
];

const talks = [
  {
    title: 'Unlocking Multilingual Accessibility with Co-op Translator - A Case Study on Phi-3 Cookbook',
    venue: 'Open at Microsoft',
    date: '2024',
    description:
      "An overview of Co-op Translator's workflow and a practical case study on multilingual accessibility.",
    url: 'https://learn.microsoft.com/en-us/shows/open-at-microsoft/unlocking-multilingual-accessibility-with-co-op-translator-a-case-study-on-phi-3-cookbook',
  },
  {
    title: 'Learn Live: Plan and Prepare to Develop AI Solutions on Azure',
    venue: 'Microsoft Reactor',
    date: 'Apr 15, 2025',
    description:
      'A live session on preparing the technical and responsible AI foundation for Azure-based AI solutions.',
    url: 'https://developer.microsoft.com/en-us/reactor/events/25436/',
  },
];

const background = [
  {
    title: 'Education',
    items: [
      'Inha University - Industrial Management Engineering (2020-2026)',
      'Inha University - Artificial Intelligence Engineering (2020-2026)',
    ],
  },
  {
    title: 'Credentials',
    items: ['Azure AI Fundamentals, Microsoft (Sep 2024)', 'OPIC IH, ACTFL (Sep 2024)'],
  },
  {
    title: 'Recognition',
    items: ['Inha Open Source Software Festival - 1st Place (Dec 2024)'],
  },
];

const journey = [
  {
    year: '2010',
    title: 'First software shipped',
    description:
      'Built a simple obstacle-avoidance Flash game and discovered the joy of making software that people actually use.',
  },
  {
    year: '2020',
    title: 'Systems-thinking foundation',
    description:
      'Started studying Industrial Management Engineering and Artificial Intelligence Engineering at Inha University.',
  },
  {
    year: '2023',
    title: 'Public AI education and community work',
    description:
      'Won the 2023 ChatGPT Microsoft Azurethon prompt engineering category and expanded public technical education work.',
  },
  {
    year: '2024',
    title: 'From tutorials to localization systems',
    description:
      'Published major Azure AI tutorials, shipped the Phi-3 Cookbook localization case study, and earned Inha OSS Festival 1st Place.',
  },
  {
    year: '2025',
    title: 'Maintainer to operator',
    description:
      'Spoke on Microsoft Reactor, documented Co-op Translator adoption, and kept refining the workflow around multilingual sync.',
  },
  {
    year: '2026',
    title: 'Productizing the operating model',
    description:
      'Framed translations as versioned software assets and turned years of OSS workflow learning into Localizeflow.',
  },
];

const connect = [
  { label: 'GitHub', href: 'https://github.com/skytin1004' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ms-song/' },
  { label: 'Localizeflow', href: 'https://localizeflow.com/' },
  { label: 'Email', href: 'mailto:minseok.song@mssong.com' },
];

function StoryList({
  items,
  kind,
}: {
  items: {
    title: string;
    date: string;
    url: string;
    blurb?: string;
    outlet?: string;
    category?: string;
    venue?: string;
    description?: string;
  }[];
  kind: 'writing' | 'talks';
}) {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? items : items.slice(0, 3);
  const hasMore = items.length > 3;
  const buttonLabel = expanded ? 'Show less' : 'Show more';
  const ctaLabel = kind === 'writing' ? 'Read the article' : 'Open session';

  return (
    <div className="story-stack">
      <div className={`story-collapsible${expanded ? ' is-expanded' : ''}`}>
        {visibleItems.map((item) => (
          <article className="story-card" key={item.title}>
            <div className="story-meta">
              {'category' in item && item.category ? <span>{item.category}</span> : null}
              {'outlet' in item && item.outlet ? <span>{item.outlet}</span> : null}
              {'venue' in item && item.venue ? <span>{item.venue}</span> : null}
              <span>{item.date}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{'blurb' in item && item.blurb ? item.blurb : item.description}</p>
            <a href={item.url} target="_blank" rel="noreferrer">
              {ctaLabel}
            </a>
          </article>
        ))}
      </div>
      {hasMore ? (
        <button
          className="story-toggle"
          type="button"
          onClick={() => setExpanded((value) => !value)}
        >
          {buttonLabel}
        </button>
      ) : null}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

export default function Home() {
  const availability = useMemo(
    () => 'Currently building Localizeflow from real-world OSS maintenance experience.',
    [],
  );

  return (
    <main className="portfolio-shell">
      <section className="hero-section section" id="top">
        <div className="hero-grid">
          <div className="hero-copy panel">
            <p className="eyebrow">Minseok Song</p>
            <h1>I build GitHub-native systems for multilingual documentation.</h1>
            <p className="hero-summary">
              Microsoft AI MVP, OSS maintainer of Azure/co-op-translator, and builder of
              Localizeflow. My work sits at the intersection of documentation systems,
              open-source maintenance, and developer education.
            </p>
            <p className="hero-detail">
              I focus on turning complex multilingual workflows into maintainable products and
              pull-request-driven systems.
            </p>
            <div className="hero-actions">
              <a href="https://localizeflow.com/" target="_blank" rel="noreferrer">
                Explore Localizeflow
              </a>
              <a href="https://github.com/Azure/co-op-translator" target="_blank" rel="noreferrer">
                View Co-op Translator
              </a>
            </div>
            <p className="availability">{availability}</p>
          </div>

          <aside className="hero-card panel">
            <div className="hero-portrait">
              <Image
                alt="Portrait of Minseok Song"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 420px"
                src="/images/profile_minseok_song.jpg"
              />
            </div>
            <div className="profile-block">
              <p className="profile-overline">Minseok Song</p>
              <h2>MINSEOK SONG</h2>
              <div className="signal-list">
                {signals.map((signal) => (
                  <div className="signal-item" key={signal.label}>
                    <span>{signal.detail}</span>
                    <strong>{signal.label}</strong>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" id="metrics">
        <div className="metrics-grid">
          {metrics.map((metric) => (
            <article className="metric-card panel" key={metric.label}>
              <p className="metric-value">{metric.value}</p>
              <h3>{metric.label}</h3>
              <p>{metric.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="work">
        <SectionHeading
          eyebrow="Flagship Work"
          title="Two layers of the same operating model."
          copy="Co-op Translator proved the workflow in open source. Localizeflow turns that maintainer experience into a simpler product for teams that want multilingual docs without workflow overhead."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card panel" key={project.name}>
              <div className="project-header">
                <p className="eyebrow">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-summary">{project.summary}</p>
              </div>
              <p className="project-description">{project.description}</p>
              <ul>
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                {project.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="writing">
        <div className="story-layout">
          <div>
            <SectionHeading
              eyebrow="Selected Writing"
              title="Writing that connects AI tooling, localization, and operational clarity."
              copy="The writing spans Azure AI and Responsible AI, but the center of gravity has moved toward documentation systems, translation state, and maintainable multilingual workflows."
            />
            <StoryList items={writing} kind="writing" />
          </div>

          <div id="talks">
            <SectionHeading
              eyebrow="Talks and Media"
              title="Public sessions that turn infrastructure into stories people can use."
              copy="The talks focus on making complex workflows understandable for developers, maintainers, and learners."
            />
            <StoryList items={talks} kind="talks" />
          </div>
        </div>
      </section>

      <section className="section" id="journey">
        <SectionHeading
          eyebrow="Background"
          title="A journey from first software to global documentation systems."
          copy="The timeline combines education, public recognition, and the shift from technical tutorials toward a durable product and maintainer identity."
        />
        <div className="background-grid">
          {background.map((group) => (
            <article className="background-card panel" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="journey-grid">
          {journey.map((item) => (
            <article className="journey-card panel" key={`${item.year}-${item.title}`}>
              <span className="journey-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="connect">
        <div className="connect-panel panel">
          <div>
            <p className="eyebrow">Connect</p>
            <h2>Open source, product, and docs systems conversations welcome.</h2>
            <p>
              If you are building multilingual documentation workflows, open-source automation,
              or GitHub-native developer tooling, let&apos;s talk.
            </p>
          </div>
          <div className="connect-links">
            {connect.map((item) => (
              <a href={item.href} key={item.label} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
