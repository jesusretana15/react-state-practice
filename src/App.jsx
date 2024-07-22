import { useState } from 'react'
import Boxes from './componets/boxes'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='mainContent'>
    <h1>Box shades</h1>
    <div className='boxesbig'>
    <Boxes num={12}/>
    </div>
    <p>Interactive box shapes built with react, hover over the squares to change the style 🤠 </p>
   </div>
  )
}

export default App
