import React, { useState } from 'react'

const Home = () => {
  const [intro, setintro] = useState()

const handleDisplay = () => setintro("animation")

  return (
    <div className={`homecontainer ${intro}`}>
    
    <button onClick={handleDisplay}>ENTER</button>
    
    </div>
  )
}

export default Home