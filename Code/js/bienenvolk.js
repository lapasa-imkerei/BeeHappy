const cursor = document.createElement('div');
const ring   = document.createElement('div');
cursor.classList.add('cursor');
ring.classList.add('cursor-ring');
document.body.appendChild(cursor);
document.body.appendChild(ring);

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
});

// Ring folgt mit Verzug = "weicher" Effekt
function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
}
animateRing();

// Hover Effekt
document.querySelectorAll('a, button, .volk-pill, .galerie-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering');
        ring.classList.add('hovering');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering');
        ring.classList.remove('hovering');
    });
});