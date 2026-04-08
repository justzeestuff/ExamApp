import { useState } from 'react'
import style from '../components/styles/question.module.css'

export default function Question() {
    const [state, setState] = useState('none')

    function ChangeVisbility(){
        if(state === 'none') setState('block')
        else setState('none')
    }

    return (<>
        <div className={style.question} >
            <section className={style.questionTab} onClick={()=> ChangeVisbility()}>
                <p>
                    <span>1</span>
                    <span>question</span>
                </p>
                <div>
                    <button onClick={()=> setState('none')} ><i className="bi bi-files-alt"  /></button>
                    <button onClick={()=> setState('none')} ><i className="bi bi-trash-fill" /></button>
                </div>
            </section>
            <div className={style.answersContainer} style={{display: state}} >
                <section>
                    <p>ხელმისაწვდომი პასუხები</p>
                    <button>პასუხის დამატება</button>
                </section>
                <section>
                    <input type="checkbox" />
                    <input type="text" />
                </section>
            </div>
        </div>
    </>)
}