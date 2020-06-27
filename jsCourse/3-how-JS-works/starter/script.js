///////////////////////////////////////
// Lecture: Hoisting

/*
calculateAge(1982);

function calculateAge(year){
    console.log(new Date().getFullYear() - year);
}

// Doesn't work with function expressions
//retirement(1982);

let retirement = function(birthYear){
    console.log(65 -(new Date().getFullYear() - birthYear) );
}

retirement(1982);

// variables

//console.log(age);
let age = 38;
console.log(age);

function foo(){
    let age = 65;
    console.log(age);
}

foo();
console.log(age);
*/
///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Kiss!';
first();

function first() {
    var b = 'My!';
    second();

    function second() {
        var c = 'Butt!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(a + b + c + d);
    console.log(a + d);
}
*/
///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

calculateAge(1982)

function calculateAge(birthYear){
    console.log( new Date().getFullYear()- birthYear);
    console.log(this);
}

let jesse = {
    name: 'Jesse',
    birthYear: 1982,
    calculateAge: function(){
        console.log(this);
        console.log(new Date().getFullYear() - this.birthYear);

        /*
        function innnerFunction(){
            console.log(this);
        }
        innnerFunction();
        */
    }
};

jesse.calculateAge();

let mike = {
    name: 'Mike',
    birthYear: 1990
};

mike.calculateAge = jesse.calculateAge;
mike.calculateAge();
 







