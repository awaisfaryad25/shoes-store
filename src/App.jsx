import { useState } from 'react'

import ShoesCard from './Components/ShoesCard/ShoesCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='manShoes'>
        <ShoesCard/>
      </section>
    </>
  )
}

export default App
