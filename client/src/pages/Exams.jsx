import { useState } from 'react'
import style from '../style/exams.module.css'
import ExamList from '../components/examList.jsx'
import CreateExamPanel from '../components/createExamPanel.jsx'

export default function Exams({setPage, setData}) {
    const [state, setState] = useState('none')

    return (<>
        <div className={style.exams}>
            {/* create exams button */}
            <button className={style.createExam} onClick={() => setState('block')} >
                <i className="bi bi-plus" />გამოცდის შექმნა
            </button>
            {/* Introduction */}
            <section className={style.welcomeMessege} >
                <h1>გამოცდები</h1>
                <p>მართეთ და დაგეგმეთ ყველა გამოცდა.</p>
            </section>
            {/* Exams list */}
            <div className={style.allExams} >
                <section>
                    <p>ყველა გამოცდა</p>
                    <input type="text" placeholder=' გამოცდის ძიება..' />
                </section>
                <ExamList setPage={setPage} setData={setData} />
            </div>
            <CreateExamPanel set={setState} state={state} />
        </div>
    </>)
}