import { MouseEventHandler, ReactNode } from 'react';
import './Button.css';

interface Props {
  btnType: 'Success' | 'Danger';
  children: ReactNode;
  click: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ btnType, children, click }: Props) {
  return (
    <button className={['Button', btnType].join(' ')} onClick={click}>
      {children}
    </button>
  );
}
