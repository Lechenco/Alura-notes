import CreateNotificationState from "./service"
import {createContext} from 'react'

export const notificationInstance = CreateNotificationState()

export const state = {
    notificationInstance
}

export const StateContext = createContext(state)

export const NotificationContext = createContext()