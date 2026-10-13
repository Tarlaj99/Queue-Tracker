import { useEffect, useState, useRef } from 'react';
import Header from './Header.tsx';
import Tracker from './Tracker.tsx';

interface props {
  img: string,
  title: string,
  date: string
}
function Movie({img, title, date}: props){
  return(
    <div>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <p>{date}</p>
    </div>
  )
}

function App() {
  return(
    <>
    <Movie title='Matrix' date={1999} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUyob1nsYqWJ9N7nXkJoEqFAP7Z17qnBIM8nsOhh74g&s=10'/>
    <Movie title='Star Wars I: The Phantom Menace' date={1999} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUyob1nsYqWJ9N7nXkJoEqFAP7Z17qnBIM8nsOhh74g&s=10'/>
    <Movie title='Taxi 3' date={1999} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUyob1nsYqWJ9N7nXkJoEqFAP7Z17qnBIM8nsOhh74g&s=10'/>
    </>
  )
}

export default App