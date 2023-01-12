import React from 'react'
//importar CSS desse component

//importar imagem
import logo from '../assets/airbnblogo.jpg'



import './CSS/Navbar.css'
export default function Navbar() {
  return (
    <div>
      <nav className='nav-topo'>navbar
        <div className='container-airbnb'>
          <div className=' d-flex align-items-center border border-info col-sm-6'>
            <img className='logo' src={logo} alt="logo do site" />
          </div>
             
             <div className=' d-flex align-items-center justify-content-end border border-info col-sm-6'>
              <a href="#" className='link-especial'>Seja um anfitrião</a>
              <a className='icon-nav mx-2' href="#"><i className='mdi mdi-web'></i></a>

              <div className="dropdown">
  <button className="button-login dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
             </div>
        
        </div>
      </nav>
    </div>
  ) 
}
