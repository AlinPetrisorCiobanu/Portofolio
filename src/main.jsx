import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./assets/styles/Global.css"
import "./assets/styles/container.css"
import "./assets/styles/Nav_bar.css"
import "./assets/styles/Nav_bar_responsive.css"
import "./assets/styles/container_proyecto.css"
import "./assets/styles/Home.css"
import "./assets/styles/Projects.css"
import "./assets/styles/Projects_responsive.css"
import "./assets/styles/Contacto.css"
import "./assets/styles/Curriculum.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
