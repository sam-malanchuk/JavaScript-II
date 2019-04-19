// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function stillFirstLayerScope() {
  firstLayerScope(); // I can call this function because it's not above the lexical scope
}

function thirdOnFirstScope() {
  console.log("I'm being called from three scopes deep")
}

function firstLayerScope() {
  function secondLayerScope() {
      function thirdLayerScope() {
        thirdOnFirstScope(); // even though this is not on the same lexical scope I can run it because it's outside of the current scope
        console.log("third scope layer console logging");
      }
    console.log("second scope layer console logging");
    thirdLayerScope(); // running the third layer scope because it's in the lexical scope
  } // 2st scope from the outside
  console.log("first scope layer console logging");
  secondLayerScope(); // able to run function because within it's lexical scope
} // 1st scope from the outside

stillFirstLayerScope();
// secondLayerScope(); // I cannot run this function because it's not on the current lexical scope, see line 22

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
