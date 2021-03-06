// Write a method that asks the user for his name and prints 
// Hello, <name>!. Write a program to test this method.

// On the first line you will receive a name

// Print Hello, <name>!

function solve(args) {
    
    var inputName = args;

    console.log(printName(inputName));

    function printName(name) {
        return ('Hello, ' + name + '!');
    }
}

solve(['Peter']);
// Hello, Peter!

solve(['Pan']);
// Hello, Pan!