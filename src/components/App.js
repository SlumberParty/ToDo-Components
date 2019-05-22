import Component from './Component.js';
import Header from './Header.js';
import TodoList from './TodoList';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const todoList = new TodoList();
        const todoListDOM = todoList.render();

        const main = dom.querySelector('main');

        main.appendChild(todoListDOM);

        dom.insertBefore(headerDOM, main);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>placeholder</main>
            </div>
        `;
    }
}

export default App;