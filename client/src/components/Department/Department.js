  
import React, {useState, useEffect} from 'react'
import beep from '../lib/beep.mp3'
import rollover from '../lib/rollover.mp3'
import {Howl , Howler} from 'howler'
import View from './View'
import Search from '../Search'
import Add from '../Department/Add'
import axios from 'axios'
import './css/style.css'


const audio  = [
  {sound : beep, label : 'beep'},
  {sound : rollover, label : 'rollover'}

]

const Department = (props) => {

  const SoundPlay = (src) => {
    const sound = new Howl({ src })
    setTimeout(() => {
      sound.play()
    }, 100);
    
}
Howler.volume(.1)

const [data , setData ] = useState()
const [sort , setSort ] = useState()
const [none , setNone ] = useState(0)

  const onOptionChange = event =>
  {
    if(event.target.name !== 'sort' && event.target.value !== 'Select')
    {
      console.log(event.target.name)
      console.log(event.target.value)
 
      setSort({cat : event.target.name, name : event.target.value})
      axios.get('api/departments')
    .then(({data}) => setData(data))
    .catch(err => console.error(err))
    }

    if(event.target.value === 'None')
    {
      setNone(none + 1)
      setSort()
    }

  }

  useEffect(()=>
  {
    axios.get('api/departments')
    .then(({data}) => setData(data))
    .catch(err => console.error(err))

  },[none])


  return (
    <div>
    <a className="back" 
    onClick={() => {
      SoundPlay(audio[1].sound) 
      props.handleMenu('Menu')
    }} 
    onMouseOver={() => SoundPlay(audio[0].sound)
    }>Back</a>
    <Add beep={beep} rollover={rollover}/>  
    <div className ="department">
       <Search onOptionChange={onOptionChange}/>
       <View data={data} sort={sort}/>
    </div>
    </div>
  )
}

export default Department