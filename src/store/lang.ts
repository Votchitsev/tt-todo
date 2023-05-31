import { makeAutoObservable } from 'mobx';
import ru from '../lang/ru';
import en from '../lang/en';


class Lang {
  language = window.navigator.language as 'ru' | 'en-US';
  languages = {
    'ru': ru,
    'en-US': en,
  }

  constructor() {
    makeAutoObservable(this);
  };

  get content() {
    return this.languages[this.language];
  };

  switch(language: string) {
    if (language !== 'ru' && language !== 'en-US') {
      return;
    }

    this.language = language;
  };
}

export default Lang;
