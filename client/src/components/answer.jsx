import style from '../components/styles/answer.module.css'
export default function Answer(){
  function oneVariant(e){
    const clicked = e.target;
    const parent = clicked.parentElement.parentElement;
    const inputs = parent.querySelectorAll('input[type="checkbox"]');

    inputs.forEach(input => {
      input.checked = false;
    });
    clicked.checked = true
  }

  return (
    <section className={style.answersContainer} >
      <input type="checkbox" onChange={oneVariant}/>  
      <input type="text" />
    </section>
  )
}