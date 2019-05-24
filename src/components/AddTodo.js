import Component from './Component.js';

class AddTodo extends Component {

    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);
            const newTodo = {
                task: formData.get('link'),
                completed: false
            };

            onAdd(newTodo);

            form.reset();
            document.activeElement.blur();
        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form>
                <label>Add To-Do
                    <input type="text" name="link">
                <label>
            <form>
        `;
    }
}

export default AddTodo;