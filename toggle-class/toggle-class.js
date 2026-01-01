// State


// Initialize

// The content
const content = document.createElement('div');
const p = document.createElement('p');
content.id = 'content'
p.textContent = 'code';
content.append(p);
document.body.append(content);

// The controls
const controls = document.createElement('div');
controls.classList.add('controls');
for (let i = 0; i < 4; i++) {
    const button = document.createElement('BUTTON');
    if (i === 0) {
        button.id = 'bold';
        button.textContent = 'B';
    }
    if (i === 1) {
        button.id = 'italic';
        button.textContent = 'I';
    }
    if (i === 2) {
        button.id = 'underline';
        button.textContent = 'U';
    }
    if (i === 3) {
        button.id = 'highlight';
        button.textContent = 'Highlight';
    }
    controls.append(button);
}
document.body.append(controls);


// Render

// Listen to update state
document.body.addEventListener('click', (event) => {
    const button = event.target.tagName === 'BUTTON' ? event.target.id : null;
    if (button) {
        if (button === 'highlight') {
            content.classList.toggle(`${button}`)
        } else {
            p.classList.toggle(`${button}`);
        }
    }
});