import React from 'react';

class TodoItem extends React.Component {
    render() {
        return (
            <div className="todo-item">
                <div className="todo-title">
                    {this.props.title}
                </div>
                <div className="todo-description">
                    {this.props.description}
                </div>
            </div>
        );
    }
}

export default TodoItem;