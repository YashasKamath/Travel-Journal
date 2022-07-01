import './App.css';
import Destination from './Components/Destination' 
import LocInfo from './LocInfo'

export default function App() {
  const info=LocInfo.map(x=>
    <Destination
    key={x.id}
    {...x}
    />
  )

  return (
    <div className="App">
      <nav className='nav'>
        <img src={process.env.PUBLIC_URL + "/Images/Globe.jpg"} className='globe'/>
        <img src={process.env.PUBLIC_URL + "/Images/text.png"} className='text'/>
      </nav>
      {info}
    </div>
  );
}

