const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A1", "#33FFF7"];
const btn = document.getElementById('btn');
const color = document.getElementById('color');

btn.addEventListener('click', function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
});
