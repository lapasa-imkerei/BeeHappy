const canvas = document.getElementById('honeycomb-bg');
const ctx = canvas.getContext('2d');

const BG     = '#fff3c2';
const COLORS = ['#BFAA7c','#e3ca94','#f0d9a8','#d4b87a','#c9a96b'];

let W, H, hexes = [], t = 0;
const SIZE  = 32;
const W_HEX = SIZE * Math.sqrt(3);
const H_HEX = SIZE * 2;
const ROW_H = H_HEX * 0.75;

function hexPath(cx, cy, r) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        const a = Math.PI / 180 * (60 * i - 30);
        i === 0
            ? ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
            : ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
    }
    ctx.closePath();
}

function build() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width  = W;
    canvas.height = H;
    hexes = [];

    const cols = Math.ceil(W / W_HEX) + 2;
    const rows = Math.ceil(H / ROW_H) + 2;

    for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
            const offset = row % 2 === 0 ? 0 : W_HEX / 2;
            hexes.push({
                cx:    col * W_HEX + offset + W_HEX / 2,
                cy:    row * ROW_H + H_HEX / 2,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                phase: Math.random() * Math.PI * 2,
                speed: 0.0004 + Math.random() * 0.0003,
                amp:   4 + Math.random() * 5
            });
        }
    }
}

function draw(ts) {
    t = ts;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, W, H);

    for (const h of hexes) {
        const dx    = Math.sin(t * h.speed + h.phase) * h.amp;
        const dy    = Math.cos(t * h.speed * 0.7 + h.phase + 1) * h.amp * 0.5;
        const alpha = 0.25 + 0.18 * Math.sin(t * h.speed * 1.3 + h.phase);

        hexPath(h.cx + dx, h.cy + dy, SIZE - 2);
        ctx.globalAlpha = alpha;
        ctx.fillStyle   = h.color;
        ctx.fill();
        ctx.globalAlpha = alpha * 0.6;
        ctx.strokeStyle = 'rgba(84,84,84,0.12)';
        ctx.lineWidth   = 1;
        ctx.stroke();
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
}

build();
window.addEventListener('resize', build);
requestAnimationFrame(draw);