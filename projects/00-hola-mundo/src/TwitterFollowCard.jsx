import { useState } from "react"
export default function TwitterFollowCard ({children,userName, name}) {
    //las propiedades tendrian que ser inmutables 
    //jamas mutar una prop
    //mejor crear una nueva
    //the properties would have to be immutable
    //remember chidren is the propertie that is on the component or into the component
    const [isFollowing,setIsFolowing] = useState(false)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName= isFollowing
    ?'tw-followCard-button'
    :'tw-followCard-button-follow'
    const handleClick = () =>{
        setIsFolowing(!isFollowing)
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar' 
                src={`https://unavatar.io/${userName}`} alt="avatar" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName}
                onClick={handleClick}>{text}</button>
            </aside>
        </article>
    )
}