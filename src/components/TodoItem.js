import Component from './Component.js';

class TodoItem extends Component {

    render() {
        const todo = this.renderDOM();
        const removeButton = todo.querySelector('button');

        const onRemove = this.props.onRemove;
        const TodoToRemove = this.props.todo;

        removeButton.addEventListener('click', () => {
            onRemove(TodoToRemove);
        });
        return todo;

    }

    renderTemplate() {
        const todo = this.props.todo;
        let checked = '';

        if(todo.completed) {
            checked = 'checked';
        }

        return /*html*/`
            <li>
                <input type="checkbox"${checked}>${todo.task}
                <button id="remove">x</button>
            </li>
        `;
    }
}

export default TodoItem;