import TodoItem from '../src/components/TodoItem.js';

const test = QUnit.test;

QUnit.module('TodoItem');

test('Creates TodoItem from template', (assert) => {
    // Arrange
    const todos = {
        task: 'Learn templates',
        completed: true
    };

    const expected = /*html*/`
        <li>
            <input type="checkbox"checked>Learn templates
            <button>x</button>
        </li>
    `;

    // Act
    const todoItem = new TodoItem({ todos });
    const todoItemDOM = todoItem.renderTemplate();

    // Assert
    assert.htmlEqual(todoItemDOM, expected);
});