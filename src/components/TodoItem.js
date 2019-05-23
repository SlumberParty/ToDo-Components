import Component from './Component.js';
import todos from '../data/todos.js';

class TodoItem extends Component {

    render() {
        const todo = this.renderDOM();
        const removeButton = todo.querySelector('button');

        const onRemove = this.props.onRemove;
        const TodoToRemove = this.props.image;

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
                <button>x</button>
            </li>
        `;
    }
}

export default TodoItem;