//GLOBAL SCOPE- if the variable or function is defined inside the file, but not defined inside of any function or loop, then it is global scope. Global scope means that the variable or function is available and "visible" from all areas of the file



//LOCAL SCOPE- If a variable is created withing a function or a loop then it is local scope. (functional-(within a function) or block scoped (within a loop or a conditional))



const beatles = ['Paul', 'George', 'John', 'Ringo'];


console.log(beatles[0] = "Daeun")


function printNames(names) {

  function actuallyPrintingNames() {

    let index = 0
    let name;
    for (index = 0; index < names.length; index++) {
      name = names[index];
  
      console.log(name + ' was found at index ' + index);
    }

    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}

printNames(beatles)





const daysofweek = 7;



/*
Difference between let and var and const:
    -var is functional scoped (meaning that if var is defined within a function, its only available within that function or any function within that function. If the var is declared within a loop or a conditional, its available outside the loop/conditional)

    -let and const is block scoped (meaning that if var is defined within a function, its only available within that function or any function within that function and If the let is declared within a loop or a conditional, its  ONLY available INSIDE the loop/conditional)


    -const is used just like let, however its only for variables that you want to keep the same or prevent reassignment of the variable
*/

