import style from '../style/sidebar.module.css'
import PageIcon from './icon'
import {Link} from 'react-router-dom'
export default function Sidebar() {
    return (
        <>
            <aside className={style.sidebar} >
                <span className={style.iconContainer} >
                    <PageIcon/>
                    <p>EduTest</p>
                </span>
                <nav>
                    <p>მთავარი</p>
                    <Link to={'/'}> <i class="bi bi-book-fill"/><span>მონაცენემები</span></Link>
                    <Link to={'/Exams'}><i class="bi bi-file-earmark-fill"/> <span>გამოცდები</span> </Link>
                    <Link to={'/Classes'}><i class="bi bi-people-fill"/> <span>კლასები</span> </Link>
                    <Link to={'/Students'}><i class="bi bi-people-fill"/> <span>მოსწავლეები</span> </Link>
                </nav>
            </aside>
        </>
    )
}