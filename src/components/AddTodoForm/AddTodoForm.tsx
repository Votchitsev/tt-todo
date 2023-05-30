import { useStore } from '../../store/store';
import style from './AddTodoForm.module.scss';

function AddTodoForm() {
  const { langStore } = useStore();

  return(
    <form className={style.form}>
      <input
        className={style.text_input}
        type="text"
        placeholder={ langStore.content.formPlaceholder }
      />
      <input
        className={style.submit_input}
        type="submit" value='+'
      />
    </form>
  )  
}

export default AddTodoForm;
