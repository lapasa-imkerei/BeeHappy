const bee = document.createElement('div');
bee.id = 'bee-cursor';
document.body.appendChild(bee);

let mx = 0, my = 0;
let bx = 0, by = 0;
let lastBx = 0;

document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
});

function animate() {
    bx += (mx - bx) * 0.08;
    by += (my - by) * 0.08;

    const dx = bx - lastBx;
    const flip = dx < -0.5 ? 'scaleX(-1)' : 'scaleX(1)';
    bee.style.left = bx + 'px';
    bee.style.top  = by + 'px';
    bee.style.transform = `translate(-50%, -50%) ${flip}`;
    lastBx = bx;

    requestAnimationFrame(animate);
}
animate();