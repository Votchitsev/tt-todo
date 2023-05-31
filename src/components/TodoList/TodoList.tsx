import { observer } from 'mobx-react';
import { useStore } from '../../store/store';
import TodoItem from '../TodoItem/TodoItem';
import { ChangeEvent } from 'react';
import style from './TodoList.module.scss';

function TodoList() {
  const { taskListStore, langStore } = useStore();

  const setShowCompleted = (e: ChangeEvent<HTMLInputElement>) => {
    taskListStore.setShowCompleted(e.target.checked);
  };

  return (
    <>
      <div className={style.show_completed_container}>
        <label className={style.show_completed}>
          { langStore.content.showCompleted }
          <input type='checkbox' onChange={setShowCompleted} />
        </label>
      </div>
      <ul className={style.list}>
        { taskListStore.taskList.map(
          task => 
          <TodoItem
            key={ task.id }
            id={ task.id }
            content={ task.text }
            isComplete={ task.isComplete }
          />
        )}
      </ul>
    </>
  )
}

export default observer(TodoList);
