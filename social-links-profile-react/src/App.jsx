import './App.css'
import avatarJessica from "../public/avatar-jessica.jpeg"

function App() {

  return (
    <>
      <div className = "container">
      <div className = "cabeza">
      <img src={avatarJessica} alt="imagen" />
      </div>
      <div className = "medio">
        <h2 className = "nombre">Jessica Randall</h2>
        <h4 className = "nacionalidad">London, United Kingdom</h4>
        <h5 className = "descripcion">"Front-end developer and avid reader."</h5>
      </div>
      <div className="inferior">
        <button className="botones">GitHub</button>
        <button className="botones">Frontend Mentor</button>
        <button className="botones">LinkedIn</button>
        <button className="botones">Twitter</button>
        <button className="botones">Instagram</button>
      </div>
      </div>
    </>
  )
}

export default App
