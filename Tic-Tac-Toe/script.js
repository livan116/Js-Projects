let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset");
let winnerPage = document.querySelector(".winner-page");
let container = document.querySelector(".container");
let container2 = document.querySelector(".container2");
let newGame = document.querySelector(".new-game");
container2.style.display = "none"
let choice_O = true; //if true then o if false then x turn come

const winning_pattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((item)=>{
    item.addEventListener('click',()=>{
        if(choice_O){
            item.innerText = "O"
            choice_O = false;
        }
        else{
            item.innerText = "X";
            choice_O = true;
        }
        item.disabled = true;
        winner();
    })
});

const winner = () =>{
    for(let pattern of winning_pattern){
        // console.log(pattern);
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if(p1 !== "" && p2 !== "" && p3 !== ""){
            if(p1 === p2 && p2 === p3){
                winnerPage.innerText = `'${p1}' Won the Game`;
                container2.style.display = "";
                container.style.display = "none";
            }
        }
    }
}

const resetGame = () =>{
    choice_O = true;
    for(let box of boxes){
        box.disabled = false; // automatically adding attribute disabled so adding it makes to clcik again
        box.innerText = "";
    }
    container.style.display = "";
    container2.style.display = "none";
}

resetBtn.addEventListener('click',resetGame)
newGame.addEventListener('click',resetGame)