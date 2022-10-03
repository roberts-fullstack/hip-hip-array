/* This assignment will give you some practice with creating arrays and using their methods. */


console.log("Challenge 1");
// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];
  
let ctr1 = 0; 

while(ctr1 < students.length) {
console.log(students[ctr1]);
  ctr1++ 
}
  

  console.log("\n");
  console.log("Challenge 2");
  // Challenge 2
  // Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
  const grades = [100, 80, 110, 75, 83, 64];
  
  ctr2 = 0;
  let gradesReversed = grades.reverse();

  while(ctr2 < gradesReversed.length){
    console.log(gradesReversed[ctr2])
    ctr2++
  }


  console.log("\n");
  console.log("Challenge 3");
  // Challenge 3
  // Console.log out only the even numbers in the following array.
  const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
  // Challenge 3 Code


let ctr3 = 0;
  while(ctr3 < positiveNumbers.length){
  if (positiveNumbers[ctr3] % 2 == 0){
  console.log(positiveNumbers[ctr3])
}
 
ctr3++ 
}


  console.log("\n");
  console.log("Challenge 4");
  // Challenge 4
  // Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
  const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

  // Challenge 4 Code

  
  let ctr4 = 0;
  while(ctr4 < mixedSignNumbers.length){
 if (mixedSignNumbers[ctr4] % 2 == 0){
  console.log(mixedSignNumbers[ctr4])
 }
 
 ctr4++ 
}

  
  console.log("\n");
  console.log("Challenge 5");
  // Challenge 5
  // Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
  const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
  // Challenge 5 Code
   
  console.log ("Original Array: ")
  console.log(symmetricalCapitals);

  console.log("After removing two from the beginning: ")
  console.log(symmetricalCapitals.shift());
  console.log(symmetricalCapitals.shift());
  console.log(symmetricalCapitals);

  console.log("After also removing one from the end: ")
  
  console.log(symmetricalCapitals.pop());
  console.log(symmetricalCapitals);




  console.log("\n");
  console.log("Challenge 6");
  // Challenge 6
  // Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
  const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
  // Challenge 6 Code
  

console.log(`The original array is: ${fibonacciNumbers}` )

console.log("After adding a 0 to the start of the array: ")
fibonacciNumbers.unshift(0);
console.log(fibonacciNumbers);

console.log("After adding two values (21 & 34) to the end of the array:")
fibonacciNumbers.push(21,34);
console.log(fibonacciNumbers);

let ctr6 = 0; 

while(ctr6 < fibonacciNumbers.length){
console.log(fibonacciNumbers[ctr6]);
  ctr6++ 
}
  


  console.log("\n");
  console.log("Challenge 7");
  // Challenge 7
  // Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
  // Challenge 7 Code

  const myArray = ["person", "woman", "man", "camera", "TV"];

let ctr7 = 0;

while (ctr7 < myArray.length){
  console.log(myArray[ctr7]);
  ctr7++
}



  console.log("\n");
  console.log("Challenge 8");
  // Challenge 8
  // Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
  //const emptyArray = [];
  // Challenge 8 Code
  const emptyArray = [];

  console.log("First, the empty array:")
  console.log(emptyArray);
  
  console.log("How about we UNSHIFT some dough.")
  emptyArray.unshift("dough");
  console.log(emptyArray);
  
  console.log("Now UNSHIFT some sauce.")
  emptyArray.unshift("sauce");
  console.log(emptyArray);
  
  console.log("Then we'll PUSH on some cheese, peppers, and onions!")
  emptyArray.push("cheese", "peppers", "onions");
  console.log(emptyArray);



  console.log("\n");
  console.log("Challenge 9");
  // Challenge 9
  // Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
  // Challenge 9 Code
  
   
  const students9 = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];

  console.log("Original list: ")
  console.log(students9)

let ctr9 = 0; 

let newStudentList = students9.slice(3,11);

while(ctr9 < newStudentList.length){
 
  console.log(newStudentList[ctr9]);   
  ctr9 ++ 
}


  console.log("\n");
  console.log("Challenge 10");
  // Challenge 10
  // Loop through the `students` array from Challenge 1, making a COPY of the array , starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.
  // Do NOT use slice, you will be using that for the next challenge!
  // Challenge 10 Code

  const students10 = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];

  let ctr10 = 0;
  let students10b = students10.splice(3,8);
  

  while (ctr10 < students10b.length){
console.log(students10b[ctr10]);
ctr10++
}



  console.log("\n");
  console.log("Challenge 11");
  // Challenge 11
  // Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
  // Challenge 11 Code
  

  const students4 = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];

let newList = students4.slice(3,11);
console.log('This is the array after using SLICE: ')
console.log(newList); 


console.log('Original array: ')
console.log(students4)



  console.log("\n");
  console.log("Challenge 12");
  // Challenge 12
  // Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
  const dinosaurs12 = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

  console.log("Original array: ");
  console.log(dinosaurs12);
  
  let ctr12 = 0;
  let dinosaurs12SPLICED = dinosaurs12.splice(4,3);
  
  while(ctr12 < dinosaurs12.length){
  console.log(dinosaurs12[ctr12]);
  ctr12++;
  }

  
  console.log("\n");
  console.log("Challenge 13");
  // Challenge 13
  // Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
  // Challenge 13 Code

  const dinosaurs13 = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

  console.log("The dinosaur names joined with the * separater: ")
  console.log(dinosaurs13.join(" * "))
  

  
  console.log("\n");
  console.log("Challenge 14");
  // Challenge 14
  // Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
  // Challenge 14 Code

  const dinosaurs14 = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

  console.log("Original array order: ");
  console.log(dinosaurs14);
  
  console.log("Dinosaur names reversed: ");
  console.log(dinosaurs14.reverse());

  console.log("Original array order now reversed by previous REVERSE: ");
  console.log(dinosaurs14);


  
  console.log("\n");
  console.log("Challenge 15");
  // Challenge 15
  // Create two new arrays.
  // Use .concat to combine those two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
  // Challenge 15 Code

  const veggies = ['turnip', 'cabbage', 'squash', 'tomato']
  const fruits = ['apple', 'pear', 'banana', 'grapefruit' ]
  
  
  let allFoods = veggies.concat(fruits);
  
  let ctr15 = 0;
  
  while(ctr15 < allFoods.length){
  console.log(allFoods[ctr15])
  ctr15++
  }

  console.log(`Here is the first array called veggies: ${veggies}` )
  console.log(`Here is the second array called fruits: ${fruits}` )