import { Component, t7 } from 'jsunit';
import TodoList from '../components/todoList/TodoList';
import Layout from '../components/layout/Layout';

class Index extends Component {
    render() {
        return t7 `<unit Class=${Layout}>
            <h1>Todo list</h1>
            <unit Class=${TodoList} buttonText="Add todo">
                <p>Text after todos. 1 + 2 = ${ 1 + 2 }</p>
            </unit>
        </unit>`;
    }
}

Index.singleton = true;

Index.initActions = [].concat(TodoList.initActions);

export default Index;
