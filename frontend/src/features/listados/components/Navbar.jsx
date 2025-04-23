import {Link} from 'react-router-dom'

const NavBar=({getToken})=>{

    return(
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {getToken ? 
          <li><Link to="/logout">Logout</Link></li>
          :<li><Link to="/login">Login</Link></li>}
          <li><Link to="/gastos">Gastos</Link></li>
        </ul>
      </nav>
    )
}

export default NavBar