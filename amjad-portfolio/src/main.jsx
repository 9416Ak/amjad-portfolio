import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const projects = [
  {
    number: '01', name: 'InterviewX AI', type: 'AI PRODUCT · FULL STACK',
    description: 'An AI-powered mock interview platform designed to help candidates practise, receive feedback, and improve their interview performance.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'LLM API'],
    status: 'In development', link: '#contact'
  },
  {
    number: '02', name: 'AI PDF Chatbot', type: 'GENERATIVE AI · RAG',
    description: 'A document-question-answering app that lets users upload PDFs and ask questions using retrieval-augmented generation.',
    stack: ['Python', 'Streamlit', 'FAISS', 'LangChain', 'Gemini'],
    status: 'Built', link: '#contact'
  },
  {
    number: '03', name: 'More experiments', type: 'LEARNING IN PUBLIC',
    description: 'A growing collection of experiments in machine learning, backend development, automation, and practical AI.',
    stack: ['Python', 'C++', 'SQL', 'APIs'],
    status: 'Ongoing', link: 'https://github.com/'
  }
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [year] = React.useState(new Date().getFullYear());
  return <>
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#home" aria-label="Amjad home">A<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? '✕' : '☰'}</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['About', 'Projects', 'Skills', 'Contact'].map(x => <a key={x} href={`#${x.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{x}</a>)}
          <a className="nav-cta" href="#contact">Let’s talk <span>↗</span></a>
        </div>
      </nav>
    </header>

    <main>
      <section className="hero container" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"/> AVAILABLE FOR INTERNSHIP OPPORTUNITIES</div>
          <h1>Building useful<br/><em>things with AI.</em></h1>
          <p className="hero-text">I’m Amjad — a Computer Science & AI student who enjoys turning ideas into thoughtful software, intelligent tools, and real-world products.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <span>↘</span></a>
            <a className="text-link" href="#contact">Get in touch <span>↗</span></a>
          </div>
          <div className="hero-meta"><span>BASED IN JAIPUR, INDIA</span><span>CSAI · B.TECH</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract digital orbit illustration">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
          <div className="core"><span>AI</span><small>BUILD · LEARN · SHIP</small></div>
          <div className="orbit-dot dot-a"/><div className="orbit-dot dot-b"/><div className="orbit-dot dot-c"/>
          <div className="art-label label-top">CREATIVE ENGINEERING</div><div className="art-label label-bottom">HUMAN-CENTERED TECHNOLOGY</div>
        </div>
        <div className="scroll-note"><span/> SCROLL TO EXPLORE</div>
      </section>

      <section className="intro-section" id="about">
        <div className="container intro-grid">
          <div className="section-kicker">01 / ABOUT ME</div>
          <div><h2>Curious by nature.<br/><span>Builder by choice.</span></h2>
            <p className="intro-body">I’m pursuing a B.Tech in Computer Science & Engineering (AI). I’m focused on applied AI, generative AI, and software engineering — with a simple goal: build products that solve meaningful problems and keep getting better at the craft.</p>
            <div className="facts"><div><strong>01</strong><span>AI-first mindset</span></div><div><strong>02</strong><span>Product-focused</span></div><div><strong>03</strong><span>Always learning</span></div></div>
          </div>
        </div>
      </section>

      <section className="projects-section container" id="projects">
        <div className="section-head"><div><div className="section-kicker">02 / SELECTED WORK</div><h2>Things I’ve <span>built.</span></h2></div><p>A few projects from my journey<br/>of learning by building.</p></div>
        <div className="project-list">{projects.map(p => <article className="project" key={p.number}>
          <div className="project-number">/{p.number}</div><div className="project-main"><div className="project-type">{p.type}</div><h3>{p.name}</h3><p>{p.description}</p><div className="tags">{p.stack.map(s => <span key={s}>{s}</span>)}</div></div>
          <div className="project-end"><span className="status"><i/> {p.status}</span><a href={p.link} aria-label={`View ${p.name}`}>↗</a></div>
        </article>)}</div>
      </section>

      <section className="skills-section" id="skills"><div className="container skills-grid">
        <div><div className="section-kicker">03 / TOOLKIT</div><h2>Tools for<br/><span>the journey.</span></h2><p className="skills-intro">My current toolkit is always evolving. These are the technologies I work with and continue to explore.</p></div>
        <div className="skill-groups">
          <div className="skill-group"><h3>LANGUAGES</h3><div className="skill-items"><span>Python</span><span>C++</span><span>JavaScript</span><span>SQL</span></div></div>
          <div className="skill-group"><h3>AI / DATA</h3><div className="skill-items"><span>Machine Learning</span><span>Generative AI</span><span>RAG</span><span>NumPy</span><span>Pandas</span></div></div>
          <div className="skill-group"><h3>DEVELOPMENT</h3><div className="skill-items"><span>React</span><span>Node.js</span><span>Express</span><span>MongoDB</span><span>Git & GitHub</span><span>REST APIs</span></div></div>
        </div>
      </div></section>

      <section className="contact-section container" id="contact">
        <div className="section-kicker">04 / WHAT’S NEXT?</div><h2>Have an idea?<br/><em>Let’s build it.</em></h2>
        <p>I’m open to internships, collaborative projects, and conversations around AI and software engineering.</p>
        <a className="button button-primary" href="mailto:your.email@example.com">Say hello <span>↗</span></a>
        <div className="contact-hint">Replace the placeholder email and social links with your details before publishing.</div>
      </section>
    </main>

    <footer className="footer"><div className="container footer-inner"><a className="brand" href="#home">A<span>.</span></a><span>DESIGNED & BUILT BY AMJAD · {year}</span><div><a href="https://github.com/" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN ↗</a></div></div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
