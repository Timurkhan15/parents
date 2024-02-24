import { useState } from "react";
import { IStudent } from "../../containers/ClassList/ClassList";
import Modal from "../UI/Modal/Modal";
import './Student.css';

interface Props {
    student: IStudent,
}

export function Student ({ student }: Props) {
    const [show, setShow] = useState<boolean>(false);

    return <>
        <Modal show={show} student={student} close={() => setShow(false)}/>
        <div className='student' onClick={() => {setShow(true)}}>{student.name}</div>
    </>;
}