'use client'
import { useEffect } from 'react'
import style from '../style/editExams.module.css'
import Question from '../components/question'

export default function EditExam({ examData }) {

    const stored = localStorage.getItem('subject')

    useEffect(() => {
        if (examData?.subject) localStorage.setItem('subject', examData.subject)
    }, [examData])

    return (
        <div className={style.editExams}>
            <section>
                <h1>
                    თქვენ ეხლა არედაქტებთ: {examData?.subject || stored}
                </h1>
                <p>გამოცდის რედაქტირების გვერდი</p>
            </section>
            <section className={style.addQuestions} >
                <button>კითხვის დამატება</button>
            </section>
            <div className={style.questionList}  >
                <Question/>
                <Question/>
                <Question/>
                <Question/>
            </div>
        </div>
    )
}