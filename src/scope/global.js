

var a;// declarando
var b;// declaramos / asignamos
b = 'bb'; // reasignacion 
var a = 'aa'; // redeclaracion 

// Global Scope 
var fruit = 'Apple';

function besFruit () {
    console.log(fruit);
}

besFruit();

// al no declarar una variable y llamarla la volvemos global

function countries(){
    country = 'Colombia';
    console.log(country);
}

countries();
console.log(country);