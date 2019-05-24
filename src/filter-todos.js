function filterToDo(todos, filter) {
    const filterTask = filter.task.toLowerCase();

    
    return todos.filter(todo => {
        const hasTasks = todo.task.toLowerCase().includes(filterTask);
        
        let hasStatus;
        if(filter.status === 'done') {
            hasStatus = todo.completed;
        }
        else if(filter.status === 'not-done') {
            hasStatus = !todo.completed;
        }
        else {
            hasStatus = true;
        }

        return hasTasks && hasStatus;
    });

}

export default filterToDo;
