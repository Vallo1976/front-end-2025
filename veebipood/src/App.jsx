import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img className="pilt" src="https://accelerista.com/wp-content/uploads/2017/09/nobe.png" alt="" />
      <br />
        <button className="nupp" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
        <div className="tekst">kõik meie tooted</div>
    </>

  )
}

export default App
