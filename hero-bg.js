/* Animated electrical-grid hero background.
 * Canvas-rendered. Procedurally lays circuit traces across a grid,
 * routes moving "current" packets along them, and pulses nodes on arrival.
 * Respects prefers-reduced-motion.
 */

function HeroCanvas() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', {
      alpha: true
    });
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0,
      H = 0,
      DPR = Math.min(window.devicePixelRatio || 1, 2);
    let cell = 0,
      cols = 0,
      rows = 0;
    let traces = []; // each: array of [col,row] points
    let nodes = new Map(); // key "c,r" -> { c,r,lit,pulse }
    let pulses = []; // packets riding traces
    let raf = 0,
      lastSpawn = 0;
    const start = performance.now();

    // Map
    const key = (c, r) => `${c},${r}`;
    const addNode = (c, r) => {
      const k = key(c, r);
      if (!nodes.has(k)) nodes.set(k, {
        c,
        r,
        pulse: 0
      });
      return nodes.get(k);
    };
    function build() {
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = Math.floor(W * DPR);
      canvas.height = Math.floor(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      // Responsive cell size
      cell = Math.max(56, Math.min(110, Math.round(W / 16)));
      cols = Math.ceil(W / cell) + 2;
      rows = Math.ceil(H / cell) + 2;
      traces = [];
      nodes = new Map();

      // Generate N orthogonal traces that walk the grid with right-angle bends
      const numTraces = Math.max(14, Math.round(cols * rows / 22));
      for (let i = 0; i < numTraces; i++) {
        const startEdge = Math.random();
        let c, r, dir;
        if (startEdge < 0.5) {
          // from left
          c = 0;
          r = Math.floor(Math.random() * rows);
          dir = [1, 0];
        } else {
          // from top
          c = Math.floor(Math.random() * cols);
          r = 0;
          dir = [0, 1];
        }
        const path = [[c, r]];
        addNode(c, r);
        const maxLen = 6 + Math.floor(Math.random() * 10);
        for (let step = 0; step < maxLen; step++) {
          // Run for a straight segment of 1..4 cells
          const segLen = 1 + Math.floor(Math.random() * 4);
          for (let s = 0; s < segLen; s++) {
            c += dir[0];
            r += dir[1];
            if (c < -1 || r < -1 || c > cols || r > rows) break;
            path.push([c, r]);
            addNode(c, r);
          }
          if (c < -1 || r < -1 || c > cols || r > rows) break;
          // Turn 90deg
          if (dir[0] !== 0) dir = [0, Math.random() < 0.5 ? 1 : -1];else dir = [Math.random() < 0.5 ? 1 : -1, 0];
        }
        if (path.length >= 3) traces.push(path);
      }
    }
    function spawnPulse(now) {
      if (!traces.length) return;
      const t = traces[Math.floor(Math.random() * traces.length)];
      pulses.push({
        trace: t,
        t: 0,
        speed: 0.00012 + Math.random() * 0.00012,
        // fraction-of-path per ms
        born: now,
        hue: Math.random() < 0.15 ? 'warm' : 'green'
      });
    }
    function draw(now) {
      const elapsed = now - start;
      ctx.clearRect(0, 0, W, H);

      // Base grid dots
      ctx.save();
      ctx.fillStyle = 'rgba(255,255,255,0.045)';
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = c * cell;
          const y = r * cell;
          ctx.fillRect(x - 0.5, y - 0.5, 1, 1);
        }
      }
      ctx.restore();

      // Traces - thin base lines
      ctx.save();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      for (const t of traces) {
        ctx.beginPath();
        for (let i = 0; i < t.length; i++) {
          const [c, r] = t[i];
          const x = c * cell,
            y = r * cell;
          if (i === 0) ctx.moveTo(x, y);else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.restore();

      // Pulses
      if (!reduced) {
        // advance and draw
        const remain = [];
        for (const p of pulses) {
          p.t += p.speed * 16; // approx dt=16ms baseline; update below
          if (p.t >= 1) {
            // fire last node
            const last = p.trace[p.trace.length - 1];
            const k = key(last[0], last[1]);
            const n = nodes.get(k);
            if (n) n.pulse = 1;
            continue;
          }
          remain.push(p);

          // Compute position along polyline by segment
          const pathLen = p.trace.length - 1;
          const scaled = p.t * pathLen;
          const idx = Math.min(Math.floor(scaled), pathLen - 1);
          const frac = scaled - idx;
          const [c0, r0] = p.trace[idx];
          const [c1, r1] = p.trace[idx + 1];
          const x = (c0 + (c1 - c0) * frac) * cell;
          const y = (r0 + (r1 - r0) * frac) * cell;

          // Trail - draw a short glowing segment behind the head along the path
          const trailLen = 0.06; // fraction of whole path
          const startT = Math.max(0, p.t - trailLen);
          const startScaled = startT * pathLen;
          const startIdx = Math.min(Math.floor(startScaled), pathLen - 1);
          const startFrac = startScaled - startIdx;
          const sx = (p.trace[startIdx][0] + (p.trace[startIdx + 1][0] - p.trace[startIdx][0]) * startFrac) * cell;
          const sy = (p.trace[startIdx][1] + (p.trace[startIdx + 1][1] - p.trace[startIdx][1]) * startFrac) * cell;

          // Draw trail along segments
          const color = p.hue === 'warm' ? 'rgba(255, 208, 120, ' : 'rgba(154, 224, 86, ';
          ctx.save();
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.lineWidth = 1;
          ctx.strokeStyle = color + '0.7)';
          ctx.shadowBlur = 6;
          ctx.shadowColor = color + '0.5)';
          ctx.beginPath();
          // Walk from startIdx->idx fractional points
          ctx.moveTo(sx, sy);
          for (let i = startIdx + 1; i <= idx; i++) {
            const [c, r] = p.trace[i];
            ctx.lineTo(c * cell, r * cell);
          }
          ctx.lineTo(x, y);
          ctx.stroke();
          ctx.restore();

          // Head
          ctx.save();
          ctx.fillStyle = color + '1)';
          ctx.shadowBlur = 10;
          ctx.shadowColor = color + '0.6)';
          ctx.beginPath();
          ctx.arc(x, y, 1.8, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
        pulses = remain;

        // Spawn new pulses
        if (now - lastSpawn > 1200) {
          if (pulses.length < 5) spawnPulse(now);
          lastSpawn = now;
        }
      }

      // Nodes - lit when pulses arrive; slowly decay
      for (const n of nodes.values()) {
        if (n.pulse > 0.01) {
          const x = n.c * cell,
            y = n.r * cell;
          const radius = 2.5 + n.pulse * 8;
          const a = n.pulse * 0.55;
          ctx.save();
          ctx.fillStyle = `rgba(154,224,86,${a})`;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = `rgba(255,255,255,${Math.min(1, n.pulse + 0.2)})`;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
          n.pulse *= 0.945;
        }
      }

      // Ambient slow wash - a large soft green glow that drifts
      const gx = W * (0.7 + 0.1 * Math.sin(elapsed * 0.00015));
      const gy = H * (0.35 + 0.08 * Math.cos(elapsed * 0.00012));
      const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, Math.max(W, H) * 0.55);
      grad.addColorStop(0, 'rgba(122,193,67,0.08)');
      grad.addColorStop(0.4, 'rgba(122,193,67,0.03)');
      grad.addColorStop(1, 'rgba(122,193,67,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // Horizontal scan line - very subtle
      // Scan line removed for subtlety

      raf = requestAnimationFrame(draw);
    }
    function onResize() {
      cancelAnimationFrame(raf);
      build();
      // seed some pulses so it's lively on load
      const now = performance.now();
      for (let i = 0; i < 2; i++) spawnPulse(now);
      raf = requestAnimationFrame(draw);
    }
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return /*#__PURE__*/React.createElement("canvas", {
    ref: ref,
    className: "hero-canvas",
    "aria-hidden": "true"
  });
}
window.HeroCanvas = HeroCanvas;