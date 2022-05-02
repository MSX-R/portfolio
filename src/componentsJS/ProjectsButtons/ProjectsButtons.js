import React from 'react'
import './ProjectsButtons.css'

const ProjectsButtons = () => {
  return (
    <div className="btn-project-changer">
    {/* Mettre en link une sous route ! qui actualise le contenu ci dessus en fonction du choix ci dessous! */}
    <button>L'ATELIER D'ADELINE</button>
    <button>CRAZY WORLD 2D</button>
    <button>SOS JEUNES POUSSES</button>
    <button>CAPIUS GALLUS</button>
    <button>POUDLARD UNIVERSITY</button>
  </div>  )
}

export default ProjectsButtons