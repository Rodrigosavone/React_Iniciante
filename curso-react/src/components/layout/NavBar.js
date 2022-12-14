import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <div>
      <ul className={styles.list}>
        <li className={styles.itens}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.itens}>
          <Link to="/empresa">Empresa</Link>
        </li>
        <li className={styles.itens}>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar