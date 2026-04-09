'use client'
import { useEffect, useState } from 'react'
import style from '../style/editExams.module.css'
import Question from '../components/question'

export default function EditExam({ examData }) {
    const stored = localStorage.getItem('subject')
    const [questions, setQuestions] = useState([])
    const [storedQuestions, storeQuestions] = useState([])

    useEffect(() => {
        if (examData?.subject) localStorage.setItem('subject', examData.subject)
    }, [examData])

    function addQuestion() {
        setQuestions(prev => [...prev, { id: Date.now() }])
    }

    return (
        <div className={style.editExams}>
            <section>
                <h1>თქვენ ეხლა არედაქტებთ: {examData?.subject || stored}</h1>
                <p>გამოცდის რედაქტირების გვერდი</p>
            </section>
            <section className={style.addQuestions}>
                <button onClick={addQuestion}>კითხვის დამატება</button>
            </section>
            <div className={style.questionList}>
                {
                questions.map((arr,index) => (
                    <Question key={arr.id} index={index+1} />
                ))
                }
            </div>
        </div>
    )
}