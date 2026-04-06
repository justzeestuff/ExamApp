import { useState } from 'react'
import style from '../components/styles/createExamPanel.module.css'
export default function CreateExamPanel({state, set}){
    const [text, setText] = useState();

    async function CreateExam(){
        const payLoad = {
            subject: text
        }
        const res = await fetch('http://localhost:3000/CreateExam',{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payLoad)
        })
        if(res.ok) console.log(await res.json());
    }
    return(<>
    <div className={style.createExamPanel} style={{display: state}} >
        <section>
            <h1>გამოცდის შექმნა</h1>
            <button onClick={()=> set('none')} ><i className="bi bi-x"/></button>
        </section>
        <input type="text" placeholder='საგანი' onChange={(e) => setText(e.target.value)} />
        <button onClick={CreateExam} >შექმნა</button>
    </div>
    </>)
}