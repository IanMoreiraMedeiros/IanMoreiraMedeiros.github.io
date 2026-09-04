'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  Award,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  Code2,
  ExternalLink,
  GraduationCap,
  Mail,
  Moon,
  Palette,
  Sun,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: '2006',
    kicker: 'O ponto de partida',
    title: 'Nasci em Limoeiro do Norte.',
    description:
      'No interior do Ceará começou a história de alguém movido por curiosidade, criatividade e vontade de entender como as coisas funcionam.',
    marker: '01',
  },
  {
    year: '2014',
    kicker: 'Primeiro contato',
    title: 'Meu primeiro computador.',
    description:
      'Foi quando os jogos deixaram de ser apenas diversão. Passei a explorar o computador, suas possibilidades e tudo o que existia por trás da tela.',
    marker: '02',
  },
  {
    year: '2016',
    kicker: 'A curiosidade ganhou direção',
    title: 'Hardware, algoritmos e incentivo.',
    description:
      'Meu pai me apresentou conceitos de hardware e compartilhou aulas sobre algoritmos. A tecnologia começou a se transformar em caminho profissional.',
    marker: '03',
  },
  {
    year: '2024',
    kicker: 'Uma escolha consciente',
    title: 'Ciência da Computação na UFC.',
    description:
      'Incentivado por familiares e amigos, encontrei o campus da Universidade Federal do Ceará em Russas e comecei a graduação que ampliou meu repertório técnico.',
    marker: '04',
  },
  {
    year: 'HOJE',
    kicker: 'Ideias em movimento',
    title: 'Código, design e pessoas.',
    description:
      'No 6º semestre, uno desenvolvimento full-stack, comunicação visual e trabalho em equipe para criar experiências digitais claras e úteis.',
    marker: '05',
  },
];

const experiences = [
  {
    period: '2026 · atual',
    title: 'Desenvolvedor Full-Stack',
    place: 'CommandSystem',
    description:
      'Estágio no desenvolvimento de um sistema de gestão de catálogos, atuando de ponta a ponta com React, Node.js, TypeScript, PostgreSQL e Docker.',
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    featured: true,
  },
  {
    period: '2025 · atual',
    title: 'Designer e idealista de conteúdo',
    place: 'Projeto de pesquisa ARES',
    description:
      'Criação de conceitos e peças de comunicação para dar forma visual às iniciativas do projeto, com Figma e organização pelo ClickUp.',
    tags: ['Figma', 'Conteúdo', 'ClickUp'],
  },
  {
    period: '2025 · 2026',
    title: 'Designer e gestor de mídias',
    place: 'Centro Acadêmico Ada Lovelace',
    description:
      'Planejamento de postagens, design digital e gestão das mídias do Centro Acadêmico de Ciência da Computação.',
    tags: ['Design', 'Social media', 'Canva'],
  },
  {
    period: '2024 · 2025',
    title: 'Organização de salas temáticas',
    place: 'Evento SESCOMP',
    description:
      'Participação na organização do evento e na ambientação da sala temática sob responsabilidade da equipe.',
    tags: ['Eventos', 'Equipe', 'Ambientação'],
  },
];

const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'HTML',
  'CSS',
  'PostgreSQL',
  'Docker',
  'Figma',
  'Canva',
];

const certificates = [
  {
    title: 'Organização da VIII SESCOMP',
    issuer: 'Universidade Federal do Ceará',
    date: '20 a 23 de outubro de 2025',
    workload: '32 horas',
    description:
      'Participação na organização da VIII Semana de Engenharia de Software e Ciência da Computação, realizada no campus da UFC em Russas.',
    image: '/certificado-sescomp-2025.webp',
    file: '/certificado-sescomp-2025.pdf',
  },
  {
    title: 'Diretoria de Marketing do CAAL',
    issuer: 'Centro Acadêmico Ada Lovelace',
    date: 'Gestão 2025',
    workload: '48 horas',
    description:
      'Atuação como membro da Diretoria de Marketing, participando do planejamento, organização e execução das atividades da gestão.',
    image: '/certificado-centro-academico-ada-lovelace-2025.webp',
    file: '/certificado-centro-academico-ada-lovelace-2025.pdf',
  },
];

export default function Home() {
  const rootRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const timelineSectionRef = useRef<HTMLElement>(null);
  const timelineViewportRef = useRef<HTMLDivElement>(null);
  const timelineTrackRef = useRef<HTMLDivElement>(null);
  const timelineProgressRef = useRef<HTMLSpanElement>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const stored = window.localStorage.getItem('ian-theme');
    if (stored === 'light' || stored === 'dark') setTheme(stored);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('ian-theme', theme);
  }, [theme]);

  useLayoutEffect(() => {
    const cleanupListeners: Array<() => void> = [];
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      if (!reduceMotion) {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from('.site-header', { y: -28, opacity: 0, duration: 0.8 })
          .from(
            '.hero-animate',
            { y: 54, opacity: 0, duration: 1, stagger: 0.1 },
            '-=0.35',
          )
          .from('.hero__index', { opacity: 0, duration: 0.7 }, '-=0.4');

        gsap.to(heroImageRef.current, {
          yPercent: 10,
          scale: 1.09,
          ease: 'none',
          scrollTrigger: {
            trigger: '#inicio',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });

        gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
          gsap.from(element, {
            y: 56,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 86%',
              once: true,
            },
          });
        });

        gsap.utils
          .toArray<HTMLElement>('.floatie')
          .forEach((element, index) => {
            gsap.to(element, {
              x: index % 2 ? -14 : 12,
              y: index % 3 ? 16 : -18,
              rotation: index % 2 ? -10 : 12,
              duration: 2.6 + index * 0.23,
              ease: 'sine.inOut',
              repeat: -1,
              yoyo: true,
            });
          });

        gsap.to('.gym-orbit', {
          rotation: 360,
          duration: 24,
          ease: 'none',
          repeat: -1,
        });
        gsap.to('.gym-orbit__photo', {
          rotation: -360,
          duration: 24,
          ease: 'none',
          repeat: -1,
        });
      }

      gsap.utils.toArray<HTMLElement>('.timeline-node').forEach((node) => {
        const xTo = gsap.quickTo(node, 'x', { duration: 0.4, ease: 'power3' });
        const yTo = gsap.quickTo(node, 'y', { duration: 0.4, ease: 'power3' });
        const handleMove = (event: PointerEvent) => {
          const rect = node.getBoundingClientRect();
          xTo((event.clientX - rect.left - rect.width / 2) * 0.16);
          yTo((event.clientY - rect.top - rect.height / 2) * 0.16);
        };
        const handleLeave = () => {
          xTo(0);
          yTo(0);
        };

        node.addEventListener('pointermove', handleMove);
        node.addEventListener('pointerleave', handleLeave);
        cleanupListeners.push(() => {
          node.removeEventListener('pointermove', handleMove);
          node.removeEventListener('pointerleave', handleLeave);
        });
      });
    }, rootRef);

    const media = gsap.matchMedia();
    media.add(
      '(min-width: 901px) and (prefers-reduced-motion: no-preference)',
      () => {
        const track = timelineTrackRef.current;
        const section = timelineSectionRef.current;
        const progress = timelineProgressRef.current;
        if (!track || !section || !progress) return;

        const distance = () =>
          Math.max(0, track.scrollWidth - window.innerWidth);
        gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${distance() + window.innerWidth * 0.5}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => gsap.set(progress, { scaleX: self.progress }),
          },
        });
      },
    );

    return () => {
      cleanupListeners.forEach((cleanup) => cleanup());
      media.revert();
      ctx.revert();
    };
  }, []);

  const moveTimeline = (direction: -1 | 1) => {
    if (window.innerWidth <= 900) {
      timelineViewportRef.current?.scrollBy({
        left: direction * window.innerWidth * 0.78,
        behavior: 'smooth',
      });
      return;
    }

    window.scrollBy({
      top: direction * window.innerHeight * 0.78,
      behavior: 'smooth',
    });
  };

  return (
    <main ref={rootRef}>
      <section className="hero" id="inicio">
        <img
          ref={heroImageRef}
          className="hero__image"
          src="/ian-praia.webp"
          alt="Ian Lucas em uma paisagem de falésias no litoral cearense"
        />
        <div className="hero__veil" />

        <header className="site-header">
          <a className="brand" href="#inicio" aria-label="Voltar ao início">
            IL<span>.</span>
          </a>
          <nav aria-label="Navegação principal">
            <a href="#sobre">Sobre</a>
            <a href="#trajetoria">Trajetória</a>
            <a href="#experiencias">Experiências</a>
            <a href="#contato">Contato</a>
          </nav>
          <Button
            className="theme-toggle"
            variant="outline"
            size="icon"
            aria-label={`Ativar tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </Button>
        </header>

        <div className="hero__content">
          <p className="eyebrow hero-animate">
            DESENVOLVEDOR FULL-STACK · DESIGNER
          </p>
          <h1 className="hero-animate">
            Olá, meu nome é<strong> Ian Lucas.</strong>
          </h1>
          <p className="hero__subtitle hero-animate">
            E esse é o meu site de portfólio pessoal.
          </p>
          <a className="hero__cta hero-animate" href="#sobre">
            Conheça minha trajetória <ArrowDownRight aria-hidden="true" />
          </a>
        </div>

        <div className="hero__index" aria-hidden="true">
          <span>01</span>
          <span />
          <span>Portfólio pessoal · 2026</span>
        </div>
      </section>

      <section className="about section-shell" id="sobre">
        <div className="section-tag reveal">
          <span>{'{ sobre mim }'}</span>
          <span>02 · Quem eu sou</span>
        </div>
        <div className="about__grid">
          <h2 className="display-title reveal">
            Entre <em>lógica</em>, estética e propósito.
          </h2>
          <div className="about__copy reveal">
            <p>
              Sou estudante de <strong>Ciência da Computação na UFC</strong>,
              campus de Russas, e desenvolvedor full-stack em formação. Gosto de
              transformar problemas em interfaces intuitivas e sistemas bem
              estruturados.
            </p>
            <p>
              Minha experiência cruza tecnologia, design e comunicação, do
              código em React e Node.js à criação de identidades e conteúdos
              digitais para projetos acadêmicos.
            </p>
          </div>
        </div>
        <div className="about__ticker" aria-label="Principais tecnologias">
          <div>
            {[...skills, ...skills].map((skill, index) => (
              <span key={`${skill}-${index}`}>
                {skill} <i>✦</i>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={timelineSectionRef}
        className="timeline"
        id="trajetoria"
        aria-labelledby="timeline-title"
      >
        <div className="timeline__header">
          <div>
            <p className="section-kicker">MINHA TRAJETÓRIA</p>
            <h2 id="timeline-title">Um túnel do tempo.</h2>
          </div>
          <div className="timeline__instructions">
            <span>Role para explorar</span>
            <div className="timeline__controls">
              <Button
                variant="outline"
                size="icon"
                aria-label="Voltar na trajetória"
                onClick={() => moveTimeline(-1)}
              >
                <ArrowLeft />
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="Avançar na trajetória"
                onClick={() => moveTimeline(1)}
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>

        <div ref={timelineViewportRef} className="timeline__viewport">
          <div ref={timelineTrackRef} className="timeline__track">
            <div className="timeline__rail" aria-hidden="true" />
            {milestones.map((milestone) => (
              <article className="timeline-card" key={milestone.year}>
                <button
                  className="timeline-node"
                  type="button"
                  aria-label={`Marco de ${milestone.year}: ${milestone.title}`}
                >
                  <span>{milestone.marker}</span>
                </button>
                <p className="timeline-card__year">{milestone.year}</p>
                <div className="timeline-card__body">
                  <span>{milestone.kicker}</span>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </article>
            ))}

            <article className="hobby-card" aria-labelledby="hobbies-title">
              <span
                className="floatie hobby-emoji hobby-emoji--game"
                aria-hidden="true"
              >
                🎮
              </span>
              <span
                className="floatie hobby-emoji hobby-emoji--ball"
                aria-hidden="true"
              >
                🏀
              </span>
              <span
                className="floatie hobby-emoji hobby-emoji--volley"
                aria-hidden="true"
              >
                🏐
              </span>
              <span
                className="floatie hobby-emoji hobby-emoji--run"
                aria-hidden="true"
              >
                🏃
              </span>
              <span
                className="floatie hobby-emoji hobby-emoji--code"
                aria-hidden="true"
              >
                💻
              </span>

              <div className="hobby-card__content">
                <span>Fora do código</span>
                <h3 id="hobbies-title">
                  Movimento também faz parte da rotina.
                </h3>
                <p>
                  Jogos sempre foram meu principal hobby. Na adolescência,
                  descobri também a corrida e a musculação, depois de já ter
                  passado por treinos de basquete, vôlei e futsal.
                </p>
              </div>

              <div className="hobby-orbit" aria-hidden="true">
                <div className="hobby-orbit__core">
                  <span>PLAY</span>
                  <strong>&amp;</strong>
                  <span>MOVE</span>
                </div>
                <div className="gym-orbit">
                  <div className="gym-orbit__photo">
                    <img src="/ian-academia.webp" alt="" />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="timeline__progress" aria-hidden="true">
          <span ref={timelineProgressRef} />
        </div>
      </section>

      <section className="formation section-shell" id="formacao">
        <div className="section-tag reveal">
          <span>{'{ formação }'}</span>
          <span>04 · Aprendizado contínuo</span>
        </div>
        <div className="formation__heading reveal">
          <h2 className="display-title">
            Formação que conecta teoria e prática.
          </h2>
          <p>
            Uma base acadêmica em evolução, fortalecida por eventos, pesquisa e
            experiências que desenvolvem tanto a técnica quanto a colaboração.
          </p>
        </div>

        <div className="formation__grid">
          <article className="degree-card reveal">
            <div className="degree-card__icon">
              <GraduationCap aria-hidden="true" />
            </div>
            <p>2024.1 · atual</p>
            <h3>Ciência da Computação</h3>
            <span>Universidade Federal do Ceará · Campus de Russas</span>
            <div className="degree-card__footer">
              <strong>6º semestre</strong>
              <span>Graduação em andamento</span>
            </div>
          </article>

          <div className="certificates reveal">
            <div className="certificates__intro">
              <Award aria-hidden="true" />
              <div>
                <span>Documentos comprobatórios</span>
                <h3>Certificações</h3>
              </div>
            </div>

            <div className="certificates__list">
              {certificates.map((certificate) => (
                <article className="certificate-card" key={certificate.title}>
                  <a
                    className="certificate-card__preview"
                    href={certificate.file}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Abrir certificado: ${certificate.title}`}
                  >
                    <img
                      src={certificate.image}
                      alt={`Prévia do certificado ${certificate.title}`}
                    />
                    <span>
                      Ver certificado <ExternalLink aria-hidden="true" />
                    </span>
                  </a>
                  <div className="certificate-card__body">
                    <div className="certificate-card__meta">
                      <span>{certificate.date}</span>
                      <span>{certificate.workload}</span>
                    </div>
                    <h4>{certificate.title}</h4>
                    <strong>{certificate.issuer}</strong>
                    <p>{certificate.description}</p>
                    <a href={certificate.file} target="_blank" rel="noreferrer">
                      Abrir PDF <ExternalLink aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="experience section-shell" id="experiencias">
        <div className="section-tag reveal">
          <span>{'{ experiências }'}</span>
          <span>05 · Onde deixei minha marca</span>
        </div>
        <div className="experience__heading reveal">
          <h2 className="display-title">
            Projetos, equipes e experiências reais.
          </h2>
          <div className="experience__legend">
            <Code2 aria-hidden="true" />
            <span>Desenvolvimento</span>
            <Palette aria-hidden="true" />
            <span>Design</span>
          </div>
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article
              className={`experience-row reveal${experience.featured ? ' experience-row--featured' : ''}`}
              key={experience.place}
            >
              <span className="experience-row__index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="experience-row__main">
                <p>{experience.period}</p>
                <h3>{experience.title}</h3>
                <strong>{experience.place}</strong>
              </div>
              <p className="experience-row__description">
                {experience.description}
              </p>
              <div className="experience-row__tags">
                {experience.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contact__flare" aria-hidden="true" />
        <div className="contact__top reveal">
          <p className="section-kicker">VAMOS CONSTRUIR ALGO?</p>
          <span>06 · Contato</span>
        </div>
        <div className="contact__content reveal">
          <h2>Uma boa ideia começa com uma conversa.</h2>
          <a href="mailto:ianlucasmedeiros@gmail.com">
            <Mail aria-hidden="true" />
            ianlucasmedeiros@gmail.com
            <ExternalLink aria-hidden="true" />
          </a>
        </div>
        <footer>
          <span>Ian Lucas Moreira Medeiros</span>
          <span>Russas, Ceará · Brasil</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </footer>
      </section>
    </main>
  );
}
