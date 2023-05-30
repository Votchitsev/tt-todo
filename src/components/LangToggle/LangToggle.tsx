import { type MouseEvent } from 'react';
import { observer } from 'mobx-react'
import style from './LangToggle.module.scss';
import { useStore } from '../../store/store';

function LangToggle() {
  const { langStore } = useStore();

  const onClickHandle = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.getAttribute('name') === 'ru') {
      langStore.language = 'ru';
    };

    if (e.currentTarget.getAttribute('name') === 'en') {
      langStore.language = 'en';
    }
  }

  return (
    <div className={style.toggle}>
      <button
        className={ `${style.left} ${langStore.language === 'ru' ? `${style.active}` : ''}` }
        type='button'
        onClick={onClickHandle}
        name='ru'
      >
        ru
      </button>
      <button
        className={ `${style.right} ${langStore.language === 'en' ? `${style.active}` : ''}` }
        type='button'
        onClick={onClickHandle}
        name='en'
      >
        en
      </button>
    </div>
  )
}

export default observer(LangToggle);
