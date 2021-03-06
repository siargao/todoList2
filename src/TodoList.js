import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        const itemArray = this.state.items;

        itemArray.push({
            text: this.inputElement.value,
            key: Date.now(),
        });

        this.setState({
            items: itemArray
        });

        //reset the input element value to an empty string
        this.inputElement.value = '';
        
        //override the default onSubmit event which triggers the browser's default POST behaviour which we dont want
        //which includes page refresh.
        e.preventDefault();
    }

    deleteItem(key) {
        const filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });

    }
    render() {
        return (
            <div className='todoListMain'>
                <h2> Todo List</h2>
                <div className='header'>
                    <form onSubmit={this.addItem}>
                        <input ref={(e) => this.inputElement = e} placeholder='enter task'>
                        </input >
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <TodoItems delete={this.deleteItem} entries={this.state.items} />
            </div>
        )
    };
}

export default TodoList;