  
import React, { useState, useEffect, useMemo} from 'react'
import './Main.css'
import  Start  from '../Start'
import Menu from '../Menu'
import  Department from '../Department'
import background from '../lib/creepy.mp3'
import {Howl} from 'howler'
import axios from 'axios'


const audio = {sound : background, label : 'background'}
const src = audio.sound 
const sound = new Howl({ src })


function Main() {


// Sound
  const SoundPlay = () => {
    sound.volume(.2)
    sound.play()
  }
  
  // Adjust background image on window resize
  const [ windowHeight , setwindowHeight ] = useState (window.innerHeight)

  const handleResize = () =>
{
  setwindowHeight(window.innerHeight)
}

// useEffect for window resize
useEffect(() =>
{  
 window.addEventListener('resize', handleResize)
 return () =>{ window.removeEventListener('resize',handleResize)}
}
,[window.innerHeight])

// Menu
const handleMenu = val =>
{
  setCurrent(list[val])
}

const list = { 
  Start : <Start handleMenu = {handleMenu}/>,
  Menu : <Menu handleMenu = {handleMenu}/>,
  Department : <Department handleMenu = {handleMenu}/>
}

const [ current, setCurrent ] = useState(list['Start'])



  return (
    <div onMouseEnter={() => SoundPlay(audio.sound)}>
        <div className="hero-image" 
        style={{height : windowHeight}}>
        </div>
        {current}
    </div>
  )
}



export default Main