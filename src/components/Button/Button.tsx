import { PropInterface } from './interface';
import style from './Button.module.scss';

function Button({ type, name, clickHandler } : PropInterface) {
  return (
    <button
      className={style.modal_button}
      type={type}
      onClick={clickHandler}
    >
      { name }
    </button>
  )
}

export default Button;
