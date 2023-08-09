const Notification = ({ notification }) => {
    if (notification.message === null) {
        return null
    }

    const cssClass = notification.causedByAnError === true ? "error" : "message"
    return (
        <div className={cssClass}>
            {notification.message}
        </div>
    )
}

export default Notification