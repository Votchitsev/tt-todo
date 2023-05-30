import style from './AddTodoForm.module.scss';

function AddTodoForm() {
  return(
    <form className={style.form}>
      <input className={style.text_input} type="text"></input>
      <input className={style.submit_input} type="submit" value='+'></input>
    </form>
  )  
}

export default AddTodoForm;
