import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'
import Home from './components/Home/Home.jsx'


const router = createBrowserRouter(createRoutesFromElements(

  <Route path='/' element={<Layout/ >}> 
    <Route path='about' element={<About/>}></Route>
    <Route path='user/' element={<User/>}>
    <Route path=':userid' element={<User/>}></Route>
    </Route>
    <Route path='home' element={<Home/>}></Route>
    <Route path='github' element={<Github/>} loader={githubInfoLoader}></Route>
    <Route path='*' element={<div>404</div>}></Route>

  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
