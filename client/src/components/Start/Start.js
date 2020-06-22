  
import React, {useState} from 'react'
import beep from '../lib/beep.mp3'
import rollover from '../lib/rollover.mp3'
import {Howl , Howler} from 'howler'
import '../lib/Style.css'

const audio  = [
    {sound : beep, label : 'beep'},
    {sound : rollover, label : 'rollover'}

]

const Start = (props) => {

    const SoundPlay = (src) => {
        const sound = new Howl({ src })
        setTimeout(() => {
          sound.play()
        }, 100);
        
    }
    Howler.volume(.1)
  return (
    <div>
       <a className="start" 
       onMouseOver={() => SoundPlay(audio[0].sound)}
       onClick={() => { 
         SoundPlay(audio[1].sound) 
          props.handleMenu("Menu")} }
       >Start</a>
    </div>
  )
}

export default Start