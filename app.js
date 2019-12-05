const some = document.querySelector(".some");
const main = document.querySelector(".main");
const question = document.querySelector(".question");
const options = document.querySelectorAll(".options li")
const list = document.querySelector('.opt ul');
const score = document.querySelector('.top');
const select = document.querySelector('.select');
const other = document.querySelector('select');




let questions = ["what year did Nigeria get their independence","what is the square root of 25", "how many legs has a cow","what is the capital of Nigeria","Nigeria’s current president","What was the first political party in Nigeria?","Who was the first female vice chancellor in Nigerian university?"," Who was the first woman to buy a car in Nigeria?","Nigeria is divided into how many geopolitical zones?"];

let sample = [[1960,1940,1860,1820], [3,20,5,15], [2,4,6,3],['Anambra', 'Abuja', 'Benin', 'lagos'],["Muhammadu Buhari","Wole Soyinka","Pete Obi", "Atiku Abubakar"],["Nigerian National Democratic party (NNDP)","peoples democratic party (PDP)","All peoples Grand Aliance (APGA)","Sure boys party (SB)"],["Chimamanda Ngozi Adichie","Grace Alele Williams","Florence Ita Giwa","Funmi Iyanda"],["Florence Ita Giwa","Funmi Iyanda","Funmilayo Ransome Kuti","Folake Coker"],["Six (6) geopolitical zones","Seven (7) geopolitical zones","Five (5) geopolitical zones","Eight (8) geopolitical zones"],["Decision support system","Collaboration system","Management information system","Transaction processing system"]];


let answer = [1960,5,4,'Abuja',"Muhammadu Buhari","Nigerian National Democratic party (NNDP)","Grace Alele Williams","Funmilayo Ransome Kuti","Six (6) geopolitical zones"];


let math = ["what is the square root of 25", "how many legs has a cow"];

let Manswer = [5,4,];

let Msample = [[3,20,5,15], [2,4,6,3]];


function shufful(sample){
    sample.sort(() => {
        return Math.random() - 0.5
    })
}


let x
let num = []
let s = 0;
let restart;


function generate(){
    x = Math.floor(Math.random() * 9);
}

function clear(){
    question.textContent = ""
    options.textContent = ""
    s = 0;
    num = []
    score.textContent = `Score : ${s}`
}



function populate(){
    let counter = 0;
    generate()
    if (num.includes(x,0) == true){
        populate()

    }else if (other.value == "Random"){
        shufful(sample[x])
        num.push(x)
        question.textContent = questions[x];
        for(let i = 0; i <= sample[x].length; i++){
            options[counter].textContent = sample[x][i];
            counter++
            
        } 
    } else{
        alert("only Random is supported for now")
        select.style.display = "block";
        main.style.display = "none";
        clear()
    }    
}



some.addEventListener("click", (e) => {
    t = 0;
    select.style.display = "none";
    main.style.display = "block";
    tic.style.display = "none";

    populate()
    
})





list.addEventListener("click", (e) => {
    if(e.target.textContent == answer[x]){
        e.target.style.background = 'green'
        s++
        score.textContent = `Score : ${s}`
        setTimeout(() => {
            e.target.style.background = ""
            populate()
        }, 500)
    }else{
        e.target.style.background = 'red'

        setTimeout(() => {
            e.target.style.background = ""
            restart = confirm("Game over do you want to play again?")
            if(restart == true){
                clear()
            }else{
                select.style.display = "block";
                main.style.display = "none";
                clear()
            }
            populate()
        }, 500)  
    }
})




const start = document.querySelector("#btn");
const restarts = document.querySelector("#btn1");
const table = document.querySelector(".tables");
const tt = document.querySelectorAll(".tables tr td");
const tic = document.querySelector('.Tic');
const ttt = document.querySelector('.ttt');
const scores = document.querySelector('.score');
const se = document.querySelector('.op');



let counter = 0;
let xScore = 0;
let oScore = 0;
let arr;

function check(){
    arr = [];
    tt.forEach((e) => {
        arr.push(e.textContent);
    })
    
    console.log(arr);

    let row1 = "";
    let row2 = ""
    let row3 = "" 


    for (let i = 0; i < 3; i++){
        row1 += arr[i];
    }
    for (let i = 3; i < 6; i++){
        row2 += arr[i]
    }

    for (let i = 6; i < 9; i++){
        row3 += arr[i]
    }

    row1 == "XXX" ? xWins() : row1 == "OOO" ? oWins() : "ww"
    row3 == "XXX" ? xWins() : row3 == "OOO" ? oWins() : "ww"
    row2 == "XXX" ? xWins() : row2 == "OOO" ? oWins() : "ww"

    let column1 = "";
    let column2 = ""
    let column3 = ""


    for (let i = 0; i < arr.length; i+=3){
        column1 += arr[i];
    }
    for (let i = 1; i < arr.length; i+= 3){
        column2 += arr[i]
    }

    for (let i = 2; i < arr.length; i+=3){
        column3 += arr[i]
    }

    column1 == "XXX" ? xWins() : column1 == "OOO" ? oWins() : "ww"  
    column2 == "XXX" ? xWins() : column2 == "OOO" ? oWins() : "ww"
    column3 == "XXX" ? xWins() : column3 == "OOO" ? oWins() : "ww"



    let l = "";
    let o = ""

    for (let i = 0; i < arr.length; i+=4){
        l += arr[i];
    }
    for (let i = 2; i < arr.length; i+= 2){
        o += arr[i]
    }

    l == "XXX" ? xWins() : l == "OOO" ? oWins() : "ww"
    o == "XXX" ? xWins() : o == "OOO" ? oWins() : "ww"
}

let ag;

function oWins(){
    oScore++
    scores.textContent = `X-Score : ${xScore}  O-Score  : ${oScore}`
    ag = confirm("O wins would you like another round")
    if (ag == true){
        counter = 0;
        tt.forEach((t)=>{
            t.textContent = "";
        })
        input()
    }else{
        select.style.display = "block";
        main.style.display = "none";
        tic.style.display = "none";
    }
    
}

function xWins(){
    xScore++
    scores.textContent = `X-Score : ${xScore}  O-Score  : ${oScore}`
    ag = confirm("X wins would you like another round")
    if (ag == true){
        counter = 0;
        tt.forEach((t)=>{
            t.textContent = "";
        })
        input()
    }else{
        select.style.display = "block";
        main.style.display = "none";
        tic.style.display = "none";
    }
}
x = 0;
let a;
let y 




function input(e){
    x = 0
    if (e.target.textContent == ""){
        if (counter % 2 == 0 && counter < 9){
            e.target.textContent = 'X'
            
        }else if (counter % 2 != 0 && counter < 9){
            e.target.textContent = 'O'

        }else{
            alert('Game Over')
        }
        counter++

        check()


    }

    tt.forEach((t)=>{
        if(t.textContent == ""){
            console.log(t.textContent)
            x++

        }
    })
    console.log(x)

    if(x == 0){
    a = confirm("draw...Again??")
    if (a == true){
        counter = 0;
        tt.forEach((t)=>{
            t.textContent = "";
        })
        input()
    }else{
        select.style.display = "block";
        main.style.display = "none";
        tic.style.display = "none";
    }
}

}

ttt.addEventListener("click", (e) => {
    if (se.value == "multiPlayer"){
        tt.forEach((t)=>{
            t.textContent = "";
        })
        counter = 0;
        xScore = 0;
        oScore = 0;
        scores.textContent = `X-Score : ${xScore}  O-Score  : ${oScore}`

        select.style.display = "none";
        main.style.display = "none";
        tic.style.display = "block";
        console.log("...")
        table.addEventListener("click", input)
    }else{
        onePlayer()
    }
    
})

restarts.addEventListener("click", (e)=>{
    tt.forEach((t)=>{
        t.textContent = "";
    })
    a = ""
    counter = 0;
    xScore = 0;
    oScore = 0;
    scores.textContent = `X-Score : ${xScore}  O-Score  : ${oScore}`
})



// Single Player Mode

function onePlayer(){
    

    counter = 0;
    xScore = 0;
    oScore = 0;
    scores.textContent = `X-Score : ${xScore}  O-Score  : ${oScore}`

    select.style.display = "none";
    main.style.display = "none";
    tic.style.display = "block";

    table.addEventListener("click", ai)
}

restarts.addEventListener("click", onePlayer)

let ano

function ai(e){
    arr = [];
    ano = []

    if (e.target.textContent == ""){
        e.target.textContent = "X"

    }
    tt.forEach((e) => {
        arr.push(e.textContent);
    })

    console.log(arr);
    
    for(let i = 0; i < tt.length; i++){
        if(tt[i].textContent == "X"){
            ano.push(i)
        }
    }

    y = Math.floor(Math.random() * tt.length);
    if (ano.includes(y,0)){
        y = Math.floor(Math.random() * tt.length);
        ai()
    }
    tt[y].textContent = "O"

    check()
}
