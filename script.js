
var btn0 = ""
var btn1 = ""
var btn2 = ""
var btn3 = ""
var btn4 = ""
var btn5 = ""
var btn6 = ""
var btn7 = ""
var btn8 = ""
var btns = [ "btn0", "btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8" ]
const winning = document.getElementById("winning")
const noteH = "You Win!"
const noteC = "Computer Wins!"
const noteD = "Draw!"
function mainFunction(btnID){
    if(document.getElementById(btnID).textContent == ""){
        if(btns.includes(btnID)){
                btns.splice(btns.indexOf(btnID), 1)     // remove ID from Array
                document.getElementById(btnID).innerHTML = "X";
                btn0 = document.getElementById("btn0").textContent
                btn1 = document.getElementById("btn1").textContent
                btn2 = document.getElementById("btn2").textContent
                btn3 = document.getElementById("btn3").textContent
                btn4 = document.getElementById("btn4").textContent
                btn5 = document.getElementById("btn5").textContent
                btn6 = document.getElementById("btn6").textContent
                btn7 = document.getElementById("btn7").textContent
                btn8 = document.getElementById("btn8").textContent
                checkWinning("X", btns, btn0, btn1, btn2, btn3, 
                    btn4, btn5, btn6, btn7, btn8, "H")

                
                console.log(btns[Math.floor((Math.random()*btns.length))])
            }
    }else{
        return
    }
    
}

function computer(){
    var x = btns[Math.floor((Math.random()*btns.length))]
    document.getElementById(x).innerHTML = "O"
    btns.splice(btns.indexOf(x), 1)
    btn0 = document.getElementById("btn0").textContent
    btn1 = document.getElementById("btn1").textContent
    btn2 = document.getElementById("btn2").textContent
    btn3 = document.getElementById("btn3").textContent
    btn4 = document.getElementById("btn4").textContent
    btn5 = document.getElementById("btn5").textContent
    btn6 = document.getElementById("btn6").textContent
    btn7 = document.getElementById("btn7").textContent
    btn8 = document.getElementById("btn8").textContent
    checkWinning("O", btns, btn0, btn1, btn2, btn3, 
                    btn4, btn5, btn6, btn7, btn8, "C")
}

function checkWinning(symbol, btns, btn0, btn1, btn2, btn3, 
                    btn4, btn5, btn6, btn7, btn8, player){

    if(
        btn0 == symbol && btn1 == symbol && btn2 == symbol || 
        btn3 == symbol && btn4 == symbol && btn5 == symbol || 
        btn6 == symbol && btn7 == symbol && btn8 == symbol ||
        btn0 == symbol && btn3 == symbol && btn6 == symbol || 
        btn1 == symbol && btn4 == symbol && btn7 == symbol || 
        btn2 == symbol && btn5 == symbol && btn8 == symbol ||
        btn0 == symbol && btn4 == symbol && btn8 == symbol || 
        btn2 == symbol && btn4 == symbol && btn6 == symbol
    ){
        if(symbol == "X"){
            winning.innerHTML = noteH
            document.getElementById("layer1").style.zIndex = "1";
        }else{
            winning.innerHTML = noteC
            document.getElementById("layer1").style.zIndex = "1";
        }
    }else if(btns.length < 1){
        winning.innerHTML = noteD
        document.getElementById("layer1").style.zIndex = "1";
    }else if(player == "H"){
        computer()
    }
}