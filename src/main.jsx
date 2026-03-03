import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./assets/styles/Global.css"
import "./assets/styles/Container.css"
import "./assets/styles/Nav_bar.css"
import "./assets/styles/Nav_bar_media_query.css"
import "./assets/styles/Container_proyecto.css"
import "./assets/styles/Home.css"
import "./assets/styles/Proyectos.css"
import "./assets/styles/Contacto.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
