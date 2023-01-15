//Importar Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

//import CSS GERAL

import './App.css'

//importar Components
import Navbar from './Components/Navbar'
import Categorias from './Components/Categorias'

//importar material design icons
import '@mdi/font/css/materialdesignicons.css'

function App() {
 

  return (
      
    <div>
        <Navbar />
        <Categorias />
    </div>
      
  )
}

export default App
