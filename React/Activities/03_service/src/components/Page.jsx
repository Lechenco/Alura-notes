import { useContext } from 'react'
import { NotificationContext, StateContext } from '../state'


const Page = () => {
    const {addNotification} = useContext(NotificationContext)
    
    const handleClick = () => {
        addNotification("Botãoumm")
    }

    return (
        <div className="page">
            <h1>
            Hello
            </h1>

            <button onClick={handleClick}>Click Me</button>
        
        </div>
    )
}

export default Page