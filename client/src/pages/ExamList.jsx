import { useEffect, useState } from 'react'
import style from '../style/exams.module.css'
import CreateExamPanel from '../components/examList/createExamPanel.jsx'

// components
import ExamCard from '../components/examList/examCard.jsx'

export default function ExamsList({setPage}) {
    const [state, setState] = useState('none')
    const [exams, setExams ] = useState([])
    
    async function GetExams() {
        const res = await fetch('http://localhost:3000/GetExams')
        const data = await res.json()
        setExams(data)
    }
    useEffect(
        ()=> {
            GetExams();
        },[])

    return (<>
        <div className={style.exams}>
            {/* create exams button */}
            <button className={style.createExam} onClick={() => {
                setState('block');
                GetExams();
            }} >
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
                <div>                           
                    {
                        exams.map((exam)=>{
                            return <ExamCard exam={exam} subject={exam.subject} id={exam._id} key={exam._id} editPage={setPage} getExams={GetExams} /> 
                        })
                    }
                </div>
            </div>
            <CreateExamPanel set={setState} state={state} update={GetExams} />
        </div>
    </>)
}