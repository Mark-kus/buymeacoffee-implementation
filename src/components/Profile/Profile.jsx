import "./Profile.css"

export default function Profile({ data, input }) {
    return (
        <div className='user-coffee'>

            <h1>
                {data}
            </h1>
            <a
                href={input}
                target="_blank"
                rel="noreferrer"
                className="buy-button">Buy {data} a coffee</a>

        </div>
    )
}