import { type LangInterface } from './interface';

const en: LangInterface = {
  appName: 'To Do App',
  formPlaceholder: 'add task',
  editTaskBtn: 'edit',
  deleteTaskBtn: 'delete',
  modals: {
    taskLengthError: {
      title: 'Validation Error',
      text: "Task length should't be more than 50 characters"
    }
  }
};

export default en;
