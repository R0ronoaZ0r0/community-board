import './App.css'
import Card from './components/Card'
import luffy from './assets/luffy-gear-5.png'

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
      <h1 className='title' style={titleCSS}>Luffy Gear 5 Highlights</h1>
      <Card 
        name='Luffy Gear 5'
        description='Luffy Gear 5 first time'
        videoLink='https://www.youtube.com/watch?v=gr8reTtElqc'
        image={luffy}  
      />
    </div>
  )
}

export default App
