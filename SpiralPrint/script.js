const container = document.querySelector('.container'),
    startButton = document.querySelector('.start'),
    patternBox = document.querySelector('.pattern'),
    messageBox = document.querySelector('.message-box'),
    gridBox = document.querySelector('.grid-box');

function hideStartPage() {
    startButton.classList.add('hidden');
    patternBox.classList.remove('hidden');
}
function showStartPage() {
    startButton.classList.remove('hidden');
    patternBox.classList.add('hidden');
}
function getInputData() {
    const row = document.querySelector('#row'),
        col = document.querySelector('#col')
    return [Number(row.value), Number(col.value)];
}

function generateGrids() {
    gridBox.classList.add('hidden');
    const [row, col] = getInputData();

    if ((row > 0 && row <= 10) && (col > 0 && col <= 10)) {
        messageBox.innerHTML = "";
        messageBox.classList.add('hidden');

        gridBox.innerHTML = "";

        for (var i = 0; i < row; ++i) {
            gridBox.innerHTML += `<div class="grid-row"></div>`;
            for (var j = 0; j < col; ++j) {
                gridBox.children[i].innerHTML += `<div class="grid-col"></div>`
            }
        }
        gridBox.classList.remove('hidden');
    }
    else {
        const message = "Row and Column Must be in range of 1-10 (inclusive)"
        messageBox.innerHTML = `<p>${message}</p>`
        messageBox.classList.remove('hidden');
    }
}

function print(element, count) {
    setTimeout(() => {
        element.innerHTML = "*";
        element.classList.add('active');
        setTimeout(() => {
            element.classList.remove('active');
        }, 300);
    }, count * 500);
}

function startGame() {
    generateGrids();
    const gridRows = document.querySelectorAll('.grid-row');
    let arr = new Array();
    for (let index = 0; index < gridRows.length; index++) {
        arr[index] = gridRows[index].querySelectorAll('.grid-col');
    }
    let c = 0;
    let rStart = 0, cStart = 0, rEnd = arr.length - 1, cEnd = arr[0].length - 1;
    while (rStart <= rEnd && cStart <= cEnd) {
        for (let i = cStart; i <= cEnd; ++i) {
            print(arr[rStart][i], c);
            c++;
        }
        rStart++;
        for (let i = rStart; i <= rEnd; ++i) {
            print(arr[i][cEnd], c);
            c++;
        }
        cEnd--;

        if (rStart <= rEnd) {
            for (let i = cEnd; i >= cStart; --i) {
                print(arr[rEnd][i], c);
                c++;
            }
            rEnd--;
        }
        if (cStart <= cEnd) {
            for (let i = rEnd; i >= rStart; --i) {
                print(arr[i][cStart], c);
                c++;
            }
            cStart++;
        }
    }
    delete (arr);
}