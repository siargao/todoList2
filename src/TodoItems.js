import React, { Component } from "react";
import FlipMove from 'react-flip-move';


class TodoItems extends Component {

    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
        this.delete = this.delete.bind(this);
    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)} key={item.key}>
            {item.text}
        </li>
    }


    delete(key) {
        this.props.delete(key);
    }

    render() {
        const todoEntries = this.props.entries;

        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className='theList'>
                <FlipMove duration={750} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        )
    };
}

export default TodoItems;