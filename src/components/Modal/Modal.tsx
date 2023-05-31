import { ReactNode } from 'react';
import { useStore } from '../../store/store';
import style from './Modal.module.scss'

function Modal({ children } : { children: ReactNode }) {
  const { modalsStore } = useStore();

  const onClose = () => {
    modalsStore.setActive(null);
  };

  return (
    <div className={style.modal} onClick={ onClose }>
      <div className={style.modal_content}>
        { children }
      </div>
    </div>
  );
}

export default Modal;
