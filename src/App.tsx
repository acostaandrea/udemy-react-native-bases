import './App.css'
import { Counter } from './components/Counter'
// import { BasicTypes } from './typescript/BasicTypes'

function App() {  

  return (
    <>
    <div className='flex flex-col justify-center items-center h-svh'>
      <h1 className='text-4xl mb-5'>React + TS</h1>
      <Counter />
    </div>
    </>
  )
}

export default App
