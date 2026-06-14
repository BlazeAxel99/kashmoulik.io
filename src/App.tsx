import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Code, 
  Brain, 
  Award, 
  Building, 
  Mail, 
  Send, 
  Sun, 
  Moon, 
  Trophy, 
  Star, 
  Sparkles,
  Terminal,
  FolderOpen,
  Cpu,
  Layers,
  Cloud,
  ArrowUpRight 
} from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeTab, setActiveTab] = useState<string>('experience');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Brain },
    { id: 'certifications', label: 'Certifications', icon: Award }
  ];

  // Motion variants
  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4,  } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
  };

  const cardVariants = {
    offscreen: { y: 20, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        bounce: 0.15,
        duration: 0.8
      }
    }
  };

  return (
    <div className="app-root">
      {/* Ambient Animation Background */}
      <div className="ambient-glow">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="portfolio-container">
        {/* Sticky Sidebar */}
        <aside className="sidebar">
          
          {/* Profile Card */}
          <motion.div 
            className="profile-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="avatar-container">
              <div className="avatar-glow"></div>
              <div className="avatar">KM</div>
            </div>
            
            <h1 className="name">Kash Moulik</h1>
            <div className="tagline">AM – AI Engineering</div>
            <div className="company">
              <Building size={14} style={{ marginRight: '4px' }} /> EY (Ernst & Young)
            </div>
            
            <p className="bio">
              AI Engineer with 3.5+ years building agentic systems, Model Context Protocol (MCP) servers, and enterprise automation. Currently leading IVR voice automation at EY.
            </p>
            
            {/* Social Links */}
            <div className="social-links">
              <a href="https://www.linkedin.com/in/kash-moulik-0348881a0/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                <svg className="social-icon-svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://github.com/blazeaxel99" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                <svg className="social-icon-svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </a>
              <a href="https://twitter.com/KashMoulik" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Twitter">
                <svg className="social-icon-svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="mailto:kmoulik99@gmail.com" className="social-btn" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
            
            <a href="mailto:kmoulik99@gmail.com" className="contact-btn">
              <Send size={15} style={{ marginRight: '6px' }} /> Get In Touch
            </a>
          </motion.div>

          {/* Sticky Navigation */}
          <motion.nav 
            className="nav-card"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ul className="nav-list">
              {navItems.map(item => {
                const Icon = item.icon;
                return (
                  <li key={item.id} className={`nav-item ${activeTab === item.id ? 'active' : ''}`}>
                    <button onClick={() => setActiveTab(item.id)}>
                      <Icon size={16} />
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Light/Dark Toggle */}
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {theme === 'dark' ? (
                <>
                  <Sun size={14} /> Light Mode
                </>
              ) : (
                <>
                  <Moon size={14} /> Dark Mode
                </>
              )}
            </button>
          </motion.nav>
        </aside>

        {/* Main Content Area */}
        <main className="main-content">
          <AnimatePresence mode="wait">
            
            {/* 1. Experience Tab */}
            {activeTab === 'experience' && (
              <motion.section 
                key="experience"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="content-panel active"
              >
                <h2 className="section-title">
                  <Briefcase size={28} style={{ color: 'var(--accent-cyan)' }} /> Work Experience
                </h2>
                
                <div className="timeline">
                  {/* EY */}
                  <motion.div 
                    className="timeline-card"
                    variants={cardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="timeline-header">
                      <div>
                        <h3 className="job-title">Assistant Manager – AI Engineering</h3>
                        <div className="company-name">EY (Ernst & Young)</div>
                      </div>
                      <span className="date-tag">Feb 2026 – Present</span>
                    </div>
                    <ul className="timeline-bullets">
                      <li>Leading a pod of engineers building AI-powered IVR agents using Microsoft Copilot Studio and GPT Realtime API to automate call center operations for a leading pharmaceutical client (50K+ employees).</li>
                      <li>Architecting agentic workflows with real-time LLM inference for voice-based automation; presenting solution architecture to client stakeholders.</li>
                      <li>Designing conversational AI solutions targeting 40% reduction in manual call handling across enterprise support channels.</li>
                      <li>
                        <span className="badge-award">
                          <Trophy size={12} style={{ marginRight: '3px' }} /> Achiever Extraordinaire
                        </span>
                        <span style={{ display: 'block', marginTop: '4px' }}>
                          Awarded by EY GDS under the Extraordinary You program for technical ownership and POC delivery.
                        </span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Accenture SE Analyst */}
                  <motion.div 
                    className="timeline-card"
                    variants={cardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="timeline-header">
                      <div>
                        <h3 className="job-title">Software Engineer (Analyst)</h3>
                        <div className="company-name">Accenture</div>
                      </div>
                      <span className="date-tag">Nov 2024 – Feb 2026</span>
                    </div>
                    <ul className="timeline-bullets">
                      <li>Built LLM-powered AI agents (LangChain) for legacy codebase analysis serving a team of 40+ engineers across 3 client accounts, boosting throughput by 25%.</li>
                      <li>Deployed MCP-compliant automation pipeline to production handling 10K+ API calls/day with 99.5% uptime.</li>
                      <li>Led FastAPI-driven API-fication of legacy systems, increasing interoperability by 30%.</li>
                      <li>Designed reverse-engineering tools reducing manual modernization effort by 40%.</li>
                      <li>
                        <span className="badge-award">
                          <Star size={12} style={{ marginRight: '3px' }} /> Client Centricity Award
                        </span>
                        <span style={{ display: 'block', marginTop: '4px' }}>
                          Awarded for high-impact codebase analysis and modernization engineering.
                        </span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Accenture ASE */}
                  <motion.div 
                    className="timeline-card"
                    variants={cardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="timeline-header">
                      <div>
                        <h3 className="job-title">Associate Software Engineer</h3>
                        <div className="company-name">Accenture</div>
                      </div>
                      <span className="date-tag">Oct 2022 – Nov 2024</span>
                    </div>
                    <ul className="timeline-bullets">
                      <li>Contributed to mainframe modernization for Fortune 500 enterprise clients using Python, COBOL, and Java, reducing legacy technical debt by 35%.</li>
                      <li>Mentored 2 junior developers on AI-driven transformation workflows and code review best practices.</li>
                      <li>
                        <span className="badge-award">
                          <Sparkles size={12} style={{ marginRight: '3px' }} /> Gen AI Mastermind (Top 2%)
                        </span>
                        <span style={{ display: 'block', marginTop: '4px' }}>
                          Finished as a national finalist in Accenture's Generative AI technical challenge.
                        </span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Mindtree Intern */}
                  <motion.div 
                    className="timeline-card"
                    variants={cardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="timeline-header">
                      <div>
                        <h3 className="job-title">Full Stack Developer Intern</h3>
                        <div className="company-name">Mindtree (LTIMindtree)</div>
                      </div>
                      <span className="date-tag">Mar 2022 – Jun 2022</span>
                    </div>
                    <ul className="timeline-bullets">
                      <li>Built web application module using Java, Spring Boot, and ReactJS with RBAC, improving data retrieval speed by 20%.</li>
                    </ul>
                  </motion.div>
                </div>
              </motion.section>
            )}

            {/* 2. Projects Tab */}
            {activeTab === 'projects' && (
              <motion.section 
                key="projects"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="content-panel active"
              >
                <h2 className="section-title">
                  <Code size={28} style={{ color: 'var(--accent-cyan)' }} /> Featured Projects
                </h2>
                
                <div className="projects-grid">
                  {/* Project 1 */}
                  <motion.div 
                    className="project-card"
                    variants={cardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                  >
                    <div className="project-top">
                      <div className="project-icon-header">
                        <FolderOpen className="project-folder" size={30} />
                        <div className="project-links">
                          <a href="https://github.com/blazeaxel99" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                            <ArrowUpRight size={20} />
                          </a>
                        </div>
                      </div>
                      <h3 className="project-title">MCP Server Implementation</h3>
                      <p className="project-description">
                        Built production Model Context Protocol (MCP) servers enabling secure two-way data connections between AI tools and enterprise data sources; reduced LLM hallucinations by 30%.
                      </p>
                    </div>
                    <div className="project-tech">
                      <span>Python</span>
                      <span>Anthropic Protocol</span>
                      <span>AI Agents</span>
                    </div>
                  </motion.div>

                  {/* Project 2 */}
                  <motion.div 
                    className="project-card"
                    variants={cardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                  >
                    <div className="project-top">
                      <div className="project-icon-header">
                        <FolderOpen className="project-folder" size={30} />
                        <div className="project-links">
                          <a href="https://github.com/blazeaxel99" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                            <ArrowUpRight size={20} />
                          </a>
                        </div>
                      </div>
                      <h3 className="project-title">AI Agent Toolkit</h3>
                      <p className="project-description">
                        Contributed to open-source multi-agent frameworks (Microsoft AutoGen); built multi-agent prototypes reducing manual task handoffs and pipeline handshakes by 40%.
                      </p>
                    </div>
                    <div className="project-tech">
                      <span>AutoGen</span>
                      <span>LangChain</span>
                      <span>Multi-Agent</span>
                    </div>
                  </motion.div>
                </div>
              </motion.section>
            )}

            {/* 3. Skills Tab */}
            {activeTab === 'skills' && (
              <motion.section 
                key="skills"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="content-panel active"
              >
                <h2 className="section-title">
                  <Brain size={28} style={{ color: 'var(--accent-cyan)' }} /> Skills & Expertise
                </h2>
                
                <div className="skills-grid">
                  {/* Programming */}
                  <div className="skill-category">
                    <h3 className="category-title">
                      <Terminal size={18} /> Programming
                    </h3>
                    <div className="tags-container">
                      {['Python', 'TypeScript', 'SQL', 'JavaScript', 'Java', 'COBOL'].map(skill => (
                        <span key={skill} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>

                  {/* AI/ML */}
                  <div className="skill-category">
                    <h3 className="category-title">
                      <Cpu size={18} /> Generative AI & Agents
                    </h3>
                    <div className="tags-container">
                      {['GenAI', 'LLMs', 'AI Agents', 'RAG', 'Model Context Protocol (MCP)', 'NLP', 'AutoGen', 'LangChain', 'PyTorch', 'Transformers'].map(skill => (
                        <span key={skill} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>

                  {/* Web & Frameworks */}
                  <div className="skill-category">
                    <h3 className="category-title">
                      <Layers size={18} /> Web & Frameworks
                    </h3>
                    <div className="tags-container">
                      {['FastAPI', 'ReactJS', 'Node.js', 'Spring Boot', 'Copilot Studio'].map(skill => (
                        <span key={skill} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>

                  {/* Cloud & DevOps */}
                  <div className="skill-category">
                    <h3 className="category-title">
                      <Cloud size={18} /> Cloud & Tools
                    </h3>
                    <div className="tags-container">
                      {['Docker', 'Kubernetes', 'Git', 'REST APIs', 'MongoDB', 'GitHub Copilot'].map(skill => (
                        <span key={skill} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>
            )}

            {/* 4. Certifications Tab */}
            {activeTab === 'certifications' && (
              <motion.section 
                key="certifications"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="content-panel active"
              >
                <h2 className="section-title">
                  <Award size={28} style={{ color: 'var(--accent-cyan)' }} /> Professional Certifications
                </h2>
                
                <div className="certs-grid">
                  {[
                    { name: 'GitHub Copilot Certified', issuer: 'GitHub', date: 'May 2026', icon: Code },
                    { name: 'Applied AI - Bronze Learning', issuer: 'EY (Ernst & Young)', date: 'Apr 2026', icon: Cpu },
                    { name: 'MCP: Automation in Production', issuer: 'Hugging Face', date: 'Jun 2025', icon: Sparkles },
                    { name: 'Fundamentals of MCP', issuer: 'Hugging Face', date: 'Jun 2025', icon: Cpu },
                    { name: 'AI Agents Course', issuer: 'Hugging Face', date: 'Jun 2025', icon: Brain },
                    { name: 'SI Architect', issuer: 'MongoDB', date: 'Jan 2025', icon: Layers },
                    { name: 'Pair Programming with LLMs', issuer: 'DeepLearning.AI', date: 'Jul 2024', icon: Code },
                    { name: 'Deep Learning Getting Started', issuer: 'NVIDIA', date: 'Apr 2025', icon: Cpu }
                  ].map((cert, index) => {
                    const Icon = cert.icon;
                    return (
                      <motion.div 
                        key={cert.name}
                        className="cert-card"
                        variants={cardVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="cert-icon"><Icon size={24} /></div>
                        <div className="cert-details">
                          <span className="cert-name">{cert.name}</span>
                          <span className="cert-issuer">{cert.issuer}</span>
                          <span className="cert-date">{cert.date}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.section>
            )}
            
          </AnimatePresence>

          {/* Footer */}
          <footer className="main-footer">
            <p>&copy; 2026 Kash Moulik. Powered by React, TypeScript, and Framer Motion.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
