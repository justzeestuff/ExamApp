import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'

import sidebarStyle from '../src/components/styles/sidebar.module.css'
import Exams from './pages/Exams';
import Dashboard from './pages/Dashboard';
import PageIcon from "./components/icon";
import EditExam from './pages/EditExam.jsx';

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -14 },
};

const pageTransition = { duration: 0.22, ease: "easeOut" };

export default function App() {
  const [page, setPage] = useState(localStorage.getItem('currentPage') || 'home');
  const [examData, setData] = useState([]);

  useEffect(() => {
    localStorage.setItem('currentPage', page);
  }, [page]);

  const currentPage = () => {
    switch (page) {
      case 'home':     return <Dashboard />;
      case 'exams':    return <Exams setPage={setPage} setData={setData} />;
      case 'EditExam': return <EditExam examData={examData} />;
      default:         return <Dashboard />;
    }
  };

  return (
    <>
      <aside className={sidebarStyle.sidebar}>
        <span className={sidebarStyle.iconContainer}>
          <PageIcon />
          <p>EduTest</p>
        </span>
        <nav>
          <p>მთავარი</p>
          <p onClick={() => setPage('home')}>
            <i className="bi bi-book-fill" /> მონაცენემები
          </p>
          <p onClick={() => setPage('exams')}>
            <i className="bi bi-file-earmark-fill" /> გამოცდები
          </p>
          <p><i className="bi bi-people-fill" /> კლასები</p>
          <p><i className="bi bi-people-fill" /> მოსწავლეები</p>
        </nav>
      </aside>
      <div className="pageContainer">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
            style={{ height: "100%" }}
          >
            {currentPage()}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}