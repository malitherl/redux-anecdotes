import { connect } from "react-redux"
import { messageChange } from './notificationReducer'
const Notification = (props) => {
  const notification = props.notification
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div >
      { notification !== null && notification.notification && <div style={style}> {notification.notification} </div> }
     
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}


const ConnectedNotifications = connect(mapStateToProps)(Notification)
export default ConnectedNotifications