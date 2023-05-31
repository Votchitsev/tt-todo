import { ReactNode } from 'react';
import style from './Modal.module.scss'
import { useStore } from '../../store/store';

function Modal({ children } : { children: ReactNode }) {
  const { modalsStore } = useStore();

  const onClose = () => {
    modalsStore.setActive(null);
  }

  return (
    <div className={style.modal} onClick={ onClose }>
      <div className={style.modal_content}>
        { children }
      </div>
    </div>
  )
}

export default Modal;
