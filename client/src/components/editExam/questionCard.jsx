import { useRef, useState } from 'react'
import style from './styles/question.module.css'
import Answer from './answerCard.jsx'

export default function Question({ index, examId }) {
  const [visibility, setVisibility] = useState(true)
  const [editing, setEditing] = useState(false)
  const [answers, addAnswers] = useState([])

  const question = useRef(null)
  const answerContainer = useRef(null)

  let containerHeight = useRef(false)

  function AddAnswer() {
    containerHeight.current += 100;
    addAnswers(answers => [...answers, { id: Date.now() }])
  }

  function EditQuestion(el) {
    setEditing(!editing);
    if (editing) {
      const input = document.createElement('input');
      el.innerHTML = '<i class="bi bi-check"/>';
      input.value = question.current.textContent;
      question.current.innerHTML = '';
      question.current.appendChild(input);
    }
    else {
      el.innerHTML = '<i class="bi bi-pen-fill"/>';
      const input = question.current.querySelector('input');
      const p = document.createElement('p');
      p.textContent = input.value
      question.current.innerHTML = ''
      question.current.appendChild(p)

      fetch('http://localhost:3000/createQuestion',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        // body: JSON.stringify({question: input.value, id:  })
      })
      
    }f
  }

  return (<>
    <div className={style.question} >
      <div className={style.questionTab} >
        <p>
          <span>{index}</span>
          <span>კითხვა</span>
        </p>
        <section>
          <button onClick={() => setVisibility(!visibility)}><i className="bi bi-chevron-expand" /></button>
          <button><i className="bi bi-copy" /></button>
          <button><i className="bi bi-trash3-fill" /></button>
          <button onClick={AddAnswer}><i className="bi bi-plus" /></button>
        </section>
      </div>

       <div className={style.options} style={{ height: visibility ? '1px' : `${Math.max(1, answers.length+1) * 100}px` }}>
        <section>
          <div ref={question}>
            <p>question</p>
          </div>
          <button onClick={(e) => EditQuestion(e.currentTarget)}><i className="bi bi-pen-fill" /></button>
        </section>
        <div ref={answerContainer}>
          {answers.map((answer) => <Answer key={answer.id} answer={answer} />)}
        </div>
      </div>
    </div>
  </>)
}