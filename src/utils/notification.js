import toast from 'react-hot-toast';

const notification = (type, msg) => {
    const notifyError = () => toast.error(msg);
    const notifySuccess = () => toast.success(msg);
    return type === 'ERROR' ? notifyError() : notifySuccess()
}

export default notification;