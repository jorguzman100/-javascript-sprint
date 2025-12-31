const initializeChessboard = () => {
    // State
    let cellColor = '';

    // Initialization
    const chessBoard = document.createElement('div');
    chessBoard.classList.add('chessboard');
    for (let row = 1; row <= 8; row++) {
        for (let col = 1; col <= 8; col++) {
            const cell = document.createElement('div');
            cellColor = (row + col) % 2 === 0 ? 'light' : 'dark';
            cell.classList.add('square');
            cell.classList.add(cellColor);
            cell.setAttribute('id', `square-${row}-${col}`);
            cell.textContent = `square-${row}-${col}`;
            chessBoard.append(cell);
        }
    }
    document.body.append(chessBoard);
    console.log('Chessboard initialized');

    // Event listening to update state
    let previousClickedCell;
    chessBoard.addEventListener('click', (event) => {
        const clickedCell = event.target;
        console.log(clickedCell);
        previousClickedCell ? previousClickedCell.classList.remove('red') : null;
        clickedCell.classList.toggle('red');
        previousClickedCell = clickedCell;
    });
}

initializeChessboard();