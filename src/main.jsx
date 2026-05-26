import  React from 'react'
import ReactDom from 'react-dom/client'
import {GlobalStyle } from './styles/GlobalStyle.js'
import { RouterProvider} from "react-router-dom"
import router from "./routes.jsx"


ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
