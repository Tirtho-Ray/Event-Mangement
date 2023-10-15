# React + Vite



let greeting;
greetign = {};
console.log(greetign);

A: {}
B: ReferenceError: greetign is not defined
C: undefined
Answer:B






2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer:A
how?==>
The code creates an empty object and assigns it to the "greeting" 
variable. When i log "greeting" to the console,
 you'll see an empty object display as the output.
 two parameter a and b, and it attemps to add
 them together using the + operator. However, there's 
a type mismatch because a is a number (1) and b is a 
string . When JavaScript tries to add a number to
a string, it implicitly attempts to convert the string 
to a number. In this case, it cannot convert "2" to a
 number.
<==


3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer:A
how?==>
The food array remains unchanged as the modification
 was made to the info objects property, not the array 
itself
==>


4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Answer:B
why==>
When you call a function with missing arguments, 
they default to undefined.Calling sayHi without an
 argument
 ==>

5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer:B
0 is a falsy value, so it's not counted.
1, 2, and 3 are all truthy values, so they are counted.
