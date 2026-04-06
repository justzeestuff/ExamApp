import { useEffect } from 'react'
import Question from '../components/question'
import style from '../style/editExams.module.css'

export default function EditExam({examData}){

    const subject = examData?.subject
    return(<>
    <div className={style.editExams}>
        <h1>
            თქვენ ეხლა არედაქტებთ: {subject}
        </h1>
        {/* <button className={style.addQuestionBtn} >კითხვის დამატება</button>
        <div className={style.questionContainer}>
            <Question></Question>
        </div> */}
    </div>
    </>)
}