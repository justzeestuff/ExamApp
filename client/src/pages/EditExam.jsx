'use client'
import { useEffect, useState } from 'react'
import style from '../style/editExam.module.css'
import Question from '../components/editExam/questionCard.jsx'

export default function EditExam({ examData }) {
    const stored = localStorage.getItem('subject')
    const [questions, setQuestions] = useState([])

    async function CreateQuestion(){
        const res = await fetch('http://localhost:3000/createQuestion',{
            method: 'POST'
        })
    }

    useEffect(() => {
        if (examData?.subject) localStorage.setItem('subject', examData.subject)
    }, [examData])

    return (
        <div className={style.editExams}>
            <section>
                <h1>თქვენ ეხლა არედაქტებთ: {examData?.subject || stored}</h1>
                <p>გამოცდის რედაქტირების გვერდი</p>
            </section>
            <section className={style.addQuestions}>
                <button onClick={()=> setQuestions(prev => [...prev,{ id: Date.now() } ])}>კითხვის დამატება</button>
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