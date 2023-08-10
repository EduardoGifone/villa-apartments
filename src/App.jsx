// import {i18next as t} from 'i18n'
import {Link} from 'react-router-dom'

function App() {
  
  return (
    <>
      <Link className="bg-[url('./assets/villaGrande/photo01.jpeg')] border p-4" to='/departamentos/villagrande'>
        Villagrande
      </Link>
      <Link className='border p-4' to='/departamentos/villamini'>
        Villamini
      </Link>
    </>
  )
}

export default App

