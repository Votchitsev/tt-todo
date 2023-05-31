import { type FormEvent, useState, ChangeEvent } from 'react';
import { useStore } from '../../store/store';
import InfoModal from '../InfoModal/InfoModal';
import style from './AddTodoForm.module.scss';

function AddTodoForm() {
  const { langStore, taskListStore, modalsStore } = useStore();
  const [ formData, setFormData ] = useState('');

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setFormData(value);
  };

  const onSubmitHandle = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.trim().length) {
      setFormData('');
      return;
    };

    if (formData.length > 50) {
      setFormData('');
      
      modalsStore.setActive({
        component: InfoModal,
        title: langStore.content.modals.taskLengthError.title,
        text: langStore.content.modals.taskLengthError.text,
      });

      return;
    };

    taskListStore.add(formData.trim());
    setFormData('');
  };

  return(
    <form className={style.form} onSubmit={onSubmitHandle}>
      <input
        className={style.text_input}
        type='text'
        name='text'
        placeholder={ langStore.content.formPlaceholder }
        onChange={ onChangeHandle }
        value={ formData }
      />
      <input
        className={style.submit_input}
        type='submit' value='+'
      />
    </form>
  ); 
}

export default AddTodoForm;
