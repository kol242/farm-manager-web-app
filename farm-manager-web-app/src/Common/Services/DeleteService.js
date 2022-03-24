import {db} from '../firebase-config'
import { deleteDoc, doc } from 'firebase/firestore'
import ToastStore from '../../Stores/ToastStore'

class DeleteService {
    deleteCrop = async (id) => {
        try {
            const collectionRef = doc(db, "Crops", id)
            await deleteDoc(collectionRef)
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "Crop is successfully deleted."
            })
        } catch {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error deleting crop."
            })
        }
    }
}

export default new DeleteService()
