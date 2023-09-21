import './index.css'

const UserProfile = props => {
  const {userDetails, deleteUser} = props
  const {url, name, role, id} = userDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="c2">
      <img src={url} alt="img" className="i1" />
      <div className="c3">
        <h1 className="h1">{name}</h1>
        <p className="p1">{role}</p>
      </div>
      <button className="btn2" onClick={onDelete} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="cross"
          className="btn"
        />
      </button>
    </li>
  )
}
export default UserProfile
