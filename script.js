// Hiệu ứng chào mừng
window.onload = () => {
    console.log("Website đã khởi động!");
};

// Nút "Bắt đầu"
function hello() {
    alert("👋 Chào mừng bạn đến với website của tôi!");
}

// Đổi tiêu đề trang theo thời gian
const titles = [
    "🌈 Trang Cá Nhân",
    "✨ Chào Mừng",
    "💖 Welcome",
    "🚀 HTML Website"
];

let index = 0;

setInterval(() => {
    document.title = titles[index];
    index++;
    if (index >= titles.length) index = 0;
}, 2000);

// Hiệu ứng hạt sáng
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.left = "0";
canvas.style.top = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "-1";

const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const particles = [];

for (let i = 0; i < 120; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        s: Math.random() * 1.5 + 0.5
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(255,255,255,0.9)";

    for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.y += p.s;

        if (p.y > canvas.height) {
            p.y = -5;
            p.x = Math.random() * canvas.width;
        }
    }

    requestAnimationFrame(animate);
}

animate();
