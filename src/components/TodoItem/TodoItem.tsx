import { observer } from 'mobx-react';
import { useStore } from '../../store/store';
import style from './TodoItem.module.scss';
import EditTaskModal from '../EditTaskModal/EditTaskModal';

function TodoItem({ id, content } : { id: number; content : string }) {
  const { langStore, taskListStore, modalsStore } = useStore();

  const setModal = () => {
    modalsStore.setActive({
      component: EditTaskModal,
      title: 'Измените задачу',
      task_id: id,
    })
  }

  return (
    <li className={style.item}>
      <input type="checkbox"></input>
      <div className={style.content}>{ content }</div>
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
