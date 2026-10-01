
import './App.css'
import Calculator from './Calculator'
import Clock from './Clock'
import Notes from './Notes'
function App() {
  
  return (
    <div className="bg-black grid grid-cols-4 p-4 min-h-screen gap-4">
      <Calculator />
      <div className="col-2 grid grid-cols-1 gap-4">
        <Notes />
        <Clock /> 
      </div>
    </div>
  )
}

export default App
