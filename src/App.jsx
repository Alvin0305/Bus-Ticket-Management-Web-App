import { useState } from 'react'
import './App.css'
import UserBookingPage from './pages/UserBookingPage/UserBookingPage'

function App() {
  const [count, setCount] = useState(0)
  const date = new Date();

  return <UserBookingPage from="Kozhikode" to="Thiruvananthapuram" date={date}></UserBookingPage>
}

export default App
