import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import TodoList from './TodoList';
import TodoItems from './TodoItems';


//the div with id = 'container' is declared in index.html
var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
       <TodoList/>
    </div>, destination
);

