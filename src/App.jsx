import AddNewDoctor from "./components/AddNewDoctor"
import Doctorcard from "./components/Doctorcard"
import Navbar from "./components/Navbar"
import Section from "./components/section"
import './components/styles.css'

function App(){
  return (
    <div>
      <Navbar/>
      <Section/>
      <div className="doctorparent">
      <Doctorcard name="john" specialisation="heart" gender="male"/>
      <Doctorcard name="sriram" specialisation="lungs" gender="male"/>
      <Doctorcard name="vaishnavi" specialisation="skin" gender="female"/>
      <Doctorcard name="sri" specialisation="orthocare" gender="female"/>
      <Doctorcard name="madhu" specialisation="muscles" gender="male"/>
      <Doctorcard name="teja" specialisation="neuro" gender="male"/>
      </div>
      <AddNewDoctor/>
    </div>
  )
}
export default App