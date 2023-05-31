import { useState, type FormEvent } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { useStore } from '../../store/store';
import InfoModal from '../InfoModal/InfoModal';
import { PropInterface } from './interface';
import style from './EditTaskModal.module.scss';

function EditTaskModal({ title, task_id, defaultText } : PropInterface) {
  const { taskListStore, modalsStore, langStore } = useStore();
  const [formData, setFormData] = useState(defaultText);

  const onSubmitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.trim().length) {
      setFormData('');
      return;
    }

    if (formData.length > 50) {
      setFormData('');
      
      modalsStore.setActive({
        component: InfoModal,
        title: langStore.content.modals.taskLengthError.title,
        text: langStore.content.modals.taskLengthError.text,
      });

      return;
    }

    taskListStore.update(task_id, formData);
    modalsStore.setActive(null);
  }

  return (
    <Modal>
      <form
        className={style.edit_task_form}
        onSubmit={onSubmitHandle}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{ title }</h2>
        <input
          type='text'
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        />
        <Button type='submit' name='OK' clickHandler={() => {} }/>
      </form>
    </Modal>
  )
}

export default EditTaskModal;
