// Global Variables
var addBtn = document.getElementsByClassName("add-btn")[0],
    todo = document.getElementsByClassName("todo-input")[0],
    todoList = document.getElementsByClassName("todo-list")[0];
    

// when user write todo and clicked on add button, add this todo to list.
addBtn.addEventListener("click", function () {
    "use strict";
    
      // take the value from todo.
        // Create 2 element li and span.
    var todoVal = todo.value,
        li = document.createElement("LI"),
        span = document.createElement("SPAN"),
        
        // Add text to the elements;
        liText = document.createTextNode(todoVal),
        spanText = document.createTextNode("x");
    
    // Append every text node to element.
    li.appendChild(liText);    // append the text in li and the text is the value in input.
    span.appendChild(spanText); //  the text ix close sign(x).
    li.appendChild(span);       // append the span in li element.
    todoList.appendChild(li);   // append the li elemnt in the todo-list.
    
    // when clik on span (x) remove the todo.
    span.addEventListener("click", function () {
        this.parentNode.remove();
        this.remove();
    });
});
