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
// const restart = document.querySelector("#btn1");
const table = document.querySelector(".tables");
const tt = document.querySelectorAll(".tables tr td");
const tic = document.querySelector('.Tic');
const ttt = document.querySelector('.ttt');



let counter = 0;


function check(){
    let arr = [];
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

    row1 == "XXX" ? alert("X win") : row1 == "OOO" ? alert("O wins") : "ww"
    row3 == "XXX" ? alert("X win") : row3 == "OOO" ? alert("O wins") : "ww"
    row2 == "XXX" ? alert("X win") : row2 == "OOO" ? alert("O wins") : "ww"

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

    column1 == "XXX" ? alert("X win") : column1 == "OOO" ? alert("O wins") : "ww"  
    column2 == "XXX" ? alert("X win") : column2 == "OOO" ? alert("O wins") : "ww"
    column3 == "XXX" ? alert("X win") : column3 == "OOO" ? alert("O wins") : "ww"



    if (column1 == "XXX"){
        alert("X Wins");
        table.removeEventListener("click", input())
    }

    let l = "";
    let o = ""

    for (let i = 0; i < arr.length; i+=4){
        l += arr[i];
    }
    for (let i = 2; i < arr.length; i+= 2){
        o += arr[i]
    }

    l == "XXX" ? alert("X win") : l == "OOO" ? alert("O wins") : "ww"
    o == "XXX" ? alert("X win") : o == "OOO" ? alert("O wins") : "ww"
}

ttt.addEventListener("click", (e) => {
    select.style.display = "none";
    main.style.display = "none";
    tic.style.display = "block";

})

start.addEventListener("click", (e) => {
    console.log("...")
    table.addEventListener("click", function input(e){
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

    })
})