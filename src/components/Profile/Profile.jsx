import "./Profile.css"

export default function Profile({ data, input }) {
    return (
        <div className='user-coffee'>

            <a href={input} target="_blank" rel="noreferrer">
                {data}
            </a>
            <p className='mute'>Buy this user a coffee</p>

        </div>
    )
}