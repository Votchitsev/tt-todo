import style from './TodoItem.module.scss';

function TodoItem({ content } : { content : string }) {
  return (
    <li className={style.item}>
      <input type="checkbox"></input>
      <div className={style.content}>{ content }</div>
      <div className={style.btn_container}>
        <button className={style.edit_btn}>Change</button>
        <button className={style.delete_btn}>Delete</button>
      </div>
    </li>
  )
}

export default TodoItem;
