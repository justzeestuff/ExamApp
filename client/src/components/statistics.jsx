import style from '../components/styles/statistics.module.css'

export default function Statistics({ icon, amount, naming, path }) {
  return (
    <div className={style.statisticsDisplayer} >
      <div>
        <i className={icon} />
      </div>
      <section>
        <p>{amount}</p>
        <p>{naming} მთლიანობაში</p>
      </section>
      <p onClick={()=> {path}} className={style.pathEl} >
        გადასვლა
        <i className="bi bi-arrow-right-short" />
      </p>
    </div>
  )
}