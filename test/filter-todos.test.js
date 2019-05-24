const test = QUnit.test;

import filterToDo from '../src/filter-todos.js';

QUnit.module('filter ToDos');

const todos = [
    {
        task: 'Learn templates',
        completed: true
    },
    {
        task: 'Learn forEach',
        completed: false
    },
    {
        task: 'Something Else',
        completed: true
    }
];

test('string filters tasks', (assert) => {
    //arrange
    const filter = {
        task: 'templates', 
        status: 'all'
    };

    //act
    const filtered = filterToDo(todos, filter);
    const expected = [
        {
            task: 'Learn templates',
            completed: true
        }
    ];

    assert.deepEqual(filtered, expected);
});

test('strong filters task case insensitive', (assert) => {
    //arrange
    const filter = {
        task: 'teMplates', 
        status: 'all'
    };

    //act
    const filtered = filterToDo(todos, filter);
    const expected = [
        {
            task: 'Learn templates',
            completed: true
        }
    ];

    assert.deepEqual(filtered, expected);
});

test('strong filters task case insensitive', (assert) => {
    //arrange
    const filter = {
        task: 'foreach', 
        status: 'all'
    };

    //act
    const filtered = filterToDo(todos, filter);
    const expected = [
        {
            task: 'Learn forEach',
            completed: false
        }
    ];

    assert.deepEqual(filtered, expected);
});

test('no string returns all tasks', (assert) => {
    //arrange
    const filter = {
        task: '', 
        status: 'all'
    };

    //act
    const filtered = filterToDo(todos, filter);
    const expected = todos;

    assert.deepEqual(filtered, expected);
});

test('done status returns all completed tasks', (assert) => {
    //arrange
    const filter = {
        task: '', 
        status: 'done'
    };

    //act
    const filtered = filterToDo(todos, filter);
    const expected = [{
        task: 'Learn templates',
        completed: true
    },
    {
        task: 'Something Else',
        completed: true
    }];

    assert.deepEqual(filtered, expected);
});

test('not done status returns all not completed tasks', (assert) => {
    //arrange
    const filter = {
        task: '', 
        status: 'not-done'
    };

    //act
    const filtered = filterToDo(todos, filter);
    const expected = [{
        task: 'Learn forEach',
        completed: false
    }];

    assert.deepEqual(filtered, expected);
});

test('combo filter works', (assert) => {
    //arrange
    const filter = {
        task: 'Learn', 
        status: 'done'
    };

    //act
    const filtered = filterToDo(todos, filter);
    const expected = [{
        task: 'Learn templates',
        completed: true
    }];

    assert.deepEqual(filtered, expected);
});