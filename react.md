# React Assessments

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework

 
 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.
 
 
 //Your Answer
 
    - "smart" components keep track of the state so they can be directly affected by individual methods, components, etc. Whereas, "dumb" components can only be affected when you render them and do not have state.
 
 //Googled Answer
 
 
#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?
 
 
 //Your Answer

    - "yard add" is specifically adding the package that we want to run. It will also always update your package.json file.
 
 //Googled Answer
 
 
#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:


    1. added extends Component to the class Recipes line
    2. added brackets to the recipes array within this.state
    3. moved the return part of let recipes to return the unordered list only
    
import React, { Component } from 'react';

    class Recipes extends Component {
      constructor(props){
        super(props)
        this.state = {
          recipes: [
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}]
      
        }
      }

      render() {
    
          let recipes = this.state.recipes.map(function(recipe){
            return(
              <li key={recipe.name}>{recipe.name}</li>
            )
          })
          return (
    
          <ul>
            {recipes}
          </ul>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)
 
 //Your Answer
 1. button
 2. number
 3. password
 
 
 //Googled Answer
 
 
 #### 7. How would you explain state to a friend who doesn't know code?
 
 //Your Answer

    - state is essentially the parent to all of the data within a program and helps to keep track of all of the children data within said program.
 
 //Googled Answer
 
 
 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.
 
 
 //Your Answer

    -state keeps track of all data within a program while props are the extension of state so that you can continue to use them in separate files, methods, etc.
 
 //Googled Answer
 
   
#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

- so my particular mob did not explore tic tac toe. We decided to start with battleship and then ended up doing treasure hunt and battleship within those 3 "projects". I'll start by saying that we failed miserably at starting off with battleship but what I thought was great about that, is that we were all flexible enough to change course but also motivated enough to start that one in the first place. We didn't get discouraged or give up and we actually made a break through at the end of the first given day which led us to pursue treasure hunt first thing the next morning. We then finished that project in a matter of a couple of hours, then also finished Battleship in the same day. Now we could obviously add a few things to both but we finished the given portions of the challenges. It was just really fun to see us work together as a team and not give up when the beginning was not so great. 