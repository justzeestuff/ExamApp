import { useState, useEffect } from 'react'
import style from '../components/styles/examList.module.css'

export default function ExamList({ setPage,setData }) {
  const [exams, setExams] = useState([])

  useEffect(() => {
    async function GetExams() {
      const res = await fetch('http://localhost:3000/GetExams')
      const data = await res.json()
      setExams(data)
    }
    GetExams()
  }, [])

  async function DeleteExams(id) {
    await fetch(`http://localhost:3000/DeleteExam/${id}`, {
      method: "DELETE",
    })
  }
  async function EditExam(id) {
    const res = await fetch(`http://localhost:3000/EditExam/${id}`)
    const data = await res.json();
    setData(data)
  }

  return (
    <section className={style.examList}>
      {exams.map((exam) => (
        <section key={exam._id}>
          <p>{exam.subject}</p>
          <div>

            <button onClick={() => {
              EditExam(exam._id)
              setPage('EditExam')
            }}>
              <i className="bi bi-pen-fill" />
            </button>
            <button onClick={() => DeleteExams(exam._id)}>
              <i className="bi bi-trash3-fill" />
            </button>

          </div>
        </section>
      ))}
    </section>
  )
}