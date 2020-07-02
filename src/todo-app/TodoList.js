import React from 'react';
import TodoItem from './TodoItem';
import TodoEditBox from './TodoEditBox';

class TodoList extends React.Component {

    state = {
        todoItems: [
            {
                id: 1,
                title: "Title 1",
                description: "Description 1"
            },
            {
                id: 2,
                title: "Title 2",
                description: "Description 2"
            },
            {
                id: 3,
                title: "Title 3",
                description: "Description 3"
            },
            {
                id: 4,
                title: "Title 4",
                description: "Description 4"
            }
        ],
        editVisible: false
    }

    render() {
        var todoJsx = this.state.todoItems.map(item => (
            <TodoItem key={item.id} title={item.title} description={item.description} />
        ));

        return (
            <div className="todo-list">
                {todoJsx}
                <button onClick={() => this.addTodoItem()}>Add Todo Item</button>
                <button onClick={() => this.deleteTodoItem(4)}>Delete Item</button>
                <button onClick={() => this.toggleEditBox()}>Toggle Edit</button>
                { this.state.editVisible ? <TodoEditBox/> : "" }
            </div>
        );
    }

    toggleEditBox() {
        this.setState({
            editVisible: !this.state.editVisible
        })
    }

    addTodoItem() {
        // spread operator to copy the array
        var newTodoItemsArray = [...this.state.todoItems];

        // push a new item to new array
        newTodoItemsArray.push({
            id: 5,
            title: "Title 5",
            description: "Description 5"            
        });

        // all the objects that are assigned
        // should be assigned immutably
        this.setState({
            todoItems: newTodoItemsArray
        })
    }

    deleteTodoItem(id) {
        var newArray = this.state.todoItems.filter(item => item.id != id)
        this.setState({
            todoItems: newArray
        });
    }
}

export default TodoList;