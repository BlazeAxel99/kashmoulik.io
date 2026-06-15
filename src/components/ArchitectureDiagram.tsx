import { motion } from 'framer-motion';

interface DiagramProps {
  type: 'agent' | 'context';
}

export default function ArchitectureDiagram({ type }: DiagramProps) {
  if (type === 'agent') {
    return (
      <div className="arch-diagram-wrapper">
        <svg viewBox="0 0 600 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="arch-svg">
          {/* Defs for gradients & markers */}
          <defs>
            <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-cyan)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0.8" />
            </linearGradient>
            <filter id="shadowFilter" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="rgba(0, 242, 254, 0.15)" />
            </filter>
          </defs>

          {/* Paths (Connections) */}
          {/* Node 1 to Node 2 */}
          <path d="M90 120 H150" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="4 4" />
          <motion.path 
            d="M90 120 H150" 
            stroke="url(#glowGrad)" 
            strokeWidth="3" 
            initial={{ strokeDashoffset: 20, strokeDasharray: "10 10" }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />

          {/* Node 2 to Node 3 */}
          <path d="M250 120 H310" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="4 4" />
          <motion.path 
            d="M250 120 H310" 
            stroke="url(#glowGrad)" 
            strokeWidth="3" 
            initial={{ strokeDashoffset: 20, strokeDasharray: "10 10" }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.3 }}
          />

          {/* Node 3 to Node 4 */}
          <path d="M410 120 H470" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="4 4" />
          <motion.path 
            d="M410 120 H470" 
            stroke="url(#glowGrad)" 
            strokeWidth="3" 
            initial={{ strokeDashoffset: 20, strokeDasharray: "10 10" }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.6 }}
          />

          {/* Nodes */}
          {/* Node 1: User / Caller */}
          <g transform="translate(10, 80)">
            <rect width="80" height="80" rx="12" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" />
            <circle cx="40" cy="35" r="14" stroke="var(--accent-cyan)" strokeWidth="2" fill="none" />
            <path d="M24 58 C24 50 30 46 40 46 C50 46 56 50 56 58" stroke="var(--accent-cyan)" strokeWidth="2" fill="none" />
            <text x="40" y="74" fill="var(--text-secondary)" fontSize="10" textAnchor="middle" fontWeight="bold">Caller (IVR)</text>
          </g>

          {/* Node 2: Copilot Studio / Realtime GPT */}
          <g transform="translate(150, 70)">
            <rect width="100" height="100" rx="16" fill="var(--bg-card)" stroke="var(--accent-cyan)" strokeWidth="1.5" filter="url(#shadowFilter)" />
            <circle cx="50" cy="42" r="16" fill="rgba(0, 242, 254, 0.08)" />
            <path d="M42 42 H58 M50 34 V50" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" />
            <text x="50" y="76" fill="var(--text-primary)" fontSize="11" textAnchor="middle" fontWeight="bold">Copilot Studio</text>
            <text x="50" y="88" fill="var(--text-muted)" fontSize="9" textAnchor="middle">GPT-4o Realtime</text>
          </g>

          {/* Node 3: Enterprise Hub (FastAPI) */}
          <g transform="translate(310, 70)">
            <rect width="100" height="100" rx="16" fill="var(--bg-card)" stroke="var(--accent-blue)" strokeWidth="1.5" />
            <circle cx="50" cy="42" r="16" fill="rgba(79, 172, 254, 0.08)" />
            <rect x="42" y="34" width="16" height="16" rx="3" stroke="var(--accent-blue)" strokeWidth="2" fill="none" />
            <text x="50" y="76" fill="var(--text-primary)" fontSize="11" textAnchor="middle" fontWeight="bold">FastAPI Hub</text>
            <text x="50" y="88" fill="var(--text-muted)" fontSize="9" textAnchor="middle">Integration APIs</text>
          </g>

          {/* Node 4: Systems of Record (CRM/ERP) */}
          <g transform="translate(470, 80)">
            <rect width="120" height="80" rx="12" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" />
            {/* Cylinders for Database */}
            <path d="M45 28 C45 24 75 24 75 28 C75 32 45 32 45 28 Z" stroke="var(--text-secondary)" strokeWidth="1.5" fill="none" />
            <path d="M45 28 V36 C45 40 75 40 75 36 V28" stroke="var(--text-secondary)" strokeWidth="1.5" fill="none" />
            <path d="M45 36 V44 C45 48 75 48 75 44 V36" stroke="var(--text-secondary)" strokeWidth="1.5" fill="none" />
            <text x="60" y="66" fill="var(--text-secondary)" fontSize="10" textAnchor="middle" fontWeight="bold">CRM / Databases</text>
          </g>
        </svg>
      </div>
    );
  }

  // Context Engineering Studio Diagram
  return (
    <div className="arch-diagram-wrapper">
      <svg viewBox="0 0 600 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="arch-svg">
        <defs>
          <linearGradient id="glowGradContext" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-teal)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--accent-cyan)" stopOpacity="0.8" />
          </linearGradient>
          <filter id="tealGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="rgba(100, 255, 218, 0.12)" />
          </filter>
        </defs>

        {/* Connections */}
        <path d="M90 120 H150" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="4 4" />
        <motion.path 
          d="M90 120 H150" 
          stroke="url(#glowGradContext)" 
          strokeWidth="3" 
          initial={{ strokeDashoffset: 20, strokeDasharray: "10 10" }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />

        <path d="M250 120 H310" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="4 4" />
        <motion.path 
          d="M250 120 H310" 
          stroke="url(#glowGradContext)" 
          strokeWidth="3" 
          initial={{ strokeDashoffset: 20, strokeDasharray: "10 10" }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.3 }}
        />

        <path d="M410 120 H470" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="4 4" />
        <motion.path 
          d="M410 120 H470" 
          stroke="url(#glowGradContext)" 
          strokeWidth="3" 
          initial={{ strokeDashoffset: 20, strokeDasharray: "10 10" }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.6 }}
        />

        {/* Node 1: Workspace Ingestion */}
        <g transform="translate(10, 80)">
          <rect width="80" height="80" rx="12" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" />
          <path d="M30 30 H50 M30 40 H50 M30 50 H42" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" />
          <text x="40" y="72" fill="var(--text-secondary)" fontSize="10" textAnchor="middle" fontWeight="bold">Local Workspace</text>
        </g>

        {/* Node 2: AST Analysis Engine */}
        <g transform="translate(150, 70)">
          <rect width="100" height="100" rx="16" fill="var(--bg-card)" stroke="var(--accent-teal)" strokeWidth="1.5" filter="url(#tealGlow)" />
          <circle cx="50" cy="42" r="16" fill="rgba(100, 255, 218, 0.08)" />
          <path d="M38 46 L46 36 L54 46 M46 36 V48" stroke="var(--accent-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="50" y="76" fill="var(--text-primary)" fontSize="11" textAnchor="middle" fontWeight="bold">AST Analyzer</text>
          <text x="50" y="88" fill="var(--text-muted)" fontSize="9" textAnchor="middle">Code Ingestion</text>
        </g>

        {/* Node 3: Context Packing Engine */}
        <g transform="translate(310, 70)">
          <rect width="100" height="100" rx="16" fill="var(--bg-card)" stroke="var(--accent-cyan)" strokeWidth="1.5" />
          <circle cx="50" cy="42" r="16" fill="rgba(0, 242, 254, 0.08)" />
          <path d="M38 34 H62 V50 H38 Z" stroke="var(--accent-cyan)" strokeWidth="2" fill="none" />
          <path d="M44 40 L50 46 L56 40" stroke="var(--accent-cyan)" strokeWidth="2" fill="none" />
          <text x="50" y="76" fill="var(--text-primary)" fontSize="11" textAnchor="middle" fontWeight="bold">Context Packer</text>
          <text x="50" y="88" fill="var(--text-muted)" fontSize="9" textAnchor="middle">Token Optimization</text>
        </g>

        {/* Node 4: Optimized LLM Prompt */}
        <g transform="translate(470, 80)">
          <rect width="120" height="80" rx="12" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="1.5" />
          <circle cx="45" cy="40" r="8" fill="var(--accent-teal)" />
          <path d="M60 35 H95 M60 45 H85" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" />
          <text x="60" y="66" fill="var(--text-secondary)" fontSize="10" textAnchor="middle" fontWeight="bold">High-Fidelity Prompt</text>
        </g>
      </svg>
    </div>
  );
}
