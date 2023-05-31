import { makeAutoObservable } from 'mobx';

interface ModalInterface {
  component: Function;
  title: string;
  text?: string;
  task_id?: number;
  defaultText?: string;
}

class Modals {
  activeModal = null as null | ModalInterface;

  constructor() {
    makeAutoObservable(this);
  }

  setActive(modal: ModalInterface | null) {
    this.activeModal = modal;
  } 
}

export default Modals;
