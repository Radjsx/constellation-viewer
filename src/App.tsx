import './App.css'
import Button from "@mui/material/Button"
import { MainPanel } from '../components/main-panel'
import BackgroundImage from '../components/background-image'
function App() {


  return (
    <>
      <BackgroundImage />
      <MainPanel>
        <h1>Constellation viewer</h1>
        <p>Pick a constellation and have an AI generate a fact of it</p>
        <Button variant="contained" style={{ color: 'white' }}>testing</Button>
      </MainPanel>
    </>
  )
}

export default App
