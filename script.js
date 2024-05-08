const  body = document.getElementsByTagName('body')[0];

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor(name){
    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}