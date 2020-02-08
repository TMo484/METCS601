/* this is a declared function */
function hi() {
    console.log("It Worked!");
}

/* this is a function expression */
let bye = function() {
    console.log("It also worked!")
}

/* this is an arrow function */
() => {console.log("woohoo")}

/* this is an anonymous function */
function () {}

hi()
bye()

function addTogether(a,b) {
    return a + b;
}

let result = addTogether(3,2);
console.log("result =", result)