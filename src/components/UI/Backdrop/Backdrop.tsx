import { MouseEventHandler } from 'react';
import './Backdrop.css';

interface Props {
  show: boolean;
  click: MouseEventHandler<HTMLElement>;
}

export default function Backdrop({ show, click }: Props) {
  return show ? <div className="Backdrop" onClick={click} /> : null;
}
