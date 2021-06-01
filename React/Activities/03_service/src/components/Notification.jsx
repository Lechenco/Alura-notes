import {useState, useEffect, useContext, createContext, useReducer} from 'react'
import { NotificationContext } from '../state'


const Notification = () => {
    const {notifications, addNotification} = useContext(NotificationContext)
    const handleClick = () => {
        addNotification("Botãodoiss")
    }

    return (
    <div className="notify">
        <button onClick={handleClick}>Botao 2</button>
        {notifications.map((notification) => {
            return (<div>{notification}</div>)
        })}
    </div>
    )
}

export default Notification