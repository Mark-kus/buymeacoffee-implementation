import "./Asker.css"

export default function Asker({ handleChange, handleKeyPress, input, error }) {
    return (
        <div className='coffee-search'>

            <h3 className="input-instructions">Inserta tu URL</h3>
            <input
                type="text"
                onChange={handleChange}
                value={input}
                onKeyDown={handleKeyPress}
                placeholder='https://www.buymeacoffee.com/tu_pagina'
            />

            <p className="input-error">{error}</p>
        </div>
    )
}