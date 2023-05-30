import { observer } from 'mobx-react';
import { useStore } from '../../store/store';
import TodoItem from '../TodoItem/TodoItem';
import style from './TodoList.module.scss';

function TodoList() {
  const { taskListStore } = useStore();

  return (
    <ul className={style.list}>
      { taskListStore.list.map(
        task => <TodoItem key={ task.id } content={ task.text } />
      )}
    </ul>
  )
}

export default observer(TodoList);
