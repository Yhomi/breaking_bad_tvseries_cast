import React from 'react';
import CharacterItem from './characterItem';
import Spinner from '../UI/spinner';


const Character  = ({items,isLoading}) => {
  const charcterGrid = items.map(item=>(
    <CharacterItem key={item.char_id} item={item}></CharacterItem>
  ))
  return (isLoading ? <Spinner />:<section className="cards">{charcterGrid}</section>)

}

export default Character
