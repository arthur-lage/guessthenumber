let colorCode = document.getElementById("rgbColor");
let generatedColor = '';
let bt1 = document.getElementById("button1");
let bt2 = document.getElementById("button2");
let bt3 = document.getElementById("button3");
let value1;
let value2;
let value3;
let index;
let gotCorrect1;
let gotCorrect2;
let gotCorrect3;

function newColors(){
    location.reload()
    return false
}

function randomColors(){
    value1 = Math.floor(Math.random() * 255)
    value2 = Math.floor(Math.random() * 255)
    value3 = Math.floor(Math.random() * 255)
    index = Math.floor(Math.random() * 3)
    generatedColor = `${value1}, ${value2}, ${value3}`
    colorCode.innerHTML = `RGB(${generatedColor})`

    if(index == 0){
        setButton1Color(true)
        setButton2Color(false)
        setButton3Color(false)
    } else if(index == 1){
        setButton2Color(true)
        setButton1Color(false)
        setButton3Color(false)
    } else if(index == 2){
        setButton3Color(true)
        setButton2Color(false)
        setButton1Color(false)
    }
}

function setButton1Color(isRight){
    if(isRight){
        bt1.style.backgroundColor = `rgb(${generatedColor})`;
        gotCorrect1 = true
    } else {
        value1 = Math.floor(Math.random() * 255)
        value2 = Math.floor(Math.random() * 255)
        value3 = Math.floor(Math.random() * 255)
        bt1.style.backgroundColor = 'rgb(' + value1 + ',' + value2 + ',' + value3 + ')';
        gotCorrect1 = false
    }
}
   
function setButton2Color(isRight){
    if(isRight){
        bt2.style.backgroundColor = `rgb(${generatedColor})`;
        gotCorrect2 = true
    } else {
        value1 = Math.floor(Math.random() * 255)
        value2 = Math.floor(Math.random() * 255)
        value3 = Math.floor(Math.random() * 255)
        bt2.style.backgroundColor = 'rgb(' + value1 + ',' + value2 + ',' + value3 + ')';
        gotCorrect2 = false
    }
}

function setButton3Color(isRight){
    if(isRight){
        bt3.style.backgroundColor = `rgb(${generatedColor})`;
        gotCorrect3 = true
    } else {
        value1 = Math.floor(Math.random() * 255)
        value2 = Math.floor(Math.random() * 255)
        value3 = Math.floor(Math.random() * 255)
        bt3.style.backgroundColor = 'rgb(' + value1 + ',' + value2 + ',' + value3 + ')';
        gotCorrect3 = false
    }
}

function click1(){
    if(gotCorrect1 == true){
        alert("Parabéns! Voce acertou! Criando novo jogo...")
        location.reload()
    } else if (gotCorrect1 == false){
        alert("Não foi dessa vez. Tente de novo.")
    }
}

function click2(){
    if(gotCorrect2 == true){
        alert("Parabéns! Voce acertou! Criando novo jogo...")
        location.reload()
    } else if (gotCorrect2 == false) {
        alert("Não foi dessa vez. Tente de novo.")
    }
}

function click3(){
    if(gotCorrect3 == true){
        alert("Parabéns! Voce acertou! Criando novo jogo...")
        location.reload()
    } else if (gotCorrect3 == false) {
        alert("Não foi dessa vez. Tente de novo.")
    }
}