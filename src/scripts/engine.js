const emojis = [
    "balon.jpg",
    "balon.jpg",
    "boat.jpg",
    "boat.jpg",
    "doce.jpg",
    "doce.jpg",
    "elephant.jpg",
    "elephant.jpg",
    "helicopter.jpg",
    "helicopter.jpg",
    "robot.jpg",
    "robot.jpg",
    "tambor.jpg",
    "tambor.jpg",
    "vase.jpg",
    "vase.jpg",
];

let openCards = [];

let shuffleEmojis = emojis.sort(()=> (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    
    let img = document.createElement("img");
    img.src = `./src/images/${shuffleEmojis[i]}`;
    box.appendChild(img);
    
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
    
}

function handleClick(){
    playSound("click");
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    if(openCards.length == 2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        playSound("match");
    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
        playSound("error");
    }
    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Você venceu!!")
        
    }
}

function playSound(audioName){
    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.play();
}