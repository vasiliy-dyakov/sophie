import Component from '../../framework/Component';
import Input from '../input/Input';
import Button from '../button/Button';
import Item from './TodoListItem';

class TodoList extends Component {
    static watchStores = ['todos'];

    handleStoresChange(stores) {
        let {
            todos: {
                todos = [],
                todosById = {}
            } = {}
        } = stores;

        this.setState({
            todos,
            todosById
        });
    }

    render() {
        let { todos, todosById } = this.state;

        return this.template `<div class="todos">
            <ul class="todos__list">
                ${todos.map(todo => this.template `<${Item} todo=${todo} />`)}
            </ul>
            <div class="todos__add">
                <${Input} placeholder="New todo" />
                <${Button}>${this.props.buttonText}</${Button}>
            </div>
            ${this.props.children}
        </div>`;
    }
}

export default TodoList;
