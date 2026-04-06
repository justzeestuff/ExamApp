import style from '../style/dashboard.module.css'
import Statistics from '../components/statistics';

export default function Dashboard() {
    const time = new Date().getHours()
    let period;

    if (time < 16) period = "დილა";
    else period = "საღამო";

    return (
        <>
            <div className={style.dashBoard} >
                <section className={style.welcomeMessage} >
                    <h1>{period} მშვიდობისა ზეზვა</h1>
                    <p>მასწავლებლის საადმინისტრაციო პანელი</p>
                </section>
                <div className={style.statsContainer} >
                    <Statistics icon={"bi bi-file-earmark-fill"} amount={5} naming={"გამოცდები"}/>
                    <Statistics icon={"bi bi-file-earmark-fill"} amount={5} naming={"კლასები"}/>
                    <Statistics icon={"bi bi-file-earmark-fill"} amount={5} naming={"მოსწავლეები"}/>
                </div>
            </div>
        </>
    )
}