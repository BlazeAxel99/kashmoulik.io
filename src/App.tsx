import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Mail, 
  Send, 
  Sun, 
  Moon, 
  Trophy, 
  ArrowUpRight,
  MapPin,
  Download
} from 'lucide-react';
import ThreeCanvas from './components/ThreeCanvas';
import ArchitectureDiagram from './components/ArchitectureDiagram';

// ==========================================
// 1. Cyberpunk Text Decryptor Effect
// ==========================================
const DecryptText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*+";
    let interval: any = null;

    interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, 25);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

// ==========================================
// 2. Main Portfolio Application Component
// ==========================================
export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const certifications = [
    { name: 'GitHub Copilot Certified', issuer: 'GitHub' },
    { name: 'Applied AI Learning (Bronze)', issuer: 'EY' },
    { name: 'MCP: Automation in Production', issuer: 'Hugging Face' },
    { name: 'Fundamentals of MCP', issuer: 'Hugging Face' },
    { name: 'AI Agents Course', issuer: 'Hugging Face' },
    { name: 'SI Architect', issuer: 'MongoDB' },
    { name: 'Pair Programming with LLMs', issuer: 'DeepLearning.AI' },
    { name: 'Deep Learning Getting Started', issuer: 'NVIDIA' }
  ];

  return (
    <div className="portfolio-root-container">
      {/* Noise and Aurora Effects */}
      <div className="noise-overlay" />
      <div className="aurora-container">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>

      <div className="portfolio-root">
        {/* Navigation */}
        <nav className="top-nav">
          <div className="logo">km.io</div>
          <div className="nav-actions">
            <button className="theme-toggle-nav" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a 
              href="/kashmoulik.io/Kash_Moulik_Resume.pdf" 
              download="Kash_Moulik_Resume.pdf"
              className="escape-hatch-btn"
            >
              <Download size={14} /> Resume PDF
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-wrapper">
            <motion.div 
              className="hero-info"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="hero-badge">AI Systems & Agents</span>
              <h1 className="hero-title">
                Hi, I'm <br />
                <span className="text-gradient"><DecryptText text="Kash Moulik" /></span>
              </h1>
              <p className="hero-description">
                Assistant Manager of AI Engineering at EY. I design and build production-grade Multi-Agent workflows, Model Context Protocol (MCP) servers, and enterprise automation pipelines.
              </p>
              <div className="hero-ctas">
                <a href="#contact" className="primary-btn">
                  <Send size={15} /> Let's Connect
                </a>
                <a href="https://github.com/blazeaxel99" target="_blank" rel="noopener noreferrer" className="secondary-btn">
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" style={{ marginRight: '6px' }}><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg> GitHub Profile
                </a>
              </div>
            </motion.div>
            <div className="hero-visual">
              <ThreeCanvas />
            </div>
          </div>
        </section>

        {/* Bento Stats Section */}
        <section className="bento-section">
          <div className="section-head">
            <span className="section-tagline">At A Glance</span>
            <h2 className="section-title">Personal Dashboard</h2>
          </div>

          <div className="bento-grid">
            {/* Stat 1 */}
            <motion.div 
              className="glass-panel bento-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="bento-metric-large">3.5+</span>
              <span className="bento-label">Years of Experience</span>
            </motion.div>

            {/* Stat 2 */}
            <motion.div 
              className="glass-panel bento-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="bento-metric-large">12+</span>
              <span className="bento-label">Enterprise Automations Deployed</span>
            </motion.div>

            {/* EY Badge */}
            <motion.div 
              className="glass-panel bento-card col-span-2"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <span className="bento-label" style={{ textTransform: 'uppercase', color: 'var(--accent-cyan)' }}>Current Role</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, marginTop: '0.25rem' }}>Assistant Manager</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>AI Engineering & Architecture @ EY</p>
                </div>
                <Trophy size={28} style={{ color: '#fbbf24' }} />
              </div>
              <div className="bento-label" style={{ fontSize: '0.75rem', marginTop: '1rem' }}>
                Awarded "Achiever Extraordinaire" for delivering complex Generative AI POCs.
              </div>
            </motion.div>

            {/* Current Focus */}
            <motion.div 
              className="glass-panel bento-card col-span-2"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div>
                <span className="bento-label" style={{ textTransform: 'uppercase' }}>Focus Area</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, marginTop: '0.25rem', color: 'var(--text-primary)' }}>Voice AI & IVR Agents</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Scaling Microsoft Copilot Studio and GPT Realtime integration models to automate heavy-volume enterprise helpdesks.</p>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div 
              className="glass-panel bento-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <MapPin size={24} style={{ color: 'var(--accent-cyan)' }} />
              <div>
                <span className="bento-label">Based In</span>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700 }}>India</h4>
              </div>
            </motion.div>

            {/* GitHub Activity Indicator */}
            <motion.div 
              className="glass-panel bento-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="pulse-dot" />
              <div>
                <span className="bento-label">GitHub Contribution</span>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700 }}>Active Daily</h4>
              </div>
            </motion.div>

            {/* Core Tech Stack */}
            <motion.div 
              className="glass-panel bento-card col-span-2"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div>
                <span className="bento-label" style={{ textTransform: 'uppercase' }}>Core Stack</span>
                <div className="bento-tech-list">
                  {['Python', 'FastAPI', 'LangChain', 'AutoGen', 'MCP Protocol', 'React', 'TypeScript', 'Docker', 'MongoDB'].map(tech => (
                    <span key={tech} className="bento-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Work (Proof Section) */}
        <section className="work-section">
          <div className="section-head">
            <span className="section-tagline">Systems Proof</span>
            <h2 className="section-title">Featured Engagements</h2>
          </div>

          {/* Project 1: Context Engineering Studio */}
          <div className="work-item">
            <motion.div 
              className="work-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="work-badge">Developer Enablement Tooling</span>
              <h3 className="work-title">Context Engineering Studio</h3>
              <p className="work-description">
                An open-source workspace intelligence tool designed to parse local code repositories, map class hierarchies using AST analysis, and serialize codebases into token-efficient context formats for LLM inference.
              </p>
              <div className="work-stats-badge">
                98% Ingestion Accuracy • 40% Token Reduction
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://github.com/BlazeAxel99/context-engg-studio" target="_blank" rel="noopener noreferrer" className="primary-btn" style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}>
                  GitHub Repo <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="work-diagram-container"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <ArchitectureDiagram type="context" />
            </motion.div>
          </div>

          {/* Project 2: Voice Agent Platform */}
          <div className="work-item reverse">
            <motion.div 
              className="work-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="work-badge">Conversational AI Deployment</span>
              <h3 className="work-title">AI Voice Agent Platform</h3>
              <p className="work-description">
                Architected and deployed a multi-agent helpdesk platform utilizing Microsoft Copilot Studio and GPT Realtime API to handle high-frequency customer query support.
              </p>
              <div className="work-stats-badge">
                40% Decrease in Manual Escalations • 50k+ Employee Reach
              </div>
            </motion.div>
            <motion.div 
              className="work-diagram-container"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <ArchitectureDiagram type="agent" />
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="experience-section">
          <div className="section-head">
            <span className="section-tagline">Timeline</span>
            <h2 className="section-title">Work Experience</h2>
          </div>

          <div className="timeline-flow">
            {/* Timeline Item 1 */}
            <div className="timeline-item">
              <div className="timeline-dot" />
              <motion.div 
                className="glass-panel timeline-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="timeline-header-flow">
                  <div>
                    <h3 className="timeline-company">EY (Ernst & Young)</h3>
                    <span className="timeline-role">Assistant Manager – AI Engineering</span>
                  </div>
                  <span className="timeline-date">Feb 2026 – Present</span>
                </div>
                <ul className="timeline-bullets">
                  <li>Leading a specialized pod building conversational IVR agents using GPT Realtime API and Copilot Studio.</li>
                  <li>Architecting solution blueprints incorporating real-time database lookups and tool calling schemas.</li>
                  <li>Received EY's "Achiever Extraordinaire" award under the GDS Extraordinary You initiative.</li>
                </ul>
              </motion.div>
            </div>

            {/* Timeline Item 2 */}
            <div className="timeline-item">
              <div className="timeline-dot" />
              <motion.div 
                className="glass-panel timeline-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="timeline-header-flow">
                  <div>
                    <h3 className="timeline-company">Accenture</h3>
                    <span className="timeline-role">Software Engineer (Analyst)</span>
                  </div>
                  <span className="timeline-date">Nov 2024 – Feb 2026</span>
                </div>
                <ul className="timeline-bullets">
                  <li>Developed custom LLM codebase analysis pipelines, boosting team throughput by 25%.</li>
                  <li>Designed and scaled production MCP servers handling 10k+ requests/day.</li>
                  <li>Awarded the Accenture Client Centricity award for technical excellence.</li>
                </ul>
              </motion.div>
            </div>

            {/* Timeline Item 3 */}
            <div className="timeline-item">
              <div className="timeline-dot" />
              <motion.div 
                className="glass-panel timeline-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="timeline-header-flow">
                  <div>
                    <h3 className="timeline-company">Accenture</h3>
                    <span className="timeline-role">Associate Software Engineer</span>
                  </div>
                  <span className="timeline-date">Oct 2022 – Nov 2024</span>
                </div>
                <ul className="timeline-bullets">
                  <li>Worked on modernization and refactoring of COBOL/Mainframe systems into Python.</li>
                  <li>National Finalist (Top 2%) in Accenture's Generative AI Mastermind challenge.</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certifications Infinite Scroll Marquee */}
        <section className="certifications-section">
          <div className="section-head" style={{ textAlign: 'center' }}>
            <span className="section-tagline">Validation</span>
            <h2 className="section-title">Credentials & Certifications</h2>
          </div>

          <div className="marquee-container">
            <div className="marquee-content">
              {/* Double array to create seamless loop */}
              {[...certifications, ...certifications].map((cert, index) => (
                <div key={index} className="marquee-tag">
                  <Award size={16} style={{ color: 'var(--accent-teal)' }} />
                  <span>{cert.name}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>({cert.issuer})</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Footer Section */}
        <section id="contact" className="contact-section">
          <h2 className="contact-headline">Ready to build?</h2>
          <p className="contact-desc">
            Let's design and deploy production-grade AI agent solutions for your enterprise.
          </p>
          <a href="mailto:kmoulik99@gmail.com" className="primary-btn" style={{ margin: '0 auto 3rem', width: 'fit-content' }}>
            <Mail size={16} /> kmoulik99@gmail.com
          </a>
          
          <div className="social-bar">
            <a href="https://linkedin.com/in/kash-moulik-0348881a0/" target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://github.com/blazeaxel99" target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
            </a>
            <a href="https://twitter.com/KashMoulik" target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
