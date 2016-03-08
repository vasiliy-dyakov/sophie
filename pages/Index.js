import { Component } from 'jsunit';
import TodoList from '../components/todoList/TodoList';
import Layout from '../components/layout/Layout';

class Index extends Component {
    render() {
        // return this.template `<${Layout}>
        //     <h1>Todo list</h1>
        //     <${TodoList} buttonText="${'Add todo'}">
        //         <p>Text after todos. 1 + 2 = ${ 1 + 2 }</p>
        //     </${TodoList}>
        // </${Layout}>`;

        return [{
            component: Layout,
            children: [
                {
                    component: 'h1',
                    children: ['Todo list']
                },
                {
                    component: TodoList,
                    props: {
                        buttonText: 'Add todo'
                    },
                    children: [
                        {
                            component: 'p',
                            children: ['Text after todos. 1 + 2 = ', 3]
                        }
                    ]
                }
            ]
        }];
    }
}

Index.initActions = [].concat(TodoList.initActions);

export default Index;
