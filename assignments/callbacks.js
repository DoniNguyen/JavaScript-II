// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function schoolsupplies(item1,item2){
  console.log("In school i bring with me a "+item1+" and a "+item2)
}

schoolsupplies(items[0],items[1]);


  // // GIVEN THIS PROBLEM:

  // function firstItem(arr, cb) {
  //   // firstItem passes the first item of the given array to the callback function.
  // }

  // // SOLUTION:

  // function firstItem(arr, cb) {
  //   return cb(arr[0]);
  // }

  // // NOTES ON THE SOLUTION:

  // // firstItem is a higher order function.
  // // It expects a callback (referred to as `cb`) as its second argument.
  // // To test our solution, we can use the given `items` array and a variety of callbacks.
  // // Note how callbacks can be declared separately, or inlined.

  // // TEST 1 (inlined callback):

  // const test1 = firstItem(items, item => `I love my ${item}!`);
  // console.log(test1); // "I love my Pencil!"

  // // TEST 2 (declaring callback before hand):

  // function logExorbitantPrice(article) {
  //   return `this ${article} is worth a million dollars!`;
  // };

  // const test2 = firstItem(items, logExorbitantPrice);
  // console.log(test2); // "this Pencil is worth a million dollars!"



function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return (arr.length);
}
console.log(getLength(items));


function last(arr,cb) {
  return (arr[3]);
}
console.log(last(items));


function sumNums(x, y, cb) {
  return x+y;
}
console.log(sumNums(5,10));


function multiplyNums(x, y, cb) {
  return x*y;
}
console.log(multiplyNums(10,10));

function contains(item, list, cb){
  if(item==="Pencil"){
    return "bag contains a pencil!";
  }else if(item==="Notebook"){
    return "bag contains a notebook!";
  }else if(item==="yo-yo"){
    return "bag contains a yo-yo!";
  }else if(item==="Gum"){
    return "bag contains gum!";
  }else{
    return false;
  }
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
};

console.log(contains("Pencil"));
console.log(contains("Gum"));

console.log(contains("Marker"));


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
