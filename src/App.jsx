import './App.css'
import Home from './Pages/Home'
import Profile from './SecondPages/Profile'
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
    {/* <Profile/> */}
      
    </>
  )
}

export default App
