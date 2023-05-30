import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { useStore } from '../../store/store';
import style from './infoModal.module.scss';
import { PropInterface } from './interface';

function InfoModal({ title, text } : PropInterface) {
  const { modalsStore } = useStore();
  
  const onClose = () => {
    modalsStore.setActive(null);
  };

  return (
    <Modal>
      <div className={style.info_modal}>
        <h2>{ title }</h2>
        <p>{ text }</p>
        <br />
        <Button type='button' name='OK' clickHandler={onClose} />
      </div>
    </Modal>
  )
}

export default InfoModal;
