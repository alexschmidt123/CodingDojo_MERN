var hello;
console.log(hello);                                   
hello = 'world';                                 

var neeld;
function test(){
    var needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';
test();

var brendan 
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
brendan= 'super cool';
console.log(food);


var food 
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
console.log(food);
food = 'chicken';
eat();
console.log(food);



function mean() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);
mean();
console.log(food);


var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);


var dojo;
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
dojo = "san jose";
learn();
console.log(dojo);


console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
