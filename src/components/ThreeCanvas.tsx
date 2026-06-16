import { useEffect, useRef } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
  px?: number;
  py?: number;
  vx: number;
  vy: number;
  vz: number;
  baseSize: number;
}

export default function ThreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    // Mouse tracking for parallax
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX / window.innerWidth;
      mouseRef.current.y = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', handleMouse);

    // Create floating particles in 3D space
    const points: Point3D[] = [];
    const numPoints = 80;
    const spread = Math.max(width, height) * 0.6;

    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: (Math.random() - 0.5) * spread * 2,
        y: (Math.random() - 0.5) * spread * 1.2,
        z: Math.random() * 600 - 300,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.2,
        vz: (Math.random() - 0.5) * 0.15,
        baseSize: Math.random() * 2 + 1,
      });
    }

    const fov = 500;
    const connectionDist = 180;

    // Cache color values outside render loop
    let r = 0;
    let g = 242;
    let b = 254;
    let cachedIsDark = true;

    const parseCssColor = (colorStr: string): { r: number; g: number; b: number } => {
      const cleanStr = colorStr.trim().toLowerCase();
      
      // Check if it's rgb(...) or rgba(...)
      if (cleanStr.startsWith('rgb')) {
        const matches = cleanStr.match(/\d+/g);
        if (matches && matches.length >= 3) {
          return {
            r: parseInt(matches[0], 10),
            g: parseInt(matches[1], 10),
            b: parseInt(matches[2], 10)
          };
        }
      }
      
      // Check if it's hex
      const cleanHex = cleanStr.replace('#', '');
      if (cleanHex.length === 3) {
        return {
          r: parseInt(cleanHex[0] + cleanHex[0], 16),
          g: parseInt(cleanHex[1] + cleanHex[1], 16),
          b: parseInt(cleanHex[2] + cleanHex[2], 16)
        };
      }
      if (cleanHex.length === 6) {
        return {
          r: parseInt(cleanHex.substring(0, 2), 16),
          g: parseInt(cleanHex.substring(2, 4), 16),
          b: parseInt(cleanHex.substring(4, 6), 16)
        };
      }
      
      // Fallback
      return { r: 0, g: 242, b: 254 };
    };

    const updateColors = () => {
      const accentCyan = getComputedStyle(document.documentElement).getPropertyValue('--accent-cyan').trim() || '#00f2fe';
      const parsed = parseCssColor(accentCyan);
      r = parsed.r;
      g = parsed.g;
      b = parsed.b;
      cachedIsDark = document.documentElement.getAttribute('data-theme') !== 'light';
    };
    updateColors();
    // Update colors only when theme changes
    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Mouse parallax offset
      const mx = (mouseRef.current.x - 0.5) * 30;
      const my = (mouseRef.current.y - 0.5) * 20;

      // Update and project
      points.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Wrap around boundaries
        const halfSpread = spread * 1.2;
        if (p.x > halfSpread) p.x = -halfSpread;
        if (p.x < -halfSpread) p.x = halfSpread;
        if (p.y > halfSpread * 0.6) p.y = -halfSpread * 0.6;
        if (p.y < -halfSpread * 0.6) p.y = halfSpread * 0.6;
        if (p.z > 300) p.z = -300;
        if (p.z < -300) p.z = 300;

        // Perspective projection with mouse parallax
        const scale = fov / (fov + p.z);
        p.px = (p.x + mx * (p.z / 300)) * scale + width / 2;
        p.py = (p.y + my * (p.z / 300)) * scale + height / 2;
      });

      const baseAlpha = cachedIsDark ? 1.0 : 1.5;

      // Draw connections
      ctx.lineWidth = 0.8;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = (points[i].px! - points[j].px!);
          const dy = (points[i].py! - points[j].py!);
          const screenDist = Math.sqrt(dx * dx + dy * dy);

          if (screenDist < connectionDist) {
            const avgDepth = ((points[i].z + points[j].z) / 2 + 300) / 600; // 0 (far) to 1 (near)
            const distFade = 1 - screenDist / connectionDist;
            const alpha = distFade * avgDepth * 0.25 * baseAlpha;

            if (alpha > 0.02) {
              ctx.beginPath();
              ctx.moveTo(points[i].px!, points[i].py!);
              ctx.lineTo(points[j].px!, points[j].py!);
              ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
              ctx.stroke();
            }
          }
        }
      }

      // Draw nodes with glow
      points.forEach(p => {
        const depth = (p.z + 300) / 600; // 0 (far) to 1 (near)
        const scale = fov / (fov + p.z);
        const size = p.baseSize * scale * (0.5 + depth * 0.8);
        const alpha = (0.15 + depth * 0.7) * baseAlpha;

        // Glow for nearby particles
        if (depth > 0.6 && size > 1.5) {
          ctx.beginPath();
          ctx.arc(p.px!, p.py!, size * (cachedIsDark ? 3 : 4), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * (cachedIsDark ? 0.08 : 0.18)})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.px!, p.py!, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="three-canvas" 
      style={{ 
        position: 'absolute',
        inset: 0,
        width: '100%', 
        height: '100%', 
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  );
}
