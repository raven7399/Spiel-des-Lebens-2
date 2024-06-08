const {/* zeichneMatrix, */grassArray, rasenDestroyerArray, fleischfresserArray, wasserArray, frauArray, mannArray, statistiken, anzahl} = require("./hilfsfunktionen");
const Wasser = require("./wasser");
const Fleischfresser = require("./fleischfresser");
const Grass = require("./grass");
const RasenDestroyer = require("./rasen_destroyer");
const Mann = require("./mann");
const Frau = require("./frau");

function setup() {
  // createCanvas(500, 500);
  // frameRate(15);
  // noStroke()
  for (i = 0; i < 1; i+= 1) {
    grassArray.push(new Grass(50,50));
    statistiken("g");
  }

  for (i = 0; i < 1; i+= 1) {
    rasenDestroyerArray.push(new RasenDestroyer(45,45));
    statistiken("rd");
  }

  for (i = 0; i < 1; i+= 1) {
    fleischfresserArray.push(new Fleischfresser(35,35));
    statistiken("ff");
  }

  for (i = 0; i < 1; i+= 1) {
    wasserArray.push(new Wasser(0,50));
    statistiken("w");
  }

  for (i = 0; i < 1; i+= 1) {
    frauArray.push(new Frau(55,50));
    statistiken("f");
  }

  for (i = 0; i < 1; i+= 1) {
    mannArray.push(new Mann(55,49));
    statistiken("m");
  }

}

// let i = 0;
function draw() {
  // console.log("is running")
  // if (i < 2000) {
    for (let i = 0; i < grassArray.length; i++) {
      grassArray[i].spielzug()
      // console.log(i)
    }
  
    for (let i = 0; i < rasenDestroyerArray.length; i++) {
      rasenDestroyerArray[i].spielzug()
    }
  
    for (let i = 0; i < fleischfresserArray.length; i++) {
      fleischfresserArray[i].spielzug()
    }
      
    for (let i = 0; i < wasserArray.length; i++) {
      wasserArray[i].spielzug()
    }

    for (let i = 0; i < mannArray.length; i++) {
      mannArray[i].spielzug()
    }

    for (let i = 0; i < frauArray.length; i++) {
      frauArray[i].spielzug()
    }

    console.log(anzahl.grass,anzahl.ff,anzahl.rd,anzahl.wasser,anzahl.m,anzahl.f);

  // zeichneMatrix();
  // }
  // i++;

}

module.exports = {
  setup: setup,
  draw: draw,
}