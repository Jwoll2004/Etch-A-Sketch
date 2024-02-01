const container = document.querySelector('.container');
const input = document.querySelector('input');
const ndisplay = document.querySelector('.displayn');
let n = 0;


function randomColor() {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
}

const heading = document.querySelector('.heading');
let text = heading.textContent;
heading.textContent = "";
for(let i = 0; i < text.length; ++i){
    const span = document.createElement('span');
    span.textContent = text[i];
    span.style.color = randomColor();
    heading.appendChild(span);
}

input.addEventListener('input', () => {
    n = parseInt(input.value);
    ndisplay.textContent = `${n}`;
    container.innerHTML = '';
    if(n > 100){
        alert("Please enter a number less than 100");
        return;
    }
    for (let i = 0; i < n; ++i) {
        const div = document.createElement('div');
        div.classList.add('row');
        div.style.height = `${(500 / n)}px`;
        div.style.width = '500px';
        div.style.display = 'flex';

        for (let j = 0; j < n; ++j) {
            const div2 = document.createElement('div');
            div2.classList.add('square');
            div2.style.height = `${(500 / n)}px`;
            div2.style.width = `${(500 / n)}px`;
            div.appendChild(div2);
        }
        container.appendChild(div);
    }

    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomColor();
        });
    });
});
