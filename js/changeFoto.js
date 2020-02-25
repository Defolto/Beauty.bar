let fon = document.querySelector(`.fon`);
let massFoto = [`url("img/fons/1.jpeg")`, `url("img/fons/2.jpeg")`, `url("img/fons/3.jpeg")`];
let count = 0;

function changeFoto(i){
    fon.style.background = massFoto[i];
    fon.style.backgroundSize = 'cover';
    if (count == 2 || count == 0) {
        fon.style.backgroundPositionY = 'bottom';
    }
}

changeFoto(count);
count++;

setInterval(() => {
    changeFoto(count);
    count++;
    if (count == 3) {
        count = 0;
    }
}, 10000);