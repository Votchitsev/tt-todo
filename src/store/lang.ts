import { makeAutoObservable } from 'mobx';
import ru from '../lang/ru';
import en from '../lang/en';


class Lang {
  language = 'ru' as 'ru' | 'en';
  languages = {
    'ru': ru,
    'en': en,
  }

  constructor() {
    makeAutoObservable(this);
  }

  get content() {
    return this.languages[this.language];
  }
}

export default Lang;
