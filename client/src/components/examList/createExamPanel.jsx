import { useState } from 'react'
import style from './styles/createExamPanel.module.css'

export default function CreateExamPanel({state, set, update}){
    const [text, setText] = useState();

    async function CreateExam(){
        const res = await fetch('http://localhost:3000/CreateExam',{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({subject: text})
        })
        if(res.ok){
            update();
            set('none');
        }
    }

    return(<>
    <div className={style.createExamPanel} style={{display: state}} >
        <section>
            <h1>გამოცდის შექმნა</h1>
            <button onClick={()=> set('none')} ><i className="bi bi-x"/></button>
        </section>
        <input type="text" placeholder='საგანი' onChange={(e) => setText(e.target.value)} />
        <button onClick={CreateExam}>შექმნა</button>
    </div>
    </>)
}