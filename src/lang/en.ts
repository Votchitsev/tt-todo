import { type LangInterface } from './interface';

const en: LangInterface = {
  appName: 'My Tasks',
  formPlaceholder: 'add task',
  editTaskBtn: 'edit',
  deleteTaskBtn: 'delete',
  modals: {
    taskLengthError: {
      title: 'Validation Error',
      text: "Task length should't be more than 50 characters"
    }
  },
  showCompleted: 'Show completed',
};

export default en;
