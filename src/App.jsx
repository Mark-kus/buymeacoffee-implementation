import { useState } from 'react';
import "./app.css"
import Profile from './components/Profile/Profile';
import Asker from './components/Asker/Asker';

const coffeeImageYellow = "https://ucac765dca7d2f7c5ceee0445e50.previews.dropboxusercontent.com/p/thumb/AB86ttG6o-7fM87EFnAle3r_2jeTray2V_Q3qzN7y96JTcwfISTqxwlJ4ROT_ryajwEpS1tGgDhDc4wABYm2Y2oLNA_pGQMpTyogTalLKwL6ktPdatHuE_Yzun5I_UJmcrXOukn9dN38pIRw6RL3PZZghiHQugDJ2d4JUo5vDz5E3zl3-d-AhirTc7EWO7Fi4S-WyJnRUVjgnbt9fEemabJv1tIaEFm6k4g4bCZFsDchJzHy_axQ8dleLizVmZ3vhl4yWZwJq7ZX7uW3wmgY8wtGSoE3wTC2hBb3xOoIajEGHWH5kyYYliuAkoahFX0DlW0r47USs1cXIjho4XEWx2Gf/p.png"
const coffeeImageWhite = "https://ucb196b0a10ed249ccd4b06fa444.previews.dropboxusercontent.com/p/thumb/AB80dxSKok13_azcDr_M9pJqhWNXw8qaGU9hVwrOiugp2xPE3GuMb2iwvbGfEJDbbC0SvJaVABtXRUFY1BR0O6zhslJx5hmYgRzyftFfTFAOPEpJj1vvfL2g5l2z9j8BN7OdmSocO-Apui4hhSp60CFjYGMKkww2Vx6rVEwwKY__lBOL2gbIU_ryvHTfLKBJnsAL1u7SVvVywp_uYuYX8ucS3kN5Ya9hcfNJ6DFKDGA-GHEPAU3wJ9B4_EAN5o_Ek-VNT9STMBT-JWPvKV8k6DBzYLPqWDzL75gPbIt71OXiHC1S9_u0XSEyhBJE4uYfxaLTSjFalnwvs_ksTJ28o1LN/p.png"
const coffeeDomain = "https://www.buymeacoffee.com"

function App() {
  const [input, setInput] = useState("")
  const [data, setData] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (input.includes(coffeeDomain)) {

        const value = input.replace(coffeeDomain + "/", "")

        if (value.length) {
          setData(value)
        } else {
          setError("Falta el perfil en la URL")
        }

      } else {
        setError("URL invalido")
      }
    }
  }

  return (
    <div className={`coffee-container ${data ? "bg-yellow" : "bg-white"}`}>

      <img className={`coffee-image ${data ? "opacity-100" : "opacity-0"}`}
        src={coffeeImageYellow}
        alt="buymeacoffee brand icon"
        width={96}
        height={96} />

      <img className={`coffee-image ${data ? "opacity-0" : "opacity-100"}`}
        src={coffeeImageWhite}
        alt="buymeacoffee brand icon"
        width={96}
        height={96} />

      {!data ?
        <Asker
          handleChange={handleChange}
          handleKeyPress={handleKeyPress}
          input={input}
          error={error} />
        :
        <Profile
          data={data}
          input={input} />
      }
    </div>
  )
}

export default App
