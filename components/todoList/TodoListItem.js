// import { template } from 'jsunit';
import Button from '../button/Button';

// Stateless and actionless component
export default function TodoListItem({
    todo = {},
    onEditClick,
    onRemoveClick
} = {}, children) {
    // return template `<li class="todo-list__item">
    //     ${todo.text}
    //     ${children}
    //     <${Button} class="todo-list__edit" onClick=${onEditClick}>edit</${Button}>
    //     <${Button} class="todo-list__remove" onClick=${onRemoveClick}>remove</${Button}>
    // </li>`;

    return [
        {
            component: 'li',
            props: {
                'class': 'todo-list__item'
            },
            children: [
                todo.text,
                children,
                {
                    component: Button,
                    props: {
                        'class': 'todo-list__edit'
                    },
                    children: ['edit']
                },
                {
                    component: Button,
                    props: {
                        'class': 'todo-list__remove'
                    },
                    children: ['remove']
                }
            ]
        }
    ];
}
