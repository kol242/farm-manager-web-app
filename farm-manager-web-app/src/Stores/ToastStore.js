import { makeAutoObservable } from 'mobx'
import {v4 as uuidv4} from 'uuid';
import { FaExclamationCircle } from "react-icons/fa"
import { HiCheck } from 'react-icons/hi'

class ToastStore {
    notification = []

    constructor(){
        makeAutoObservable(this)
    }

    notificationType = (data) => {
        this.notification.push({
            id: uuidv4(),
            type: data.type,
            title: data.title,
            message: data.message
        })
    }

    generateIcon = (type) => {
        switch (type) {
          case "ERROR":
            return <FaExclamationCircle />;
          case "SUCCESS":
            return <HiCheck />;
          default:
            return;
        }
    }

    generateBackgroundColor = (type) => {
        switch (type) {
          case "ERROR":
            return "#d9534f";
          case "SUCCESS":
            return "#5cb85c";
          default:
            return;
        }
    }

    toastDelete = (id) => {
        const index = this.notification.map(e => e.id).indexOf(id);
        if (index !== -1) {
            this.notification.splice(index, 1);
        }
    }
}

export default new ToastStore()