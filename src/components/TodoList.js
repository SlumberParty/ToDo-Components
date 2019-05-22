import Component from './Component.js';

class TodoList extends Component {
    renderTemplate() {
        return /*html*/`
            <ul id="list"></ul>
        `;
    }
}

export default TodoList;