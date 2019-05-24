import Component from './Component.js';
import Header from './Header.js';
import TodoList from './TodoList.js';
import todos from '../data/todos.js';
import AddTodo from './AddTodo.js';
import Filter from './Filter.js';
import filterToDo from '../filter-todos.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        //Header
        const header = new Header();
        const headerDOM = header.render();

        //Todo List
        const todoList = new TodoList({ 
            todos,
            onRemove:(TodoToRemove) => {
                const index = todos.indexOf(TodoToRemove);

                todos.splice(index, 1);
                todoList.update({ todos });
            }
        });
        const todoListDOM = todoList.render();

        //AddToDo
        const addTodo = new AddTodo({
            onAdd: newTodo => {
                todos.unshift(newTodo);
                todoList.update({ todos });
                filter.update();
            }
        });
        const addTodoDOM = addTodo.render();

        //Filter
        const filter = new Filter({
            onFilter: filter => {
                const filtered = filterToDo(todos, filter);
                todoList.update({ todos:filtered });
            }
        });

        const filterDOM = filter.render();

        //append To Dom
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);
        main.appendChild(addTodoDOM);
        main.appendChild(filterDOM);
        main.appendChild(todoListDOM);


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