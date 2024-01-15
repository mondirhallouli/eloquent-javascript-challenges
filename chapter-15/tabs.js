let main = document.querySelector('main');

function asTabs(node) {
    let children = Array.from(node.children);
    let btns = [];
    let tabName;

    for (let i = 0; i < children.length; i++) {
        tabName = children[i].getAttribute('data-tabname');
        let tabBtn = document.createElement('button');
        let tabBtnText = document.createTextNode(tabName);
        tabBtn.appendChild(tabBtnText);
        btns.push(tabBtn);
    }

    let firstChild = node.firstElementChild;
    for (let btn of btns) {
        node.insertBefore(btn, firstChild);
    }

    main.addEventListener('click', (e) => {
        if (e.target.tagName == 'BUTTON') {
            for (let child of children) {
                let tabTitle = child.getAttribute('data-tabname');
                if (tabTitle == e.target.textContent) {
                    e.target.classList.add('active');
                    child.style.display = 'block';
                }
                else {
                    child.style.display = 'none';
                }
            }
            for (let btn of btns) {
                if (btn.textContent !== e.target.textContent) {
                    btn.classList.remove('active');
                }
            }
        }
    })
}

asTabs(main);