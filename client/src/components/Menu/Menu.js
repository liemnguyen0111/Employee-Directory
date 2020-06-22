  
import React, {useState} from 'react'
import beep from '../lib/beep.mp3'
import rollover from '../lib/rollover.mp3'
import {Howl , Howler} from 'howler'
import '../lib/Style.css'

const audio  = [
    {sound : beep, label : 'beep'},
    {sound : rollover, label : 'rollover'}

]

const Menu = (props) => {

    const SoundPlay = (src) => {
        const sound = new Howl({ src })
        setTimeout(() => {
          sound.play()
        }, 100);
        
    }
    Howler.volume(.1)

    const list = [
        {name : 'Main' ,class : 'menu', handle: 'Department'},
        {name : 'Back' ,class : 'menu', handle: 'Start'}
    ]

  return (
    <div className='list'>
     {list.map(item => 
       <a key={item.name} className={item.class}  
       onMouseOver={() => SoundPlay(audio[0].sound)}
       onClick={() => { 
         SoundPlay(audio[1].sound) 
          props.handleMenu(item.handle)} }
       >{item.name}</a>
        )}
    </div>
  )
}

export default Menu