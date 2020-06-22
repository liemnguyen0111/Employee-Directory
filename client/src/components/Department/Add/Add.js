  
import React, {useState} from 'react'
import {Howl , Howler} from 'howler'
import Department from './Department'
import Role from './Role'
import Employee from './Employee'
import './Add.css'

const audio  = [
    {sound : '', label : 'beep'},
    {sound : '', label : 'rollover'}
]


const Add = (props) => {

  audio[0].sound = props.beep
  audio[1].sound = props.rollover

  const SoundPlay = (src) => {
    const sound = new Howl({ src })
    setTimeout(() => {
      sound.play()
    }, 100);
    
}

const [current , setCurrent ] = useState()

const onClickBtn = event =>
{
  setCurrent(event)
}

Howler.volume(.1)

  return (
    <>
        <div className="wrapper">
            <button className="add"  onMouseOver={() => SoundPlay(audio[0].sound)}
            onClick={() => { 
              SoundPlay(audio[1].sound)
              onClickBtn( <Department setCurrent={setCurrent}/>)
               }}>Add New Department</button>

             <button className="add"  onMouseOver={() => SoundPlay(audio[0].sound)}
            onClick={() => { 
              SoundPlay(audio[1].sound) 
              onClickBtn( <Role setCurrent={setCurrent}/>)
              }}>Add New Title</button>

             <button className="add"  onMouseOver={() => SoundPlay(audio[0].sound)}
            onClick={() => { 
              SoundPlay(audio[1].sound) 
              onClickBtn( <Employee setCurrent={setCurrent}/>)
              }}>Add New Employee</button>
        </div>

        {current}
    </>
  )
}

export default Add