import { type ChangeEvent, useState } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../store/store';
import style from './TodoItem.module.scss';
import EditTaskModal from '../EditTaskModal/EditTaskModal';
import { type PropInterface } from './interface';

function TodoItem({ id, content, isComplete } : PropInterface) {
  const { langStore, taskListStore, modalsStore } = useStore();
  const [ textClassList, setTextClassList ] = useState(
    [style.content, isComplete ? style.crossed_text : null]
  );

  const setModal = () => {
    modalsStore.setActive({
      component: EditTaskModal,
      title: 'Измените задачу',
      task_id: id,
    })
  }

  const onSetComplete = (e: ChangeEvent<HTMLInputElement>) => {
    taskListStore.setComplete(id, e.target.checked);

    if (e.target.checked) {
      setTextClassList([...textClassList, style.crossed_text]);
      return;
    }

    setTextClassList([style.content]);
  }

  return (
    <li className={style.item}>
      <input
        type="checkbox"
        onChange={onSetComplete}
        defaultChecked={isComplete}
      />
      <div className={textClassList.join(' ')}>{ content }</div>
      <div className={style.btn_container}>
        <button
          className={style.edit_btn}
          onClick={setModal}
        >
            { langStore.content.editTaskBtn }
        </button>
        <button
          className={style.delete_btn}
          onClick={ () => taskListStore.remove(id) }
        >
          { langStore.content.deleteTaskBtn }
        </button>
      </div>
    </li>
  )
}

export default observer(TodoItem);
