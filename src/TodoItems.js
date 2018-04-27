import React, { Component } from "react";

class TodoItems extends Component {

    constructor(props) {
        super(props);

    

    }
   
    render() {

        const todoEntries = this.props.entries;

        function createTasks(item){
            return <li key={item.key}>{item.text} </li>
        }

        var listItems = todoEntries.map(createTasks);

        return (
            <div>
                {listItems}
            </div>
        )
    };
}

export default TodoItems;