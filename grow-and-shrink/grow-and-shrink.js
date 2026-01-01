
// State
let selected;
let letterSize;

// Initialize

// letter-container
const letterContainer = document.createElement('div');
letterContainer.classList.add('letter-container');
let lowerCaseCode = 97;
let upperCaseCode = 65;
for (let i = 0; i < 26; i++) {
    const letter = document.createElement('div');
    letter.classList.add('letter');
    letter.id = `${String.fromCharCode(lowerCaseCode + i)}`;
    letter.textContent = `${String.fromCharCode(upperCaseCode + i)}`;
    if (i === 0) {
        letter.classList.add('selected');
        selected = letter;
    };
    letterContainer.append(letter)
}
document.body.append(letterContainer);

// button-container
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');
for (let i = 0; i < 4; i++) {
    const button = document.createElement('button');
    switch (i) {
        case 0: {
            button.id = 'prev';
            button.textContent = ' < ';
            break;
        }
        case 1: {
            button.id = 'next';
            button.textContent = ' > ';
            break;
        }
        case 2: {
            button.id = 'decrease';
            button.textContent = ' - ';
            break;
        }
        case 3: {
            button.id = 'increase';
            button.textContent = ' + ';
            break;
        }
        default: break;
    }
    buttonContainer.append(button);
}
document.body.append(buttonContainer);

// Render
const render = (target, updatedLetterSize) => {
    // Selected updated
    if (target) {
        selected ? selected.classList.remove('selected') : null;
        target.classList.add('selected');
        selected = target;
    }

    // Letter size updated
    if (updatedLetterSize) {
        selected.style.setProperty('--letter-size', `${updatedLetterSize}px`);
    }

};

// Listener to update the state
document.body.addEventListener('click', (event) => {
    // Identify the target
    const target = event.target;
    const targetType = target.tagName === 'BUTTON' ? 'button' :
        target.classList.contains('letter') ? 'letter' : null;

    // Letter clicked
    if (targetType === 'letter') {
        render(target);
    }

    // Button clicked
    if (targetType === 'button') {
        const button = target.id;
        let updatedId;
        let updatedTarget;
        let updatedLetterSize;
        switch (button) {
            case 'prev': {
                updatedId = String.fromCharCode(selected.id.charCodeAt(0) - 1);
                updatedTarget = updatedId === '`' ?
                    document.querySelector(`#z`) :
                    document.querySelector(`#${updatedId}`);
                break;
            }
            case 'next': {
                updatedId = String.fromCharCode(selected.id.charCodeAt(0) + 1);
                updatedTarget = updatedId === '{' ?
                    document.querySelector(`#a`) :
                    document.querySelector(`#${updatedId}`);
                break;
            }
            case 'decrease': {
                updatedLetterSize =
                    parseFloat(getComputedStyle(selected)
                        .getPropertyValue('--letter-size')) - 2 < 10 ? 10 :
                        parseFloat(getComputedStyle(selected)
                            .getPropertyValue('--letter-size')) - 2;
                break;
            }
            case 'increase': {
                updatedLetterSize =
                    parseFloat(getComputedStyle(selected)
                        .getPropertyValue('--letter-size')) + 2 > 26 ? 26 :
                        parseFloat(getComputedStyle(selected)
                            .getPropertyValue('--letter-size')) + 2;
                break;
            }
            default: break;
        }
        render(updatedTarget, updatedLetterSize);
    }

});