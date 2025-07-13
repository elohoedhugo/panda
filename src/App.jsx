import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import RootLayout from './components/RootLayout/RootLayout'
import Login from './components/Login/Login'
import OTP from './components/OTP/OTP'

function App() {
     
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}> 
        <Route index element={<Login/>}/>
        <Route path='otp' element={<OTP/>}/>
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
