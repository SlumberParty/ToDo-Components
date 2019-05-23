import Component from './Component.js';
import Header from './Header.js';
import TodoList from './TodoList.js';
import todos from '../data/todos.js';
import AddTodo from './AddTodo.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const todoList = new TodoList({ 
            todos,
            onRemove:(TodoToRemove) => {
                const index = todos.indexOf(TodoToRemove);

                todos.splice(index, 1);
                todoList.update({ todos });
            }
        });

        const todoListDOM = todoList.render();

        const addTodo = new AddTodo({
            onAdd: newTodo => {
                todoList.unshift(newTodo);
                todoList.update({ todos });
            }
        });
        const addTodoDOM = addTodo.render();

        const main = dom.querySelector('main');

        main.appendChild(addTodoDOM);

        main.appendChild(todoListDOM);

        dom.insertBefore(headerDOM, main);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main></main>
            </div>
        `;
    }
}

export default App;