import { MouseEventHandler } from 'react';

export interface PropInterface {
  type: 'button' | 'submit' | 'reset';
  name: string;
  clickHandler: MouseEventHandler;
}
