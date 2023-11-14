
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from "../src/components/Login"
import Profile from "../src/components/Profile"
function App() {

  return (
    <UserContextProvider>
      <h1>This is context API project</h1>
      <Login />
      <Profile />

    </UserContextProvider>
  )
}

export default App
