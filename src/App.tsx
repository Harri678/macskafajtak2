import { useState } from 'react'
import Kezdolap from './components/kezdolap'
import Admin from './components/admin'
import Moderator from './components/moderator'


function App() {

  const [oldal, setOldal] = useState('kezdolap')

  return (
    <>
      <header>
        
        
        <nav className="navbar navbar-expand-sm bg-light">

          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className='nav-link' href='#' onClick={() => setOldal('kezdolap')}>Kezdolap </a>
              </li>
              <li className="nav-item">
                <a className='nav-link' href='#' onClick={() => setOldal('admin')}>Admin </a>
              </li>
              <li className="nav-item">
                <a className='nav-link' href='#' onClick={() => setOldal('moderator')}>Moderator </a>
              </li>
            </ul>
          </div>

        </nav>
      </header>
      <section>
        {oldal === 'kezdolap' && (
          <Kezdolap></Kezdolap>
        )}

        {oldal === 'admin' && (
          <Admin></Admin>
        )}

        {oldal === 'moderator' && (
          <Moderator></Moderator>
        )}
      </section>
      <footer>Harrer Mate  2026.10.02</footer>
    </>
  )
}

export default App
