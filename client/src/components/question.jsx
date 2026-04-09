import { useState } from 'react'
import style from '../components/styles/question.module.css'
import Answer from './answer'

export default function Question({index}) {
    const [state, setState] = useState('none')
    const [answers, setAnswers] = useState([])

    function ChangeVisbility(){
        if(state === 'none') setState('block')
        else setState('none')
    }

    function AddAnswer(){
        setAnswers(el => [  ...el, {id: Date.now()} ] )
    }

    return (<>
        <div className={style.question} >
            <div className={style.questionTab} onClick={()=> ChangeVisbility()}>
                <section>
                    <p>{index}</p>
                    <textarea/>
                </section>
                <section>
                    <button onClick={()=> setState('none')} ><i className="bi bi-files-alt"  /></button>
                    <button onClick={()=> setState('none')} ><i className="bi bi-trash-fill" /></button>
                </section>
            </div>
            <div className={style.answersContainer} style={{display: state}} >
                <section>
                    <p>ხელმისაწვდომი პასუხები</p>
                    <button onClick={AddAnswer} >პასუხის დამატება</button>
                </section>
                {
                    answers.map((arr) =>{
                        return <Answer key={arr.id} />
                    })
                }
            </div>
        </div>
    </>)
}