// Global Variables
var addBtn = document.getElementsByClassName("add-btn")[0],
    todo = document.getElementsByClassName("todo-input")[0],
    todoDate = document.getElementsByClassName("todo-input")[1],
    todoForm = document.getElementsByClassName("todo-form")[0],
    todoList = document.getElementsByClassName("todo-list")[0];


// when user write todo and submit the form, add this todo to list.
todoForm.addEventListener("submit", function (event) {
    "use strict";
    // Prevent form submission
    event.preventDefault();

      // take the value from todo.
        // Create 2 element li and span.
    var todoVal = todo.value,
        time = todoDate.value,
        
        li = document.createElement("LI"),
        removeSpan = document.createElement("SPAN"),
        dateSpan = document.createElement("SPAN"),
        // Add text to the elements;
        liText = document.createTextNode(todoVal),
        spanText = document.createTextNode("x");
    // Add Class Name to Span    
    removeSpan.setAttribute("class", "remove");
    dateSpan.setAttribute("class", "date");

    dateSpan.innerHTML = time;  // append date to span.
    
    // Append every text node to element.
    li.appendChild(liText);    // append the text in li and the text is the value in input.
    removeSpan.appendChild(spanText); //  the text ix close sign(x).
    li.appendChild(dateSpan); // append the date into the li.
    li.appendChild(removeSpan);       // append the span in li element.
    todoList.appendChild(li);   // append the li elemnt in the todo-list.

    // Reset the value of the input
    todo.value = "";

    // when clik on span (x) remove the todo.
    removeSpan.addEventListener("click", function () {
        this.parentNode.remove();
    });
});
