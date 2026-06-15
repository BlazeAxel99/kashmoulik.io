import { useEffect, useRef } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
  px?: number;
  py?: number;
}

export default function ThreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const points: Point3D[] = [];
    const numPoints = 35;
    const radius = Math.min(width, height) * 0.35;

    // Create a sphere of 3D points
    for (let i = 0; i < numPoints; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      
      points.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi)
      });
    }

    let angleX = 0.002;
    let angleY = 0.003;

    const rotateX = (point: Point3D, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const y1 = point.y * cos - point.z * sin;
      const z1 = point.z * cos + point.y * sin;
      point.y = y1;
      point.z = z1;
    };

    const rotateY = (point: Point3D, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const x1 = point.x * cos - point.z * sin;
      const z1 = point.z * cos + point.x * sin;
      point.x = x1;
      point.z = z1;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const fov = 400; // Field of view / distance

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update & project points
      points.forEach(p => {
        rotateX(p, angleX);
        rotateY(p, angleY);

        // Perspective projection
        const scale = fov / (fov + p.z);
        p.px = p.x * scale + width / 2;
        p.py = p.y * scale + height / 2;
      });

      // Get color tokens from root
      const cyan = getComputedStyle(document.documentElement).getPropertyValue('--accent-cyan').trim() || '#00f2fe';
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

      // Draw connections
      ctx.lineWidth = 0.75;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dz = points[i].z - points[j].z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < radius * 0.75) {
            ctx.beginPath();
            ctx.moveTo(points[i].px!, points[i].py!);
            ctx.lineTo(points[j].px!, points[j].py!);
            
            // Fade lines based on depth and distance
            const avgDepth = (points[i].z + points[j].z) / (radius * 2); // -0.5 to 0.5
            const depthAlpha = Math.max(0.1, 0.6 - (avgDepth + 0.5));
            const distAlpha = (radius * 0.75 - dist) / (radius * 0.75);
            const finalAlpha = depthAlpha * distAlpha * (isDark ? 0.35 : 0.2);

            ctx.strokeStyle = cyan === '#0284c7'
              ? `rgba(2, 132, 199, ${finalAlpha})`
              : `rgba(0, 242, 254, ${finalAlpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      points.forEach(p => {
        const scale = fov / (fov + p.z);
        const size = Math.max(1, (p.z + radius) / radius * 2 + 1) * scale;
        
        ctx.beginPath();
        ctx.arc(p.px!, p.py!, size, 0, Math.PI * 2);
        
        // Depth shading
        const depthFactor = (p.z + radius) / (radius * 2); // 0 (back) to 1 (front)
        ctx.fillStyle = cyan === '#0284c7'
          ? `rgba(2, 132, 199, ${Math.max(0.2, depthFactor)})`
          : `rgba(0, 242, 254, ${Math.max(0.2, depthFactor)})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="three-canvas" 
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
}
