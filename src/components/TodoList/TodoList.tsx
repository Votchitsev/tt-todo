import TodoItem from '../TodoItem/TodoItem';
import style from './TodoList.module.scss';

function TodoList() {
  return (
    <ul className={style.list}>
      <TodoItem content={ 'todo1' } />
      <TodoItem content={ 'todo2' } />
      <TodoItem content={ 'todo3' } />
    </ul>
  )
}

export default TodoList;
