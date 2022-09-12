const myGLobal = 0;


// funcion anidada
function myFunction() {
    const myNumber = 1;
    console.log(myGLobal);

    function parent(){ // Funcion interna
        const inner = 2;
        console.log(myNumber , myGLobal);

        function child(){
            console.log(inner, myGLobal,myNumber);
        };

        return child();
    };

    return parent();
};

myFunction();