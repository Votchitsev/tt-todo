import style from './App.module.scss';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className={style.card}>
      <h1>To Do App</h1>
      <AddTodoForm />
      <hr className={style.hr} />
      <TodoList />
    </div>
  );
}

export default App;
