import { useState } from 'react';
import "./app.css"

function App() {
  const [input, setInput] = useState("")
  const [data, setData] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const value = input.replace("https://www.buymeacoffee.com/", "")
      setData(value)
    }
  }

  return (
    <div className='coffee-container'>
      {!data ? <input
        type="text"
        onChange={handleChange}
        value={input}
        onKeyDown={handleKeyPress}
      /> :
        <div className='user-coffee'>

          <img src="https://ucac765dca7d2f7c5ceee0445e50.previews.dropboxusercontent.com/p/thumb/AB86ttG6o-7fM87EFnAle3r_2jeTray2V_Q3qzN7y96JTcwfISTqxwlJ4ROT_ryajwEpS1tGgDhDc4wABYm2Y2oLNA_pGQMpTyogTalLKwL6ktPdatHuE_Yzun5I_UJmcrXOukn9dN38pIRw6RL3PZZghiHQugDJ2d4JUo5vDz5E3zl3-d-AhirTc7EWO7Fi4S-WyJnRUVjgnbt9fEemabJv1tIaEFm6k4g4bCZFsDchJzHy_axQ8dleLizVmZ3vhl4yWZwJq7ZX7uW3wmgY8wtGSoE3wTC2hBb3xOoIajEGHWH5kyYYliuAkoahFX0DlW0r47USs1cXIjho4XEWx2Gf/p.png" alt="buymeacoffee brand icon" width={96} height={96} />

          <div>
            <a href={input}>
              {data}
            </a>
            <p className='mute'>Buy user a coffee</p>
          </div>

        </div>
      }
    </div>
  )
}

export default App
