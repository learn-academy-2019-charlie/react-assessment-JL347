// React Assessments

// 1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>I am a component</h1>
      </div>
    );
  }
}

export default App;

// 2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below. 


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

// your for loop here, you can use the same stuffArray array

for (let i = 0; i <= stuffArray.length; i++)

console.log(stuffArray)


// 3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

var prices = [19.99, 28.75, 56.90, 234.90]

var steal = function(){
  // your logic here
  return Math.min.apply(null, prices)
}
console.log(steal(prices))
