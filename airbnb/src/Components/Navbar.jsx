import React from 'react'
//importar CSS desse component

//importar imagem
import logo from '../assets/airbnblogo.jpg'



import './CSS/Navbar.css'
export default function Navbar() {
  return (
    <div>
      <nav className='nav-topo'>
        <div className='container-airbnb'>
          <div className=' d-flex align-items-center  col-sm-6'>
            <img className='logo' src={logo} alt="logo do site" />
          </div>
             
             <div className=' d-flex align-items-center justify-content-end  col-sm-6'>
              <a href="#" className='link-especial'>Seja um anfitrião</a>
              <a className='icon-nav mx-2' href="#"><i className='fs-2 mdi mdi-web'></i></a>

              <div className="dropdown">
  <button className="button-login dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i className='fs-5 mdi mdi-menu'></i>
    <i className='fs-2 position-relative mdi mdi-account-circle'></i>
  </button>
  <ul className="dropdown-menu mt-2  shadow">
    <li><a className="dropdown-item" href="#"><strong>Cadastre-se</strong></a></li>
    <li><a className="dropdown-item" href="#">Entrar</a></li>
    <li><hr className='dropdown-divider'/></li>
    <li><a className="dropdown-item" href="#">Hospede em sua acomodação</a></li>
    <li><a className="dropdown-item" href="#">Hospede uma experência</a></li>
    <li><a className="dropdown-item" href="#">Ajuda</a></li>
  </ul>
</div>
             </div>
        
        </div>
      </nav>
    </div>
  ) 
}
