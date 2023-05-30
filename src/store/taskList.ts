import { makeAutoObservable } from "mobx"

interface TaskInterface {
  id: number;
  text: string;
}

class TaskList {
  list = [] as TaskInterface[]

  constructor() {
    makeAutoObservable(this);
  }

  add(task: string) {
    const newTask: TaskInterface = {
      id: Date.now(),
      text: task
    }

    this.list.push(newTask);
  }
}

export default TaskList;
