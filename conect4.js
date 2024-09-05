let playerRed = "R";
let playerYellow = "Y";
let currPlayer = playerRed;
let over = document.querySelector(".over");


let board;
let currColumn;

let rows = 6;
let columns = 7;

window.onload = function(){
    setGame();
}

function setGame(){
    board = [];
    currColumn=[5,5,5,5,5,5,5];

    for(r = 0; r < rows; r++){
        let row = [];
        for(c = 0; c < columns; c++){
            row.push(" ");

            let cell = document.createElement("div");
            cell.id = r.toString() + "-" + c.toString();
            cell.classList.add("cell");
            cell.addEventListener("click", addColor);
            document.getElementById("board").append(cell);
        }
        board.push(row);
    }
}


function addColor(){
    
    let position = this.id.split("-");
    let r = parseInt(position[0]);
    let c = parseInt(position[1]);

    r = currColumn[c];
    if(r < 0){
        return;
    }

    board[r][c] = currPlayer;
    let cell = document.getElementById(r.toString() + "-" + c.toString());

    if (currPlayer == playerRed){
        cell.classList.add("red-piece");
        currPlayer=playerYellow;
    }else{
        cell.classList.add("yellow-piece");
        currPlayer=playerRed;
    }
    
    r -= 1;
    currColumn[c] = r; 
    checkResult()   
}

function checkResult(){
    for(r = 0; r < rows; r++){
        for(c = 0; c < columns-3; c++){
            if(board[r][c] != " "){
                if(board[r][c] == board[r][c+1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3]){
                    winner(r,c);
                    document.getElementById(r.toString() + "-" + c.toString()).classList.add("black");
                    document.getElementById(r.toString() + "-" + (c+1).toString()).classList.add("black");
                    document.getElementById(r.toString() + "-" + (c+2).toString()).classList.add("black");
                    document.getElementById(r.toString() + "-" + (c+3).toString()).classList.add("black");
                    return;
                }
            }
        }
    }

    for(c = 0; c < columns; c++){
        for(r = 0; r < rows-3; r++){
            if(board[r][c] != " "){
                if(board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+2][c] == board[r+3][c]){
                    winner(r,c);
                    document.getElementById(r.toString() + "-" + c.toString()).classList.add("black");
                    document.getElementById((r+1).toString() + "-" + c.toString()).classList.add("black");
                    document.getElementById((r+2).toString() + "-" + c.toString()).classList.add("black");
                    document.getElementById((r+3).toString() + "-" + c.toString()).classList.add("black");
                    return;
                }
            }
        }
    }

    for(r = 3; r < rows; r++){
        for(c = 0; c < columns-3; c++){
            if(board[r][c] != " "){
                if(board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]){
                    winner(r,c);
                    document.getElementById(r.toString() + "-" + c.toString()).classList.add("black");
                    document.getElementById((r-1).toString() + "-" + (c+1).toString()).classList.add("black");
                    document.getElementById((r-2).toString() + "-" + (c+2).toString()).classList.add("black");
                    document.getElementById((r-3).toString() + "-" + (c+3).toString()).classList.add("black");
                    return;
                }
            }
        }
    }

    for(r = 0; r < rows-3; r++){
        for(c = 0; c < columns-3; c++){
            if(board[r][c] != " "){
                if(board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] == board[r+3][c+3]){
                    winner(r,c);
                    document.getElementById(r.toString() + "-" + c.toString()).classList.add("black");
                    document.getElementById((r+1).toString() + "-" + (c+1).toString()).classList.add("black");
                    document.getElementById((r+2).toString() + "-" + (c+2).toString()).classList.add("black");
                    document.getElementById((r+3).toString() + "-" + (c+3).toString()).classList.add("black");
                    return;
                }
            }
        }
    }
}

function winner(){
    let result = document.createElement("div");
    result.classList.add("result");
    over.append(result);
    let winnerBox = document.createElement("div");
    winnerBox.classList.add("winnerBox");
    result.append(winnerBox);
    if(currPlayer == playerRed){
        winnerBox.innerHTML = "Winner is Yellow Player"
    }else{
        winnerBox.innerHTML = "Winner is Red Player"
    }
    
}