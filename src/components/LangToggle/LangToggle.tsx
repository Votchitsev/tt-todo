import { type MouseEvent } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../store/store';
import style from './LangToggle.module.scss';

function LangToggle() {
  const { langStore } = useStore();

  const onClickHandle = (e: MouseEvent<HTMLButtonElement>) => {
    langStore.switch(e.currentTarget.getAttribute('name') || 'ru');
  };

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
        className={ `${style.right} ${langStore.language === 'en-US' ? `${style.active}` : ''}` }
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
