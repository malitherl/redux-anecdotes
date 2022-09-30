import { useSelector } from "react-redux"
const Notification = () => {
  const notification = useSelector(state => state)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification.map(message => 
        <p>{message.content}</p>
      )} 
    </div>
  )
}

export default Notification