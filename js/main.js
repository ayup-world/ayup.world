console.log(`
░█████╗░██╗░░░██╗██╗░░░██╗██████╗░░░░░░░██╗░░░░░░░██╗░█████╗░██████╗░██╗░░░░░██████╗░██╗
██╔══██╗╚██╗░██╔╝██║░░░██║██╔══██╗░░░░░░██║░░██╗░░██║██╔══██╗██╔══██╗██║░░░░░██╔══██╗██║
███████║░╚████╔╝░██║░░░██║██████╔╝░░░░░░╚██╗████╗██╔╝██║░░██║██████╔╝██║░░░░░██║░░██║██║
██╔══██║░░╚██╔╝░░██║░░░██║██╔═══╝░██╗░░░░████╔═████║░██║░░██║██╔══██╗██║░░░░░██║░░██║╚═╝
██║░░██║░░░██║░░░╚██████╔╝██║░░░░░╚█║░░░░╚██╔╝░╚██╔╝░╚█████╔╝██║░░██║███████╗██████╔╝██╗
╚═╝░░╚═╝░░░╚═╝░░░░╚═════╝░╚═╝░░░░░░╚╝░░░░░╚═╝░░░╚═╝░░░╚════╝░╚═╝░░╚═╝╚══════╝╚═════╝░╚═╝`);

const blocks = [...document.querySelectorAll('.card')];

let mouseX = 0;
let mouseY = 0;
let rects = [];

function updateRects() {
    rects = blocks.map(b => b.getBoundingClientRect());
}

updateRects();

window.addEventListener('resize', updateRects);
window.addEventListener('scroll', updateRects);

// Only store the mouse position
document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function update() {
    blocks.forEach((block, i) => {
        const rect = rects[i];

        const x = mouseX - rect.left;
        const y = mouseY - rect.top;

        block.style.setProperty('--mouse-x', `${x}px`);
        block.style.setProperty('--mouse-y', `${y}px`);
    });

    requestAnimationFrame(update);
}

requestAnimationFrame(update);