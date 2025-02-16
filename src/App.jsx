import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div>
   <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600  active:bg-purple-700">Purple</button>
<button class="border-green-200 text-green-600 hover:border-transparent hover:bg-green-600  active:bg-green-700">Green</button>
<button class="border-blue-200 text-blue-600 hover:border-transparent hover:bg-blue-600  active:bg-blue-700">Blue</button>
<button class="border-red-200 text-red-600 hover:border-transparent hover:bg-red-600 active:bg-red-700">Red</button>
<button class="border-cyan-200 text-cyan-600 hover:border-transparent hover:bg-cyan-600  active:bg-cyan-700">Cyan</button>
<button class="border-yellow-200 text-yellow-600 hover:border-transparent hover:bg-yellow-600  active:bg-yellow-700">Yellow</button>
   
   </div>
      
    </>
  )
}

export default App
