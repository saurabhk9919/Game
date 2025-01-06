let boxes = document.querySelectorAll('.box');
let resey = document.querySelector('#btn');
let turn = document.querySelector('.turn');

let newgamebrn = document.querySelector('#newbttn');
let Main = document.querySelector('.main');
let msgcontainer = document.querySelector('.message');
let msg = document.querySelector('#msg');

let turnCount = true;
const winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const reset = () => {
    turnCount = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
    boxes.forEach(box => box.innerText = '');
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            if (turnCount) {
                box.innerHTML = "0";
                turnCount = false;
            }
            else {
                box.innerHTML = "X";
                turnCount = true;
            }
            box.disabled = true;
            winnerCheck();
        }
    });
});

const disableBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};

const enableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
    });
};

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
};

const winnerCheck = () => {
    for (let pattern of winCombos) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                disableBoxes();
                return;
            }
        }
    }
};

newgamebrn.addEventListener("click", reset);
resey.addEventListener("click", reset);
