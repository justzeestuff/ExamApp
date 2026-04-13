import style from './styles/examCard.module.css'

export default function ExamCard({subject, id, editPage, getExams}){
    async function DeleteExam(){
        const res = await fetch(`http://localhost:3000/DeleteExam/${id}`, {method: "DELETE" })
        if(res.ok) getExams();
    }

    return(<>
    <div className={style.examCard} data-id={id} >
        <p>subject: {subject}</p>
        <section>
            <button onClick={() => editPage('editExam')}><i className="bi bi-pen-fill"/></button>
            <button onClick={DeleteExam}>
                <i className="bi bi-trash3-fill"/>
            </button>
        </section>
    </div>
    </>)
}