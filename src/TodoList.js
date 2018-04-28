import React, { Component } from "react";
import TodoItems from "./TodoItems";
import  "./TodoList.css";

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        const itemArray = this.state.items;

        itemArray.push({
            text: this._inputElement.value,
            key: Date.now(),
        });

        this.setState({
            items: itemArray,
        });
        console.log(this.state.items);

        //override the default onSubmit event which triggers the browser's default POST behaviour which we dont want
        //which includes page refresh.
        e.preventDefault();
    }

    render() {
        return (
            <div className='todoListMain'>
                <h2> Jeff's Todo List</h2>
                <div className='header'>
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder='Enter Task'>
                        </input >
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} />
            </div>
        )
    };
}

export default TodoList;