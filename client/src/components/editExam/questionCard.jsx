import { useState } from 'react'
import style from './styles/question.module.css'
import Answer from './answerCard.jsx'

export default function Question({ index }) {

    return (<>
        <div className={style.question} >
            <div className={style.questionTab} >
                <p>
                    <span>{index}</span>
                    <span>question</span>
                </p>
                <section>
                    <button><i className="bi bi-chevron-expand"/></button>
                    <button><i className="bi bi-copy"/></button>
                    <button><i className="bi bi-trash3-fill"/></button>
                </section>
            </div>
        </div>
    </>)
}