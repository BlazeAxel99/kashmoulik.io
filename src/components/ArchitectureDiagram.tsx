import { motion } from 'framer-motion';

interface DiagramProps {
  type: 'agent' | 'context';
}

export default function ArchitectureDiagram({ type }: DiagramProps) {
  if (type === 'agent') {
    return (
      <div className="arch-diagram-wrapper">
        <svg viewBox="0 0 520 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="arch-svg">
          {/* Defs for gradients & markers */}
          <defs>
            <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-cyan)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0.8" />
            </linearGradient>
            <filter id="shadowFilter" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="rgba(0, 242, 254, 0.15)" />
            </filter>
            <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
          </defs>

          {/* Paths (Connections) */}
          <path d="M95 100 H140" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="4 4" />
          <motion.path 
            d="M95 100 H140" 
            stroke="url(#glowGrad)" 
            strokeWidth="3" 
            initial={{ strokeDashoffset: 20, strokeDasharray: "10 10" }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />

          <path d="M260 100 H300" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="4 4" />
          <motion.path 
            d="M260 100 H300" 
            stroke="url(#glowGrad)" 
            strokeWidth="3" 
            initial={{ strokeDashoffset: 20, strokeDasharray: "10 10" }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.3 }}
          />

          <path d="M420 100 H450" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="4 4" />
          <motion.path 
            d="M420 100 H450" 
            stroke="url(#glowGrad)" 
            strokeWidth="3" 
            initial={{ strokeDashoffset: 20, strokeDasharray: "10 10" }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.6 }}
          />

          {/* Node 1: User / Caller */}
          <g transform="translate(5, 55)">
            <rect width="90" height="90" rx="14" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" />
            <circle cx="45" cy="32" r="14" stroke="var(--accent-cyan)" strokeWidth="2" fill="none" />
            <path d="M27 55 C27 47 34 43 45 43 C56 43 63 47 63 55" stroke="var(--accent-cyan)" strokeWidth="2" fill="none" />
            <text x="45" y="80" fill="var(--text-secondary)" fontSize="12" textAnchor="middle" fontWeight="bold">Caller (IVR)</text>
          </g>

          {/* Node 2: Copilot Studio / Realtime GPT */}
          <g transform="translate(140, 45)">
            <rect width="120" height="110" rx="16" fill="var(--bg-card)" stroke="var(--accent-cyan)" strokeWidth="1.5" filter="url(#shadowFilter)" />
            <circle cx="60" cy="38" r="18" fill="rgba(0, 242, 254, 0.08)" />
            <path d="M52 38 H68 M60 30 V46" stroke="var(--accent-cyan)" strokeWidth="2.5" strokeLinecap="round" />
            <text x="60" y="76" fill="var(--text-primary)" fontSize="13" textAnchor="middle" fontWeight="bold">Copilot Studio</text>
            <text x="60" y="92" fill="var(--text-muted)" fontSize="11" textAnchor="middle">GPT-4o Realtime</text>
          </g>

          {/* Node 3: Enterprise Hub (FastAPI) */}
          <g transform="translate(300, 45)">
            <rect width="120" height="110" rx="16" fill="var(--bg-card)" stroke="var(--accent-blue)" strokeWidth="1.5" />
            <circle cx="60" cy="38" r="18" fill="rgba(79, 172, 254, 0.08)" />
            <rect x="50" y="28" width="20" height="20" rx="4" stroke="var(--accent-blue)" strokeWidth="2.5" fill="none" />
            <text x="60" y="76" fill="var(--text-primary)" fontSize="13" textAnchor="middle" fontWeight="bold">FastAPI Hub</text>
            <text x="60" y="92" fill="var(--text-muted)" fontSize="11" textAnchor="middle">Integration APIs</text>
          </g>

          {/* Node 4: Systems of Record */}
          <g transform="translate(450, 55)">
            <rect width="65" height="90" rx="14" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" />
            {/* Cylinders for Database */}
            <path d="M18 24 C18 20 47 20 47 24 C47 28 18 28 18 24 Z" stroke="var(--text-secondary)" strokeWidth="1.5" fill="none" />
            <path d="M18 24 V34 C18 38 47 38 47 34 V24" stroke="var(--text-secondary)" strokeWidth="1.5" fill="none" />
            <path d="M18 34 V44 C18 48 47 48 47 44 V34" stroke="var(--text-secondary)" strokeWidth="1.5" fill="none" />
            <text x="33" y="68" fill="var(--text-secondary)" fontSize="11" textAnchor="middle" fontWeight="bold">CRM</text>
            <text x="33" y="80" fill="var(--text-muted)" fontSize="10" textAnchor="middle">Databases</text>
          </g>
        </svg>
      </div>
    );
  }

  // Context Engineering Studio Diagram
  return (
    <div className="arch-diagram-wrapper">
      <svg viewBox="0 0 520 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="arch-svg">
        <defs>
          <linearGradient id="glowGradContext" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-teal)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--accent-cyan)" stopOpacity="0.8" />
          </linearGradient>
          <filter id="tealGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="rgba(100, 255, 218, 0.12)" />
          </filter>
        </defs>

        {/* Connections */}
        <path d="M95 100 H140" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="4 4" />
        <motion.path 
          d="M95 100 H140" 
          stroke="url(#glowGradContext)" 
          strokeWidth="3" 
          initial={{ strokeDashoffset: 20, strokeDasharray: "10 10" }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />

        <path d="M260 100 H300" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="4 4" />
        <motion.path 
          d="M260 100 H300" 
          stroke="url(#glowGradContext)" 
          strokeWidth="3" 
          initial={{ strokeDashoffset: 20, strokeDasharray: "10 10" }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.3 }}
        />

        <path d="M420 100 H450" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="4 4" />
        <motion.path 
          d="M420 100 H450" 
          stroke="url(#glowGradContext)" 
          strokeWidth="3" 
          initial={{ strokeDashoffset: 20, strokeDasharray: "10 10" }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.6 }}
        />

        {/* Node 1: Workspace Ingestion */}
        <g transform="translate(5, 55)">
          <rect width="90" height="90" rx="14" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" />
          <path d="M28 28 H62 M28 40 H62 M28 52 H50" stroke="var(--text-secondary)" strokeWidth="2.5" strokeLinecap="round" />
          <text x="45" y="78" fill="var(--text-secondary)" fontSize="12" textAnchor="middle" fontWeight="bold">Workspace</text>
        </g>

        {/* Node 2: AST Analysis Engine */}
        <g transform="translate(140, 45)">
          <rect width="120" height="110" rx="16" fill="var(--bg-card)" stroke="var(--accent-teal)" strokeWidth="1.5" filter="url(#tealGlow)" />
          <circle cx="60" cy="38" r="18" fill="rgba(100, 255, 218, 0.08)" />
          <path d="M48 44 L56 32 L64 44 M56 32 V48" stroke="var(--accent-teal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="60" y="76" fill="var(--text-primary)" fontSize="13" textAnchor="middle" fontWeight="bold">AST Analyzer</text>
          <text x="60" y="92" fill="var(--text-muted)" fontSize="11" textAnchor="middle">Code Ingestion</text>
        </g>

        {/* Node 3: Context Packing Engine */}
        <g transform="translate(300, 45)">
          <rect width="120" height="110" rx="16" fill="var(--bg-card)" stroke="var(--accent-cyan)" strokeWidth="1.5" />
          <circle cx="60" cy="38" r="18" fill="rgba(0, 242, 254, 0.08)" />
          <path d="M48 28 H72 V48 H48 Z" stroke="var(--accent-cyan)" strokeWidth="2.5" fill="none" />
          <path d="M54 38 L60 44 L66 38" stroke="var(--accent-cyan)" strokeWidth="2.5" fill="none" />
          <text x="60" y="76" fill="var(--text-primary)" fontSize="13" textAnchor="middle" fontWeight="bold">Context Packer</text>
          <text x="60" y="92" fill="var(--text-muted)" fontSize="11" textAnchor="middle">Token Optimization</text>
        </g>

        {/* Node 4: Optimized LLM Prompt */}
        <g transform="translate(450, 55)">
          <rect width="65" height="90" rx="14" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" />
          <circle cx="33" cy="32" r="10" fill="var(--accent-teal)" />
          <path d="M18 52 H52 M18 62 H44" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" />
          <text x="33" y="82" fill="var(--text-secondary)" fontSize="11" textAnchor="middle" fontWeight="bold">Prompt</text>
        </g>
      </svg>
    </div>
  );
}
