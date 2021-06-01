import {BehaviorSubject} from 'rxjs'
import {useState} from 'react'

const CreateNotificationState = () => {
    const notifications = new BehaviorSubject([])

    const add = (notification) => {
        notifications.next([
            ...notifications.getValue(),    
            notification
        ])
    }

    return {notifications, add}
}

export default CreateNotificationState