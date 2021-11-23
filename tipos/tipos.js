"use strict";
var nome = "Airton";
console.log(nome);
//nome = 28
var idade = 32;
//idade = "Airton"
idade = 32.5;
console.log(idade);
var verificaBolean = false;
//verificaBolean = 1
console.log(verificaBolean);
//Tipos explicitos
//Aqui no caso pode se usar qualquer tipo
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
//Aqui tambem pode se usar qualquer tipo
var minhaIdade2;
minhaIdade2 = 'Airton';
console.log(typeof minhaIdade2);
//Aqui pode se usar apenas o tipo que foi definido
var minhaIdade3;
minhaIdade3 = 32;
console.log(typeof minhaIdade3);
var nome2 = "Airton";
console.log(typeof nome2);
//Arrays
//Array do tipo any, aceita todos os tipos na araay
var hobbies = ["Rua neliese", 3202, 90.5];
console.log(hobbies[0]); //posição zero do array
console.log(typeof hobbies);
//array do tipo number, aceita apnas tipo number
var newArray = [1, 2, 5, 6];
console.log(newArray[0]);
//Tuplas
var user = ["Airton", 32];
