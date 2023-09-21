import {Component} from 'react'
import UserProfile from './components/UserProfile/index'
import './App.css'

const initialUsersList = [
  {
    id: 1,
    url: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'rajesh konam',
    role: 'software developer',
  },
  {
    id: 2,
    url: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'nandini konam',
    role: 'backend developer',
  },
  {
    id: 3,
    url: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'laharika konam',
    role: 'frontend developer',
  },
  {
    id: 4,
    url: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'anusha konam',
    role: 'data analyst',
  },
  {
    id: 5,
    url: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'preethi konam',
    role: 'software developer',
  },
  {
    id: 6,
    url: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'lakshmi konam',
    role: 'backend developer',
  },
]

class App extends Component {
  state = {searchInput: '', usersList: initialUsersList}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteUser = id => {
    const {usersList} = this.state
    const filteredUsersData = usersList.filter(j => j.id !== id)
    this.setState({usersList: filteredUsersData})
  }

  render() {
    const {searchInput, usersList} = this.state
    const searchResult = usersList.filter(i => i.name.includes(searchInput))

    return (
      <div className="c1">
        <h1>USERS</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          event={searchInput}
        />
        <ul>
          {searchResult.map(i => (
            <UserProfile
              userDetails={i}
              key={i.id}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default App
