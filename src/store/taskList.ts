import { makeAutoObservable } from 'mobx'

interface TaskInterface {
  id: number;
  text: string;
  isComplete: boolean;
}

class TaskList {
  list = [] as TaskInterface[];
  showCompleted = false;

  constructor() {
    makeAutoObservable(this);
  };

  get taskList() {
    if (this.showCompleted) {
      return this.list;
    };

    return this.list.filter(item => item.isComplete === false);
  };

  add(task: string) {
    const newTask: TaskInterface = {
      id: Date.now(),
      text: task,
      isComplete: false,
    };

    this.list.push(newTask);
  };

  remove(id: number) {
    this.list = this.list.filter(item => item.id !== id);
  };

  update(id: number, text: string) {
    const updatedTask = this.list.find(item => item.id === id);

    if (updatedTask) {
      updatedTask.text = text;
    }
  };

  setComplete(id: number, complete: boolean) {
    const task = this.list.find(item => item.id === id);

    if (task) {
      task.isComplete = complete
    };
  };

  setShowCompleted(show: boolean) {
    this.showCompleted = show;
  }
}

export default TaskList;
