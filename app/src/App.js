import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [text, setText] = useState('submit')

  const handleSubmit = () => {
    setText('hi')
  }
  return (
    <div className="container">
      <h1>{text}</h1>
      <a
        href="#"
        onClick={e => {
          e.preventDefault()
          console.log('hi')
        }}
      >
        Link
      </a>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}

export default App
