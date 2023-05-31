import { makeAutoObservable } from 'mobx';
import ru from '../lang/ru';
import en from '../lang/en';


class Lang {
  language = window.navigator.language as string;

  constructor() {
    makeAutoObservable(this);
  };

  get content() {
    if (this.language === 'ru') {
      return ru
    }

    return en;
  };

  switch(language: string) {
    this.language = language;
  };
}

export default Lang;
