import { MouseEventHandler } from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import { IStudent } from '../../../containers/ClassList/ClassList';

interface Props {
  student: IStudent;
  show: boolean;
  close: MouseEventHandler<HTMLElement>;
}

export default function Modal({ student, show, close }: Props) {
  return (
    <>
      <Backdrop show={show} click={close} />
      <div
        className="Modal"
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        <h2>{student.name}</h2>
        <p className='parentName'>Родитель: <br /> {student.parent}</p>
        <p className="phone">Номер родителя: <br /> {student.phone}</p>
        <p>ID ребенка: {student.id}</p>
      </div>
    </>
  );
}
