import './App.css'
import Canvas from './components/Canvas/Canvas'
import Controls from './components/Controls/Controls'
import WordInput from './components/WordInput/WordInput'

function App() {

  return (
    <>
      <Controls Class='mx-auto mb-2' />
      <Canvas />
      <WordInput Class='mt-2' />
    </>
  )
}

export default App
