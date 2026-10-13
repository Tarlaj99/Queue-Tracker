import { createContext, useEffect, useState, useRef } from 'react';
import {useTheme} from './DarkMode.tsx';

export default function Tracker(props) {
  const [names, setNames] = useState<string[]>([]);
  const input = useRef<HTMLInputElement>(null);


  const {theme: darkMode, backgroundColor, color, shadow} = useTheme();
  
  useEffect(() =>{
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])
  
  function ToggleDarkMode(){
    
  }

  function AddName(event): void{
    event.preventDefault();

    if (input.current.value){
      setNames([...names, input.current.value]);
      input.current.value = '';
    }
  }

  function Next(): void{
    setNames((currentNames) => currentNames.slice(1));
  }

  return (
    <div className='main' style={{ height: `${620 + names.length * 30}px`, ...backgroundColor, ...shadow}}>
      <h1 className='title' style={color}>Queue Tracker</h1>
      

      <form action="" onSubmit={AddName}>
        <input type="text" placeholder='Enter name...' ref={input} style={{ marginTop: names.length == 0 ? '7vh' : '', ...color, ...backgroundColor}}/>
      </form>

      <h1 id='FirstInQueue' style={{textShadow: `0 1px 3px ${darkMode? 'var(--dark-text-shadow)' : 'var(--light-text-shadow'}`}}>{names[0]}</h1>
      {
        names.length > 0 ? <button id='Next' onClick={Next}>Next</button> : ''
      } 

      <ul style={color}>
      {
        names.map((name, index) => (
          index == 0 ? '' : <li key={index}>{name}</li>
        ))
      }
      </ul>
    </div>
  )
}