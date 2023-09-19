import './App.css'
import CardsContainer from './components/CardsContainer'


function App() {

  const titleCSS = {
    color: 'gold',
    padding: '10px',
    borderRadius: '10px',
    textAlign: 'center',
    margin: '10px' 
  }

  return (
    <div className='App'>
      
      <h1 className='title' style={titleCSS}>One Piece Wano Arc Best Moments</h1>
      <CardsContainer />      

      
    </div>
  )
}

export default App
