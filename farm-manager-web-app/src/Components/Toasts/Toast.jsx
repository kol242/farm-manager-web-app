import React from 'react';
import { AiOutlineClose } from "react-icons/ai"
import "../../Common/Style/toast.scss"
import ToastStore from '../../Stores/ToastStore'
import { observer } from 'mobx-react'

const Toast = observer(() => {
  return (
      <div className="notification-container top-right">
        {ToastStore.notification.map((notification) => {
          setInterval(() => {ToastStore.toastDelete(notification.id)}, 4000)
          return (
            <div
              style={{ backgroundColor: ToastStore.generateBackgroundColor(notification.type) }}
              key={notification.id}
              className="notification toast top-right"
            >
              <AiOutlineClose
                className="close-button"
                onClick={() => ToastStore.toastDelete(notification.id)}
              />
              <div className="notification-image">
                { ToastStore.generateIcon(notification.type) }
              </div>
              <div>
                <p className="notification-title">{notification.title}</p>
                <p className="notification-message">{notification.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    )
})

export default Toast;
