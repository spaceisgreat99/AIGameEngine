var board = [];
var redBoard = [];
var blackBoard = [];
board.length = 0;
redBoard.length = 0;
blackBoard.length = 0;
var testWonResult = 0;
var turn = 1;
var insert = function(id, symbol){
    /**var cels = $('.cell');
    var targetCell = $(cels[indx]);
    alert(targetCell);
    **/
    document.getElementById(id).innerHTML = symbol;

}; 
var varColor = "red";
$(document).on("keypress", function(e) {
    if(e.which===49){
        if(turn===1){
            placePiece(1);
        }
    }
    else if(e.which===50){
        if(turn===1){
            placePiece(2);
        }
    }
    else if(e.which===51){
        if(turn===1){
            placePiece(3);
        }
    }
    else if(e.which===52){
        if(turn===1){
            placePiece(4);
        }
    }
    else if(e.which===53){
        if(turn===1){
            placePiece(5);
        }
    }
    else if(e.which===54){
        if(turn===1){
            placePiece(6);
        }
    }
    else if(e.which===55){
        if(turn===1){
            placePiece(7);
        }
    }
    else if(e.which===56){
        if(turn===1){
            placePiece(8);
        }
    }
});
var testWin = function() {
    for(var a = 0; a<8; a++){
        for(var b = 0; b<7; b++){
            var test2 = 10*a + b;
            if(redBoard.includes(test2)&&(redBoard.includes(test2+1))&&(redBoard.includes(test2+2))&&(redBoard.includes(test2+3))){
                testWonResult = 1;
                
            }
            else if(redBoard.includes(test2)&&(redBoard.includes(test2+10))&&(redBoard.includes(test2+20))&&(redBoard.includes(test2+30))){
                testWonResult = 1;
               
            }
            else if(redBoard.includes(test2)&&(redBoard.includes(test2+11))&&(redBoard.includes(test2+22))&&(redBoard.includes(test2+33))){
                testWonResult = 1;
    
            }
            else if(redBoard.includes(test2)&&(redBoard.includes(test2+9))&&(redBoard.includes(test2+18))&&(redBoard.includes(test2+27))){
                testWonResult = 1;
              
            }
            //-----------------------
            else if(blackBoard.includes(test2)&&(blackBoard.includes(test2+1))&&(blackBoard.includes(test2+2))&&(blackBoard.includes(test2+3))){
                testWonResult = 2;
              
            }
            else if(blackBoard.includes(test2)&&(blackBoard.includes(test2+10))&&(blackBoard.includes(test2+20))&&(blackBoard.includes(test2+30))){
                testWonResult = 2;
             }
            else if(blackBoard.includes(test2)&&(blackBoard.includes(test2+11))&&(blackBoard.includes(test2+22))&&(blackBoard.includes(test2+33))){
                testWonResult = 2;
              
            }
            else if(blackBoard.includes(test2)&&(blackBoard.includes(test2+9))&&(blackBoard.includes(test2+18))&&(blackBoard.includes(test2+27))){
                testWonResult = 2;
                
            }
            else{ testWonResult = 0;}
        }
    }
};
var AImove = function(){
    /**for(var q = 11; q < 100; q++){
        redBoard.push(q);
        testWin();
        if(testWonResult===1){
            var probMove = q%10;

        }
    }
    placePiece(probMove);**/
    if(turn===1){turn = 2;}
    else if(turn===2){turn = 1;}
    var randDummy2 = Math.random();
    var randDummy = randDummy2*10;
    var rand = Math.round(randDummy);
    if(rand===10){rand=5;}
    if(rand===0){rand=2;}
    if(rand===9){rand=7;}
    placePiece(rand);
    if(turn==1){turn = 2;}
    else if(turn===2){turn = 1;}
    /**var currentTurn = turn;
    var currentBoard = board;
    var currentRedBoard = redBoard;
    var currentBlackBoard = blackBoard;
    for(var f = 1; f<8; f++){
        for(c = 7; c > 0; c--) {
            test1 = (c*10) + f ;
            if(board.includes(test1)){
            }
            else{
                c = 0;
                board.push(test1);
                if(turn === 1){redBoard.push(test1); symbolDummy = "X";}
                else{blackBoard.push(test1); symbolDummy = "O";}
                testWin();
            }
        }
        if(testWonResult === 1){

        }
        else if(testWonResult === 2){
            potMoves.push(f);
        }
    }
    if(potMoves.length === 0){
        for(var m = 1; m < 8; m++){
            placePiece(m);
            for(var n = 1; n < 8; n++){
                placePiece(n);
                testWin();
                if(testWonResult === 1){

                }
            }
        }
    }
    else{
        var finalMove = potMoves.find(function(element){
            return element > 0;
        });
        var redBoard = currentRedBoard;
        var blackBoard = currentBlackBoard;
        var board = currentBoard;
        var turn = 2;
        placePiece(finalMove);
        potMoves.length = 0;

    }**/
};
var endGame = function(winner){
      alert(winner + " has won!!!")
    
};
var symbolDummy;
var test1;
var c;
var placePiece = function(slot) {
    for(c = 7; c > 0; c--) {
        test1 = (c*10) + slot ;
        if(board.includes(test1)){
        }
        else{
            c = 0;
            board.push(test1);
            if(turn === 1){redBoard.push(test1); symbolDummy = "X"; }
            else{blackBoard.push(test1); symbolDummy = "O";  }
            testWin();
            if(testWonResult===1){endGame("The Player");}
            if(testWonResult===2){endGame("The AI");}
            insert(test1, symbolDummy);
            if(turn===1){AImove();}
        }
    }
};
var potMoves = [];
var varColor;

startFunc = function(){
    
};