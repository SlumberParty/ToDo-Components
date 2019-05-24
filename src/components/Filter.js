import Component from './Component.js';

class Filter extends Component {

    render() {
        const dom = this.renderDOM();
        const onFilter = this.props.onFilter;

        const form = dom.querySelector('form');

        form.addEventListener('input', () => {

            const formData = new FormData(form);
            const newFilter = {
                task: formData.get('task'),
                status: formData.get('status')
            };

            onFilter(newFilter);

        });

        form.addEventListener('submit', event => {
            event.preventDefault();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <section>
            <form class ="filter-section">
                <input type="text" name="task" class="filter">
                <label>
                    <input type="radio" name="status" value="done">Done
                </label>
                <label>
                    <input type="radio" name="status" value="not-done">Not Done
                </label>
                <label>
                    <input checked type="radio" name="status" value="all">All
                </label> 
            </form>
        </section>
        `;
    }
}

export default Filter;