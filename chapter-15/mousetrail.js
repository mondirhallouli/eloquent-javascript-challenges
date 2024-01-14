
for (let i = 0; i < 6; i++) {
    let div = document.createElement('div');
    div.classList.add("trail");
    document.body.appendChild(div);
}

let divs = Array.from(document.querySelectorAll('.trail'));
let i = 0;
document.addEventListener('mousemove', (e) => {
    let currDiv = divs[i];
    currDiv.style.left = (e.pageX - 4) + 'px';
    currDiv.style.top = (e.pageY - 4) + 'px';
    // this gets us the next div in the divs array
    i = (i + 1) % divs.length;
})