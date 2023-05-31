import { type LangInterface } from './interface';

const ru: LangInterface = {
  appName: 'Мои задачи',
  formPlaceholder: 'Добавить задачу',
  editTaskBtn: 'Редактировать',
  deleteTaskBtn: 'Удалить',
  modals: {
    taskLengthError: {
      title: 'Ошибка валидации',
      text: 'Длинна задачи не может быть больше 50 символов',
    },
    taskEdit: {
      title: 'Измените задачу',
    }
  },
  showCompleted: 'Показывать выполненные',
};

export default ru;
