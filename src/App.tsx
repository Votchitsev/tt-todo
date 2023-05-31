import { observer } from 'mobx-react';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import TodoList from './components/TodoList/TodoList';
import LangToggle from './components/LangToggle/LangToggle';
import { useStore } from './store/store';
import style from './App.module.scss';

function App() {
  const { langStore, modalsStore } = useStore();

  console.log(langStore.language);
  

  return (
    <div className={style.card}>
      <h1>{ langStore.content.appName }</h1>
      <AddTodoForm />
      <hr className={style.hr} />
      <TodoList />
      <LangToggle />
      { modalsStore.activeModal
        ? <modalsStore.activeModal.component
            title={ modalsStore.activeModal.title }
            text={ modalsStore.activeModal.text }
            task_id={ modalsStore.activeModal.task_id }
            defaultText={ modalsStore.activeModal.defaultText }
          />
        : null }
    </div>
  );
}

export default observer(App);
