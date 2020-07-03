import React,{useState} from 'react';


const Search = ({getQuery}) => {
  const [text,setText]= useState('');
  const changeHandler= (q)=>{
    setText(q);
    getQuery(q)
  }
  return (
    <section className="search">
      <form>
        <input type="text"
          className="form-control"
          autoFocus
          placeholder="Search Characters..."
          value={text}
          onChange={(e)=>changeHandler(e.target.value)}
           />
      </form>
    </section>
  )
}

export default Search
