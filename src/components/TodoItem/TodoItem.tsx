import { useStore } from '../../store/store';
import style from './TodoItem.module.scss';

function TodoItem({ content } : { content : string }) {
  const { langStore } = useStore();

  return (
    <li className={style.item}>
      <input type="checkbox"></input>
      <div className={style.content}>{ content }</div>
      <div className={style.btn_container}>
        <button className={style.edit_btn}>{ langStore.content.editTaskBtn }</button>
        <button className={style.delete_btn}>{ langStore.content.deleteTaskBtn }</button>
      </div>
    </li>
  )
}

export default TodoItem;
